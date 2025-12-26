import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { useTheme } from '../contexts/ThemeContext'
import { useState, useEffect } from 'react'

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

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen
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
                            className="p-2 rounded-full hover:bg-parchment-border dark:hover:bg-obsidian-border transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'parchment' ? '🌙' : '☀️'}
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
                            className="p-2 text-parchment-text dark:text-obsidian-text"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-parchment-bg dark:bg-obsidian-bg z-40 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                    {siteConfig.nav.map(item => (
                        <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-2xl font-serif text-parchment-text dark:text-obsidian-text hover:text-parchment-accent dark:hover:text-obsidian-accent transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
