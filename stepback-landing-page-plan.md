# stepback.dev Landing Page — Implementation Plan

## Overview

This document provides a complete blueprint for building the stepback.dev marketing site: a static landing page that communicates the unique value of git-style conversational AI and drives users to the application.

**What we're building:** A single-page landing site (with optional secondary pages) that showcases stepback.dev's branching conversation paradigm
**Deployment target:** Google Cloud Storage → Load Balancer → Cloud CDN
**Design philosophy:** Developer-focused, technical yet approachable, with a distinct visual identity that reflects the "branching" metaphor

---

## Part 1: Content Strategy & Messaging

### Core Value Proposition

**Headline (Hero):**
> "Branch your conversations. Never lose context again."

**Subheadline:**
> "stepback.dev brings git-style version control to AI chat. Explore tangential ideas, debug side-quests, and merge insights back — without polluting your main thread."

### The Problem We Solve

Traditional chat interfaces are **linear prisons**:
- Ask a side question? Your main context gets derailed
- Want to explore "what if"? You're forced to start a new chat
- Debugging a tangent? Good luck finding your way back

### Our Solution (The Metaphor)

| Git Concept | stepback.dev Equivalent |
|-------------|------------------------|
| Commit | A conversation turn (question + response) |
| Branch | A deviation to explore a tangent |
| Checkout | Switch your view to any point in the tree |
| Cherry-pick | Select specific nodes for custom context |
| Merge/Squash | Summarize a side-branch and inject it back |

### Target Audience

1. **Power users of AI chat** — developers, researchers, writers who hit the limits of linear chat
2. **Technical professionals** — already familiar with git; the metaphor clicks instantly
3. **Knowledge workers** — anyone who thinks in branching paths, not linear sequences

---

## Part 2: Page Structure & Content

### Single-Page Layout (Recommended for MVP)

A focused, high-converting single page with anchored sections:

```
┌─────────────────────────────────────────────┐
│  Navigation (sticky)                        │
│  [Logo]     Features | How It Works | CTA   │
├─────────────────────────────────────────────┤
│                                             │
│  HERO SECTION                               │
│  "Branch your conversations."               │
│  Animated tree visualization                │
│  [Launch App] [Watch Demo]                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  PROBLEM/SOLUTION                           │
│  Side-by-side: Linear vs Branching          │
│  Visual comparison                          │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  KEY FEATURES (4-6 cards)                   │
│  Each with icon + short description         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  HOW IT WORKS                               │
│  3-step visual walkthrough                  │
│  Interactive demo GIF or video              │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  TECHNICAL HIGHLIGHTS                       │
│  For developers: stack, architecture        │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  CTA SECTION                                │
│  "Ready to branch out?"                     │
│  [Get Started — It's Free]                  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  FOOTER                                     │
│  Links | Contact | Legal                    │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Part 3: Feature Content Blocks

### Primary Features (Hero Section)

#### 1. Git-Style Branching
**Icon:** Branch/fork symbol
**Headline:** "Branch at any point"
**Copy:** "See a tangent worth exploring? Branch off without losing your place. Your main conversation stays pristine."

#### 2. Context Isolation
**Icon:** Shield/bubble
**Headline:** "Isolated exploration"
**Copy:** "Side branches live in their own context. Debug freely, brainstorm wildly — your main thread won't know the difference."

#### 3. Visual Graph Navigation
**Icon:** Network/nodes
**Headline:** "See your entire thought tree"
**Copy:** "Interactive ReactFlow visualization shows every path you've taken. Click any node to jump back in time."

#### 4. Branch Compaction & Merge
**Icon:** Merge arrows
**Headline:** "Merge insights back"
**Copy:** "Found the answer in a side-quest? Summarize it and inject the solution into your main branch. Cherry-pick what matters."

### Secondary Features (Below the fold)

#### 5. Session Management
"Create multiple conversation trees. Each project gets its own workspace."

#### 6. Context-Aware AI
"Gemini 2.5 Flash maintains perfect context along each branch path."

#### 7. Linear History View
"View any path as a clean, linear conversation when you need simplicity."

#### 8. Markdown Rendering
"Rich text with syntax highlighting. Code blocks, tables, and formatting preserved."

---

## Part 4: Visual Design Direction

### Aesthetic: "Developer Terminal Meets Mind Map"

A blend of:
- **Technical precision** — monospace accents, terminal aesthetics, code-like elements
- **Organic flow** — curved connection lines, node graphs, branching visuals
- **Dark mode primary** — with strategic light accents

### Color Palette

```css
:root {
  /* Background layers */
  --bg-primary: #0a0a0f;      /* Deep space black */
  --bg-secondary: #12121a;    /* Slightly lifted */
  --bg-tertiary: #1a1a24;     /* Card backgrounds */

  /* Brand accent — representing "branches" */
  --accent-primary: #22d3ee;   /* Cyan (like git diff add) */
  --accent-secondary: #a78bfa; /* Soft purple (alternative paths) */
  --accent-tertiary: #34d399;  /* Green (merge/success) */

  /* Text */
  --text-primary: #f4f4f5;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;

  /* Semantic */
  --branch-line: #22d3ee;
  --node-active: #22d3ee;
  --node-inactive: #3f3f46;
}
```

### Typography

```css
/* Display/Headlines — distinctive, geometric */
--font-display: 'JetBrains Mono', 'Fira Code', monospace;

