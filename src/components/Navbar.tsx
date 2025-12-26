import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { useTheme } from '../contexts/ThemeContext'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled || mobileMenuOpen
            ? 'bg-parchment-bg/95 dark:bg-obsidian-bg/95 backdrop-blur-md border-b border-parchment-border dark:border-obsidian-border shadow-sm'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-xl font-semibold relative z-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {siteConfig.siteName}
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {siteConfig.nav.map(item => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className="text-sm font-sans text-parchment-muted dark:text-obsidian-muted hover:text-parchment-text dark:hover:text-obsidian-text transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-parchment-border dark:hover:bg-obsidian-border transition-colors group"
                            aria-label="Toggle theme"
                        >
                            <span className="group-hover:rotate-12 transition-transform block">
                                {theme === 'parchment' ? '🌙' : '☀️'}
                            </span>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden relative z-50">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-parchment-border dark:hover:bg-obsidian-border transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'parchment' ? '🌙' : '☀️'}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-parchment-text dark:text-obsidian-text z-50 relative"
                            aria-label="Toggle menu"
                        >
                            <motion.svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <motion.line
                                    x1="4" y1="6" x2="20" y2="6"
                                    animate={mobileMenuOpen ? { x1: 5, y1: 19, x2: 19, y2: 5 } : { x1: 4, y1: 6, x2: 20, y2: 6 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.line
                                    x1="4" y1="12" x2="20" y2="12"
                                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.line
                                    x1="4" y1="18" x2="20" y2="18"
                                    animate={mobileMenuOpen ? { x1: 5, y1: 5, x2: 19, y2: 19 } : { x1: 4, y1: 18, x2: 20, y2: 18 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay - Portal */}
            {createPortal(
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-parchment-bg/98 dark:bg-obsidian-bg/98 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center"
                            style={{ top: 0, left: 0, right: 0, bottom: 0 }} // Force full screen
                        >
                            <div className="flex flex-col items-center gap-8 p-6">
                                {siteConfig.nav.map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
                                    >
                                        <Link
                                            to={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-3xl font-serif font-light text-parchment-text dark:text-obsidian-text hover:text-parchment-accent dark:hover:text-obsidian-accent transition-colors block py-2"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </nav>
    )
}
