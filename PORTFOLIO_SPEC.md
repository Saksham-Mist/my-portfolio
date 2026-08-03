# Portfolio Website Specification

**Status**: Design Phase (NOT YET BUILT)  
**Created**: August 2, 2026  
**Owner**: Saksham Sharma

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Hero Section Spec](#hero-section-spec)
3. [Tech Stack & Tools](#tech-stack--tools)
4. [Design System](#design-system)
5. [Components Breakdown](#components-breakdown)
6. [Animation Details](#animation-details)
7. [References & Inspiration](#references--inspiration)
8. [Copy & Content (TBD)](#copy--content-tbd)
9. [Next Steps](#next-steps)

---

## Project Overview

**Goal**: Build a professional SDE portfolio website that showcases 3 production-ready projects and appeals to recruiters before they even read the copy.

**Key Principles**:
- **Design-first approach** — visual appeal before content
- **No fluff** — every element serves a purpose
- **Production-ready feel** — dark theme, neon accents, smooth interactions
- **Mobile-responsive** — works on all devices

**Target Audience**: SDE/Backend engineering role recruiters and hiring managers

---

## Hero Section Spec — HYBRID DESIGN (LinkFlow + Cinematic Streaming)

### Layout Structure (Top to Bottom)

```
┌─────────────────────────────────────────────────────┐
│ NAVBAR (sticky, z-50, relative positioned)          │
│ Logo + Nav Links (desktop) + Hamburger (mobile)     │
├─────────────────────────────────────────────────────┤
│                                                     │
│ [Background: Video loop, object-cover, fixed z-0]  │
│ [Blur Overlay: Bottom blur fade to transparent]     │
│                                                     │
│ HERO CONTENT (flex-1, justify-end, z-10)           │
│ ┌─────────────────────────────────────────────┐    │
│ │ [Desktop: flex-row md:flex-row items_end]   │    │
│ │                                             │    │
│ │ LEFT SIDE (flex-1):                         │    │
│ │ ├─ Metadata Row (IMDB, duration, date)     │    │
│ │ ├─ Main Title (large, bold)                │    │
│ │ ├─ Description (subtitle)                  │    │
│ │ ├─ Tech Slider (infinite scroll)           │    │
│ │ └─ CTA Buttons (View Projects, Download)   │    │
│ │                                             │    │
│ │ RIGHT SIDE (navigation):                    │    │
│ │ └─ Arrow Buttons (Previous, Next)          │    │
│ └─────────────────────────────────────────────┘    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Design References Incorporated

**LinkFlow** (Green theme):
- Color palette adaptation (green → neon green #00ff88)
- Boomerang video background with frame capture
- Bottom blur overlay (backdrop-blur-xl with CSS mask)
- Mobile menu drawer with staggered animations
- Liquid glass button effects
- Responsive navbar with pill design (desktop)

**Cinematic Streaming** (Dark theme):
- Full-viewport video (object-cover, muted, autoplay, fixed z-0)
- Bottom blur overlay with CSS mask (no gradient)
- Metadata row (ratings, duration, date)
- Large cinematic title typography (text-3xl → text-7xl responsive)
- Blur-fade-up animations on all elements
- Liquid glass effects with gradient border strokes
- Navigation arrows for carousel
- Precise stagger timing (0ms → 900ms, 50-100ms increments)

### Dimensions & Spacing (EXACT)

**Root Container**:
- `relative w-full min-h-screen sm:h-screen overflow-hidden`
- Full viewport height on desktop, min-height on mobile

**Navbar**:
- `px-4 sm:px-6 md:px-12 py-4 md:py-6`
- Height: `70px` (includes padding)
- Z-index: 50 (relative positioned)

**Hero Content Container**:
- `relative z-10 flex flex-col items-center text-center`
- `pt-24 sm:pt-28 md:pt-32` (top padding)
- `px-4 sm:px-6` (horizontal padding)
- `pb-8 md:pb-16` (bottom padding)
- Grows to fill remaining space: `flex-1 flex flex-col justify-end`

**Tech Slider Height**:
- Mobile: `h-[100px]`
- Tablet: `h-[120px]`
- Desktop: `h-[120px]`

**CTA Buttons**:
- Padding: `px-6 sm:px-8 py-2.5 sm:py-3`
- Border radius: `rounded-full` (24px pills)
- Gap between buttons: `gap-3 sm:gap-4`

**Metadata Row**:
- `gap-3 sm:gap-6` horizontal spacing
- Font sizes: `text-xs sm:text-sm`
- Icon sizes: `w-4 h-4` responsive to `sm:w-5 sm:h-5`
- Margin bottom: `mb-6 md:mb-8`

**Title Responsive Sizes**:
- Mobile: `text-[2rem]` (32px)
- Tablet: `text-4xl` (36px)
- Desktop: `text-5xl` (48px)
- Large desktop: `text-[4.75rem]` (76px)
- Extra large: `text-[5.25rem]` (84px)
- Line height: `leading-[0.95]`
- Letter spacing: `letter-spacing: -0.04em` or `-0.035em`

**Navigation Arrows**:
- Pill buttons: `rounded-full`
- Padding: `px-4 sm:px-6 py-2.5 sm:py-3`
- Gap between arrows: `gap-3 sm:gap-4`

### Color Palette (EXACT FROM REFERENCES)

**Primary Colors**:
| Element | Hex | RGB | Usage |
|---------|-----|-----|-------|
| **Background** | `#000000` (black) | (0, 0, 0) | Page background, video fill |
| **Text Primary** | `#ffffff` (white) | (255, 255, 255) | Main text, headings, buttons |
| **Text Secondary** | `#a0a0a0` (gray-400) | (160, 160, 160) | Subtitles, descriptions |
| **Accent (Neon Green)** | `#00ff88` | (0, 255, 136) | CTAs, highlights, glow effects |

**Navbar Colors** (from LinkFlow reference):
| Element | Hex | Usage |
|---------|-----|-------|
| **Navbar background** | `#ffffff` with `opacity-70` | Desktop pill nav, semi-transparent |
| **Navbar text** | `#1f2a1d` | Text in navbar, dark green |
| **Navbar border** | `#ffffff` with `opacity-60` | Border on pill nav |

**Button Colors**:
| Button Type | Background | Text | Hover | Border |
|-------------|-----------|------|-------|--------|
| **Primary (View Projects)** | `#00ff88` (neon green) | `#000000` (black) | `#00ff88` with glow | none |
| **Secondary (Download)** | transparent | `#00ff88` | `#00ff88` with glow | `#00ff88` |
| **Liquid Glass** | `rgba(255,255,255,0.01)` | `#ffffff` | glow effect | gradient border |
| **Navbar CTA** | `#1f2a1d` | `#ffffff` | `#2a3827` | none |

**Overlay & Effects**:
| Element | Style |
|---------|-------|
| **Blur overlay mask** | `linear-gradient(to top, black 0%, transparent 45%)` |
| **Liquid glass** | `background-blend-mode: luminosity; backdrop-filter: blur(4px)` |
| **Glow effect** | `box-shadow: drop-shadow(0 0 12px rgba(0,255,136,0.6))` |

### Copy (Locked In)

| Element | Copy | Status |
|---------|------|--------|
| **Metadata** | "Full-Stack • Production-Ready" | ✅ LOCKED |
| **Title** | "Backend SDE \| Building Scalable APIs" | ✅ LOCKED |
| **Description** | [TBD] | ⏳ TBD |
| **CTA 1** | "View Projects" | ✅ LOCKED |
| **CTA 2** | "Download Resume" | ✅ LOCKED |

---

## Tech Stack & Tools

### Frontend Framework
- **Next.js 16** (React 19 + TypeScript)
- **Tailwind CSS 3.4** for styling
- **Lucide React** for icons
- **Motion Primitives** for animations (selected components only)

### Optional Libraries
- **Framer Motion** (if needed for complex animations)
- **lucide-react** icons (GitHub, LinkedIn, Mail, Menu, X, etc.)

### Hosting
- **Vercel** (native Next.js support, free tier)

### Development Environment
- **TypeScript** for type safety
- **ESLint + Prettier** for code quality
- **Git** for version control

---

## Design System

### Color Palette

| Element | Hex | RGB | Usage |
|---------|-----|-----|-------|
| **Background** | `#0a0e27` | (10, 14, 39) | Main page background |
| **Background Alt** | `#1a1a2e` | (26, 26, 46) | Secondary sections (slider, cards) |
| **Text Primary** | `#f5f5f5` | (245, 245, 245) | Main heading, body text |
| **Text Secondary** | `#b0b0b0` | (176, 176, 176) | Subtitle, metadata, description |
| **Accent (Neon Green)** | `#00ff88` | (0, 255, 136) | CTAs, highlights, shimmer effects |
| **Border** | `#2a3a3a` | (42, 58, 58) | Card borders, dividers |

### Typography

| Element | Font | Size | Weight | Usage |
|---------|------|------|--------|-------|
| **Logo/Brand** | Inter | 18px | 600 | Navbar brand name |
| **Main Title** | Inter | 48-64px | 600 | Hero heading |
| **Metadata** | Inter | 12px | 500 | Hero metadata row |
| **Description** | Inter | 14-16px | 400 | Hero subtitle |
| **Button Text** | Inter | 14px | 600 | CTA buttons |
| **Tech Name** | Inter | 12px | 500 | Tech slider labels |
| **Body** | Inter | 14-16px | 400 | General text |

**Font Import**:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### Spacing Scale

- `xs`: `4px`
- `sm`: `8px`
- `md`: `16px`
- `lg`: `24px`
- `xl`: `32px`
- `2xl`: `48px`

### Border Radius

- Buttons: `24px` (pill shape)
- Cards: `12px`
- Small elements: `6-8px`

---

## Components Breakdown

### 1. Navbar Component (LinkFlow Reference)

**Container**:
- `absolute top-0 left-0 right-0 z-30`
- `flex items-center justify-between`
- `px-4 sm:px-6 md:px-10 py-4 sm:py-6`

**Left: Logo/Brand**:
- Text: "Saksham Sharma" (or site name)
- Styling: `text-lg sm:text-xl md:text-2xl font-semibold tracking-tight`
- Color: `#1f2a1d` (dark green, responsive to desktop/mobile context)
- Blur-fade-up animation: 0ms delay

**Center: Navigation Links** (desktop only, hidden below lg):
- Container: `hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60`
- Links: "Projects", "Skills", "Contact" (5 total in reference, adapt to 3-4 for your site)
- Styling: `text-sm px-3 py-2 transition-colors`
- First link: `font-semibold text-#1f2a1d` (active state)
- Other links: `font-medium text-#4b5b47 hover:text-#1f2a1d`
- Blur-fade-up animation: 100ms, 150ms, 200ms (staggered)

**Right: Action Buttons** (desktop/tablet):
- Desktop pill button: `ml-2 bg-#1f2a1d hover:bg-#2a3827 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors`
- Mobile: "Resume Download" button visible on sm+
- Blur-fade-up animation: 350ms delay

**Right: Hamburger Menu** (mobile only, below lg):
- `lg:hidden relative w-10 h-10 rounded-full`
- `bg-white/70 backdrop-blur-md border border-white/60`
- `text-#1f2a1d transition-all duration-300 hover:bg-white/90`
- Icon animation: Menu/X swap with rotate & scale (see animation details)
- Blur-fade-up animation: 350ms delay

**Mobile Menu Drawer** (below lg):
- Position: `lg:hidden fixed top-0 right-0 bottom-0`
- Width: `w-[85%] max-w-sm`
- Background: `bg-white/95 backdrop-blur-xl shadow-2xl`
- Z-index: 20
- Transform: `transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`
- Overlay: `fixed inset-0 bg-#1f2a1d/40 backdrop-blur-sm` (dismissable)

**Mobile Drawer Content**:
- Nav links: `text-2xl font-semibold text-#1f2a1d py-4 border-b border-#1f2a1d/10`
- Staggered animation: `translate-x-0 opacity-100` on open, `translate-x-8 opacity-0` on close
- Delay per link: `150ms + i * 70ms`
- CTA button: `bg-#1f2a1d hover:bg-#2a3827 text-white text-sm font-semibold px-5 py-3 rounded-full`
- Delay: 400ms

### 2. Hero Section Component (Hybrid Design)

---

### 2. Hero Section Component

**Props**:
- `backgroundVideo`: string (video URL)
- `title`: string
- `metadata`: string
- `description`: string
- `ctaButtons`: { label: string, action: string }[]

**Structure**:
```tsx
HeroSection
├── Background
│   ├── Video element (muted, autoplay, loop)
│   └── Blur overlay mask (bottom-fade)
├── Content Container
│   ├── Metadata Row (with icons if needed)
│   ├── Main Title (Text Shimmer animation)
│   ├── Description (Fade-in animation)
│   ├── TechStackSlider (Infinite scroll)
│   │   └── Tech items (left-to-right)
│   └── CTA Buttons (Glow on hover)
└── Navigation Arrows (Previous/Next)
```

**Animations** (Motion Primitives):
- `Text Shimmer` on main title (on load, 1.2s)
- `Fade-in` on description (0.6s, delayed)
- `Infinite Slider` for tech stack (auto-loop, no hover effects)
- `Glow Effect` on CTA buttons (on hover, 0.3s)
- `Scroll Progress` (optional, thin bar at top)
- `In View` for section reveals as user scrolls

---

### 3. Tech Stack Slider Component

**Type**: InfiniteSlider  
**Props**:
- `items`: Array of tech objects
- `direction`: 'left' | 'right' (default: 'left')
- `gap`: number (px between items, default: 24)
- `speed`: number (ms per loop, default: 30000)
- `autoplay`: boolean (default: true)
- `showLabels`: boolean (default: true)

**Tech Items Structure**:
```tsx
{
  name: string,          // e.g., "FastAPI"
  icon: ReactNode,       // Icon component or emoji
  category?: string      // e.g., "Backend", "Database"
}
```

**Tech Stack to Display**:
```
Backend: FastAPI, Flask, ASP.NET Core, Node.js
Databases: PostgreSQL, SQLite
Testing: pytest, pytest-asyncio
DevOps: Docker, Railway, Vercel, Alembic
Frontend: React, Next.js, TypeScript, Tailwind CSS
Other: Git, GitHub, REST APIs, async/await
```

**Behavior**:
- Passive scroll (no click interactions)
- Continuous loop, no pause on hover
- Fully responsive height
- Mobile: stacked/smaller items
- Desktop: full-size items

---

### 4. CTA Button Component

**Props**:
- `variant`: 'primary' | 'secondary' | 'tertiary'
- `label`: string
- `onClick`: () => void
- `href`: string (optional)
- `disabled`: boolean

**Variants**:

| Variant | Style | Usage |
|---------|-------|-------|
| **Primary** | Solid neon bg, black text | "View Projects" (main action) |
| **Secondary** | Outlined neon, transparent bg | "Download Resume" (secondary action) |
| **Tertiary** | Liquid glass effect | Navigation arrows |

**Interactions**:
- Hover: slight glow, scale up 1.05
- Active: glow intensifies
- Disabled: opacity 0.5, no cursor

---

### 5. Navigation Arrows Component

**Props**:
- `onPrevious`: () => void
- `onNext`: () => void
- `variant`: 'solid' | 'glass' (default: 'glass')

**Behavior**:
- Optional component (can be hidden on mobile)
- Circular pill buttons
- Passive state: outlined, subtle
- Hover: glow effect, slight scale
- Click: trigger prev/next project

---

## Animation Details (EXACT FROM REFERENCES)

### BLUR-FADE-UP Animation (Cinematic Reference)

**@keyframes Definition**:
```css
@keyframes blurFadeUp {
  from {
    opacity: 0;
    filter: blur(20px);
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}
```

**Animation Class** (`.animate-blur-fade-up`):
```css
animation: blurFadeUp 1s ease-out forwards;
initial opacity: 0;
animationDelay: [per element, see timing below]
```

### EXACT STAGGER TIMING (0ms → 900ms)

**Navbar Elements** (relative z-50):
```
Logo: 0ms
Nav link 1 ("Home"): 100ms
Nav link 2 ("Projects"): 150ms
Nav link 3 ("Skills"): 200ms
Nav link 4 ("Contact"): 250ms
Search button: 350ms
User/Profile button: 400ms
Hamburger menu: 350ms
```

**Hero Content** (relative z-10):
```
Metadata row (IMDB, duration, date): 300ms
Main Title (Backend SDE | Building Scalable APIs): 400ms
Description (subtitle): 500ms
Tech Stack Slider: 600ms (auto-loop starts)
CTA Button 1 (View Projects): 600ms
CTA Button 2 (Download Resume): 700ms
Navigation Arrow (Previous): 800ms
Navigation Arrow (Next): 900ms
```

### Mobile Menu Animations (from LinkFlow reference)

**Mobile Drawer**:
- `transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`
- Open: `translate-x-0`
- Closed: `translate-x-full`
- Width: `w-[85%] max-w-sm`

**Mobile Nav Links Stagger**:
- `transition-all duration-500`
- Open: `translate-x-0 opacity-100`, delay: `150ms + i * 70ms`
- Closed: `translate-x-8 opacity-0`, delay: `0ms`

**Mobile CTA Group**:
- `transition-all duration-500`
- Open: `translate-x-0 opacity-100`, delay: `400ms`
- Closed: `translate-x-8 opacity-0`, delay: `0ms`

**Hamburger Icon Swap**:
- `transition-all duration-300`
- Menu open: Menu `opacity-0 rotate-90 scale-50`, X `opacity-100 rotate-0 scale-100`
- Menu closed: Menu `opacity-100 rotate-0 scale-100`, X `opacity-0 -rotate-90 scale-50`

### Liquid Glass Effect (Cinematic Reference)

**CSS Class Definition** (`.liquid-glass`):
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

### Button Interactions

**Hover Effects**:
```css
transition: all 0.3s ease-out;

/* Glow on hover */
filter: drop-shadow(0 0 20px rgba(0, 255, 136, 0.6));

/* Scale on hover */
transform: scale(1.05);

/* Color transition */
color: transition-colors duration-300;
```

### Bottom Blur Overlay (Cinematic Reference)

**CSS Mask Implementation**:
```css
position: fixed;
inset: 0;
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
mask-image: linear-gradient(to top, black 0%, transparent 45%);
-webkit-mask-image: linear-gradient(to top, black 0%, transparent 45%);
pointer-events: none;
z-index: 1;
background: transparent;
```

### Animated Entrance Background (No Video)

Instead of a static video background, the hero section features a **dynamic animated gradient background** that creates visual interest and motion without needing external video files.

**Background Animation**:
- Base color: `#0a0e27` (dark blue-black, matches design system)
- Animated gradient that shifts smoothly across the viewport
- Animation loop: 18 seconds (continuous, smooth)
- Creates depth and movement without distraction
- No video file dependencies

**Gradient Animation Implementation**:
```css
@keyframes gradientShift {
  0% {
    background: linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #0a0e27 100%);
  }
  50% {
    background: linear-gradient(135deg, #1a1a2e 0%, #0a0e27 50%, #1a1a2e 100%);
  }
  100% {
    background: linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #0a0e27 100%);
  }
}

.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  animation: gradientShift 18s ease-in-out infinite;
  background-size: 200% 200%;
}
```

**Animation Properties**:
- Duration: 18 seconds
- Timing: ease-in-out (smooth, natural motion)
- Loop: infinite
- Fixed position: z-index 0 (behind all content)
- No performance impact (pure CSS, no video codec)

**Optional: Subtle Animated Accent Elements**:
- Small animated circles/dots that fade in/out at different depths
- Can use Motion-Primitives: `Animated Background` component (if available)
- Creates parallax-like depth effect
- Colors: Neon green (#00ff88) at 5-10% opacity for subtle glow
- Fade-in/out: 4-6 second duration, staggered timing

**Bottom Blur Overlay** (Same as reference):

Over the animated background, there is a single fixed, full-screen overlay div that applies a strong backdrop-blur-xl. This div uses a CSS mask so the blur only appears at the bottom and fades to transparent toward the middle of the screen. There is NO dark gradient overlay -- only blur.

The mask: `mask-image: linear-gradient(to top, black 0%, transparent 45%)` (with the `-webkit-` prefix too).

This overlay is `pointer-events-none` and sits at `z-index: 1`.

### Motion Primitives Selection

**Using from Motion Primitives**:
- ✅ `Text Shimmer` — Hero title on load (optional, can use blur-fade-up instead)
- ✅ `Glow Effect` — CTA buttons on hover
- ✅ `In View` — Section fade-ins on scroll (for Projects/Skills/About below)
- ✅ `Animated Background` — Optional for animated circles/dots overlay
- ✅ `Border Trail` — Optional card hover effect

**Primary Animation System**: CSS-based blur-fade-up + gradient shift (no Framer Motion needed)

---

## Complete Reference Prompts (Inline)

### Reference Prompt 1: LinkFlow Hero (Green Theme)

**Stack**:
- Vite + React 18 + TypeScript
- Tailwind CSS 3.4
- lucide-react icons
- CSS transitions (no Framer Motion)

**Color Palette**:
- Dark green (text, buttons): `#1f2a1d`
- Medium dark green: `#2d3a2a`
- Button hover: `#2a3827`
- Body text green: `#4b5b47`
- Heading primary: `#336443`
- Heading accent: `#85AB8B`
- Bottom-left text: `#3d5638`
- Bottom-left button bg: `#3d5638`, hover `#2d4228`

**Features**:
- Boomerang video background (frame capture + forward/backward loop)
- Liquid glass button effects
- Mobile menu drawer with staggered animations
- Bottom-left CTA block
- Bottom-right video link button
- Responsive navbar with pill design

**Key Components**:
- BoomerangVideoBg.tsx: Captures video frames, plays forward/backward seamlessly
- App.tsx: Main hero section with navbar, content, CTAs

**Fonts**: Neue Haas Grotesk Display Pro + Inter

---

### Reference Prompt 2: Cinematic Streaming Hero (Dark Theme)

**Stack**:
- React + Tailwind CSS
- Lucide React icons
- Inter font from Google Fonts
- CSS transitions (no Framer Motion)

**Color Palette**:
- Background: pure black `#000000`
- Text: white `#ffffff`
- Text secondary: gray-400 `#a0a0a0`
- Accent/CTA: white `#ffffff` (solid white button)
- Liquid glass elements: semi-transparent white with blur

**Features**:
- Full-screen background video (object-cover, fixed z-0)
- Bottom blur overlay with CSS mask (no gradient)
- Metadata row (IMDB rating, duration, date)
- Large cinematic title typography
- Blur-fade-up animations on all elements
- Liquid glass effects with gradient border strokes
- Navigation arrows (Previous/Next)
- Staggered timing: 0ms → 900ms

**Key Animations**:
- Blur-fade-up: `opacity: 0; filter: blur(20px); transform: translateY(40px)` → `opacity: 1; filter: blur(0); transform: translateY(0)` over 1s ease-out
- Stagger timing: Logo 0ms, nav 100-300ms, content 300-900ms
- Mobile menu: cubic-bezier easing, transform transitions
- Hamburger icon swap: rotate + scale with opacity

**Fonts**: Inter (400, 500, 600, 700 weights)

---

## Combined Hybrid Design Notes

**Your portfolio uses**:
- Dark theme from Cinematic (black background, white text, neon accent)
- Blur-fade-up animations from Cinematic
- Stagger timing from Cinematic
- Liquid glass effects from both
- Responsive navbar from LinkFlow
- Mobile menu drawer from LinkFlow
- Grid layout with projects/skills below hero (custom)
- Tech slider from tech-stack reference
- Floating resume button (custom)
- Gradient footer from custom spec

**Color Adaptation for Your Site**:
- LinkFlow green (#336443) → Neon green (#00ff88) for neon accent
- Black background from Cinematic
- White text from Cinematic
- Liquid glass buttons from both
- Blur overlay from Cinematic

---

## Copy & Content (TBD)

### To Be Refined Later

- [ ] Hero description (1-2 sentences about you)
- [ ] Project card descriptions (3 bullets each)
- [ ] Skills section copy
- [ ] Contact section copy
- [ ] Footer links and social URLs

### Copy Guidelines

- **No fluff** — every word must earn its place
- **Action-oriented** — verbs over adjectives
- **Specific metrics** — "13 tests, 100% passing" beats "well-tested"
- **Problem-solving focus** — "debugged async event loop issue" beats "experienced with async"
- **No "built with" mentions** — saves space for real content

---

## Projects Section Spec

### Layout Structure (Top to Bottom)

```
┌─────────────────────────────────────────────────────┐
│ SECTION TITLE                                       │
│ "Featured Projects"                                 │
│                                                     │
│ SECTION DESCRIPTION (1-2 lines)                    │
│ "Production-ready full-stack projects showcasing   │
│  backend engineering, testing, and debugging."      │
│                                                     │
│ CAROUSEL CONTAINER                                  │
│ ┌───────────────────────────────────────────────┐  │
│ │                                               │  │
│ │         [PROJECT CARD - LARGE/ACTIVE]         │  │
│ │     ┌─────────────────────────────────┐       │  │
│ │     │ Title                           │       │  │
│ │     │ Tech: FastAPI • PostgreSQL ...  │       │  │
│ │     │                                 │       │  │
│ │     │ • Bullet 1                      │       │  │
│ │     │ • Bullet 2                      │       │  │
│ │     │ • Bullet 3                      │       │  │
│ │     │                                 │       │  │
│ │     │ [GitHub →]                      │       │  │
│ │     └─────────────────────────────────┘       │  │
│ │                                               │  │
│ │     [PROJECT CARD - TINY/BEHIND] (peeking)    │  │
│ │                                               │  │
│ └───────────────────────────────────────────────┘  │
│                                                     │
│ NAVIGATION CONTROLS                                │
│ [← Previous]              [Next →]                │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Carousel Configuration

| Property | Value | Notes |
|----------|-------|-------|
| **Layout Type** | Carousel/Slider | One project visible, swipeable |
| **Navigation** | Manual only | Arrows/swipes, no auto-rotation |
| **Card Stacking** | Active large + inactive tiny | Stacked effect with scale emphasis |
| **Active Card Scale** | `scale-100` | Prominent, centered |
| **Inactive Card Scale** | `scale-75` | Behind active card, slightly visible |
| **Active Card Opacity** | `opacity-100` | Fully visible |
| **Inactive Card Opacity** | `opacity-50` | Dimmed, in background |
| **Transition** | `0.4s ease-out` | Smooth scale/opacity transition |
| **Progressive Blur** | Left & right edges | Fade effect on carousel edges |
| **Blur Direction** | Left & right | Blur width: ~200px each side |
| **Blur Intensity** | 1 (medium) | Smooth fade without harsh cutoff |

### Progressive Blur Implementation

The carousel uses `ProgressiveBlur` component on left and right edges to create a smooth fade effect:

```tsx
<div className='relative h-[350px] w-full overflow-hidden'>
  <InfiniteSlider 
    className='flex h-full w-full items-center'
    autoplay={false}  // Manual navigation only
  >
    {/* Project cards here */}
  </InfiniteSlider>
  
  {/* Left blur overlay */}
  <ProgressiveBlur
    className='pointer-events-none absolute top-0 left-0 h-full w-[200px]'
    direction='left'
    blurIntensity={1}
  />
  
  {/* Right blur overlay */}
  <ProgressiveBlur
    className='pointer-events-none absolute top-0 right-0 h-full w-[200px]'
    direction='right'
    blurIntensity={1}
  />
</div>
```

**Benefits**:
- Smooth fade on edges (doesn't look like hard cutoff)
- Prevents card edges from clipping abruptly
- Adds visual polish and depth
- pointer-events-none ensures blur doesn't interfere with clicks

### Project Card Structure

**Card Dimensions**:
- **Width**: `90%` (mobile), `600px` (desktop)
- **Height**: Auto (content-driven)
- **Padding**: `32px` (desktop), `24px` (mobile)
- **Border Radius**: `12px`
- **Background**: `#1a1a2e` (slightly lighter than page bg)
- **Border**: `1px solid #2a3a3a` (subtle)

**Card Content** (in order):

```
┌─────────────────────────────────┐
│ Title (18px, bold)              │ ← Project name
│                                 │
│ Tech Stack Badges               │ ← Colored chips/tags
│ [FastAPI] [PostgreSQL] [pytest] │
│                                 │
│ • Bullet point 1                │ ← Key achievement/feature
│ • Bullet point 2                │
│ • Bullet point 3                │
│                                 │
│ [GitHub →]                      │ ← GitHub link (neon green)
└─────────────────────────────────┘
```

**Card Elements**:

| Element | Style | Notes |
|---------|-------|-------|
| **Title** | 18px, 600 weight, #f5f5f5 | Project name |
| **Tech Stack** | Inline badges, 12px, 500 weight | Colored background (#00ff88 or category color) |
| **Bullet Points** | 14px, 400 weight, #b0b0b0 | 3 key points from resume bullets |
| **GitHub Link** | 14px, 600 weight, #00ff88 | "GitHub →" with right arrow icon |

### Section Header

| Element | Copy | Status |
|---------|------|--------|
| **Title** | "Featured Projects" | ✅ LOCKED |
| **Description** | [TBD - 1-2 lines] | ⏳ TBD |

**Description Guidelines**:
- Briefly explain what these projects showcase
- Focus on: production-readiness, backend focus, testing
- Max 2 lines (40-50 words)

### Projects Data Structure

```tsx
interface Project {
  id: string;
  title: string;
  description?: string;
  techStack: Array<{
    name: string;
    category: 'backend' | 'database' | 'testing' | 'devops' | 'frontend';
  }>;
  bullets: [string, string, string]; // Exactly 3 bullets
  githubUrl: string;
  liveUrl?: string; // Not used in this version
}
```

### Three Projects to Feature

**Project 1: URL Shortener API**
- **Title**: URL Shortener API with Click Analytics
- **Tech**: FastAPI, PostgreSQL, SQLAlchemy, pytest, Alembic, async/await
- **Bullets** (from resume):
  1. "Engineered production-grade REST API with collision-free short code generation (Base62 bijection, 56 billion combinations), real-time click analytics, and async SQLAlchemy; deployed on Railway with PostgreSQL (Neon). Fixed route registration bug where catch-all routes shadowed specific endpoints."
  2. "Built comprehensive test suite (13 tests, 100% passing) with pytest + pytest-asyncio; debugged async event loop issue affecting SQLAlchemy connection pooling. Discovered and fixed .gitignore UTF-16 encoding (silently breaking Git patterns) and rotated credentials post-security discovery."
  3. "Designed normalized PostgreSQL schema with indexed columns (O(1) lookups), foreign key constraints (ON DELETE CASCADE), and Alembic migrations for reproducible deployments. Prevented SQL injection via parameterized queries; removed manual create_all() from application lifespan."
- **GitHub**: https://github.com/Saksham-Mist/url-shortner

**Project 2: Mini ATS - Candidate Pipeline Tool**
- **Title**: Mini ATS - Candidate Pipeline Tool
- **Tech**: React, TypeScript, Tailwind CSS, ASP.NET Core, Entity Framework Core, SQLite, Docker, Railway
- **Bullets** (from resume):
  1. "Built and deployed full-stack applicant tracking system with job posting, PDF/DOCX resume upload, and recruiter dashboard for 5-stage pipeline (Applied to Rejected/Offer). Frontend deployed on Vercel, backend on Railway with Docker; cross-origin requests via CORS."
  2. "Designed 5-endpoint REST API in ASP.NET Core (Minimal API) with EF Core, normalized Job–Candidate relational model, cascading status updates, and multipart form handling for file uploads. Implemented client/server-side validation with proper error responses."
  3. "Developed responsive React UI with TypeScript for type safety and Tailwind CSS styling. Made deliberate architectural tradeoffs (SQLite for rapid iteration, Minimal API over MVC) to prioritize a fully working, well-documented system over unfinished complexity."
- **GitHub**: https://github.com/Saksham-Mist/mini-ats

**Project 3: Token Bucket Rate Limiter Service**
- **Title**: Token Bucket Rate Limiter Service
- **Tech**: Python, Flask, Threading, Concurrency Control, Lock Management
- **Bullets** (from resume):
  1. "Built standalone, networked rate-limiting API implementing token bucket and sliding window algorithms from first principles with configurable algorithms and standard HTTP rate-limit headers (RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset)."
  2. "Designed thread-safe per-client bucket locking strategy using per-instance locks guarded by a shared map lock, guaranteeing zero double-spending under concurrent access. Verified correctness with load test firing 150 concurrent requests via thread pool."
  3. "Implemented admin endpoint for per-client configuration (rate, burst size, algorithm mode); demonstrated mastery of synchronization primitives, lock contention analysis, and production-grade concurrency patterns."
- **GitHub**: https://github.com/Saksham-Mist/token-bucket-rate-limiter

### Animations

**Carousel Transitions**:
- Scale animation: active card scales from `0.75` to `1.0` (0.4s ease-out)
- Opacity animation: inactive cards fade from `1.0` to `0.5` (0.4s ease-out)
- All active: cards slide/translate smoothly using transform

**Arrow Buttons**:
- Hover: glow effect (matching hero buttons)
- Active state: scale up 1.05
- Disabled state (edge cases): opacity 0.5

**Motion Primitives Use**:
- `In View`: Card fades in as user scrolls to projects section
- `Glow Effect`: GitHub link on hover
- `Scroll Progress`: Optional (shows depth within section)

### Responsive Behavior

| Breakpoint | Layout | Notes |
|-----------|--------|-------|
| **Mobile** (< 640px) | Full-width card, 90% width | Swipe navigation, touch-friendly arrows |
| **Tablet** (640px - 1024px) | Medium card, 80% width | Visible arrows, peek slightly at next card |
| **Desktop** (> 1024px) | Large card, 600px fixed width | Full interaction, smooth animations |

### Spacing & Layout

- **Section padding**: `60px` top/bottom, `40px` sides (mobile: `40px` top/bottom, `20px` sides)
- **Title to description**: `12px` gap
- **Description to carousel**: `40px` gap
- **Carousel to navigation arrows**: `24px` gap
- **Arrow button gap**: `24px` between prev/next
- **Card internal spacing**: `32px` padding (desktop), `24px` (mobile)

---

## Skills Section Spec

### Layout Structure (Top to Bottom)

```
┌─────────────────────────────────────────────────────┐
│ SECTION TITLE                                       │
│ "Technical Skills"                                  │
│                                                     │
│ SKILLS SCROLLBAR (Auto-scroll, like tech slider)   │
│ ┌───────────────────────────────────────────────┐  │
│ │                                               │  │
│ │ [Circle] [Circle] [Circle] [Circle] [Circle] │  │
│ │  Python   FastAPI PostgreSQL  React   pytest │  │
│ │   95%      80%       85%       60%     75%   │  │
│ │                                               │  │
│ │ [Circle] [Circle] [Circle] [Circle] ...     │  │
│ │                                               │  │
│ └───────────────────────────────────────────────┘  │
│ (progressive blur on left/right edges)             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Scrollbar Configuration

| Property | Value | Notes |
|----------|-------|-------|
| **Layout Type** | Auto-scroll horizontal | Continuous loop, like tech slider |
| **Scroll Direction** | Left-to-right | Passive, no click/pause |
| **Circle Diameter** | 60-80px | Small, compact |
| **Circle Spacing** | 24px gap | Between circles |
| **Progressive Blur** | Left & right edges | 200px fade on each side |
| **Blur Intensity** | 1 (medium) | Smooth edge fade |
| **Auto-scroll Speed** | ~30-40s per loop | Continuous, comfortable pace |
| **Container Height** | Auto (content-driven) | Responsive to circle size + labels |

### Skill Gauge Design

**Circular Gauge Structure**:
```
      ┌─────┐
      │ 95% │
      │─────│
      │Ring │ ← SVG circle, filled based on %
      │─────│
      │Skill│
      │Name │
      └─────┘
```

**Circle Details**:
- **Diameter**: 70px (center of 60-80px range)
- **Ring Stroke**: 4px width
- **Ring Color**: #00ff88 (neon green, matches hero)
- **Ring Background**: #2a3a3a (subtle, dark)
- **Fill**: Animated fill from 0% to proficiency % (0.6s ease-out)
- **Center Icon**: Lucide icon for skill (e.g., `<Code />` for Python)
- **Icon Size**: 24px
- **Icon Color**: #f5f5f5 (white)

**Labels Below Circle**:
- **Skill Name**: 12px, 500 weight, #f5f5f5
- **Proficiency %**: 11px, 400 weight, #b0b0b0
- **Proficiency Label**: "Expert" (90-100%), "Intermediate" (60-80%), "Beginner" (25-35%), etc.

### Skills Data Structure

```tsx
interface Skill {
  id: string;
  name: string;
  proficiency: number;        // 25-100 (%)
  category: 'language' | 'backend' | 'database' | 'frontend' | 'testing' | 'devops' | 'core-cs';
  icon: LucideIcon;           // Lucide React icon
}
```

### Skills to Display

**Organized by Category (visually hybrid - no dividers, just organized)**:

**Languages** (25-35% range - Beginner):
- Python (35%)
- C/C++ (28%)
- JavaScript (32%)
- TypeScript (30%)
- SQL (33%)

**Backend** (70-95% range):
- FastAPI (95%)
- Flask (85%)
- ASP.NET Core (75%)
- Node.js (70%)
- REST APIs (90%)

**Databases** (80-90% range):
- PostgreSQL (90%)
- SQLite (85%)
- SQLAlchemy ORM (88%)
- Entity Framework Core (80%)

**Frontend** (50-70% range):
- React (65%)
- Next.js (60%)
- TypeScript (70%)
- Tailwind CSS (75%)

**Testing** (85-95% range):
- pytest (95%)
- pytest-asyncio (90%)
- Automated Testing (88%)

**DevOps & Tools** (70-85% range):
- Docker (80%)
- Railway (75%)
- Vercel (78%)
- Git/GitHub (85%)
- Alembic (82%)

**Core CS** (80-95% range):
- Data Structures (92%)
- Algorithms (88%)
- System Design (85%)
- Concurrency Control (90%)
- REST APIs (90%)

### Section Header

| Element | Copy | Status |
|---------|------|--------|
| **Title** | "Technical Skills" | ✅ LOCKED |
| **Description** | [OPTIONAL - TBD if needed] | ⏳ TBD |

### Animations

**Gauge Fill Animation**:
- From: `fill-opacity: 0`
- To: `fill-opacity: [proficiency%]`
- Duration: 0.6s ease-out
- Trigger: On scroll into view (In View animation)

**Auto-scroll**:
- Continuous loop (like tech slider)
- Speed: 30-40s per complete cycle
- No pause on hover
- Seamless repeat

**Progressive Blur**:
- Left edge: blur fades from opaque (left) to transparent (center)
- Right edge: blur fades from transparent (center) to opaque (right)
- Width: 200px each side
- Intensity: medium (blurIntensity={1})

### Responsive Behavior

| Breakpoint | Layout | Notes |
|-----------|--------|-------|
| **Mobile** (< 640px) | Smaller circles (60px), tighter spacing (16px) | Touch-friendly, auto-scroll continues |
| **Tablet** (640px - 1024px) | Medium circles (70px), 24px spacing | Full visibility, smooth scroll |
| **Desktop** (> 1024px) | 70px circles, 24px spacing | Full experience, smooth animations |

### Spacing & Layout

- **Section padding**: `60px` top/bottom, `40px` sides (mobile: `40px` top/bottom, `20px` sides)
- **Title to scrollbar**: `40px` gap
- **Circle spacing**: `24px` horizontal gap
- **Circle to label**: `8px` vertical gap
- **Label font size**: Skill name 12px, proficiency % 11px
- **Scrollbar height**: Auto (circle + labels = ~140px total)

---

## About/Bio Section Spec

### Layout Structure (Top to Bottom)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│ SECTION TITLE                                       │
│ "About"                                             │
│                                                     │
│ ┌───────────────────────────────────────────────┐  │
│ │                                               │  │
│ │ [BIO TEXT BLOCK - LEFT ALIGNED]              │  │
│ │                                               │  │
│ │ Spacious, readable text area                 │  │
│ │ Ready for content (TBD)                       │  │
│ │                                               │  │
│ │ Lorem ipsum dolor sit amet...                │  │
│ │ [Multiple paragraphs or formatted text]      │  │
│ │                                               │  │
│ └───────────────────────────────────────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Section Design

| Property | Value | Notes |
|----------|-------|-------|
| **Container Type** | Card/Box | Subtle border + background |
| **Background Color** | `#1a1a2e` | Matches projects section |
| **Border** | `1px solid #2a3a3a` | Subtle, dark border |
| **Border Radius** | `12px` | Rounded corners |
| **Padding** | `48px` (desktop), `32px` (mobile) | Generous internal spacing |
| **Max Width** | `700px` | Optimal text readability |
| **Text Alignment** | Left-aligned | Standard reading flow |
| **Section Padding** | `60px top/bottom`, `40px sides` | Desktop; mobile: `40px top/bottom`, `20px sides` |

### Typography

| Element | Font Size | Weight | Color | Notes |
|---------|-----------|--------|-------|-------|
| **Section Title** | 28-32px | 600 | #f5f5f5 | "About" heading |
| **Bio Text** | 15-16px | 400 | #b0b0b0 | Body text, readable |
| **Bio Accent Text** | 15-16px | 600 | #f5f5f5 | Bold/emphasis within bio |
| **Line Height** | 1.8 | - | - | Generous line spacing for readability |

### Content Placeholder

**Bio Text Area** (TBD - to be filled later):
```
[Spacious text block - left aligned]
[Multiple paragraphs describing:]
- Who you are (role, background)
- What you focus on (backend, system design, etc.)
- Why you build (problem-solving mindset)
- Current/future direction
```

**Constraints**:
- Min-height: 250px (ensures visual balance)
- Max-width: 700px (optimal reading width)
- Responsive: Stack properly on mobile
- No images, no extra elements
- Just clean, readable text

### Spacing & Layout

| Element | Spacing | Notes |
|---------|---------|-------|
| **Section title to card** | 32px gap | Breathing room |
| **Card internal padding** | 48px (desktop), 32px (mobile) | Generous |
| **Text line-height** | 1.8 | Readable spacing between lines |
| **Paragraph gap** | 20px | Space between paragraphs |
| **Section to next section** | 80px | Large gap to projects/skills below |

### Animations

**On Scroll Into View**:
- Card fades in (In View animation)
- Slight slide-up from below (0.6s ease-out)
- Text color animates from dimmed to full opacity

**No hover effects** (text-only section, static)

---

## Floating Resume Button (Global Component)

### Design & Placement

| Property | Value | Notes |
|----------|-------|-------|
| **Position** | Fixed, bottom-right corner | Always visible, accessible anytime |
| **Bottom Offset** | `24px` from bottom | Mobile-friendly spacing |
| **Right Offset** | `24px` from right edge | Desktop-friendly spacing |
| **Z-Index** | 40 (below modals) | Above page content, below modals |
| **Button Size** | `56px` diameter (circle) | Medium, easily tappable |
| **Button Style** | Solid neon (#00ff88) with icon | Matches hero CTA buttons |
| **Icon** | Download icon (Lucide `Download`) | Clear affordance |
| **Animation** | Subtle pulse on load, glow on hover | Draws attention without being intrusive |

### Resume Button Behavior

**Default State**:
- Circular button with neon background
- Download icon centered
- Subtle pulse animation (gentle, not distracting)

**On Hover/Click**:
- Expands to show 2 options
- Glow effect intensifies
- Two buttons appear:
  1. **Download** (primary action) — Downloads PDF to user's device
  2. **Open** (secondary action) — Opens PDF in new browser tab

**Interaction Options**:
```
┌─────────────────────┐
│  Resume            │
├─────────────────────┤
│ [Download] [Open]  │
└─────────────────────┘
```

**Fallback** (if download problematic):
- Keep only **Open** button
- Opens resume in new tab
- Same visual, simplified interaction

### Implementation

```tsx
const FloatingResumeButton = () => {
  const [expanded, setExpanded] = useState(false);
  
  const handleDownload = () => {
    // Download PDF logic
    // Falls back to open if not available
  };
  
  const handleOpen = () => {
    window.open('/resume.pdf', '_blank');
  };
  
  return (
    <div className='fixed bottom-6 right-6 z-40'>
      {/* Expanded state - 2 buttons */}
      {expanded && (
        <div className='flex gap-3 mb-3 animate-fade-in'>
          <button
            onClick={handleDownload}
            className='px-4 py-2 bg-[#00ff88] text-black rounded-full font-semibold text-sm hover:glow'
          >
            Download
          </button>
          <button
            onClick={handleOpen}
            className='px-4 py-2 border border-[#00ff88] text-[#00ff88] rounded-full font-semibold text-sm hover:glow'
          >
            Open
          </button>
        </div>
      )}
      
      {/* Main button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className='w-14 h-14 rounded-full bg-[#00ff88] text-black flex items-center justify-center hover:shadow-[0_0_20px_rgba(0,255,136,0.6)] transition-all'
      >
        <Download size={24} />
      </button>
    </div>
  );
};
```

### Responsive Behavior

| Breakpoint | Position | Size | Notes |
|-----------|----------|------|-------|
| **Mobile** | bottom-4 right-4 | 56px | Fits safely in corner |
| **Tablet** | bottom-6 right-6 | 56px | Same, slightly more offset |
| **Desktop** | bottom-6 right-6 | 56px | Consistent across devices |

---

## Contact/Footer Section Spec

### Layout Structure (Top to Bottom)

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│ [GRADIENT BACKGROUND - Neon accent]                │
│                                                     │
│ SECTION TITLE                                       │
│ "Let's Connect"                                     │
│                                                     │
│ SECTION DESCRIPTION (TBD)                           │
│ [Optional - 1 line intro text]                      │
│                                                     │
│ EMAIL LINK                                          │
│ [Email Icon] ssharma_be23@thapar.edu               │
│                                                     │
│ SOCIAL ICONS ROW                                    │
│ [GitHub] [LinkedIn] [LeetCode]                      │
│                                                     │
│ COPYRIGHT / FOOTER TEXT                             │
│ "© 2026. Made with Next.js • Built with passion"  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Section Design

| Property | Value | Notes |
|----------|-------|-------|
| **Background** | Gradient | Neon accent (#00ff88) to darker tone |
| **Gradient Direction** | Top-left to bottom-right | Modern, dynamic feel |
| **Gradient Colors** | `#00ff88 (0%) → #0a0e27 (100%)` | Neon to dark blue |
| **Text Color** | #f5f5f5 (white) on gradient | High contrast |
| **Padding** | `80px top/bottom`, `40px sides` | Large breathing room |
| **Min-Height** | `400px` | Spacious footer presence |
| **Text Alignment** | Centered | Classic footer layout |

### Typography

| Element | Font Size | Weight | Color | Notes |
|---------|-----------|--------|-------|-------|
| **Section Title** | 36-40px | 600 | #f5f5f5 | "Let's Connect" heading |
| **Description** | 16px | 400 | #f5f5f5 | Optional intro text |
| **Email Link** | 18px | 500 | #f5f5f5 | Clickable email, hover underline |
| **Social Labels** | 14px | 400 | #f5f5f5 | Optional text above icons |
| **Copyright** | 12px | 400 | #b0b0b0 | Subtle footer text |

### Contact Elements

#### Email Link
- **Text**: `ssharma_be23@thapar.edu` (or your actual email)
- **Icon**: Mail icon (Lucide `Mail`)
- **Interaction**: Hover → underline + glow
- **Click**: Opens default email client (mailto: link)
- **Spacing**: 24px below description

#### Social Icons Row
- **Icons Used**:
  1. GitHub (Lucide `Github`)
  2. LinkedIn (Lucide `Linkedin`)
  3. LeetCode (Custom SVG or text icon)
- **Icon Size**: 24px
- **Icon Spacing**: 24px gap between icons
- **Colors**: 
  - Default: #f5f5f5
  - Hover: #00ff88 (neon glow)
- **Interaction**: 
  - Hover → scale 1.2 + glow effect
  - Click → opens link in new tab
- **Links** (TBD):
  - GitHub: https://github.com/Saksham-Mist
  - LinkedIn: https://linkedin.com/in/saksham-sharma-mist
  - LeetCode: https://leetcode.com/u/MistakenMaestro

#### Copyright Text
- **Text**: "© 2026. Made with Next.js • Built with passion" (or similar)
- **Position**: Bottom of footer
- **Spacing**: 40px above copyright

### Content Placeholders (TBD)

- [ ] Section description (1 line, optional)
- [ ] Copyright year and text
- [ ] Social profile URLs (verified & final)

### Animations

**On Page Load**:
- Gradient fades in smoothly
- Text elements fade-in with stagger (300ms between)
- Email link fades in at 400ms
- Social icons fade-in at 500ms

**On Hover**:
- Email link: underline appears, glow effect
- Social icons: scale 1.2, color shift to neon (#00ff88)
- All transitions: 0.3s ease-out

**Motion Primitives Use**:
- `In View`: Fade-in as user scrolls to footer
- `Glow Effect`: On email hover + social icon hover
- `Text Shimmer`: Optional on title (subtle)

### Spacing & Layout

| Element | Spacing | Notes |
|---------|---------|-------|
| **Section title to description** | 16px | Tight grouping |
| **Description to email** | 32px | Breathing room |
| **Email to social icons** | 40px | Clear separation |
| **Social icons gap** | 24px | Between each icon |
| **Social icons to copyright** | 48px | Visual separation |
| **Section padding** | 80px top/bottom, 40px sides | Large footer |

### Responsive Behavior

| Breakpoint | Layout | Notes |
|-----------|--------|-------|
| **Mobile** (< 640px) | Stacked, centered | Full-width, tight padding (40px) |
| **Tablet** (640px - 1024px) | Centered, same layout | Readable spacing |
| **Desktop** (> 1024px) | Centered, full layout | Generous spacing (80px) |

### Implementation Notes

**HTML Structure**:
```tsx
<footer className='w-full bg-gradient-to-br from-[#00ff88] to-[#0a0e27] py-20 md:py-32 px-6 md:px-10'>
  <div className='max-w-4xl mx-auto text-center'>
    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
      Let's Connect
    </h2>
    
    {/* Description (optional) */}
    <p className='text-base md:text-lg text-white mb-8'>
      {/* TBD */}
    </p>
    
    {/* Email Link */}
    <a
      href='mailto:ssharma_be23@thapar.edu'
      className='inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-[#00ff88] transition-colors mb-8'
    >
      <Mail size={20} />
      ssharma_be23@thapar.edu
    </a>
    
    {/* Social Icons */}
    <div className='flex justify-center gap-6 mb-12'>
      <a href='https://github.com/Saksham-Mist' target='_blank' rel='noopener noreferrer'>
        <Github size={24} className='text-white hover:text-[#00ff88] transition-colors' />
      </a>
      <a href='https://linkedin.com/in/saksham-sharma-mist' target='_blank' rel='noopener noreferrer'>
        <Linkedin size={24} className='text-white hover:text-[#00ff88] transition-colors' />
      </a>
      <a href='https://leetcode.com/u/MistakenMaestro' target='_blank' rel='noopener noreferrer'>
        <Code size={24} className='text-white hover:text-[#00ff88] transition-colors' />
      </a>
    </div>
    
    {/* Copyright */}
    <p className='text-sm text-gray-400'>
      © 2026. Made with Next.js • Built with passion
    </p>
  </div>
</footer>
```

**Gradient Note**: The gradient flows from neon green (top-left) to dark blue (bottom-right), creating a vibrant footer that contrasts with the rest of the dark page.

---

## Complete Page Structure Summary

```
1. NAVBAR (sticky, z-50)
2. HERO SECTION
   ├── Background video + blur overlay
   ├── Metadata row
   ├── Main title (shimmer)
   ├── Description
   ├── Tech slider (infinite scroll)
   └── CTA buttons
3. PROJECTS SECTION
   ├── Title + description
   └── Carousel (InfiniteSlider + ProgressiveBlur)
4. SKILLS SECTION
   ├── Title
   └── Skill gauges (InfiniteSlider + ProgressiveBlur)
5. ABOUT SECTION
   ├── Title
   └── Bio text card
6. CONTACT/FOOTER SECTION
   ├── Title
   ├── Email link
   ├── Social icons
   └── Copyright
7. FLOATING RESUME BUTTON (fixed, bottom-right, z-40)
```

---

## GitHub Student Developer Pack - Free Domain Claim

### What You Get

From GitHub Student Developer Pack:
- **Free domain** (1 year, then renew for free if still student)
- Options: `.me`, `.xyz`, `.dev`, `.online`, `.space`, `.tech`, and more
- Free for all 4 years of college (if you maintain student status)
- Includes free SSL certificate

### Step 1: Verify Your GitHub Student Status

1. Go to **github.com/settings/profile**
2. Look for "Pro" badge (you should have it if verified student)
3. If not verified: Go to **education.github.com** → "Get benefits"
4. Click "Get student benefits"
5. Upload school email or student ID
6. Wait for approval (usually 24-48 hours)

### Step 2: Access GitHub Student Developer Pack

1. Go to **education.github.com/pack**
2. Sign in with GitHub account
3. Scroll down to find **Namecheap** offer
4. Click "Get access" on Namecheap card
5. Click "Claim offer" or "Redeem" button

### Step 3: Claim Your Free Domain

1. You'll be redirected to **Namecheap** (Namecheap partner page)
2. Sign in or create Namecheap account
3. Search for domain name (e.g., `saksham.dev`, `saksharma.me`, etc.)
4. Click "Claim"
5. Follow Namecheap's activation process (usually instant)
6. Domain is now yours for 1 year free!

### Step 4: Renew Later (Free if Student)

When domain expires (1 year later):
- Log into Namecheap
- Go to "My Domains"
- Renew using GitHub Student Pack again (free)
- If you're no longer student, renew normally (~$10-15/year)

### Domain Name Ideas for Your Portfolio

**Good options** (short, memorable, professional):
- `saksham.dev` — Tech-focused, professional
- `saksham.me` — Personal, brandable
- `saksharma.xyz` — Full name, modern TLD
- `saksham.online` — Descriptive, modern
- `saksham.tech` — Tech-specific, good for SDE

**Avoid**:
- Too long (hard to type, remember)
- Numbers (looks spammy)
- Hyphens (confusing verbally)
- Misspellings (looks unprofessional)

### Time Required

Total time to claim domain: **5-10 minutes**

1. Verify student status (if needed): 24-48 hours
2. Access pack + claim domain: 5 minutes
3. Domain active: Immediate or within 1 hour

### Summary

```
1. Go to education.github.com/pack
2. Find Namecheap offer
3. Click "Get access"
4. Search for your domain name
5. Click "Claim"
6. Done! Domain is yours free for 1 year
```

**Do this BEFORE sending spec to AI** (so you have domain name ready for final setup)

---

### GitHub Student Developer Pack Domain

**You have access to**:
- Free domain from Namecheap (via GitHub Student Developer Pack)
- Free SSL certificate (Let's Encrypt, included with most hosting)
- Optional: GitHub Pages or Vercel (free tier available)

### Deployment Workflow

**Phase 1: Local Development**
1. Build Next.js project locally with `npm run dev`
2. Test on mobile, tablet, desktop
3. Verify all animations, colors, video loading
4. Test responsiveness with DevTools
5. Performance check (Lighthouse audit)

**Phase 2: Build & Deploy**
1. Run `npm run build` to create optimized production build
2. Run `npm run start` to test production build locally
3. Push to GitHub repository (public or private, your choice)

**Phase 3: Choose Hosting**

**Option A: Vercel (Recommended for Next.js)**
- Free tier: 1 deployment per branch
- Auto-deploys on git push
- Custom domain setup: 5 minutes
- Environment variables: Easy setup
- Performance: Optimized for Next.js

**Steps**:
1. Go to vercel.com
2. Sign in with GitHub account
3. Import your portfolio repository
4. Connect your Namecheap domain (from Student Pack)
5. Add domain in Vercel settings
6. DNS configuration: Vercel provides nameservers
7. Point Namecheap domain to Vercel nameservers
8. Deploy!

**Option B: GitHub Pages**
- Free tier: Unlimited deployments
- Works with GitHub Actions
- Limited customization
- Requires building to `/out` directory

**Steps**:
1. Enable GitHub Pages in repo settings
2. Set source: GitHub Actions
3. Create `.github/workflows/nextjs.yml` (GitHub provides template)
4. Connect domain in repo settings
5. Deploy on push to main branch

**Option C: Railway/Other Hosting**
- Free tier: Limited
- Can host video files on Railway or CDN
- May need to upgrade to paid after free tier

### Domain Setup (Namecheap via Student Pack)

**After receiving domain from Student Pack**:

1. **Log into Namecheap**:
   - Email provided by GitHub Student Pack
   - Set up account + claim free domain (`.me`, `.xyz`, `.online`, etc.)

2. **Point Domain to Hosting** (Vercel example):
   - Get nameservers from Vercel: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`, etc.
   - In Namecheap: Manage domain → Nameservers
   - Set custom nameservers to Vercel's nameservers
   - Wait 24-48 hours for DNS propagation

3. **Add Domain in Vercel**:
   - Go to Vercel dashboard
   - Project settings → Domains
   - Add your domain from Student Pack
   - Vercel verifies DNS
   - SSL certificate auto-generates (Let's Encrypt)

4. **Test Domain**:
   - After DNS propagates, visit your domain
   - Check HTTPS works (browser shows green padlock)
   - Test on mobile

### Environment Variables (if using backend/contact form)

**Create `.env.local`** (for local development):
```
NEXT_PUBLIC_DOMAIN=yourdomain.com
NEXT_PUBLIC_RESUME_URL=your-resume-pdf-url
# Add any other public env vars here
```

**In Vercel dashboard**:
- Project settings → Environment variables
- Add same variables for production

### Video & Media Hosting (Complete Guide)

**Recommended Approach**: Store in `/public` folder (Vercel CDN included free)

#### Step 1: Optimize Video Before Adding to Project

**Why optimize?**: Reduces file size by 50-70%, faster loading, no bandwidth issues

**Using FFmpeg** (command line):

Install FFmpeg:
```bash
# macOS (with Homebrew)
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get install ffmpeg

# Windows (download from ffmpeg.org or use chocolatey)
choco install ffmpeg
```

Optimize your video:
```bash
# Basic optimization (recommended)
ffmpeg -i input.mp4 -crf 28 -preset fast -vf "scale=1280:-1" output.mp4

# Parameters:
# -crf 28: Quality (0-51, default 23). Higher = smaller file, lower quality
#          28 is good balance for web (almost no visible quality loss)
# -preset fast: Speed of compression (ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow)
#               'fast' is good balance between speed and compression
# -vf "scale=1280:-1": Resize to 1280px width (maintains aspect ratio)
#                      Matches your max hero viewport width
# output.mp4: Save as new file (doesn't overwrite original)
```

**Expected results**:
- Original: 50-100MB → Optimized: 10-20MB
- Quality: Looks identical to human eye
- Load time: Reduces from 10s to 1-2s

**Example**: If your hero video is 80MB, optimized version is ~15MB

#### Step 2: Add Video to Project

**File Structure**:
```
portfolio/
├── public/
│   ├── videos/
│   │   └── hero-bg.mp4          ← Put optimized video here
│   └── images/
│       └── (other images)
├── src/
│   ├── components/
│   ├── pages/
│   └── ...
```

**Create folder** (if doesn't exist):
```bash
mkdir -p public/videos
```

**Move optimized video**:
```bash
# Copy your optimized video to project
cp ~/Downloads/output.mp4 public/videos/hero-bg.mp4
```

#### Step 3: Reference Video in Hero Component

In your Hero component (`src/components/Hero.tsx`):

```tsx
// Reference the video from /public folder
const heroVideoUrl = '/videos/hero-bg.mp4';

// Use in video element
<video
  src={heroVideoUrl}
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover"
/>
```

**Key attributes**:
- `autoPlay`: Start playing automatically
- `muted`: Required for autoplay in browsers
- `loop`: Restart when finished
- `playsInline`: Play inline on mobile (not fullscreen)
- `object-cover`: Fill entire container

#### Step 4: Test Video Loading

**Local testing** (with `npm run dev`):
1. Open `http://localhost:3000`
2. Check DevTools → Network tab
3. Video should load in < 1s
4. Check file size (should be 10-20MB optimized)

**Production testing** (after Vercel deploy):
1. Open your Vercel deployment URL
2. Check DevTools → Network tab
3. Vercel CDN automatically serves video
4. Should load in < 500ms from Vercel CDN

#### Step 5: Vercel CDN Automatic Optimization

**Vercel automatically**:
- ✅ Serves video from edge nodes (fast worldwide delivery)
- ✅ Caches video after first load
- ✅ Compresses on-the-fly if needed
- ✅ No extra configuration needed
- ✅ Free tier includes bandwidth

**Your video is instantly CDN-delivered** once deployed to Vercel.

---

### Image Optimization (If Adding Screenshots)

If you add any images to portfolio (project screenshots):

Optimize with ImageMagick:
```bash
# Resize and compress image
convert original.jpg -resize 800x600 -quality 85 optimized.jpg
```

Store in `/public/images/` folder, reference in components.

---

### Bandwidth Monitoring

**Vercel free tier**: 
- 100GB bandwidth/month included
- Animated background (pure CSS) = no bandwidth cost
- Images/content = minimal bandwidth
- Plenty of headroom on free tier

**Check usage**:
- Vercel dashboard → Analytics
- Monitor bandwidth monthly
- Free tier is more than enough for portfolio

---

### Summary: Animated Entrance Background Setup

```
1. Hero background uses pure CSS animated gradient
2. Gradient shifts from #0a0e27 to #1a1a2e over 18 seconds
3. Animation loops continuously (ease-in-out timing)
4. No video files, no external dependencies
5. Zero bandwidth cost
6. Deploy to Vercel (instant, no CDN configuration)
7. Done! Animated background loads instantly worldwide
```

**Benefits**:
- ✅ No video file storage needed
- ✅ Instant loading (pure CSS)
- ✅ Zero bandwidth cost
- ✅ Smooth, professional animation
- ✅ Responsive across all devices
- ✅ No performance impact

### Post-Deployment Checklist

- [ ] Domain resolves to your site (after DNS setup)
- [ ] HTTPS works (green padlock in browser)
- [ ] Hero section animated background loads and animates smoothly
- [ ] All animations run smoothly
- [ ] Mobile responsive works on real devices
- [ ] No console errors
- [ ] Lighthouse score > 80 (performance)
- [ ] Social links work (GitHub, LinkedIn, LeetCode)
- [ ] Resume button works (download or open)
- [ ] Contact form works (if implemented)
- [ ] DNS fully propagated (24-48 hours)

### Performance Tips

1. **Optimize video**:
   - Use .webm format for smaller file size
   - Test loading time (< 3s ideal)
   - Consider lazy loading if above fold

2. **Image optimization**:
   - Next.js Image component auto-optimizes
   - Use WebP format where possible
   - Resize before serving

3. **Code splitting**:
   - Next.js does this automatically
   - Keep bundle size < 500KB

4. **Vercel Analytics** (optional):
   - Free real user monitoring
   - Track performance, errors, user interaction

### SSL Certificate

- **Vercel**: Auto-generates (Let's Encrypt)
- **GitHub Pages**: Auto-generates via Let's Encrypt
- **Namecheap**: Offers free SSL (1 year), or use Let's Encrypt via hosting provider

**Your domain will have HTTPS automatically** once DNS points to hosting.

---

## Deployment Timeline (Detailed)

### Week 1-2: Local Development & Build

**Week 1**:
- Day 1-2: Set up Next.js project locally
  - `npx create-next-app@latest portfolio --typescript`
  - Configure Tailwind CSS
  - Set up folder structure (`/components`, `/pages`, `/public`)
  - Import fonts (Inter from Google Fonts)

- Day 3-5: Build Navbar + Hero Section
  - Create Navbar component with desktop/mobile menu
  - Integrate video background (or use placeholder)
  - Implement blur-fade-up animations
  - Test responsive breakpoints

- Day 6-7: Build remaining components
  - Projects carousel (InfiniteSlider + ProgressiveBlur)
  - Skills section (circular gauges auto-scroll)
  - About section (text card)
  - Contact/Footer section (gradient background)

**Week 2**:
- Day 1-3: Finalize animations
  - Add stagger timing (0ms → 900ms)
  - Implement liquid glass effects on buttons
  - Test glow effects on hover
  - Polish mobile menu animations

- Day 4-5: Add content & media
  - Fill in bio text (About section)
  - Add project details (3 projects)
  - Upload/optimize hero video
  - Add tech stack icons

- Day 6-7: Integration testing
  - Test all components together
  - Check animations don't conflict
  - Test on different screen sizes
  - Mobile testing (real devices if possible)

**Deliverable by end of Week 2**: Fully functional local site with all features working

---

### Week 3: Testing & Optimization

**Day 1-2: Performance Testing**:
- Run Lighthouse audit (target: > 80 performance score)
- Optimize images (use Next.js Image component)
- Minify CSS/JS
- Check bundle size (target: < 500KB)
- Test video loading time (target: < 3s)

**Day 3-4: Cross-browser Testing**:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Test animations on lower-end devices
- Check video playback compatibility

**Day 5-6: Accessibility & SEO**:
- Add meta tags (title, description, OG images)
- Test keyboard navigation
- Check color contrast (WCAG AA minimum)
- Add alt text to images

**Day 7: Bug Fixes & Polish**:
- Fix any remaining issues
- Final content review
- Spelling/grammar check
- Color accuracy check against spec

**Deliverable by end of Week 3**: Production-ready, optimized local build

---

### Week 3-4: Deployment Setup (Overlaps with Week 3)

**Day 1-2 (Mid-Week 3)**:
- Create GitHub repository (public)
- Push local code to GitHub
- Set up `.env.local` and `.gitignore`
- Create `README.md` with setup instructions

**Day 3-4 (End Week 3 / Start Week 4)**:
- Sign up for Vercel (free tier)
- Connect Vercel to GitHub account
- Import portfolio repository
- Configure build settings

**Day 5-6 (Week 4)**:
- First deployment to Vercel (auto-deploys on git push)
- Test production build works
- Verify all features work on Vercel deployment
- Check performance metrics

**Day 7 (Week 4)**:
- Run final production testing
- Lighthouse audit on Vercel build
- Mobile testing on production URL

**Deliverable**: Site running live on Vercel at temp URL (`portfolio.vercel.app`)

---

### Week 4-5: Domain Setup & DNS Propagation

**Week 4 (Day 1-3)**:
- Claim free domain from Namecheap (via GitHub Student Pack)
  - Choose domain extension (`.me`, `.xyz`, `.dev`, `.online`, etc.)
  - Activate domain (usually instant or 24h)
  - Set up Namecheap account

- Add domain to Vercel:
  - Project settings → Domains
  - Enter your domain name
  - Vercel generates nameservers

**Week 4 (Day 4-7) + Week 5 (Day 1-2): DNS Propagation**
- Point Namecheap to Vercel nameservers (5 min setup)
- Wait for DNS propagation: **24-48 hours**
  - Check status with tools like `nslookup` or `whois`
  - Vercel dashboard shows "Valid" once propagated
  - Site becomes accessible at your custom domain

**Week 5 (Day 3-5): Final Verification**
- Domain resolves correctly
- HTTPS works (green padlock)
- All pages load correctly
- Video plays
- Buttons work
- Mobile responsive verified
- Social links work

**Deliverable**: Site live at your custom domain with HTTPS ✅

---

### Timeline Breakdown

```
WEEK 1-2:  Build all features locally (14 days)
WEEK 3:    Testing, optimization, bug fixes (7 days)
WEEK 4:    Deploy to Vercel, setup domain (7 days)
           ↓
           DNS propagation (24-48 hours, overlaps)
           ↓
WEEK 5:    Final verification & tweaks (3-5 days)

TOTAL: 4-5 weeks from start to live domain
```

---

### Can You Speed This Up?

**Yes! Parallel work reduces timeline**:

- **Weeks 1-2 + Week 3** can overlap:
  - Build components (Week 1-2)
  - Test while building (don't wait until Week 3)
  - Fix bugs immediately
  - → Reduces to 2-3 weeks total build

- **Weeks 3 + Week 4** can overlap:
  - Deploy to Vercel while still building (test in production)
  - Set up domain while testing
  - → Reduces to 1-2 weeks deployment

- **Aggressive Timeline** (3-4 weeks total):
  - Week 1: Build + deploy (no local testing phase)
  - Week 2: Testing on Vercel + optimization
  - Week 3: Domain setup + DNS propagation
  - Week 4: Final tweaks + go live
  - ✅ Live in 3-4 weeks instead of 4-5

---

### Realistic Timeline (Most Likely)

**4 weeks** (28 days):
- Week 1: Build core features
- Week 2: Complete all sections + optimization
- Week 3: Deploy + domain setup + DNS (starts propagating)
- Week 4: DNS completes, final verification, go live

**Why 4 weeks instead of 5?**:
- DNS propagation happens in parallel (doesn't add time)
- You can test on Vercel while DNS is propagating
- No separate "waiting" week needed

---

### Phase 1: Documentation (CURRENT)
- ✅ Lock design system (colors, typography, spacing)
- ✅ Define component specs
- ✅ Document animations
- ✅ List tech stack

### Phase 2: Gather References (NEXT)
**Before building, collect**:
- Hero section reference screenshots
- Project card layout preferences
- Skills section design
- Contact/footer section design
- Color scheme validation
- Font pairing examples

### Phase 3: Build Components (AFTER PHASE 2)
**Once all references locked in**:
1. Set up Next.js project
2. Configure Tailwind + TypeScript
3. Build Navbar component
4. Build Hero section
5. Build Tech slider
6. Add motion-primitives animations
7. Test responsive breakpoints

### Phase 4: Add Remaining Sections (AFTER PHASE 3)
- Projects showcase
- Skills section
- Contact/footer
- Full page integration

### Phase 5: Deploy (FINAL)
- Deploy to Vercel
- Set up custom domain (optional)
- Add analytics (optional)

---

## Questions to Address Later

- [ ] Should navbar have a contact button or link to #contact section?
- [ ] Do we want a project carousel or grid layout?
- [ ] Should tech slider pause on mobile?
- [ ] What background video to use? (Need to film/source)
- [ ] Do we need a blog section?
- [ ] Should there be a dark/light mode toggle?
- [ ] Email service for contact form (Resend, SendGrid, etc.)?

---

## File Structure (Planned)

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── TechSlider.tsx
│   │   ├── CTAButton.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── pages/
│   │   ├── index.tsx (main page)
│   │   └── api/ (optional, for contact form)
│   ├── styles/
│   │   └── globals.css
│   └── lib/
│       └── utils.ts
├── public/
│   ├── videos/
│   │   └── hero-bg.mp4
│   └── icons/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Version History

| Date | Change | Status |
|------|--------|--------|
| Aug 2, 2026 | Initial spec + design system | ✅ COMPLETE |
| [TBD] | Reference gathering | ⏳ PENDING |
| [TBD] | Component build | ⏳ PENDING |
| [TBD] | Full integration | ⏳ PENDING |
| [TBD] | Deploy to Vercel | ⏳ PENDING |

---

## Notes for Future Me

- **Design-first philosophy**: Visual appeal comes before copy. Users decide if they like your portfolio in the first 3 seconds.
- **No placeholder BS**: Every text element should be real, meaningful copy. No "built with Next.js" fluff.
- **Motion should serve purpose**: Animations draw attention to important elements (title shimmer, button glow) — not just for aesthetics.
- **Responsive is non-negotiable**: Portfolio must look perfect on mobile, tablet, and desktop.
- **Performance matters**: Video background should be optimized. Animations should not cause jank.

---

**Last Updated**: August 2, 2026  
**Status**: DESIGN PHASE — READY FOR REFERENCE GATHERING