/* Body text — clean, readable */
--font-body: 'Outfit', 'Plus Jakarta Sans', sans-serif;

/* Code/Technical — native monospace */
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

### Key Visual Elements

1. **Animated Tree Background**
   - Subtle SVG/canvas animation of nodes and connections
   - Particles flowing along branch lines
   - Parallax depth effect on scroll

2. **Node Graph Hero Illustration**
   - Central focal point showing a conversation tree
   - Animated "branching" effect on page load
   - Interactive hover states on nodes

3. **Terminal-Style Code Blocks**
   - For technical sections
   - Typing animation effects
   - Syntax-highlighted examples

4. **Glassmorphism Cards**
   - Semi-transparent feature cards
   - Subtle blur and border effects
   - Glowing accent borders on hover

---

## Part 5: File Structure (Lightweight)

```
marketing-site/
├── index.html                 # Single-page landing (primary)
├── 404.html                   # Custom error page
├── privacy.html               # Privacy policy (required)
├── terms.html                 # Terms of service (required)
│
├── css/
│   └── styles.css            # All styles (single file)
│
├── js/
│   └── main.js               # Minimal JS (animations, analytics)
│
├── assets/
│   ├── images/
│   │   ├── logo.svg          # stepback logo
│   │   ├── logo-light.svg    # Light version
│   │   ├── og-image.png      # Social preview (1200x630)
│   │   ├── demo.gif          # App demo animation
│   │   └── features/         # Feature illustrations
│   │       ├── branching.svg
│   │       ├── isolation.svg
│   │       ├── graph.svg
│   │       └── merge.svg
│   │
│   └── fonts/                # Self-hosted fonts (optional)
│       ├── JetBrainsMono.woff2
│       └── Outfit.woff2
│
└── favicon.ico               # Browser favicon
```

**Why this structure:**
- Minimal file count for fast deployment
- Single CSS file (easier to maintain, modern CSS is powerful)
- Single JS file (keep it minimal, avoid frameworks for static site)
- All assets organized logically

---

## Part 6: Technical Implementation

### HTML Structure (index.html skeleton)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>stepback.dev — Git-Style Conversational AI</title>

  <!-- SEO -->
  <meta name="description" content="Branch your AI conversations like git branches. Explore tangents, maintain context, merge insights back.">
  <meta name="keywords" content="AI chat, branching conversations, git-style, context management, LLM interface">

  <!-- Open Graph -->
  <meta property="og:title" content="stepback.dev — Branch Your Conversations">
  <meta property="og:description" content="Git-style version control for AI chat. Never lose context again.">
  <meta property="og:image" content="https://stepback.dev/assets/images/og-image.png">
  <meta property="og:url" content="https://stepback.dev">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="stepback.dev">
  <meta name="twitter:description" content="Git-style branching for AI conversations.">
  <meta name="twitter:image" content="https://stepback.dev/assets/images/og-image.png">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/assets/images/logo.svg">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <!-- Navigation -->
  <nav id="nav">...</nav>

  <!-- Hero Section -->
  <section id="hero">...</section>

  <!-- Problem/Solution -->
  <section id="problem">...</section>

  <!-- Features -->
  <section id="features">...</section>

  <!-- How It Works -->
  <section id="how-it-works">...</section>

  <!-- Tech Stack (for developers) -->
  <section id="tech">...</section>

  <!-- Final CTA -->
  <section id="cta">...</section>

  <!-- Footer -->
  <footer id="footer">...</footer>

  <!-- Scripts -->
  <script src="/js/main.js" defer></script>

  <!-- Analytics (Google Analytics 4) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</body>
