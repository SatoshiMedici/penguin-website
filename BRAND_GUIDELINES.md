# KRYPTO PENGUS - BRAND GUIDELINES

## Brand Identity
**Name:** Krypto Pengus  
**Narrative:** The solitary penguin journeying toward mountains - symbolizes persistence, determination, never giving up

---

## Typography System

### "Playful Geometric" Style

**Characteristics:**
- Rounded pixel-inspired letterforms with refined edges
- **NOT** purely 8-bit retro, but pixel-influenced modern design
- Friendly but contemporary aesthetic
- Lowercase primary with uppercase for emphasis

**Weight System:**
- **Regular:** Body text
- **Bold:** Headlines

**Letter Spacing:**
- Generous spacing (inspired by CryptoPunks but softer/rounder)

**Custom Details:**
- Pixel-stepped curves
- Geometric terminals

**Inspiration:**
CryptoPunks typography meets contemporary geometric sans-serif

**Recommended Font Families:**
- Primary: `'Press Start 2P', 'Courier New', monospace` (for pixel feel)
- Alternative: `'Space Grotesk', 'Inter', sans-serif` (for modern geometric)
- Body: `system-ui, -apple-system, sans-serif` (for readability)

---

## Color Palette

### Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Turquoise/Aqua** | `#5DD9C1` | Main background color, primary accents |
| **Deep Black** | `#000000` | Outlines, high contrast elements |
| **Pure White** | `#FFFFFF` | Penguin bodies, text, highlights |
| **Orange Accent** | `#FF8533` | Signature penguin beaks, CTAs |
| **Arctic Blue (Light)** | `#A8E6CF` | Depth, backgrounds |
| **Arctic Blue (Mid)** | `#4A90A4` | Shadows, secondary elements |
| **Arctic Blue (Dark)** | `#2C5F75` | Deep accents |

### Secondary/Accent Colors
- **Pink:** `#FF6B9D` - For traits and variety
- **Yellow:** `#FFD93D` - For traits and variety
- **Dark Teal:** `#1A5F7A` - For traits and variety

### Gradients
- **Hero Background:** `linear-gradient(180deg, #5DD9C1 0%, #2C5F75 100%)`
- **Card Hover:** `linear-gradient(135deg, #5DD9C1 0%, #4A90A4 100%)`

---

## Design Principles

1. **High Contrast**  
   Black outlines on everything - crisp, pixel-perfect borders

2. **Clean Aesthetic**  
   Retro gaming meets modern NFT design

3. **Pixel-Perfect Precision**  
   Every element aligned to pixel grid (8px or 16px base unit)

4. **Generous Whitespace**  
   Let designs breathe - minimum 24px spacing between sections

5. **Bold, Blocky Elements**  
   Strong visual hierarchy with chunky buttons and headings

---

## Component Specifications

### Buttons
**Primary CTA (Orange):**
- Background: `#FF8533`
- Text: `#FFFFFF`
- Border: `3px solid #000000`
- Padding: `12px 32px`
- Font: Bold, uppercase, 14px
- Hover: Lift effect + subtle glow

**Secondary CTA (Outlined):**
- Background: Transparent
- Text: `#FFFFFF`
- Border: `2px solid #5DD9C1`
- Padding: `10px 28px`
- Hover: Fill with `#5DD9C1`

### Cards
- Background: `rgba(93, 217, 193, 0.1)`
- Border: `2px solid #000000`
- Border-radius: `8px` (slight rounding, not fully round)
- Hover: Translate up 4px, add shadow

### Typography Scale
- **H1 (Hero):** 64px / 72px (mobile: 36px / 42px)
- **H2 (Section):** 48px / 56px (mobile: 28px / 34px)
- **H3 (Subsection):** 32px / 40px (mobile: 24px / 30px)
- **Body:** 16px / 24px
- **Small:** 14px / 20px

---

## Animation Guidelines

### Timing
- **Fast:** 150ms (micro-interactions)
- **Medium:** 300ms (hover states, transitions)
- **Slow:** 600ms (section reveals, parallax)

### Easing
- Default: `cubic-bezier(0.4, 0.0, 0.2, 1)`
- Bounce: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

### Effects
- **Pixel Glitch:** Horizontal offset + color shift (2-3px)
- **Parallax Layers:** 3-5 layers, speed multipliers: 0.2, 0.5, 0.8, 1.0
- **Fade In:** Opacity 0 → 1, translate Y: 20px → 0

---

## CSS Variables (Implementation)

```css
:root {
  /* Colors */
  --color-primary: #5DD9C1;
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-orange: #FF8533;
  --color-blue-light: #A8E6CF;
  --color-blue-mid: #4A90A4;
  --color-blue-dark: #2C5F75;
  --color-pink: #FF6B9D;
  --color-yellow: #FFD93D;
  --color-teal: #1A5F7A;
  
  /* Typography */
  --font-pixel: 'Press Start 2P', 'Courier New', monospace;
  --font-geometric: 'Space Grotesk', 'Inter', sans-serif;
  --font-body: system-ui, -apple-system, sans-serif;
  
  /* Spacing (8px base) */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 96px;
  
  /* Animation */
  --timing-fast: 150ms;
  --timing-medium: 300ms;
  --timing-slow: 600ms;
  --ease-default: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  /* Borders */
  --border-width: 2px;
  --border-radius: 8px;
}
```

---

## Usage Examples

### Good ✅
- High contrast black outlines on all cards and buttons
- Pixel-stepped curves in custom icons
- Generous 48px+ spacing between major sections
- Bold, uppercase text for CTAs
- Vibrant orange (#FF8533) for primary actions
- Turquoise (#5DD9C1) as main brand color
- Subtle pixel glitch effects on hover

### Avoid ❌
- Smooth gradients without structure
- Thin strokes or delicate lines
- Cramped layouts with <16px spacing
- Pure 8-bit retro fonts for body text
- Low contrast color combinations
- Overly complex animations (>1 second)
- Rounded corners >16px radius
