"use client";

import React, { useEffect, useState } from "react";
import { Mascot } from "./Mascot";
import { portfolioData } from "@/data/portfolio";

export function Header() {
  const [time, setTime] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const docTheme = document.documentElement.getAttribute("data-theme") as "light" | "dark";
    if (docTheme) {
      setTheme(docTheme);
    }

    const updateClock = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-IN", {
        timeZone: portfolioData.timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(formatter.format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {}
  };

  return (
    <header style={{ marginBottom: "1.75rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "1.25rem",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "var(--fg-strong)",
              lineHeight: 1.2,
            }}
          >
            {portfolioData.name}
          </h1>
          <Mascot size={26} />
        </div>

        {/* Status pill & Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          {/* Live Lucknow Clock Pill */}
          <div
            title={`Local time in ${portfolioData.location}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.28rem 0.65rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
              fontSize: "0.72rem",
              color: "var(--pill-text)",
              fontFamily: "var(--font-poppins)",
              fontWeight: 400,
            }}
          >
            <span className="live-dot" />
            <span>Lucknow, IN</span>
            {mounted && time && (
              <span style={{ color: "var(--fg-strong)", fontWeight: 500 }}>
                {time}
              </span>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
              color: "var(--fg-muted)",
              transition: "var(--transition)",
            }}
          >
            {theme === "dark" ? (
              /* Sun icon */
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              /* Moon icon */
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
