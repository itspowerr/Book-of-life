import { Link } from 'react-router-dom'
import { essays, fragments } from '../data'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import bookCover from '../assets/images/book-cover.png'

export default function Home() {
    const featuredEssays = essays.slice(0, 3)
    const featuredFragments = fragments.filter(f => f.author !== 'Original').slice(0, 4)
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

    return (
        <div className="min-h-screen bg-parchment-bg dark:bg-obsidian-bg transition-colors duration-500 overflow-hidden">
            {/* Hero Section */}
            <div ref={targetRef} className="h-[100svh] -mt-20 flex items-center justify-center px-6 relative">
                <motion.div
                    style={{ opacity, scale }}
                    className="max-w-4xl mx-auto text-center z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-8xl font-serif font-light mb-8 leading-tight text-parchment-text dark:text-obsidian-text tracking-tight">
                            The Examined Life
                        </h1>
                        <p className="text-lg md:text-2xl text-parchment-muted dark:text-obsidian-muted font-light italic mb-16 max-w-2xl mx-auto">
                            A digital sanctuary for philosophical inquiry. Essays, fragments, and a chronological journey through human existence.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                to="/essays"
                                className="group relative px-8 py-4 bg-parchment-text dark:bg-obsidian-text text-parchment-bg dark:text-obsidian-bg rounded-full font-sans text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300"
                            >
                                Enter The Archive
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-parchment-muted dark:text-obsidian-muted"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <span className="text-xs font-sans uppercase tracking-[0.3em] mb-2 block text-center">Begin</span>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </div>

            {/* Book of Life Section */}
            <section className="py-20 md:py-32 px-6 bg-parchment-bg dark:bg-zinc-900/50 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    <div className="md:w-1/2 relative z-10 order-2 md:order-1">
                        <span className="text-xs font-sans uppercase tracking-[0.3em] text-parchment-accent dark:text-obsidian-accent mb-6 block">
                            The Core Journey
                        </span>
                        <h2 className="text-3xl md:text-6xl font-serif font-light mb-6 md:mb-8 text-parchment-text dark:text-obsidian-text leading-tight">
                            The Book of Life
                        </h2>
                        <p className="text-lg md:text-xl text-parchment-muted dark:text-obsidian-muted leading-relaxed mb-10">
                            A chronological exploration of the human experience. From the first spark of consciousness in <em>Genesis</em> to the final acceptance in <em>Legacy</em>. Start reading from the beginning or choose your chapter.
                        </p>
                        <Link
                            to="/life"
                            className="inline-flex items-center gap-2 text-parchment-text dark:text-obsidian-text font-sans uppercase tracking-widest text-sm hover:gap-4 transition-all duration-300 border-b border-parchment-text dark:border-obsidian-text pb-1"
                        >
                            Open The Book
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 relative order-1 md:order-2">
                        <div className="relative group perspective-1000">
                            <div className="absolute inset-0 bg-parchment-accent/20 blur-3xl transform group-hover:scale-110 transition-transform duration-700 rounded-full opacity-0 group-hover:opacity-100"></div>
                            <img
                                src={bookCover}
                                alt="The Book of Life"
                                className="relative z-10 w-full max-w-[280px] md:max-w-sm mx-auto rounded-lg shadow-2xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:rotate-1"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Essays */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
                        <div className="mb-6 md:mb-0">
                            <span className="text-xs font-sans uppercase tracking-[0.3em] text-parchment-accent dark:text-obsidian-accent mb-4 block">
                                Deep Dives
                            </span>
                            <h2 className="text-3xl md:text-5xl font-serif text-parchment-text dark:text-obsidian-text">
                                Recent Essays
                            </h2>
                        </div>
                        <Link to="/essays" className="hidden md:block text-sm font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted hover:text-parchment-text dark:hover:text-obsidian-text transition-colors">
                            View Archive →
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredEssays.map((essay) => (
                            <Link
                                key={essay.slug}
                                to={`/essays/${essay.slug}`}
                                className="group block"
                            >
                                <article className="h-full flex flex-col p-8 bg-white dark:bg-zinc-900/30 border border-parchment-border dark:border-obsidian-border rounded-lg hover:border-parchment-accent dark:hover:border-obsidian-accent shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="text-xs font-sans text-parchment-accent dark:text-obsidian-accent mb-6 uppercase tracking-widest">
                                        {essay.theme}
                                    </div>
                                    <h3 className="text-2xl font-serif mb-4 text-parchment-text dark:text-obsidian-text group-hover:text-parchment-accent dark:group-hover:text-obsidian-accent transition-colors">
                                        {essay.title}
                                    </h3>
                                    <p className="text-parchment-muted dark:text-obsidian-muted leading-relaxed mb-8 flex-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {essay.summary}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-parchment-text dark:text-obsidian-text">
                                        Read Essay
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/essays" className="text-sm font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted hover:text-parchment-text dark:hover:text-obsidian-text transition-colors">
                            View Archive →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Fragments Grid */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-sans uppercase tracking-[0.3em] text-parchment-accent dark:text-obsidian-accent mb-4 block">
                            Sparks of Thought
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-parchment-text dark:text-obsidian-text mb-6">
                            Fragments
                        </h2>
                        <p className="text-lg text-parchment-muted dark:text-obsidian-muted max-w-2xl mx-auto">
                            Brief illuminations from history's greatest minds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {featuredFragments.map((fragment) => (
                            <div
                                key={fragment.id}
                                className="h-full flex flex-col p-8 bg-white dark:bg-zinc-900/30 border border-parchment-border dark:border-obsidian-border rounded-lg hover:border-parchment-accent dark:hover:border-obsidian-accent shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <blockquote className="text-lg italic font-serif text-parchment-text dark:text-obsidian-text mb-4 leading-relaxed">
                                    "{fragment.text}"
                                </blockquote>
                                <cite className="text-xs font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted not-italic block text-right">
                                    — {fragment.author}
                                </cite>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/fragments"
                            className="inline-block px-8 py-3 border border-parchment-text dark:border-obsidian-text text-parchment-text dark:text-obsidian-text rounded-full font-sans text-sm uppercase tracking-widest hover:bg-parchment-text hover:text-parchment-bg dark:hover:bg-obsidian-text dark:hover:text-obsidian-bg transition-all"
                        >
                            Explore All Fragments
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