</html>
```

### CSS Architecture

```css
/* ===========================
   1. RESET & BASE
   =========================== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===========================
   2. CSS CUSTOM PROPERTIES
   =========================== */
:root {
  /* Colors, fonts, spacing — as defined above */
}

/* ===========================
   3. TYPOGRAPHY
   =========================== */
body {
  font-family: var(--font-body);
  background: var(--bg-primary);
  color: var(--text-primary);
}

h1, h2, h3 {
  font-family: var(--font-display);
}

/* ===========================
   4. LAYOUT
   =========================== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

section {
  padding: 120px 0;
}

/* ===========================
   5. COMPONENTS
   =========================== */
/* Navigation, buttons, cards, etc. */

/* ===========================
   6. SECTIONS
   =========================== */
/* Hero, features, etc. */

/* ===========================
   7. ANIMATIONS
   =========================== */
@keyframes fadeInUp { ... }
@keyframes branchGrow { ... }

/* ===========================
   8. RESPONSIVE
   =========================== */
@media (max-width: 768px) { ... }
```

### JavaScript (Minimal)

```javascript
// main.js — Keep it minimal

// 1. Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 2. Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// 3. Navigation scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// 4. CTA click tracking
document.querySelectorAll('.cta-button').forEach(btn => {
  btn.addEventListener('click', () => {
    gtag('event', 'cta_click', {
      'button_location': btn.dataset.location || 'unknown'
    });
  });
});
```

---

## Part 7: Deployment Checklist

### Pre-Deployment

- [ ] All HTML pages validate (W3C validator)
- [ ] CSS is minified for production
- [ ] Images are optimized (WebP where possible)
- [ ] Favicon and touch icons in place
- [ ] Open Graph and Twitter cards configured
- [ ] Analytics ID replaced with real value
- [ ] All internal links working
- [ ] CTA buttons link to `https://app.stepback.dev`
- [ ] Mobile responsive (tested on real devices)
- [ ] Privacy and Terms pages complete

### Google Cloud Setup

1. **Create Storage Bucket**
   ```bash
   gsutil mb -l US gs://stepback.dev
   gsutil web set -m index.html -e 404.html gs://stepback.dev
   ```

2. **Upload Files**
   ```bash
   gsutil -m rsync -r ./marketing-site gs://stepback.dev
   ```

3. **Set Public Access**
   ```bash
   gsutil iam ch allUsers:objectViewer gs://stepback.dev
   ```

4. **Configure Load Balancer & SSL** (per deployment spec)

5. **Update DNS** (Squarespace)
   - A record → Load Balancer IP
   - CNAME www → stepback.dev

### Post-Deployment

- [ ] `https://stepback.dev` loads correctly
- [ ] SSL certificate valid (green padlock)
- [ ] All pages accessible
- [ ] CDN caching working (check response headers)
- [ ] Analytics receiving data
- [ ] PageSpeed score > 90

---

## Part 8: Content Copy (Ready to Use)

### Hero Section

```
HEADLINE:
Branch your conversations.

SUBHEADLINE:
Git-style version control for AI chat. Explore tangents without losing context.
Merge insights back when you're ready.

CTA PRIMARY: Launch App →
CTA SECONDARY: See How It Works
```

### Problem Section

```
HEADLINE:
Linear chat is a dead end.

BODY:
Every AI chat you've used forces you down a single path.
Ask a side question? Context derailed.
Want to explore "what if"? Start over.
Need to debug a tangent? Good luck finding your way back.

TRANSITION:
There's a better way.
```

### Features Section

```
SECTION HEADLINE:
Think in branches. Work in branches.

FEATURE 1:
Title: Branch Anywhere
Copy: Click any message to create a new path.
      Your original conversation stays exactly where you left it.

FEATURE 2:
Title: Isolated Context
Copy: Each branch maintains its own context window.
      Experiment freely without polluting your main thread.

FEATURE 3:
Title: Visual Navigation
Copy: See your entire conversation tree in an interactive graph.
      Jump to any point with a single click.

FEATURE 4:
Title: Merge & Synthesize
Copy: Found the answer in a side-quest?
      Summarize the branch and inject insights back into your main flow.
```

