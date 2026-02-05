# KRYPTO PENGUS - Website Mockups for Approval

**Created:** 2026-02-05  
**Status:** Awaiting Approval ⚠️

---

## Design Philosophy

**Inspiration:** CryptoPunks (clean, minimal, iconic) + Azuki (modern, smooth, quality)  
**Mood:** Serious/aspirational narrative through approachable/modern design  
**Approach:** Clean, spacious layouts - NFT art is the hero

---

## 1. HERO SECTION

### Desktop Layout (1440px+)

```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO: Krypto Pengus]    Home Story Collection Mint    [🦊] │ ← Fixed header
├─────────────────────────────────────────────────────────────┤
│                                                               │
│         ╔═══════════════════════════════════════╗           │
│         ║                                        ║           │
│         ║    [Animated Penguin Character]       ║           │
│         ║    Simple pixel mascot, subtle        ║           │
│         ║    animation (waddle/breathe)         ║           │
│         ║                                        ║           │
│         ╚═══════════════════════════════════════╝           │
│                                                               │
│    🏔️ ← Parallax Layer 4 (Closest mountains, darkest)       │
│   🏔️🏔️ ← Parallax Layer 3 (Mid mountains)                   │
│  🏔️🏔️🏔️ ← Parallax Layer 2 (Distant mountains)              │
│ ═══════════════════════════════════════════ ← Layer 1 (Horizon) │
│                                                               │
│              THE JOURNEY BEGINS                               │
│                                                               │
│         One Penguin. 3,333 Stories.                          │
│         Never Give Up. Never Stop Marching.                  │
│                                                               │
│     [  MINT NOW  ]      [ JOIN DISCORD ]                     │
│    (Orange #FF8533)    (Turquoise outline)                   │
│                                                               │
│                     Scroll to explore ↓                       │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Background:** Gradient from `#5DD9C1` (top) to `#2C5F75` (bottom)
- **Penguin Character:** Center-positioned, 400px width, subtle idle animation (2s loop)
- **Mountains:** 4 parallax layers, geometric/minimalist shapes, varying opacity (20%, 40%, 60%, 80%)
- **Typography:**
  - Headline "THE JOURNEY BEGINS": 72px, bold, uppercase, `#FFFFFF`, letter-spacing: 0.1em
  - Subtext: 24px, regular, `#FFFFFF`, opacity: 0.9
- **CTAs:** 
  - Primary: `#FF8533` background, `#000000` 3px border, bold uppercase 16px
  - Secondary: Transparent bg, `#5DD9C1` 2px border
- **Scroll Indicator:** Animated bounce (CSS only)

### Mobile Layout (375px)

```
┌──────────────────────┐
│ [☰] Krypto Pengus [🦊]│ ← Hamburger menu
├──────────────────────┤
│                      │
│   ╔════════════╗    │
│   ║  [Penguin] ║    │
│   ║  Character ║    │
│   ╚════════════╝    │
│                      │
│    🏔️                │
│   🏔️🏔️              │
│  🏔️🏔️🏔️            │
│ ═══════════════      │
│                      │
│   THE JOURNEY        │
│     BEGINS           │
│                      │
│  One Penguin.        │
│  3,333 Stories.      │
│                      │
│  Never Give Up.      │
│                      │
│  [ MINT NOW ]        │
│  [ JOIN DISCORD ]    │
│                      │
│      Scroll ↓        │
└──────────────────────┘
```

**Mobile Specifications:**
- Penguin: 240px width
- Headline: 36px
- Subtext: 16px
- CTAs: Full-width buttons, stacked
- Parallax: Simplified to 3 layers (performance)

---

