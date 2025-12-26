import { useParams, Link } from 'react-router-dom'
import { getThemeBySlug, getEssaysByTheme, getFragmentsByTheme } from '../data'
import { motion } from 'framer-motion'

export default function ThemeDetail() {
    const { slug } = useParams<{ slug: string }>()
    const theme = slug ? getThemeBySlug(slug) : null
    const essays = slug ? getEssaysByTheme(slug) : []
    const fragments = slug ? getFragmentsByTheme(slug) : []

    if (!theme) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-parchment-bg dark:bg-obsidian-bg p-6">
                <h1 className="text-4xl font-light mb-4 text-parchment-text dark:text-obsidian-text">Theme Not Found</h1>
                <Link to="/themes" className="text-parchment-accent dark:text-obsidian-accent hover:underline">
                    ← Back to Themes
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-parchment-bg dark:bg-obsidian-bg transition-colors duration-500">
            {/* Navigation */}
            <div className="pt-32 px-6 max-w-4xl mx-auto">
                <Link
                    to="/themes"
                    className="inline-flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted hover:text-parchment-accent dark:hover:text-obsidian-accent transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Themes
                </Link>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* Header */}
                <header className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 mb-6 border border-parchment-accent dark:border-obsidian-accent text-parchment-accent dark:text-obsidian-accent rounded-full text-xs font-sans uppercase tracking-[0.2em]"
                    >
                        Theme Analysis
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-light mb-8 text-parchment-text dark:text-obsidian-text leading-tight"
                    >
                        {theme.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-parchment-muted dark:text-obsidian-muted italic leading-relaxed max-w-2xl mx-auto"
                    >
                        {theme.longDescription}
                    </motion.p>
                </header>

                {essays.length > 0 && (
                    <section className="mb-24">
                        <div className="flex items-end justify-between mb-12 border-b border-parchment-border dark:border-obsidian-border pb-4">
                            <h2 className="text-3xl font-serif text-parchment-text dark:text-obsidian-text">Essays</h2>
                            <span className="text-sm font-sans text-parchment-muted dark:text-obsidian-muted uppercase tracking-widest">
                                {essays.length} {essays.length === 1 ? 'Entry' : 'Entries'}
                            </span>
                        </div>
                        <div className="grid gap-8">
                            {essays.map((essay, i) => (
                                <motion.div
                                    key={essay.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                >
                                    <Link
                                        to={`/essays/${essay.slug}`}
                                        className="group block p-8 bg-white dark:bg-zinc-900/30 border border-parchment-border dark:border-obsidian-border rounded-lg hover:border-parchment-accent dark:hover:border-obsidian-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                                            <h3 className="text-2xl font-serif text-parchment-text dark:text-obsidian-text group-hover:text-parchment-accent dark:group-hover:text-obsidian-accent transition-colors">
                                                {essay.title}
                                            </h3>
                                            <div className="flex items-center gap-3 text-xs font-sans text-parchment-muted dark:text-obsidian-muted uppercase tracking-widest">
                                                <span>{essay.readingTime} min</span>
                                                <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                                                <span>{new Date(essay.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                                            </div>
                                        </div>
                                        <p className="text-parchment-muted dark:text-obsidian-muted leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                            {essay.summary}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}

                {fragments.length > 0 && (
                    <section>
                        <div className="flex items-end justify-between mb-12 border-b border-parchment-border dark:border-obsidian-border pb-4">
                            <h2 className="text-3xl font-serif text-parchment-text dark:text-obsidian-text">Fragments</h2>
                            <span className="text-sm font-sans text-parchment-muted dark:text-obsidian-muted uppercase tracking-widest">
                                {fragments.length} {fragments.length === 1 ? 'Thought' : 'Thoughts'}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {fragments.slice(0, 12).map((fragment, i) => (
                                <motion.div
                                    key={fragment.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + (i * 0.05) }}
                                    className="p-8 bg-parchment-bg dark:bg-zinc-900/20 border border-parchment-border dark:border-obsidian-border rounded-lg"
                                >
                                    <blockquote className="text-lg italic text-parchment-text dark:text-obsidian-text leading-relaxed mb-6 font-serif">
                                        "{fragment.text}"
                                    </blockquote>
                                    {fragment.author && (
                                        <cite className="text-xs font-sans text-parchment-accent dark:text-obsidian-accent uppercase tracking-widest not-italic">
                                            — {fragment.author}
                                        </cite>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                        {fragments.length > 12 && (
                            <div className="text-center mt-12">
                                <Link
                                    to="/fragments"
                                    className="inline-block px-8 py-3 bg-transparent border border-parchment-border dark:border-obsidian-border rounded-full text-sm font-sans uppercase tracking-widest hover:bg-parchment-text hover:text-parchment-bg dark:hover:bg-obsidian-text dark:hover:text-obsidian-bg transition-all"
                                >
                                    Explore All Fragments
                                </Link>
                            </div>
                        )}
                    </section>
                )}
            </div>
        </div>
    )
}