### How It Works

```
STEP 1:
Title: Start a conversation
Visual: Simple chat interface
Copy: Begin like any AI chat. Ask questions, get responses.

STEP 2:
Title: Branch when needed
Visual: Click on a message → new branch appears
Copy: Hit a tangent? Branch off. Your main thread is preserved.

STEP 3:
Title: Navigate freely
Visual: Tree view with multiple paths
Copy: Switch between branches instantly. Each path remembers its context.

STEP 4:
Title: Merge insights
Visual: Branch collapsing back into main
Copy: Summarize what you learned and bring it home.
```

### Tech Section (For Developers)

```
HEADLINE:
Built for developers, by developers.

STACK:
• Frontend: React 19 + ReactFlow + Zustand
• Backend: FastAPI (async Python)
• Database: MongoDB with Beanie ODM
• AI: Google Gemini 2.5 Flash
• Visualization: Interactive DAG with ReactFlow

ARCHITECTURE HIGHLIGHT:
Every message is a node. Every node knows its parent.
Context is rebuilt dynamically from the path array —
no expensive graph traversals.
```

### Final CTA

```
HEADLINE:
Ready to branch out?

SUBHEADLINE:
Join the waitlist or dive in now.
Your conversations deserve more than a straight line.

CTA: Get Started — Free
```

### Footer

```
© 2024 stepback.dev

Product: Features | How It Works | Roadmap
Resources: Documentation | API Reference | GitHub
Legal: Privacy Policy | Terms of Service
Contact: hello@stepback.dev

Built with 🌿 for non-linear thinkers.
```

---

## Part 9: Animation & Interaction Ideas

### Hero Animation
- **Tree growth:** Nodes appear one by one, connections draw themselves
- **Parallax background:** Subtle floating nodes in background layers
- **Typing effect:** Headline types out character by character

### Scroll Animations
- **Fade up:** Elements fade in and slide up as they enter viewport
- **Stagger:** Feature cards animate in sequence, not simultaneously
- **Progress indicator:** Subtle line showing scroll position

### Interactive Elements
- **Feature cards:** Subtle glow on hover, slight lift
- **CTA buttons:** Color shift on hover, ripple on click
- **Navigation:** Blur backdrop when scrolled, shrink on scroll

### Graph Visualization (Hero)
Consider an animated mini-demo:
1. Shows a linear conversation
2. User "branches" off
3. Two paths grow
4. One path gets "merged" back
5. Loop

---

## Part 10: Success Metrics

### Primary KPIs
- **CTA Click Rate:** % of visitors who click "Launch App"
- **Time on Page:** Engagement indicator
- **Bounce Rate:** Are people interested?
- **Scroll Depth:** Are they reading the content?

### Secondary KPIs
- **PageSpeed Score:** Target > 90
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Mobile Traffic Share:** Ensure mobile experience is strong

### Tracking Implementation
```javascript
// Track CTA clicks
gtag('event', 'cta_click', {
  'button_location': 'hero' | 'nav' | 'bottom'
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  if (scrollPercent > maxScroll) {
    maxScroll = scrollPercent;
    if ([25, 50, 75, 100].includes(Math.floor(scrollPercent))) {
      gtag('event', 'scroll_depth', { 'percent': Math.floor(scrollPercent) });
    }
  }
});
```

---

## Summary

| Aspect | Decision |
|--------|----------|
| **Page Type** | Single-page landing (all sections) |
| **Aesthetic** | Dark, developer-focused, terminal + organic |
| **Primary CTA** | "Launch App" → app.stepback.dev |
| **Key Message** | "Branch your conversations" |
| **Tech Stack** | Pure HTML/CSS/JS (no framework) |
| **Hosting** | GCS + Load Balancer + CDN |
| **File Count** | ~10 files total |

**Next Step:** Use Claude's frontend skills to implement this plan, starting with the HTML structure and CSS design system, then building out each section.

---

*Plan Version: 1.0*
*Created: December 2024*
*For: stepback.dev Marketing Site*
