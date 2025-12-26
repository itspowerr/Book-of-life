import { useParams, Link } from 'react-router-dom'
import { getChapterBySlug, chapters } from '../data'
import { useEffect, useState } from 'react'

export default function LifeChapter() {
    const { slug } = useParams<{ slug: string }>()
    const chapter = slug ? getChapterBySlug(slug) : null
    const [readingProgress, setReadingProgress] = useState(0)
    const [readingMode, setReadingMode] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

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

    if (!chapter) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6">
                <div className="text-center">
                    <h1 className="text-2xl mb-4">Chapter not found</h1>
                    <Link to="/life" className="text-parchment-accent underline">Return to Index</Link>
                </div>
            </div>
        )
    }

    const currentIndex = chapters.findIndex(c => c.slug === chapter.slug)
    const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null
    const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null

    return (
        <div className={`min-h-screen transition-all bg-parchment-bg dark:bg-obsidian-bg ${readingMode ? 'pt-8' : ''}`}>
            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-parchment-accent dark:bg-obsidian-accent z-50 transition-all"
                style={{ width: `${readingProgress}%` }}
            />

            {/* Navigation Bar (Hidden in Reading Mode) */}
            {!readingMode && (
                <nav className="fixed top-20 left-6 z-40 hidden xl:block">
                    <Link to="/life" className="flex items-center gap-2 text-sm text-parchment-muted dark:text-obsidian-muted hover:text-parchment-text dark:hover:text-obsidian-text transition-colors">
                        ← Table of Contents
                    </Link>
                </nav>
            )}

            {/* Reading Mode Toggle */}
            <button
                onClick={() => setReadingMode(!readingMode)}
                className="fixed bottom-6 right-6 z-50 p-3 bg-parchment-bg dark:bg-obsidian-bg border border-parchment-border dark:border-obsidian-border rounded-full shadow-lg text-parchment-muted hover:text-parchment-text transition-colors"
                aria-label="Toggle reading mode"
            >
                {readingMode ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                )}
            </button>

            <article className={`mx-auto px-6 py-16 transition-all duration-500 ease-out ${readingMode ? 'max-w-3xl' : 'max-w-2xl'}`}>
                {!readingMode && (
                    <header className="text-center mb-16">
                        <span className="block text-parchment-muted/60 dark:text-obsidian-muted/60 text-sm tracking-widest uppercase mb-4 font-sans">
                            Chapter {chapter.number}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-light mb-6 text-parchment-text dark:text-obsidian-text">
                            {chapter.title}
                        </h1>
                        <p className="text-xl text-parchment-muted dark:text-obsidian-muted italic font-serif">
                            {chapter.subtitle}
                        </p>
                    </header>
                )}

                <div className={`prose-life font-serif text-parchment-text dark:text-obsidian-text leading-loose ${readingMode ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
                    {chapter.content.split('\n\n').map((paragraph, i) => {
                        if (paragraph.startsWith('## ')) {
                            return (
                                <h2 key={i} className="text-2xl md:text-3xl font-light mt-16 mb-8 text-parchment-text dark:text-obsidian-text border-b border-parchment-border dark:border-obsidian-border pb-4">
                                    {paragraph.replace('## ', '')}
                                </h2>
                            )
                        }
                        if (paragraph.startsWith('*Inspired by fiction*')) {
                            return (
                                <p key={i} className="my-8 pl-6 border-l-2 border-parchment-accent/30 dark:border-obsidian-accent/30 italic text-parchment-muted dark:text-obsidian-muted text-base">
                                    {paragraph.replace('*Inspired by fiction*:', '').trim()}
                                    <span className="block mt-2 text-xs uppercase tracking-wider not-italic opacity-50">Inspired by fiction</span>
                                </p>
                            )
                        }
                        if (paragraph.startsWith('"') && paragraph.endsWith('"') && paragraph.length < 200) {
                            return (
                                <blockquote key={i} className="my-10 text-center text-2xl md:text-3xl italic text-parchment-accent dark:text-obsidian-accent font-serif leading-relaxed">
                                    {paragraph.replace(/^"|"$/g, '')}
                                </blockquote>
                            )
                        }
                        return <p key={i} className="mb-6 indent-8">{paragraph}</p>
                    })}
                </div>
            </article>

            <nav className="max-w-4xl mx-auto px-6 py-16 mt-16 border-t border-parchment-border dark:border-obsidian-border">
                <div className="flex justify-between items-center">
                    {prevChapter ? (
                        <Link to={`/life/${prevChapter.slug}`} className="group text-left p-4 rounded-lg hover:bg-parchment-border/20 dark:hover:bg-obsidian-border/20 transition-all w-1/3">
                            <div className="text-xs text-parchment-muted dark:text-obsidian-muted uppercase tracking-widest font-sans mb-1 group-hover:text-parchment-accent transition-colors">Previous</div>
                            <div className="text-lg font-serif">{prevChapter.title}</div>
                        </Link>
                    ) : <div className="w-1/3" />}

                    <div className="text-center w-1/3">
                        <Link to="/life" className="inline-block p-2 rounded-full hover:bg-parchment-border/20 dark:hover:bg-obsidian-border/20 text-parchment-muted dark:text-obsidian-muted hover:text-parchment-text transition-colors" title="Table of Contents">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </Link>
                    </div>

                    {nextChapter ? (
                        <Link to={`/life/${nextChapter.slug}`} className="group text-right p-4 rounded-lg hover:bg-parchment-border/20 dark:hover:bg-obsidian-border/20 transition-all w-1/3">
                            <div className="text-xs text-parchment-muted dark:text-obsidian-muted uppercase tracking-widest font-sans mb-1 group-hover:text-parchment-accent transition-colors">Next</div>
                            <div className="text-lg font-serif">{nextChapter.title}</div>
                        </Link>
                    ) : <div className="w-1/3" />}
                </div>
            </nav>
        </div>
    )
}