## 2. STORY SECTION

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                      THE MARCH                                │
│                                                               │
│  ┌─────────────────────┐                                     │
│  │                     │   In the frozen wilderness,          │
│  │  [Penguin walking   │   one penguin stands alone.         │
│  │   toward mountains] │                                      │
│  │   Illustration/     │   Not because it's lost.            │
│  │   animated SVG      │   Not because it's weak.            │
│  │                     │                                      │
│  └─────────────────────┘   But because it chose             │
│                             the harder path.                 │
│                                                               │
│                             While others huddle for warmth,  │
│                             it marches toward the mountain.  │
│                                                               │
│                             3,333 penguins.                  │
│                             3,333 journeys of persistence.   │
│                             One shared truth:                │
│                                                               │
│                       Never. Give. Up.                       │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Background:** `#0A0A0A` (dark) with subtle texture
- **Section Title "THE MARCH":** 48px, bold, `#5DD9C1`, centered
- **Illustration:** Left-aligned, 500px width, fade-in on scroll
- **Body Text:** 20px, `#FFFFFF`, opacity: 0.8, line-height: 1.8
- **Emphasis "Never. Give. Up.":** 32px, bold, `#FF8533`, fade-in with delay
- **Scroll Animation:** Text fades in from bottom (20px translate) as user scrolls

### Mobile Layout

```
┌──────────────────────┐
│                      │
│    THE MARCH         │
│                      │
│  ┌────────────────┐ │
│  │   [Penguin]    │ │
│  │   Illustration │ │
│  └────────────────┘ │
│                      │
│  In the frozen       │
│  wilderness, one     │
│  penguin stands      │
│  alone.              │
│                      │
│  Not because it's    │
│  lost. Not because   │
│  it's weak.          │
│                      │
│  But because it      │
│  chose the harder    │
│  path.               │
│                      │
│  3,333 penguins.     │
│  3,333 journeys.     │
│                      │
│  Never. Give. Up.    │
│                      │
└──────────────────────┘
```

**Mobile Specifications:**
- Illustration: Full-width, 280px height
- Text: 16px, centered
- Emphasis: 24px

---

## 3. COLLECTION GALLERY

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                    THE COLLECTION                             │
│                                                               │
│            3,333 unique pixel penguins on Sui                │
│                                                               │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐    │
│  │ NFT │  │ NFT │  │ NFT │  │ NFT │  │ NFT │  │ NFT │    │
│  │  1  │  │  2  │  │  3  │  │  4  │  │  5  │  │  6  │    │
│  │     │  │     │  │     │  │     │  │     │  │     │    │
│  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘    │
│  ↑ Hover: Subtle pixel glitch effect                        │
│                                                               │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  (+ 4 more rows)      │
│  │ NFT │  │ NFT │  │ NFT │  │ NFT │                        │
│  │  7  │  │  8  │  │  9  │  │ 10  │                        │
│  └─────┘  └─────┘  └─────┘  └─────┘                        │
│                                                               │
│              [ EXPLORE FULL COLLECTION ]                     │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Background:** `#0A0A0A`
- **Title:** 48px, `#5DD9C1`, bold
- **Subtitle:** 18px, `#FFFFFF`, opacity: 0.7
- **Grid:** 6 columns, 20px gap
- **NFT Cards:**
  - Size: 200x200px
  - Border: `2px solid #000000`
  - Background: `rgba(93, 217, 193, 0.05)`
  - Hover: 
    - Transform: `translateY(-4px)`
    - Pixel glitch: Horizontal offset 2px, brief color shift (100ms)
    - Shadow: `0 8px 16px rgba(93, 217, 193, 0.2)`
- **Scroll Animation:** Cards fade in with stagger (50ms delay between each)

### Mobile Layout

```
┌──────────────────────┐
│  THE COLLECTION      │
│                      │
│  3,333 unique pixel  │
│  penguins on Sui     │
│                      │
│  ┌────┐  ┌────┐    │
│  │NFT │  │NFT │    │
│  │ 1  │  │ 2  │    │
│  └────┘  └────┘    │
│                      │
│  ┌────┐  ┌────┐    │
│  │NFT │  │NFT │    │
│  │ 3  │  │ 4  │    │
│  └────┘  └────┘    │
│                      │
│  (+ more rows)       │
│                      │
│  [ EXPLORE FULL ]    │
│                      │
└──────────────────────┘
```

**Mobile Specifications:**
- Grid: 2 columns, 12px gap
- Cards: 160x160px

