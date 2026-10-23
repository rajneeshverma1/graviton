import { NextResponse, type NextRequest } from "next/server";
import rawAllContributions from "@/data/github-contributions.json";
import rawLastYear from "@/data/github-last-year.json";

interface RawDay {
  date: string;
  count: number;
  level: number;
}

function parseGitHubContributionsHtml(html: string): { total: number; days: RawDay[] } {
  const totalMatch = html.match(/id="js-contribution-activity-description"[^>]*>\s*([0-9,]+)\s*contributions/);
  const total = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ""), 10) : 0;

  const tooltips = new Map<string, string>();
  const ttRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/g;
  let ttMatch: RegExpExecArray | null;
  while ((ttMatch = ttRegex.exec(html)) !== null) {
    tooltips.set(ttMatch[1], ttMatch[2].trim());
  }

  const dayRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*data-level="(\d+)"/g;
  let dayMatch: RegExpExecArray | null;
  const days: RawDay[] = [];
  while ((dayMatch = dayRegex.exec(html)) !== null) {
    const [, date, id, levelStr] = dayMatch;
    const ttText = tooltips.get(id) || "";
    let count = 0;
    const countMatch = ttText.match(/^([0-9,]+)\s+contribution/);
    if (countMatch) {
      count = parseInt(countMatch[1].replace(/,/g, ""), 10);
    }
    days.push({ date, count, level: parseInt(levelStr, 10) });
  }

  return { total, days };
}

export async function GET(request: NextRequest) {
  const responseHeaders = {
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const headers = {
      "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
      Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    };

    // Fetch official GitHub contribution HTML directly
    const year2026Promise = fetch(
      "https://github.com/users/rajneeshverma1/contributions?from=2026-01-01&to=2026-12-31",
      {
        headers,
        signal: controller.signal,
        cache: "no-store",
      }
    )
      .then((res) => (res.ok ? res.text() : null))
      .catch(() => null);

    const lastYearPromise = fetch(
      "https://github.com/users/rajneeshverma1/contributions",
      {
        headers,
        signal: controller.signal,
        cache: "no-store",
      }
    )
      .then((res) => (res.ok ? res.text() : null))
      .catch(() => null);

    // Fetch recent events from GitHub REST API for instant commit reflection
    const eventsPromise = fetch("https://api.github.com/users/rajneeshverma1/events", {
      headers: { "User-Agent": "rajneeshportfolio" },
      signal: controller.signal,
      cache: "no-store",
    })
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null);

    const [html2026, htmlLastYear, events] = await Promise.all([
      year2026Promise,
      lastYearPromise,
      eventsPromise,
    ]);
    clearTimeout(timeoutId);

    const parsed2026 = html2026 ? parseGitHubContributionsHtml(html2026) : null;
    const parsedLastYear = htmlLastYear ? parseGitHubContributionsHtml(htmlLastYear) : null;

    if (!parsed2026 || parsed2026.days.length === 0) {
      // Direct fetch failed, return fresh local fallback
      return NextResponse.json(
        {
          source: "local",
          total: rawAllContributions.total,
          contributions: rawAllContributions.contributions,
          lastYearTotal: rawLastYear.total.lastYear,
          lastYearContributions: rawLastYear.contributions,
        },
        { headers: responseHeaders }
      );
    }

    // Populate base map with all historical days from JSON (2024, 2025, 2026)
    const contributionsMap = new Map<string, RawDay>();
    for (const item of (rawAllContributions.contributions || []) as RawDay[]) {
      contributionsMap.set(item.date, { ...item });
    }

    // Overwrite with live 2026 days directly from GitHub
    for (const item of parsed2026.days) {
      contributionsMap.set(item.date, item);
    }

    // Merge recent push events from GitHub REST API
    if (Array.isArray(events)) {
      for (const ev of events) {
        if (ev.created_at) {
          const date = ev.created_at.slice(0, 10);
          const commitCount = ev.payload?.commits?.length || (ev.type === "PushEvent" ? 1 : 0);
          if (commitCount > 0 && contributionsMap.has(date)) {
            const existing = contributionsMap.get(date)!;
            if (existing.count < commitCount) {
              existing.count = commitCount;
              existing.level = commitCount >= 10 ? 4 : commitCount >= 6 ? 3 : commitCount >= 3 ? 2 : 1;
            }
          }
        }
      }
    }

    const mergedContributions = Array.from(contributionsMap.values());
    const year2026Total = mergedContributions
      .filter((d) => d.date.startsWith("2026"))
      .reduce((sum, d) => sum + d.count, 0);

    const lastYearDays = parsedLastYear?.days?.length
      ? parsedLastYear.days
      : (rawLastYear.contributions as RawDay[]);
    const lastYearTotal = parsedLastYear?.total || rawLastYear.total.lastYear;

    return NextResponse.json(
      {
        source: "live",
        total: {
          ...rawAllContributions.total,
          "2026": Math.max(parsed2026.total, year2026Total),
        },
        contributions: mergedContributions,
        lastYearTotal,
        lastYearContributions: lastYearDays,
      },
      { headers: responseHeaders }
    );
  } catch {
    return NextResponse.json(
      {
        source: "local-fallback",
        total: rawAllContributions.total,
        contributions: rawAllContributions.contributions,
        lastYearTotal: rawLastYear.total.lastYear,
        lastYearContributions: rawLastYear.contributions,
      },
      { headers: responseHeaders }
    );
  }
}

