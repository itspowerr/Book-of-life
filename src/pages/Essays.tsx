import { Link } from 'react-router-dom'
import { essays, themes } from '../data'
import { useState } from 'react'

export default function Essays() {
    const [selectedTheme, setSelectedTheme] = useState<string>('all')

    const filteredEssays = selectedTheme === 'all'
        ? essays
        : essays.filter(e => e.theme === selectedTheme)

    return (
        <div className="min-h-screen bg-parchment-bg dark:bg-obsidian-bg transition-colors duration-500">
            {/* Hero Section */}
            <div className="pt-32 pb-16 px-6 text-center">
                <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-parchment-text dark:text-obsidian-text tracking-tight">
                    The Archive
                </h1>
                <p className="text-xl md:text-2xl text-parchment-muted dark:text-obsidian-muted font-light italic max-w-2xl mx-auto leading-relaxed">
                    Fragments of thought, preserved in text. Long-form explorations of the questions that haunt us.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-16 justify-center max-w-4xl mx-auto px-6">
                <button
                    onClick={() => setSelectedTheme('all')}
                    className={`px-4 py-2 rounded-full text-sm font-sans uppercase tracking-widest transition-all duration-300 border ${selectedTheme === 'all'
                        ? 'bg-parchment-text dark:bg-obsidian-text text-parchment-bg dark:text-obsidian-bg border-parchment-text dark:border-obsidian-text'
                        : 'bg-transparent text-parchment-muted dark:text-obsidian-muted border-transparent hover:border-parchment-border dark:hover:border-obsidian-border'
                        }`}
                >
                    All
                </button>
                {themes.map(theme => (
                    <button
                        key={theme.slug}
                        onClick={() => setSelectedTheme(theme.slug)}
                        className={`px-4 py-2 rounded-full text-sm font-sans uppercase tracking-widest transition-all duration-300 border ${selectedTheme === theme.slug
                            ? 'bg-parchment-text dark:bg-obsidian-text text-parchment-bg dark:text-obsidian-bg border-parchment-text dark:border-obsidian-text'
                            : 'bg-transparent text-parchment-muted dark:text-obsidian-muted border-transparent hover:border-parchment-border dark:hover:border-obsidian-border'
                            }`}
                    >
                        {theme.name}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {filteredEssays.map((essay) => (
                        <Link
                            key={essay.slug}
                            to={`/essays/${essay.slug}`}
                            className="group block"
                        >
                            <article className="h-full flex flex-col p-8 bg-white dark:bg-zinc-900/30 border border-parchment-border dark:border-obsidian-border rounded-lg transition-all duration-500 hover:border-parchment-accent dark:hover:border-obsidian-accent hover:shadow-lg hover:-translate-y-2">
                                <div className="flex justify-between items-baseline mb-6">
                                    <span className="text-xs font-sans uppercase tracking-widest text-parchment-accent dark:text-obsidian-accent">
                                        {essay.theme}
                                    </span>
                                    <span className="text-xs font-sans text-parchment-muted dark:text-obsidian-muted">
                                        {essay.readingTime} min
                                    </span>
                                </div>

                                <h2 className="text-3xl font-serif font-light mb-4 text-parchment-text dark:text-obsidian-text group-hover:text-parchment-accent dark:group-hover:text-obsidian-accent transition-colors leading-tight">
                                    {essay.title}
                                </h2>

                                <p className="text-parchment-muted dark:text-obsidian-muted font-sans text-sm leading-relaxed mb-8 flex-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {essay.summary}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-parchment-text dark:text-obsidian-text group-hover:translate-x-2 transition-transform duration-300">
                                    Read Essay
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
