"use client";

import React, { useState } from "react";
import { portfolioData, BlogPost } from "@/data/portfolio";

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="writing" style={{ marginBottom: "2rem" }}>
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          paddingBottom: "0.35rem",
          marginBottom: "0.5rem",
        }}
      >
        <h2 className="section-title" style={{ marginBottom: "0.2rem" }}>
          My thoughts on ... everything
        </h2>
        <p
          className="font-caveat"
          style={{
            fontSize: "1.0625rem",
            color: "var(--fg-muted)",
            lineHeight: 1.4,
          }}
        >
          I love writing about tech, systems, and life in general. I hope you will click on them by mistake.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
        {portfolioData.articles.map((post) => {
          return (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedPost(post);
              }}
              style={{
                margin: "0 -0.5rem",
                padding: "0.28rem 0.5rem",
                borderRadius: "var(--radius-sm)",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1.25rem",
                cursor: "pointer",
                transition: "background-color 0.15s ease",
              }}
              className="hover-row"
            >
              {/* Left: Title & read time */}
              <div
                style={{
                  fontSize: "0.875rem",
                  color: "var(--fg-muted)",
                  flex: "0 1 auto",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <strong style={{ color: "var(--fg-strong)", fontWeight: 500 }}>
                  {post.title}
                </strong>
                <span style={{ color: "var(--fg-subtle)", margin: "0 0.35rem" }}>
                  ·
                </span>
                <span
                  style={{
                    color: "var(--fg-subtle)",
                    fontSize: "0.78125rem",
                    fontWeight: 300,
                  }}
                >
                  {post.readTime}
                </span>
              </div>

              {/* Right: Date */}
              <span
                className="font-mono"
                style={{
                  fontSize: "0.78125rem",
                  color: "var(--fg-subtle)",
                  flexShrink: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {post.date}
              </span>
            </div>
          );
        })}
      </div>

      {/* Reading Article Modal */}
      {selectedPost && (
        <div
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.25rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "85vh",
              overflowY: "auto",
              backgroundColor: "var(--bg)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem 1.75rem",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                fontSize: "1.25rem",
                color: "var(--fg-subtle)",
                cursor: "pointer",
                padding: "0.25rem",
              }}
            >
              ✕
            </button>

            <div style={{ marginBottom: "1.25rem" }}>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--fg-subtle)",
                  fontWeight: 300,
                  marginBottom: "0.35rem",
                }}
              >
                {selectedPost.date} ({selectedPost.relativeTime}) · {selectedPost.readTime}
              </div>
              <h2
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--fg-strong)",
                  lineHeight: 1.3,
                }}
              >
                {selectedPost.title}
              </h2>
            </div>

            <div
              className="prose"
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "var(--fg)",
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              {selectedPost.content.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div
              style={{
                marginTop: "1.75rem",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                style={{
                  fontSize: "0.8125rem",
                  padding: "0.375rem 0.875rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "var(--pill-bg)",
                  border: "1px solid var(--pill-border)",
                  color: "var(--fg-strong)",
                  fontWeight: 400,
                }}
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
