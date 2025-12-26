import { useParams, Link } from 'react-router-dom'
import { getEssayBySlug, getEssaysByTheme } from '../data'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EssayDetail() {
    const { slug } = useParams<{ slug: string }>()
    const essay = slug ? getEssayBySlug(slug) : null
    const [readingProgress, setReadingProgress] = useState(0)
    const [isReadingMode, setIsReadingMode] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY
            const progress = (scrollTop / (documentHeight - windowHeight)) * 100
            setReadingProgress(Math.min(progress, 100))
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!essay) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-parchment-bg dark:bg-obsidian-bg p-6">
                <h1 className="text-4xl font-light mb-4 text-parchment-text dark:text-obsidian-text">Essay Not Found</h1>
                <Link to="/essays" className="text-parchment-accent dark:text-obsidian-accent hover:underline">
                    ← Back to Archive
                </Link>
            </div>
        )
    }

    const relatedEssays = getEssaysByTheme(essay.theme).filter(e => e.slug !== essay.slug).slice(0, 3)

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isReadingMode ? 'bg-[#f5f2eb] dark:bg-[#1a1918]' : 'bg-parchment-bg dark:bg-obsidian-bg'}`}>
            {/* Reading Progress */}
            <div
                className="fixed top-0 left-0 h-1 bg-parchment-accent dark:bg-obsidian-accent z-50 transition-all"
                style={{ width: `${readingProgress}%` }}
            />

            {/* Reading Mode Toggle */}
            <button
                onClick={() => setIsReadingMode(!isReadingMode)}
                className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-parchment-text dark:bg-obsidian-text text-parchment-bg dark:text-obsidian-bg shadow-lg hover:scale-110 transition-all opacity-50 hover:opacity-100"
                title={isReadingMode ? "Exit Reading Mode" : "Enter Reading Mode"}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isReadingMode ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                </svg>
            </button>

            <AnimatePresence>
                {!isReadingMode && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="pt-32 px-6 max-w-4xl mx-auto"
                    >
                        <Link
                            to="/essays"
                            className="inline-flex items-center gap-2 text-sm font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted hover:text-parchment-accent dark:hover:text-obsidian-accent transition-colors mb-12"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Archive
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <article className={`mx-auto px-6 transition-all duration-700 ${isReadingMode ? 'max-w-3xl py-32' : 'max-w-4xl py-12'}`}>
                {/* Header */}
                <header className="mb-12 md:mb-16 text-center">
                    {!isReadingMode && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center justify-center gap-4 text-[10px] md:text-xs font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted mb-4 md:mb-6"
                        >
                            <span>{new Date(essay.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                            <span>•</span>
                            <span>{essay.readingTime} min read</span>
                        </motion.div>
                    )}

                    <h1 className="text-3xl md:text-6xl font-serif font-light mb-6 md:mb-8 text-parchment-text dark:text-obsidian-text leading-tight">
                        {essay.title}
                    </h1>

                    {!isReadingMode && (
                        <p className="text-xl md:text-2xl text-parchment-muted dark:text-obsidian-muted italic max-w-2xl mx-auto leading-relaxed">
                            {essay.summary}
                        </p>
                    )}
                </header>

                {/* Content */}
                <div className="prose prose-lg md:prose-xl prose-stone dark:prose-invert mx-auto font-serif leading-loose">
                    {essay.content.split('\n\n').map((paragraph, i) => {
                        if (paragraph.startsWith('## ')) {
                            return (
                                <h2 key={i} className="text-2xl md:text-3xl font-light mt-16 mb-8 text-parchment-text dark:text-obsidian-text tracking-tight">
                                    {paragraph.replace('## ', '')}
                                </h2>
                            )
                        }
                        if (paragraph.startsWith('### ')) {
                            return (
                                <h3 key={i} className="text-xl md:text-2xl font-light mt-12 mb-6 text-parchment-text dark:text-obsidian-text">
                                    {paragraph.replace('### ', '')}
                                </h3>
                            )
                        }
                        return (
                            <p key={i} className="mb-6 text-parchment-text dark:text-obsidian-text opacity-90">
                                {paragraph}
                            </p>
                        )
                    })}
                </div>

                {/* Footer Section (Hidden in Reading Mode) */}
                {!isReadingMode && (
                    <div className="mt-32 pt-12 border-t border-parchment-border dark:border-obsidian-border">
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-sm font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted">
                                Shared under Creative Commons
                            </span>
                            <div className="flex gap-4">
                                <button className="p-2 rounded-full hover:bg-parchment-border dark:hover:bg-obsidian-border transition-colors">
                                    <span className="sr-only">Share</span>
                                    <svg className="w-5 h-5 text-parchment-text dark:text-obsidian-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {relatedEssays.length > 0 && (
                            <div>
                                <h3 className="text-sm font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted mb-8">
                                    Related Readings
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {relatedEssays.map(related => (
                                        <Link key={related.slug} to={`/essays/${related.slug}`} className="group block">
                                            <article className="p-6 border border-parchment-border dark:border-obsidian-border rounded-lg hover:border-parchment-accent dark:hover:border-obsidian-accent transition-all hover:-translate-y-1">
                                                <h4 className="text-xl font-serif mb-2 text-parchment-text dark:text-obsidian-text group-hover:text-parchment-accent dark:group-hover:text-obsidian-accent transition-colors">
                                                    {related.title}
                                                </h4>
                                                <span className="text-xs font-sans text-parchment-muted dark:text-obsidian-muted">
                                                    {related.readingTime} min read
                                                </span>
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </article>
        </div>
    )
}
