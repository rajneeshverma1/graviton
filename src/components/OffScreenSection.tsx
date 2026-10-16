"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export function OffScreenSection() {
  const [activePhoto, setActivePhoto] = useState<typeof portfolioData.offScreen[0] | null>(null);

  return (
    <section id="off-screen" style={{ marginBottom: "2rem" }}>
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
          Off screen
        </h2>
        <span
          className="font-mono"
          style={{
            fontSize: "0.6875rem",
            color: "var(--fg-subtle)",
          }}
        >
          Life & hobbies
        </span>
      </div>

      {/* 5 Photo Cards in One Single Row */}
      <div
        className="offscreen-row"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${portfolioData.offScreen.length}, 1fr)`,
          gap: "0.5rem",
          width: "100%",
        }}
      >
        {portfolioData.offScreen.map((photo) => {
          return (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              role="button"
              tabIndex={0}
              className="offscreen-card"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActivePhoto(photo);
                }
              }}
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                borderRadius: "var(--radius-sm)",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = "var(--fg-subtle)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 33vw, 20vw"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
              {/* Subtle hover gradient and caption */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 45%, transparent 100%)",
                  opacity: 0,
                  transition: "opacity 0.2s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "0.4rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    lineHeight: 1.15,
                  }}
                >
                  {photo.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "480px",
              width: "100%",
              backgroundColor: "var(--bg)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "3 / 4" }}>
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="480px"
                style={{ objectFit: "cover" }}
              />
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  right: "0.75rem",
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                ×
              </button>
            </div>

            <div style={{ padding: "0.875rem 1.125rem" }}>
              <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--fg-strong)", marginBottom: "0.2rem" }}>
                {activePhoto.title}
              </h3>
              <p style={{ fontSize: "0.72rem", color: "var(--fg-muted)", fontFamily: "var(--font-mono)" }}>
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 540px) {
          .offscreen-row {
            display: flex !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            scrollbar-width: none !important;
            -webkit-overflow-scrolling: touch !important;
          }
          .offscreen-row::-webkit-scrollbar {
            display: none !important;
          }
          .offscreen-card {
            flex: 0 0 100px !important;
            scroll-snap-align: start !important;
          }
        }
      `}</style>
    </section>
  );
}
