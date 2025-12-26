import { fragments, themes } from '../data'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Fragments() {
    const [selectedTheme, setSelectedTheme] = useState<string>('all')

    const filteredFragments = selectedTheme === 'all'
        ? fragments
        : fragments.filter(f => f.theme === selectedTheme)

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        // Could add toast notification here
    }

    return (
        <div className="min-h-screen bg-parchment-bg dark:bg-obsidian-bg transition-colors duration-500">
            {/* Hero Section */}
            <div className="pt-32 pb-16 px-6 text-center">
                <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-parchment-text dark:text-obsidian-text tracking-tight">
                    Fragments
                </h1>
                <p className="text-xl md:text-2xl text-parchment-muted dark:text-obsidian-muted font-light italic max-w-2xl mx-auto leading-relaxed">
                    Sparks of thought. Brief illuminations in the dark.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-16 justify-center max-w-4xl mx-auto px-6 sticky top-24 z-30 py-4 bg-parchment-bg/80 dark:bg-obsidian-bg/80 backdrop-blur-md transition-colors duration-500">
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
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence>
                        {filteredFragments.map((fragment) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={fragment.id}
                                className="break-inside-avoid"
                            >
                                <div className="group relative p-8 bg-white dark:bg-zinc-900/30 border border-parchment-border dark:border-obsidian-border rounded-lg hover:border-parchment-accent dark:hover:border-obsidian-accent transition-all duration-500 hover:shadow-lg">
                                    <div className="mb-6 flex justify-between items-start">
                                        <span className="text-xs font-sans uppercase tracking-widest text-parchment-accent dark:text-obsidian-accent opacity-70">
                                            {fragment.theme}
                                        </span>
                                        <button
                                            onClick={() => copyToClipboard(fragment.text)}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity text-parchment-muted dark:text-obsidian-muted hover:text-parchment-text dark:hover:text-obsidian-text"
                                            title="Copy to clipboard"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </button>
                                    </div>

                                    <blockquote className="text-xl md:text-2xl font-serif text-parchment-text dark:text-obsidian-text leading-relaxed mb-6 italic">
                                        "{fragment.text}"
                                    </blockquote>

                                    {fragment.author && (
                                        <cite className="text-sm font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted not-italic block text-right">
                                            — {fragment.author}
                                        </cite>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}
