# Philosophy Website

A minimal, contemplative philosophy website built for deep reading and reflection.

## Tech Stack

- **Vite** - Build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Framer Motion** - Subtle animations

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Cloudflare Pages

### Build Settings

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18 or higher

### SPA Routing

The `public/_redirects` file ensures all routes work correctly on Cloudflare Pages by redirecting all requests to `index.html`.

### Deploy Steps

1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy

Or upload the `dist/` folder directly via Cloudflare Pages dashboard.

## Features

- 🎨 Dual themes: Parchment (light) & Obsidian (dark)
- 📖 Typography-first design for deep reading
- 🔍 Local search (coming soon)
- ♿ Accessible & keyboard navigable
- 📱 Fully responsive
- ⚡ Static export - no server needed

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route pages
├── contexts/       # React contexts (theme)
├── config/         # Site configuration
└── data/           # Content data (essays, fragments)
```

## Configuration

Edit `src/config/site.ts` to customize:
- Site name & tagline
- Navigation links
- Author information
- Default theme

## License

MIT
