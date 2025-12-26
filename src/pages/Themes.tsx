import { Link } from 'react-router-dom'
import { themes, essays } from '../data'

export default function Themes() {
    return (
        <div className="min-h-screen bg-parchment-bg dark:bg-obsidian-bg transition-colors duration-500">
            {/* Hero Section */}
            <div className="pt-32 pb-24 px-6 text-center">
                <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-parchment-text dark:text-obsidian-text tracking-tight">
                    Themes
                </h1>
                <p className="text-xl md:text-2xl text-parchment-muted dark:text-obsidian-muted font-light italic max-w-2xl mx-auto leading-relaxed">
                    The fundamental questions that shape our existence.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {themes.map(theme => {
                        const themeEssayCount = essays.filter(e => e.theme === theme.slug).length

                        return (
                            <Link
                                key={theme.slug}
                                to={`/themes/${theme.slug}`}
                                className="group block"
                            >
                                <article className="h-full flex flex-col p-10 bg-white dark:bg-zinc-900/30 border border-parchment-border dark:border-obsidian-border rounded-lg transition-all duration-500 hover:border-parchment-accent dark:hover:border-obsidian-accent hover:shadow-lg hover:-translate-y-2">
                                    <div className="flex justify-between items-baseline mb-8">
                                        <span className="text-xs font-sans uppercase tracking-widest text-parchment-accent dark:text-obsidian-accent">
                                            0{themes.indexOf(theme) + 1}
                                        </span>
                                        <span className="text-xs font-sans text-parchment-muted dark:text-obsidian-muted">
                                            {themeEssayCount} {themeEssayCount === 1 ? 'Essay' : 'Essays'}
                                        </span>
                                    </div>

                                    <h2 className="text-4xl font-serif font-light mb-6 text-parchment-text dark:text-obsidian-text group-hover:text-parchment-accent dark:group-hover:text-obsidian-accent transition-colors leading-tight">
                                        {theme.name}
                                    </h2>

                                    <p className="text-parchment-muted dark:text-obsidian-muted font-sans text-sm leading-relaxed mb-10 flex-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {theme.longDescription}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-parchment-text dark:text-obsidian-text group-hover:translate-x-2 transition-transform duration-300">
                                        Explore
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </article>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
