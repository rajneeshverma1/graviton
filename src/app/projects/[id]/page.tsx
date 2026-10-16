import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioData, Project } from "@/data/portfolio";
import { Mascot } from "@/components/Mascot";

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Rajneesh Verma`,
    description: project.tagline || project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="container" style={{ minHeight: "100vh", paddingBottom: "4rem" }}>
      {/* Back button */}
      <div style={{ marginBottom: "2rem" }}>
        <Link
          href="/#projects"
          className="link-hover"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.8125rem",
            color: "var(--fg-muted)",
          }}
        >
          <span>←</span>
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Project Header */}
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "1.25rem",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <span
            className="font-silkscreen"
            style={{
              backgroundColor: "rgba(59, 130, 246, 0.12)",
              color: "var(--accent)",
              padding: "0.2rem 0.6rem",
              borderRadius: "4px",
              fontSize: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            {project.category} · {project.year}
          </span>

          {project.featured && (
            <span
              className="font-silkscreen"
              style={{
                backgroundColor: "rgba(238, 67, 68, 0.12)",
                color: "#EE4344",
                padding: "0.2rem 0.6rem",
                borderRadius: "4px",
                fontSize: "0.75rem",
              }}
            >
              Featured
            </span>
          )}
        </div>

        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 600,
            color: "var(--fg-strong)",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
          }}
        >
          {project.name}
        </h1>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--fg-muted)",
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          {project.tagline}
        </p>
      </div>

      {/* Project Description & Details */}
      <div style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--fg-strong)",
            marginBottom: "0.75rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          About the Project
        </h2>
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.7,
            color: "var(--fg)",
            fontWeight: 300,
          }}
        >
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--fg-strong)",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Technologies Used
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tech.map((t, idx) => (
              <span key={idx} className="skill-tag" style={{ fontSize: "0.8125rem", padding: "0.25rem 0.65rem" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
        }}
      >
        {project.liveUrl && !project.liveUrl.includes("github.com") && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 1rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--fg-strong)",
              color: "var(--bg)",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <span>Visit Live Demo ↗</span>
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 1rem",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--pill-bg)",
              border: "1px solid var(--pill-border)",
              color: "var(--fg-strong)",
              fontSize: "0.875rem",
              fontWeight: 400,
            }}
          >
            <span>GitHub Repository ↗</span>
          </a>
        )}
      </div>

      {/* Footer Signature */}
      <div
        style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border-subtle)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          fontSize: "0.75rem",
          color: "var(--fg-subtle)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Mascot size={26} />
          <span>Rajneesh Verma</span>
        </div>
        <Link href="/#projects" className="link-hover">
          ← Back to all projects
        </Link>
      </div>
    </main>
  );
}
