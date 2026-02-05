# KRYPTO PENGUS - Project Status

## Project Overview
**Project Name:** Krypto Pengus  
**Current Phase:** Website Design (Phase 1)  
**Last Updated:** 2026-02-05

---

## Brand Guidelines Summary

### Collection Identity
- **Name:** Krypto Pengus
- **Supply:** 3,333 pixelated penguin NFTs
- **Narrative:** The solitary penguin journeying toward mountains - symbolizes persistence, determination, never giving up
- **Art Style:** Pixel art (24×24, CryptoPunks-inspired)

### Typography: "Playful Geometric"
- Rounded pixel-inspired letterforms with refined edges
- **NOT** purely 8-bit retro, but pixel-influenced modern design
- Weight system: Regular for body text, Bold for headlines
- Generous letter spacing (CryptoPunks-inspired but softer/rounder)
- Lowercase primary with uppercase for emphasis

### Color Palette
**Primary Colors:**
- Turquoise/Aqua: `#5DD9C1` (main background)
- Deep Black: `#000000` (outlines, high contrast)
- Pure White: `#FFFFFF` (penguin bodies, text)
- Orange Accent: `#FF8533` (penguin beaks)
- Arctic Blues: Various shades for depth

**Secondary/Accent Colors:**
- Pink, yellow, dark teal (for traits and variety)

### Design Principles
- High contrast (black outlines on everything)
- Clean, retro gaming aesthetic meets modern NFT design
- Pixel-perfect precision
- Generous whitespace
- Bold, blocky elements

---

## Mint Structure Overview

### Total Supply: 3,333 NFTs

#### Tier 1: Whitelist Mint (24 hours)
- Supply: 1,000 NFTs
- Price: 10 SUI per NFT
- Access: Whitelist addresses only
- Wallet Limit: Maximum 3 NFTs per wallet
- Revenue: 10,000 SUI

#### Tier 2: Early Public Mint (48 hours)
- Supply: 1,000 NFTs
- Price: 15 SUI per NFT
- Access: Public
- Wallet Limit: Unlimited
- Revenue: 15,000 SUI

#### Tier 3: Final Public Mint (Open until sold out)
- Supply: 1,000 NFTs
- Price: 20 SUI per NFT
- Access: Public
- Wallet Limit: Unlimited
- Revenue: 20,000 SUI

#### Treasury Reserve
- Supply: 333 NFTs (10% of collection)
- Purpose: Marketing, giveaways, partnerships, OG 1/1 special editions
- Not for sale

### Total Revenue Target
**45,000 SUI** = $45,000 USD (at $1/SUI)

### Reveal Mechanism
Instant reveal (metadata + images revealed immediately upon mint)

---

## Technical Stack

- **Blockchain:** Sui Network
- **Storage:** Walrus Protocol (Mysten Labs)
- **Smart Contract:** Move
- **Frontend:** Next.js 14 + TypeScript + Tailwind CSS
- **Repository:** https://github.com/SatoshiMedici/penguin-website

---

## Social Presence

- **X (Twitter):** @KryptoPengus
- **Discord:** To be created
- **Instagram:** To be created

---

## Current Phase: Website Design (Phase 1)

### Required Pages/Sections

1. **HERO SECTION**
   - Animated pixelated penguin character (main mascot)
   - Parallax scrolling mountain backdrop (layers moving at different speeds)
   - Bold headline with persistence narrative
   - Primary CTA: "Mint Now" button (when live) or "Join Waitlist"
   - Tagline emphasizing the journey/mountain metaphor

2. **STORY SECTION**
   - The narrative of the solitary penguin
   - "Never giving up" theme
   - Visual storytelling with parallax or scroll-triggered animations

3. **COLLECTION GALLERY**
   - Grid layout showcasing NFT examples
   - Hover interactions (pixelated glitch effects)
   - Trait rarity preview
   - Filter by traits (optional but recommended)
   - Smooth animations on scroll

4. **MINT INTERFACE**
   - Clean, simple minting widget
   - Connect wallet (Sui wallet integration)
   - Display current tier, price, and supply remaining
   - Quantity selector (respecting wallet limits)
   - Live mint counter
   - Transaction confirmation feedback

5. **COMMUNITY/SOCIAL**
   - Links to X (@KryptoPengus), Discord, Instagram

### Interactive Features

**Animation & Effects:**
- Parallax scrolling (mountains/icebergs at different speeds)
- Hover animations on NFT previews (pixel glitch, color shifts)
- Smooth scroll-triggered animations (fade-in, slide-in)
- Animated pixel art transitions between sections
- Live mint counter with real-time updates
- Pixel-art loading states

**Performance:**
- Lazy loading for images
- Optimized asset compression
- Fast page load (<2 seconds)
- Smooth 60fps animations
- Efficient JavaScript

**Mobile Responsiveness:**
- Mobile-first approach
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Performance maintained on mobile

**Accessibility:**
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML
- Alt text for all images
- High contrast ratios

### Development Workflow

**PHASE 1: Design Mockups** ⚠️ APPROVAL GATE
- Create visual mockups for all sections
- Show typography system implementation
- Demonstrate color palette usage
- Include interactive element previews
- Present layout options
- **STOP FOR APPROVAL BEFORE CODING**

**PHASE 2: Implement Website** (After Approval)
- Build responsive HTML/CSS/JavaScript
- Implement interactive features and animations
- Optimize for performance
- Ensure mobile responsiveness
- Add accessibility features
- Integrate placeholder minting interface

**PHASE 3: Testing & Refinement**
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing (iOS, Android)
- Performance auditing (Lighthouse scores)
- Accessibility testing (WCAG compliance)

**PHASE 4: Local Deployment**
- Set up local development environment
- Document how to run locally
- Provide instructions for public deployment

### Status
- [x] Initial Next.js project structure
- [x] Basic landing page layout
- [x] PROJECT_STATUS.md created
- [x] BRAND_GUIDELINES.md created
- [ ] TODO.md created
- [ ] Design mockups (pending approval)
- [ ] Brand guidelines implementation
- [ ] Krypto Pengus branding update
- [ ] Full website development
- [ ] Mint page design
- [ ] Wallet integration (Sui)

### Next Steps
1. Create TODO.md with prioritized tasks
2. Ask clarifying questions before mockups
3. Create design mockups for approval
4. Await approval before implementation

---

## Version Control

### Commit Guidelines
Format: `[TYPE] Brief description`

**Types:**
- `FEAT` - New feature
- `FIX` - Bug fix
- `STYLE` - Design/UI changes
- `DOCS` - Documentation
- `REFACTOR` - Code restructuring
- `TEST` - Testing

**Example:**
```
[DOCS] Add PROJECT_STATUS.md with brand guidelines and mint structure
```
