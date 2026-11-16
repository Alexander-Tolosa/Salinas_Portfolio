# Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** A 3-page responsive portfolio (Home, About, Contact) meeting the Finals Exercise rubric.

**Architecture:** Vite + React + TS SPA. `createBrowserRouter` with a root layout route (`App.tsx`: Navigation + `<Outlet/>` + footer) and three child routes. Content lives in one typed data module. React-Bootstrap provides graded components and grid; Tailwind handles custom visual styling; GSAP ScrollTrigger animates reveals.

**Tech Stack:** Vite, React 18, TypeScript, react-router (Data Mode), react-bootstrap + bootstrap, Tailwind, shadcn (sparingly), lucide-react, gsap.

**Spec:** docs/superpowers/specs/2026-11-16-portfolio-design.md

## Global Constraints
- Exactly 3 routes: `/` Home, `/about`, `/contact`; each page in its own `.tsx`.
- Use at least 6 distinct React-Bootstrap components (Navbar, Card, Accordion, Badge, Button, Form, Row/Col, Container).
- One `Navigation` component links all pages.
- Fully responsive (check 375px, 768px, 1280px); respects `prefers-reduced-motion`.
- No `node_modules` in the final ZIP.

## Review Focus
- Direct load/refresh of `/about` and `/contact` renders (SPA fallback).
- Missing hero image shows a styled fallback, not a broken icon.
- Reduced-motion users see all content without animation.
- Contact form submit has validation and a visible success state (no backend: `mailto:`).
- Long text does not overflow at 375px.

---

### Task 1: Scaffold and routing
**Files:** Create project root (package.json, vite.config.ts, tailwind setup), `src/main.tsx`, `src/router.tsx`, `src/App.tsx`, `src/pages/{Home,About,Contact}.tsx`, `src/components/Navigation.tsx`.
**Interfaces:** Produces `router` (createBrowserRouter), `Navigation(): JSX.Element`.
- [ ] Scaffold with `npm create vite@latest . -- --template react-ts`; install react-router, react-bootstrap, bootstrap, tailwindcss, lucide-react, gsap; init shadcn.
- [ ] Router: layout route `/` with children index/`about`/`contact`, using `RouterProvider`.
- [ ] Navigation: React-Bootstrap `Navbar` with `NavLink`s, collapses on mobile.
- [ ] Verify: `npm run build` passes; `npm run dev` shows all three routes via nav.
- [ ] Commit.

### Task 2: Content module
**Files:** Create `src/data/profile.ts`.
**Interfaces:** Produces typed exports `profile`, `stats`, `experience`, `projects`, `skills`, `certifications`, `contacts` (content per spec).
- [ ] Fill from spec content; fetch `/aj-hero.webp` into `public/` or request from user.
- [ ] Verify: `npx tsc --noEmit` passes. Commit.

### Task 3: Design system
**Files:** `src/index.css`, `DESIGN.md`.
- [ ] Browse styles.refero.design for a direction; invoke impeccable and ui-ux-pro-max to set palette, type pairing, spacing tokens as CSS variables overriding Bootstrap.
- [ ] Verify: tokens render on a scratch page. Commit.

### Task 4: Home page
**Files:** `src/pages/Home.tsx`, `src/components/Reveal.tsx` (GSAP ScrollTrigger wrapper honoring reduced motion).
- [ ] Hero (name, tagline, bio, photo with fallback, CTAs as Button), stat Cards, featured projects. Verify at 3 widths. Commit.

### Task 5: About (resume) page
**Files:** `src/pages/About.tsx`.
- [ ] Experience timeline, Accordion for projects/hackathons, skills as Badges by category, certifications. Verify at 3 widths. Commit.

### Task 6: Contact page
**Files:** `src/pages/Contact.tsx`.
- [ ] Contact link Cards with lucide icons; Form (name, email, message) with validation and success Alert via `mailto:`. Verify validation and layout. Commit.

### Task 7: Polish, audit, delivery
- [ ] Run impeccable audit; fix findings. Add SPA fallback (`vercel.json` rewrite). Run `npm run build` and Lighthouse-style a11y check.
- [ ] Take Home screenshot; create ZIP excluding `node_modules`. Commit.
