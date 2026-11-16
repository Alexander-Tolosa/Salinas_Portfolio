# Design: The Field Catalogue

**World:** an engineer's catalogue/spec sheet on warm paper (Refero refs: teenage engineering industrial catalogue, Cursor parchment atelier, OpenAI lab notebook). Light, chosen for daylight laptop reading by recruiters.

**Color (OKLCH tokens in `src/index.css`)**
- paper `oklch(0.955 0.014 85)`, paper-2 `oklch(0.925 0.018 82)`, ink `oklch(0.22 0.02 60)`, ink-soft `oklch(0.42 0.02 60)`, rule `oklch(0.80 0.02 80)`
- signal (vermilion) `oklch(0.60 0.19 38)`; signal-text (AA on paper) `oklch(0.50 0.18 38)`. One accent only, used for links, the active nav mark, and one hero element.

**Type:** Instrument Serif (display, large, tight), Instrument Sans (body, 16-18px, 65ch), JetBrains Mono only for data: dates, spec labels, tabular figures.

**Layout:** 12-col grid, hairline rules instead of boxes, spec-sheet rows (label left, content right). Cards only where React-Bootstrap grading needs them, styled flat with hairlines.

**Motion:** one authored moment per page: hero lines mask-reveal on load; below the fold, ruled rows draw their rule in on scroll (GSAP ScrollTrigger). Reduced motion: everything visible, no animation.

**Browser surfaces:** themed selection, caret, focus rings (signal, 2px offset), scrollbar.

**Refuse:** eyebrows above headings, gradient text, nested cards, side-border callouts, section numbering, glass.
