import React from "react";
import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const skillGroups = [
    { label: "Frontend", items: portfolioData.skills.frontend },
    { label: "Backend & Realtime", items: portfolioData.skills.backend },
    { label: "Databases & ORM", items: portfolioData.skills.database },
    { label: "Runtime & Edge", items: portfolioData.skills.runtime },
    { label: "DevOps & Systems", items: portfolioData.skills.devops },
    { label: "Languages", items: portfolioData.skills.languages },
  ];

  return (
    <section id="skills" style={{ marginBottom: "2rem" }}>
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.35rem",
          marginBottom: "0.75rem",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: 0 }}>
          Skills & Technologies
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {skillGroups.map((group) => {
          return (
            <div
              key={group.label}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                alignItems: "baseline",
                gap: "0.875rem",
                padding: "0.25rem 0.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--fg-subtle)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {group.label}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.375rem",
                }}
              >
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
