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