---

## 4. MINT INTERFACE

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                        MINT YOUR PENGUIN                      │
│                                                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                                                         │  │
│  │  ╔════════════════════════════════════════════════╗   │  │
│  │  ║                                                 ║   │  │
│  │  ║         CURRENT TIER: WHITELIST                ║   │  │
│  │  ║         Price: 10 SUI per NFT                  ║   │  │
│  │  ║         Remaining: 847 / 1,000                 ║   │  │
│  │  ║                                                 ║   │  │
│  │  ╚════════════════════════════════════════════════╝   │  │
│  │                                                         │  │
│  │  ┌─────────────────────────────────────────────┐      │  │
│  │  │  🦊 Wallet Connected                         │      │  │
│  │  │  0x1234...5678                               │      │  │
│  │  └─────────────────────────────────────────────┘      │  │
│  │                                                         │  │
│  │  Quantity:                                              │  │
│  │  ┌───┐                                                  │  │
│  │  │ - │  [  2  ]  │ + │    (Max: 3 per wallet)         │  │
│  │  └───┘                                                  │  │
│  │                                                         │  │
│  │  Total: 20 SUI                                          │  │
│  │                                                         │  │
│  │  ┌─────────────────────────────────────────────┐      │  │
│  │  │         [ MINT NOW ]                         │      │  │
│  │  │     (Orange #FF8533, full-width)             │      │  │
│  │  └─────────────────────────────────────────────┘      │  │
│  │                                                         │  │
│  │  ✓ Instant reveal                                       │  │
│  │  ✓ Secured on Sui Network                              │  │
│  │  ✓ Stored on Walrus Protocol                           │  │
│  │                                                         │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                               │
│            MINTED: 2,153 / 3,333                             │
│            [████████░░░░░░░░░] 64.7%                        │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Background:** Dark (`#0A0A0A`) with centered mint card
- **Mint Card:**
  - Width: 500px max
  - Background: `rgba(93, 217, 193, 0.05)`
  - Border: `2px solid #5DD9C1`
  - Border-radius: `8px`
  - Padding: 48px
- **Tier Display:**
  - Background: `#FF8533` with 10% opacity
  - Border: `2px solid #FF8533`
  - Text: 20px bold, `#FFFFFF`
- **Wallet Button:**
  - Connected state: `#5DD9C1` background
  - Disconnected: Outlined
- **Quantity Selector:**
  - Buttons: 40x40px, `#5DD9C1` border
  - Display: 60px width, 24px bold
- **Mint Button:**
  - Full-width, 56px height
  - `#FF8533` background, `#000000` 3px border
  - Hover: Lift 2px, glow effect
- **Progress Bar:**
  - Height: 24px
  - Filled: `#5DD9C1`
  - Empty: `rgba(93, 217, 193, 0.1)`

### Mobile Layout

```
┌──────────────────────┐
│ MINT YOUR PENGUIN    │
│                      │
│ ┌──────────────────┐│
│ │ TIER: WHITELIST  ││
│ │ Price: 10 SUI    ││
│ │ Remaining: 847   ││
│ └──────────────────┘│
│                      │
│ ┌──────────────────┐│
│ │ 🦊 Connected     ││
│ │ 0x12...78        ││
│ └──────────────────┘│
│                      │
│ Quantity:            │
│ [ - ] [ 2 ] [ + ]   │
│ (Max: 3)             │
│                      │
│ Total: 20 SUI        │
│                      │
│ ┌──────────────────┐│
│ │   MINT NOW       ││
│ └──────────────────┘│
│                      │
│ ✓ Instant reveal     │
│ ✓ Sui Network        │
│ ✓ Walrus Storage     │
│                      │
│ MINTED: 2,153/3,333  │
│ [████░░░░] 64.7%    │
└──────────────────────┘
```

---

## 5. COMMUNITY/SOCIAL SECTION

### Desktop Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│                    JOIN THE MARCH                             │
│                                                               │
│          Connect with the community across platforms         │
│                                                               │
│                                                               │
│    ┌─────────┐      ┌─────────┐      ┌─────────┐           │
│    │    𝕏    │      │ Discord │      │Instagram│           │
│    │         │      │         │      │         │           │
│    │@Krypto  │      │  Join   │      │ Follow  │           │
│    │ Pengus  │      │ Server  │      │   Us    │           │
│    └─────────┘      └─────────┘      └─────────┘           │
│    ↑ Custom pixel-art icons, hover: subtle lift + glow      │
│                                                               │
│                                                               │
│                    Newsletter (Optional)                      │
│          [ Enter your email... ] [ SUBSCRIBE ]               │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Background:** `#0A0A0A`
- **Title:** 48px, `#5DD9C1`, bold
- **Subtitle:** 18px, `#FFFFFF`, opacity: 0.7
- **Social Cards:**
  - Size: 200x200px
  - Background: `rgba(93, 217, 193, 0.05)`
  - Border: `2px solid #5DD9C1`
  - Icon: Custom pixel-art style, 64x64px
  - Hover: `translateY(-4px)`, glow `0 8px 24px rgba(93, 217, 193, 0.3)`
- **Newsletter:**
  - Input: `rgba(255,255,255,0.1)` background, `#5DD9C1` border
  - Button: `#FF8533` background

---

## NAVIGATION (Fixed Header)

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] Krypto Pengus    Home Story Collection Mint    [🦊]  │
│                           ↑ Anchor links                      │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- **Background:** `rgba(10, 10, 10, 0.95)` with backdrop-blur
- **Border-bottom:** `1px solid rgba(93, 217, 193, 0.2)`
- **Logo:** 24px, bold, `#FFFFFF`
- **Links:** 16px, `#FFFFFF`, opacity: 0.8, hover: opacity 1.0, underline with `#5DD9C1`
- **Wallet Button:** Same as mint interface
- **Height:** 64px
- **Sticky:** `position: fixed; top: 0; z-index: 1000`

