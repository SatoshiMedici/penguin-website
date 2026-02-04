# The March - Penguin IP Website

A responsive landing page for The March penguin NFT collection on Sui blockchain.

## Features

- ⚡ Built with Next.js 14 and TypeScript
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🌈 Modern glassmorphism UI
- ⛓️ Ready for Sui wallet integration
- 🚀 Optimized for static export (can deploy to Walrus Sites!)

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

### Build

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for deployment.

### Deploy to Walrus Sites

After building:
```bash
# Install Walrus site-builder (coming soon)
# site-builder publish ./out
```

## Project Structure

```
penguin-website/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Landing page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json
└── tailwind.config.ts
```

## Sections

- **Hero**: Attention-grabbing intro with stats
- **About**: What The March represents
- **Roadmap**: Journey from NFT launch to token
- **FAQ**: Common questions
- **Footer**: Social links

## Customization

- Edit `app/page.tsx` for content changes
- Modify `tailwind.config.ts` for design system
- Add images to `public/` folder
- Connect Sui wallet in navigation

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Sui blockchain integration (coming)

## License

MIT

---

Built for The March NFT collection on Sui Network.
