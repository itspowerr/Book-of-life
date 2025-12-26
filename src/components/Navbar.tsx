import { Link } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { useTheme } from '../contexts/ThemeContext'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-parchment-bg/95 dark:bg-obsidian-bg/95 backdrop-blur-md border-b border-parchment-border dark:border-obsidian-border shadow-sm'
                : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-xl font-semibold">
                        {siteConfig.siteName}
                    </Link>

                    <div className="flex items-center gap-8">
                        <div className="hidden md:flex items-center gap-6">
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
                </div>
            </div>
        </nav>
    )
}
