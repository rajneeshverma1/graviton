"use client";

import React, { useState } from "react";

interface MascotProps {
  size?: number;
  style?: React.CSSProperties;
}

export function Mascot({ size = 44, style }: MascotProps = {}) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <button
      type="button"
      className="mascot-btn touch-manipulation"
      onClick={handleClick}
      aria-label="Rajneesh's Mascot"
      title="Click me! 🐇"
      style={{
        padding: 0,
        marginBottom: size === 44 && !style?.marginBottom ? "1.25rem" : 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        ...style,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: clicked ? "scale(1.2) rotate(-8deg)" : "scale(1)",
        }}
      >
        {/* Soft mascot body in warm vibrant coral-red matching reference */}
        <path
          d="M8 22C8 13.1634 14.268 6 22 6C29.732 6 36 13.1634 36 22C36 28.5 32 37 28 37C24.5 37 23.5 34.5 22 34.5C20.5 34.5 19.5 37 16 37C12 37 8 28.5 8 22Z"
          fill="#EE4344"
        />
        {/* Animated Eyes with Blink & Look-around */}
        <g className="mascot-eyes">
          {/* Eye whites */}
          <circle cx="16.5" cy="20.5" r="3.2" fill="#ffffff" />
          <circle cx="27.5" cy="20.5" r="3.2" fill="#ffffff" />

          {/* Pupils looking around */}
          <g className="mascot-pupils">
            {/* Left pupil & glint */}
            <circle cx="16.8" cy="20.8" r="1.6" fill="#18181b" />
            <circle cx="15.8" cy="19.8" r="0.8" fill="#ffffff" />

            {/* Right pupil & glint */}
            <circle cx="27.8" cy="20.8" r="1.6" fill="#18181b" />
            <circle cx="26.8" cy="19.8" r="0.8" fill="#ffffff" />
          </g>
        </g>

        {/* Subtle blush cheeks */}
        <ellipse cx="12.5" cy="24" rx="2" ry="1.2" fill="#ff7f7f" opacity="0.6" />
        <ellipse cx="31.5" cy="24" rx="2" ry="1.2" fill="#ff7f7f" opacity="0.6" />

        {/* Playful cute mouth */}
        <path
          d="M19.5 25.5C20.5 27 23.5 27 24.5 25.5"
          stroke="#18181b"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Cute bunny / ghost ears shape */}
        <path
          d="M13 10C11.5 5 15 2 17 6L18 8.5"
          stroke="#EE4344"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M31 10C32.5 5 29 2 27 6L26 8.5"
          stroke="#EE4344"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
