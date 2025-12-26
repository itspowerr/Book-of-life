import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="min-h-screen bg-parchment-bg dark:bg-obsidian-bg transition-colors duration-500">
            {/* Hero Section */}
            <div className="pt-32 pb-16 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-8xl font-serif font-light mb-8 text-parchment-text dark:text-obsidian-text tracking-tight"
                >
                    About This Space
                </motion.h1>
                <div className="w-24 h-1 bg-parchment-accent dark:bg-obsidian-accent mx-auto mb-16" />
            </div>

            <div className="max-w-3xl mx-auto px-6 pb-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-16 text-lg md:text-xl leading-loose font-serif text-parchment-text dark:text-obsidian-text"
                >
                    <section>
                        <h2 className="text-3xl font-light mb-6 text-parchment-text dark:text-obsidian-text">Purpose</h2>
                        <p className="text-parchment-muted dark:text-obsidian-muted">
                            This website exists as a quiet space for philosophical contemplation. It is not a blog, not a platform, not a brand. It is an archive of questions—a sanctuary for the slow digestion of ideas in an age of digital noise.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-light mb-6 text-parchment-text dark:text-obsidian-text">Philosophy</h2>
                        <p className="mb-6 text-parchment-muted dark:text-obsidian-muted">
                            Philosophy is not about finding answers, but about refining questions. It is the practice of examining life with rigor and honesty.
                        </p>
                        <blockquote className="pl-6 border-l-2 border-parchment-accent dark:border-obsidian-accent italic text-2xl my-8 text-parchment-text dark:text-obsidian-text">
                            "The unexamined life is not worth living."
                        </blockquote>
                        <p className="text-parchment-muted dark:text-obsidian-muted">
                            We explore existence, ethics, consciousness, and meaning not as academic subjects, but as vital, living concerns that shape who we are.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-light mb-6 text-parchment-text dark:text-obsidian-text">Navigating the Archive</h2>
                        <ul className="space-y-4 text-parchment-muted dark:text-obsidian-muted marker:text-parchment-accent dark:marker:text-obsidian-accent list-disc pl-5">
                            <li>
                                <strong className="text-parchment-text dark:text-obsidian-text font-normal">The Life Book:</strong> A chronological journey through the stages of human existence.
                            </li>
                            <li>
                                <strong className="text-parchment-text dark:text-obsidian-text font-normal">Essays:</strong> Deep-dive explorations of specific philosophical questions.
                            </li>
                            <li>
                                <strong className="text-parchment-text dark:text-obsidian-text font-normal">Fragments:</strong> Brief sparks of insight and aphorisms to provoke thought.
                            </li>
                            <li>
                                <strong className="text-parchment-text dark:text-obsidian-text font-normal">Themes:</strong> Use the thematic index to find writings across all formats connected by a single thread.
                            </li>
                        </ul>
                    </section>

                    <div className="pt-16 border-t border-parchment-border dark:border-obsidian-border text-center">
                        <p className="italic text-parchment-muted dark:text-obsidian-muted mb-8">
                            Take your time. There is no rush here.
                        </p>
                        <Link to="/" className="inline-block px-8 py-3 bg-parchment-text dark:bg-obsidian-text text-parchment-bg dark:text-obsidian-bg rounded-full text-sm font-sans uppercase tracking-widest hover:opacity-90 transition-opacity">
                            Begin Exploring
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
