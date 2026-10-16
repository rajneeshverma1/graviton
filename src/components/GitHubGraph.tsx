"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import rawAllContributions from "@/data/github-contributions.json";
import rawLastYear from "@/data/github-last-year.json";

interface RawDay {
  date: string;
  count: number;
  level: number;
}

export function GitHubGraph() {
  const [selectedYear, setSelectedYear] = useState<"last" | "2026" | "2025" | "2024">("2026");
  const [includePrivate, setIncludePrivate] = useState<boolean>(true);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [hoveredCell, setHoveredCell] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSettingsOpen(false);
      }
    }
    if (settingsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingsOpen]);

  // Private contribution simulation offset per year
  const privateOffsets: Record<string, number> = {
    last: 67, // bumps ~2335 / 2402 to actual total
    "2026": 67, // 2335 + 67 = 2,402
    "2025": 45,
    "2024": 15,
  };

  // Filter raw data based on selected year
  const rawDays: RawDay[] = useMemo(() => {
    if (selectedYear === "last") {
      return (rawLastYear.contributions || []) as RawDay[];
    }
    const all = (rawAllContributions.contributions || []) as RawDay[];
    // Filter days belonging to the chosen year, sorted ascending by date
    const filtered = all
      .filter((d) => d.date.startsWith(selectedYear))
      .sort((a, b) => a.date.localeCompare(b.date));
    return filtered;
  }, [selectedYear]);

  // Compute total contributions
  const totalCount = useMemo(() => {
    const base = rawDays.reduce((acc, d) => acc + d.count, 0);
    const offset = includePrivate ? (privateOffsets[selectedYear] || 0) : 0;
    return base + offset;
  }, [rawDays, selectedYear, includePrivate]);

  // Organize into standard GitHub 53-week columns x 7-day rows (Sunday = 0 to Saturday = 6)
  const { weeks, monthPositions } = useMemo(() => {
    if (!rawDays.length) return { weeks: [], monthPositions: [] };

    // Find the first day of the dataset
    const firstDate = new Date(rawDays[0].date);
    const startDayOfWeek = firstDate.getDay(); // 0 is Sunday

    // Pad beginning if first day is not Sunday
    const paddedDays: (RawDay | null)[] = [];
    for (let p = 0; p < startDayOfWeek; p++) {
      paddedDays.push(null);
    }
    paddedDays.push(...rawDays);

    // Group into weeks (7 days per column)
    const weeksList: (RawDay | null)[][] = [];
    const monthsMap: { name: string; colIndex: number }[] = [];
    let lastMonth = -1;

    for (let i = 0; i < paddedDays.length; i += 7) {
      const col = paddedDays.slice(i, i + 7);
      // Pad end of last column if needed
      while (col.length < 7) {
        col.push(null);
      }
      const colIndex = weeksList.length;

      // Check month header for Sunday or first valid day of this column
      const validDay = col.find((d) => d !== null);
      if (validDay) {
        const dObj = new Date(validDay.date);
        const m = dObj.getMonth();
        if (m !== lastMonth) {
          const monthName = dObj.toLocaleDateString("en-US", { month: "short" });
          monthsMap.push({ name: monthName, colIndex });
          lastMonth = m;
        }
      }

      weeksList.push(col);
    }

    return { weeks: weeksList, monthPositions: monthsMap };
  }, [rawDays]);

  return (
    <section id="github" style={{ marginBottom: "2rem" }}>
      {/* Title & GitHub Handle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.35rem",
          marginBottom: "0.75rem",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          GitHub Contributions
        </h2>

        <a
          href={portfolioData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.78125rem",
            color: "var(--fg-subtle)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="link-hover"
        >
          <span>@rajneeshverma1</span>
          <span>↗</span>
        </a>
      </div>

      {/* Official GitHub Calendar Card (Only green box) */}
      <div
        style={{
          borderRadius: "6px",
          border: "1px solid var(--border)",
          backgroundColor: "var(--bg-card)",
          padding: "0.75rem 0.85rem 0.6rem",
          position: "relative",
        }}
      >
        {/* Header: Commit count & Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "0.7rem",
          }}
        >
          {/* Main Contribution Count */}
          <div style={{ fontSize: "0.78125rem", color: "var(--fg)" }}>
            <span style={{ fontWeight: 600 }}>{totalCount.toLocaleString()}</span>{" "}
            contributions in {selectedYear === "last" ? "the last year" : selectedYear}
          </div>

          {/* Right Controls: Year Selector & Settings */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            {/* Year Selector Tabs */}
            <div
              style={{
                display: "inline-flex",
                borderRadius: "5px",
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg)",
                padding: "2px",
                gap: "2px",
              }}
            >
              {[
                { id: "2026", label: "2026" },
                { id: "2025", label: "2025" },
                { id: "2024", label: "2024" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedYear(tab.id as any)}
                  style={{
                    padding: "0.12rem 0.45rem",
                    borderRadius: "3px",
                    fontSize: "0.6875rem",
                    fontWeight: selectedYear === tab.id ? 600 : 400,
                    backgroundColor: selectedYear === tab.id ? "var(--fg-strong)" : "transparent",
                    color: selectedYear === tab.id ? "var(--bg)" : "var(--fg-muted)",
                    transition: "var(--transition)",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contribution Settings Dropdown */}
            <div ref={dropdownRef} style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => setSettingsOpen(!settingsOpen)}
                aria-haspopup="true"
                aria-expanded={settingsOpen}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "5px",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--bg)",
                  fontSize: "0.7rem",
                  color: "var(--fg-muted)",
                  cursor: "pointer",
                  transition: "var(--transition)",
                }}
              >
                <span>Contribution settings</span>
                <span style={{ fontSize: "0.5625rem", transform: settingsOpen ? "rotate(180deg)" : "none" }}>▼</span>
              </button>

              {/* Dropdown Menu */}
              {settingsOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 4px)",
                    right: 0,
                    zIndex: 200,
                    width: "250px",
                    borderRadius: "6px",
                    border: "1px solid var(--border)",
                    backgroundColor: "var(--bg)",
                    boxShadow: "var(--shadow-md)",
                    padding: "0.5rem 0",
                    animation: "fadeIn 0.15s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0.35rem 0.85rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--fg-strong)",
                      borderBottom: "1px solid var(--border-subtle)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Contribution settings
                  </div>

                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      padding: "0.45rem 0.85rem",
                      cursor: "pointer",
                      fontSize: "0.75rem",
                      color: "var(--fg)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <input
                      type="checkbox"
                      checked={includePrivate}
                      onChange={(e) => setIncludePrivate(e.target.checked)}
                      style={{ marginTop: "2px", accentColor: "var(--green)" }}
                    />
                    <div>
                      <div style={{ fontWeight: 500 }}>Private contributions</div>
                      <div style={{ fontSize: "0.6875rem", color: "var(--fg-subtle)" }}>
                        Include private commits (+{privateOffsets[selectedYear] || 67})
                      </div>
                    </div>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Heatmap Area */}
        <div style={{ overflowX: "auto", paddingBottom: "0.5rem" }}>
          <div style={{ display: "inline-flex", flexDirection: "column", minWidth: "670px" }}>
            {/* Month Header Labels */}
            <div
              style={{
                display: "flex",
                height: "15px",
                position: "relative",
                marginLeft: "30px",
                marginBottom: "4px",
              }}
            >
              {monthPositions.map((m, idx) => (
                <span
                  key={idx}
                  style={{
                    position: "absolute",
                    left: `${m.colIndex * 13}px`,
                    fontSize: "0.625rem",
                    color: "var(--fg-subtle)",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  {m.name}
                </span>
              ))}
            </div>

            {/* Grid with Weekday Labels on Left (Mon, Wed, Fri) */}
            <div style={{ display: "flex", gap: "6px", alignItems: "flex-start" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                  fontSize: "0.5625rem",
                  color: "var(--fg-subtle)",
                  fontFamily: "var(--font-poppins)",
                  width: "24px",
                  textAlign: "left",
                }}
              >
                <div style={{ height: "10px" }} /> {/* Sunday */}
                <div style={{ height: "10px", lineHeight: "10px" }}>Mon</div>
                <div style={{ height: "10px" }} /> {/* Tuesday */}
                <div style={{ height: "10px", lineHeight: "10px" }}>Wed</div>
                <div style={{ height: "10px" }} /> {/* Thursday */}
                <div style={{ height: "10px", lineHeight: "10px" }}>Fri</div>
                <div style={{ height: "10px" }} /> {/* Saturday */}
              </div>

              {/* Exact Real Contribution Weeks */}
              <div style={{ display: "flex", gap: "3px" }}>
                {weeks.map((week, colIdx) => (
                  <div key={colIdx} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                    {week.map((day, rowIdx) => {
                      if (!day) {
                        return (
                          <div
                            key={rowIdx}
                            style={{
                              width: "10px",
                              height: "10px",
                              visibility: "hidden",
                            }}
                          />
                        );
                      }

                      // Authentic GitHub green colors from CSS variables
                      const levelColor =
                        day.level === 0
                          ? "var(--gh-l0)"
                          : day.level === 1
                          ? "var(--gh-l1)"
                          : day.level === 2
                          ? "var(--gh-l2)"
                          : day.level === 3
                          ? "var(--gh-l3)"
                          : "var(--gh-l4)";

                      const formattedDate = new Date(day.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      });

                      const tooltipText =
                        day.count === 0
                          ? `No contributions on ${formattedDate}`
                          : `${day.count} contribution${day.count === 1 ? "" : "s"} on ${formattedDate}`;

                      return (
                        <div
                          key={rowIdx}
                          onMouseEnter={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredCell({
                              text: tooltipText,
                              x: rect.left + rect.width / 2,
                              y: rect.top - 8,
                            });
                          }}
                          onMouseLeave={() => setHoveredCell(null)}
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "2px",
                            backgroundColor: levelColor,
                            outline: "1px solid rgba(27, 31, 35, 0.06)",
                            cursor: "pointer",
                            transition: "outline 0.1s ease",
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer: Learn how we count contributions & Legend */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "0.5rem",
            paddingTop: "0.5rem",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "0.6875rem",
          }}
        >
          <a
            href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--fg-subtle)" }}
            className="link-hover"
          >
            Learn how we count contributions
          </a>

          {/* GitHub Level Legend */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              color: "var(--fg-subtle)",
            }}
          >
            <span>Less</span>
            <span style={{ width: "10px", height: "10px", borderRadius: "2px", backgroundColor: "var(--gh-l0)" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "2px", backgroundColor: "var(--gh-l1)" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "2px", backgroundColor: "var(--gh-l2)" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "2px", backgroundColor: "var(--gh-l3)" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "2px", backgroundColor: "var(--gh-l4)" }} />
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Official GitHub Tooltip */}
      {hoveredCell && (
        <div
          style={{
            position: "fixed",
            left: hoveredCell.x,
            top: hoveredCell.y,
            transform: "translate(-50%, -100%)",
            backgroundColor: "#24292f",
            color: "#ffffff",
            fontSize: "0.6875rem",
            padding: "0.35rem 0.65rem",
            borderRadius: "6px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 99999,
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            lineHeight: 1.2,
          }}
        >
          {hoveredCell.text}
          {/* Tooltip Downward Arrow */}
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "5px solid #24292f",
            }}
          />
        </div>
      )}
    </section>
  );
}
