<div align="center">

# 🐇 Graviton — Rajneesh Verma's Portfolio

A high-craft, editorial developer portfolio and digital garden engineered for speed, aesthetics, and personality.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[**GitHub Profile ↗**](https://github.com/rajneeshverma1) · [**Report Issue ↗**](https://github.com/rajneeshverma1/graviton/issues) · [**Connect on X ↗**](https://x.com/Rajneeshvermaa)

</div>

---

## ✦ Highlights & Features

- **🎨 Minimalist Editorial Design**: Bespoke design system utilizing curated typography pairings (**Poppins**, **Silkscreen**, **Pixelify Sans**, and **Caveat**) with fluid dark & light mode support.
- **🐇 Interactive Animated Mascot**: Custom SVG companion with CSS keyframe eye-blinking animations, dynamic pupil tracking, and playful click interactions.
- **🚀 Project Showcase & Expandable Drawers**:
  - Personal flagship AI & SaaS applications ([Matic AI](https://maticstudio.site/), [Lumify](https://lumify-axdo.vercel.app/), [Collectly AI](https://collectly-kappa.vercel.app/), Merge AI, Docly AI, Drafty AI).
  - Clickable project names that reveal rich inline metadata, category badges, full descriptions, and tech stack tags.
  - Dedicated dynamic Next.js routes at `/projects/[id]` with custom metadata and back navigation.
- **💼 Work Experience & Career Timeline**:
  - Detailed progression roles at **Sidekick (YC P26)**, **Flyrank AI**, and **Stealth AI Startup**.
  - Interactive role progression timelines, promotion badges, and impact achievements.
- **💰 Client Work & Commercial Exits**: Verified commercial deliverables and SaaS platforms with acquisition values and architecture details.
- **📊 52-Week GitHub Contribution Heatmap**:
  - Authentic multi-year heatmap (2026, 2025, 2024) with authentic GitHub level color tokens.
  - Interactive day-by-day hover tooltips with exact contribution counts, dynamic date tracking, and contrast accessibility.
  - Contribution settings dropdown with private commits toggle.
- **♿ First-Class Accessibility & Keyboard Navigation**: WCAG-compliant touch targets, accessible role labels, and tactile keyboard handlers.
- **📝 Digital Garden & Essays**: Clean blog section with read-time estimators and technical essays on engineering and systems.
- **🕉️ Bhagavad Gita Wisdom Card**: Philosophical quote card rendered with handwritten script typography.
- **🔤 Responsive Full-Width Brand Signature**: Pixel-perfect lowercase (`rajneesh verma`) brand block with scalable SVG proportions matching the quote card boundary.
- **⚡ Zero-FOUC Theme Switcher**: Persistent local storage theme system with instant system-preference synchronization and custom toggle pill.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | Vanilla CSS with custom properties & design tokens |
| **Typography** | Poppins (300/400/500/600), Silkscreen (Mono/Timeline), Pixelify Sans (Retro), Caveat (Script) |
| **Data Engine** | Strongly-typed static configurations in TypeScript |

---

## 📂 Project Structure

```bash
rajneeshportfolio/
├── public/
│   ├── fonts/               # Self-hosted woff2 font files
│   └── images/              # Off-screen life and setup gallery photos
├── src/
│   ├── app/
│   │   ├── globals.css      # Core design tokens, theme variables & animations
│   │   ├── layout.tsx       # RootLayout with preloads & theme script
│   │   ├── page.tsx         # Portfolio single-page assembly
│   │   └── projects/
│   │       └── [id]/
│   │           └── page.tsx # Dynamic dedicated project showcase route
│   ├── components/
│   │   ├── Header.tsx       # Masthead, theme toggle, live Lucknow clock
│   │   ├── Mascot.tsx       # Animated interactive pixel mascot
│   │   ├── Bio.tsx          # Editorial intro & tinkerer background
│   │   ├── WorkSection.tsx  # Work experience with expandable role drawers
│   │   ├── ProjectsSection.tsx # Projects with clickable detail accordions
│   │   ├── ClientWorkSection.tsx # Client projects & acquisition metrics
│   │   ├── OffScreenSection.tsx  # Life, photography & desk setup gallery
│   │   ├── OpenSourceSection.tsx # Open-source contributions
│   │   ├── SkillsSection.tsx     # Categorized tech stack pills
│   │   ├── HackathonsSection.tsx # Hackathon wins & SIH finalist badges
│   │   ├── EducationSection.tsx  # Academic background & cohorts
│   │   ├── GitHubGraph.tsx       # Interactive 52-week contribution heatmap
│   │   ├── BlogSection.tsx       # Thought pieces & articles
│   │   └── ContactSection.tsx    # Contact links, Gita quote & brand signature
│   └── data/
│       ├── portfolio.ts          # Central typed portfolio data source
│       ├── github-last-year.json # GitHub activity feed dataset
│       └── github-contributions.json # Multi-year contribution points
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.17+** (Node 20+ recommended) and **npm** or **pnpm** installed.

### 1. Clone Repository

```bash
git clone https://github.com/rajneeshverma1/graviton.git
cd graviton
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 👤 Author

**Rajneesh Verma**  
*21 y/o Software Engineer & Tinkerer from Lucknow, India*

- **GitHub**: [@rajneeshverma1](https://github.com/rajneeshverma1)
- **Twitter / X**: [@Rajneeshvermaa](https://x.com/Rajneeshvermaa)
- **LinkedIn**: [Rajneesh Verma](https://www.linkedin.com/in/rajneesh-verma-0294b428b/)
- **Email**: [wwrajneesh807@gmail.com](mailto:wwrajneesh807@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

### 📱 Mobile Responsiveness & Polish
- Adaptive list rows for Projects & Client Work to prevent tagline truncation.
- Touch-friendly action badges and comfortable vertical tap targets.
- Responsive offscreen photography grid adapting from 5-item desktop filmstrip to 3x2 mobile cards.