---

## COLOR USAGE SUMMARY

- **Primary Background (Hero):** `#5DD9C1` → `#2C5F75` gradient
- **Dark Sections:** `#0A0A0A`
- **Primary CTAs:** `#FF8533` (orange)
- **Secondary CTAs:** `#5DD9C1` (turquoise)
- **Text:** `#FFFFFF` with varying opacity
- **Borders/Outlines:** `#000000` (black, 2-3px)
- **Card Backgrounds:** `rgba(93, 217, 193, 0.05-0.1)`

---

## ANIMATION DETAILS (Pure CSS)

### Parallax Mountains
```css
.mountain-layer-1 { transform: translateY(scrollY * 0.2); }
.mountain-layer-2 { transform: translateY(scrollY * 0.5); }
.mountain-layer-3 { transform: translateY(scrollY * 0.8); }
.mountain-layer-4 { transform: translateY(scrollY * 1.0); }
```

### Pixel Glitch Hover
```css
.nft-card:hover {
  animation: pixel-glitch 100ms ease-in-out;
}

@keyframes pixel-glitch {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); filter: hue-rotate(5deg); }
  75% { transform: translateX(2px); filter: hue-rotate(-5deg); }
}
```

### Scroll Fade-In
```css
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 600ms ease-out, transform 600ms ease-out;
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## RESPONSIVE BREAKPOINTS

- **Mobile:** 0-767px (single column, simplified)
- **Tablet:** 768-1023px (2-3 columns)
- **Desktop:** 1024-1439px (4-6 columns)
- **Large Desktop:** 1440px+ (max-width: 1440px centered)

---

## NEXT STEPS

⚠️ **AWAITING APPROVAL**

Once approved, I will:
1. Implement these designs in Next.js + Tailwind CSS
2. Build all animations with pure CSS
3. Ensure mobile-first responsive design
4. Add accessibility features (WCAG 2.1 AA)
5. Optimize for performance (<2s load, 60fps animations)

**Please review and approve these mockups before I proceed with implementation.**

**Note:** I'm ready to incorporate the 10 actual NFT penguin images once you provide them. Currently using placeholders in the descriptions above.
