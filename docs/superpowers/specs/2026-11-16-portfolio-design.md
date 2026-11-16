# Portfolio Design (approved 2026-11-16)

**Intent:** Individual portfolio for Finals Exercise 3, graded on: 3+ pages (each its own .tsx), 5+ distinct React-Bootstrap components, one Navigation component linking all pages, intuitive and fully responsive layout (React-Bootstrap grid). Deliverable: ZIP without node_modules plus a Home screenshot.

**Approaches:** (A) Vite + React Router Data Mode, chosen: matches the brief and rubric. (B) Next.js, rejected: its router conflicts with "React Router (Data Mode)" and the Exercise 2 Vite base.

**Stack (decided):** Vite, React, TypeScript, React Router Data Mode (`createBrowserRouter`), React-Bootstrap (graded components), Tailwind (custom styling), shadcn (sparingly), lucide-react, GSAP + ScrollTrigger. Design via Refero reference, impeccable, ui-ux-pro-max; audit with impeccable.

**Scope:** Home, About (resume), Contact only. Content from https://ajsalinas.vercel.app/ (Adrian Salinas, AI Engineer): tagline, bio, stats, experience (FlyRank AI intern; Cascade Development Group founder), selected projects/hackathons, skills, certifications, contact links (email, LinkedIn, GitHub, Instagram, Facebook), Iloilo GMT+8. Education not listed: omit.

**Non-goals:** extra pages from the source site, backend, CMS.
**Open:** hero photo (`/aj-hero.webp`) fetched if possible, else user supplies; user-name mismatch confirmed with user.
