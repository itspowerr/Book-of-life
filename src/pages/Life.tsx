import { chapters } from '../data'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import bookCover from '../assets/images/book-cover.png'

export default function Life() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50])

    return (
        <div className="min-h-screen bg-parchment-bg dark:bg-obsidian-bg transition-colors duration-500">
            {/* Hero Section */}
            <div ref={targetRef} className="relative min-h-[100svh] pt-[60px] pb-20 md:pt-0 md:pb-0 md:-mt-20 flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-parchment-bg dark:to-obsidian-bg" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-parchment-bg dark:from-obsidian-bg to-transparent" />
                </div>

                <motion.div
                    style={{ opacity, scale, y }}
                    className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 relative z-10 max-w-6xl mx-auto"
                >
                    {/* Book Cover */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: -30 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-full max-w-sm md:max-w-md perspective-1000"
                    >
                        <div className="relative group transform transition-all duration-700 hover:rotate-y-12 preserve-3d">
                            <div className="absolute inset-0 bg-parchment-accent/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <img
                                src={bookCover}
                                alt="The Book of Life"
                                className="relative z-10 w-full rounded-lg shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Intro Text */}
                    <div className="text-center md:text-left max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <span className="block text-parchment-accent dark:text-obsidian-accent text-xs md:text-sm tracking-[0.3em] font-sans uppercase mb-6">
                                Volume I
                            </span>
                            <h1 className="text-5xl md:text-8xl font-serif font-light mb-8 text-parchment-text dark:text-obsidian-text leading-none">
                                The Book<br />of Life
                            </h1>
                            <p className="text-xl text-parchment-muted dark:text-obsidian-muted font-light italic leading-relaxed mb-12">
                                A chronological philosophical journey. From the first spark of awakening to the final silence.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Link
                                    to="/life/awakening"
                                    className="px-8 py-3 bg-parchment-text dark:bg-obsidian-text text-parchment-bg dark:text-obsidian-bg rounded-full font-sans text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300"
                                >
                                    Start Reading
                                </Link>
                                <span className="text-xs font-sans text-parchment-muted dark:text-obsidian-muted uppercase tracking-widest">
                                    9 Chapters • ~45 min read
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-parchment-muted dark:text-obsidian-muted"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <span className="text-xs font-sans uppercase tracking-[0.3em] mb-2 block text-center">Chapters</span>
                    <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </div>

            {/* Table of Contents */}
            <div className="max-w-4xl mx-auto px-6 pb-32">
                <div className="relative pl-6 md:pl-12 border-l border-parchment-border dark:border-obsidian-border space-y-12 md:space-y-16">
                    {chapters.map((chapter, index) => (
                        <motion.div
                            key={chapter.slug}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[33px] md:-left-[57px] top-8 w-4 h-4 rounded-full bg-parchment-bg dark:bg-obsidian-bg border-2 border-parchment-accent dark:border-obsidian-accent z-10" />

                            <Link
                                to={`/life/${chapter.slug}`}
                                className="group block"
                            >
                                <div className="p-6 md:p-8 bg-white dark:bg-zinc-900/30 border border-parchment-border dark:border-obsidian-border rounded-lg hover:border-parchment-accent dark:hover:border-obsidian-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-3xl md:text-4xl font-serif text-parchment-muted/30 dark:text-obsidian-muted/30 group-hover:text-parchment-accent dark:group-hover:text-obsidian-accent transition-colors">
                                                {String(chapter.number).padStart(2, '0')}
                                            </span>
                                            <h3 className="text-xl md:text-3xl font-serif text-parchment-text dark:text-obsidian-text group-hover:text-parchment-accent dark:group-hover:text-obsidian-accent transition-colors">
                                                {chapter.title}
                                            </h3>
                                        </div>
                                        <span className="text-xs font-sans uppercase tracking-widest text-parchment-muted dark:text-obsidian-muted mt-2 md:mt-0">
                                            {chapter.readingTime} min read
                                        </span>
                                    </div>

                                    <p className="text-lg italic font-serif text-parchment-muted dark:text-obsidian-muted mb-4">
                                        {chapter.subtitle}
                                    </p>

                                    <p className="text-sm text-parchment-text dark:text-obsidian-text leading-relaxed opacity-80 mb-6">
                                        {chapter.summary}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {chapter.themes.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider text-parchment-muted dark:text-obsidian-muted border border-parchment-border dark:border-obsidian-border px-2 py-1 rounded-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
