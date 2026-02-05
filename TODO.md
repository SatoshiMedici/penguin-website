# KRYPTO PENGUS - Website Development TODO

## Current Status
**Phase:** Design Mockups (APPROVAL GATE #1)  
**Last Updated:** 2026-02-05

---

## PHASE 1: Design Mockups ⚠️ AWAITING APPROVAL

### High Priority
- [ ] **Hero Section Mockup**
  - Animated pixelated penguin character design
  - Parallax mountain backdrop (3-5 layers)
  - Bold headline with persistence narrative
  - Primary CTA button design (orange #FF8533)
  - Tagline emphasizing journey/mountain metaphor
  - Mobile + desktop layouts

- [ ] **Story Section Mockup**
  - Narrative layout design
  - "Never giving up" theme visual treatment
  - Scroll-triggered animation concepts
  - Typography implementation examples

- [ ] **Collection Gallery Mockup**
  - Grid layout design (4-col desktop, 2-col tablet, 1-col mobile)
  - Hover interaction concepts (pixel glitch effects)
  - Trait rarity preview design
  - Filter UI (if implementing)
  - Smooth scroll animations

- [ ] **Mint Interface Mockup**
  - Minting widget design
  - Wallet connection UI
  - Tier/price/supply display
  - Quantity selector
  - Live mint counter
  - Transaction feedback states (pending, success, error)

- [ ] **Community/Social Section Mockup**
  - Social links layout
  - Icon design (X, Discord, Instagram)
  - Hover states

### Documentation
- [ ] Present mockups for approval
- [ ] Document design decisions
- [ ] Create component specifications
- [ ] Note any technical constraints

---

## PHASE 2: Implementation (After Approval)

### Core Structure
- [ ] Update `app/layout.tsx` with Krypto Pengus meta tags
- [ ] Update `app/globals.css` with brand CSS variables
- [ ] Create reusable component structure
- [ ] Set up animation utilities

### Hero Section
- [ ] Build responsive hero layout
- [ ] Implement pixelated penguin character (SVG or Canvas)
- [ ] Create parallax mountain backdrop (3-5 layers)
- [ ] Add scroll-based parallax effect
- [ ] Implement headline typography
- [ ] Build CTA button with hover effects
- [ ] Add mobile responsive breakpoints
- [ ] Optimize performance (60fps)

### Story Section
- [ ] Build narrative layout
- [ ] Implement scroll-triggered animations
- [ ] Add "never giving up" visual elements
- [ ] Typography implementation
- [ ] Mobile optimization

### Collection Gallery
- [ ] Create NFT grid component
- [ ] Implement lazy loading for images
- [ ] Add hover interactions (pixel glitch effect)
- [ ] Build trait rarity preview
- [ ] (Optional) Add trait filter functionality
- [ ] Smooth scroll animations
- [ ] Mobile responsive grid

### Mint Interface
- [ ] Build minting widget UI
- [ ] Integrate Sui wallet connection (@mysten/dapp-kit)
- [ ] Display tier/price/supply data
- [ ] Create quantity selector
- [ ] Implement live mint counter (placeholder)
- [ ] Transaction feedback states
- [ ] Error handling UI
- [ ] Mobile optimization

### Community/Social
- [ ] Build social links section
- [ ] Add icons for X, Discord, Instagram
- [ ] Implement hover animations
- [ ] Ensure accessibility (aria-labels)

### Global Components
- [ ] Navigation/Header
- [ ] Footer
- [ ] Loading states
- [ ] Error boundaries
- [ ] Accessibility features (skip links, focus management)

---

## PHASE 3: Testing & Refinement

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Testing
- [ ] iOS Safari (iPhone)
- [ ] Android Chrome
- [ ] Tablet layouts (iPad, Android tablets)

### Performance
- [ ] Lighthouse audit (target: 90+ performance)
- [ ] Image optimization
- [ ] JavaScript bundle size analysis
- [ ] Animation performance (60fps)
- [ ] Page load time (<2 seconds)

### Accessibility
- [ ] WCAG 2.1 AA compliance check
- [ ] Keyboard navigation testing
- [ ] Screen reader testing (NVDA, VoiceOver)
- [ ] Color contrast verification
- [ ] Alt text for all images
- [ ] Semantic HTML review

### Code Quality
- [ ] Code review (modularity, reusability)
- [ ] Comment complex logic
- [ ] Remove console.logs
- [ ] Lint and format code
- [ ] Update documentation

---

## PHASE 4: Deployment Preparation

### Local Development
- [ ] Document setup instructions (README)
- [ ] Provide npm scripts (dev, build, export)
- [ ] Environment variable setup (if needed)

### Build Optimization
- [ ] Static export configuration (`next.config.js`)
- [ ] Asset compression
- [ ] Bundle size optimization
- [ ] Remove unused dependencies

### Documentation
- [ ] Update README.md
- [ ] Deployment guide for Walrus Sites
- [ ] Maintenance documentation

---

## Dependencies & Blockers

### Assets Needed
- [ ] Pixelated penguin character (main mascot)
- [ ] NFT preview images (for gallery)
- [ ] Mountain/iceberg background assets
- [ ] Social media icons

### Technical Dependencies
- [ ] Sui wallet integration (@mysten/dapp-kit)
- [ ] Smart contract integration (Part 3)
- [ ] Walrus deployment guide

### Questions Before Starting
- [ ] Do we have penguin character assets or should I create placeholder?
- [ ] Do we have sample NFT images or use placeholders?
- [ ] Should I use a specific pixel art font or web-safe alternative?
- [ ] Preferred animation library (Framer Motion, GSAP, CSS only)?
- [ ] Any specific accessibility requirements beyond WCAG 2.1 AA?

---

## Progress Tracking

### Milestones
- [x] Part 1 received (Collection Identity)
- [x] Part 2 received (Website Requirements)
- [x] Documentation created (PROJECT_STATUS, BRAND_GUIDELINES, TODO)
- [ ] Mockups created
- [ ] Mockups approved ⚠️ GATE
- [ ] Implementation complete
- [ ] Testing complete
- [ ] Deployment ready
- [ ] Part 3 received (Smart Contracts)

### Git Commits
- [x] `[DOCS] Add PROJECT_STATUS.md with brand guidelines and mint structure`
- [ ] `[DOCS] Add BRAND_GUIDELINES.md and TODO.md`
- [ ] `[DESIGN] Add website mockups for approval`
- [ ] (Implementation commits to follow after approval)

---

## Notes
- Focus on WEBSITE FIRST, smart contract comes in Part 3
- Present mockups BEFORE implementing any code
- Ask ALL clarifying questions UP FRONT
- Work in batches, complete sections fully
- Document as you go
