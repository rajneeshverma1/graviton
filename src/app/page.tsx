import React from "react";
import { Header } from "@/components/Header";
import { Bio } from "@/components/Bio";
import { WorkSection } from "@/components/WorkSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ClientWorkSection } from "@/components/ClientWorkSection";
import { OffScreenSection } from "@/components/OffScreenSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { HackathonsSection } from "@/components/HackathonsSection";
import { EducationSection } from "@/components/EducationSection";
import { GitHubGraph } from "@/components/GitHubGraph";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="container">
      {/* Top Header with Mascot & Live Lucknow Time */}
      <Header />

      {/* Editorial Bio with bold accents & inline links */}
      <Bio />

      {/* Experience (Work Experience) */}
      <WorkSection />

      {/* Projects (Personal Flagship AI & SaaS) */}
      <ProjectsSection />

      {/* Client Work & Exits (Sold Commercial Projects) */}
      <ClientWorkSection />

      {/* Off screen (Life & Hobbies) */}
      <OffScreenSection />

      {/* Open Source Contributions */}
      <OpenSourceSection />

      {/* Skills & Tech Stack */}
      <SkillsSection />

      {/* Hackathons & Competitions */}
      <HackathonsSection />

      {/* Education & Cohorts */}
      <EducationSection />

      {/* GitHub 481 Contributions Heatmap */}
      <GitHubGraph />

      {/* My thoughts on ... everything (Blog) */}
      <BlogSection />

      {/* Hook with me, Gita quote, Footer */}
      <ContactSection />
    </main>
  );
}
