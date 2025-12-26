import { siteConfig } from '../config/site'

export default function Footer() {
    return (
        <footer className="border-t border-parchment-border dark:border-obsidian-border mt-24">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center">
                    <p className="text-sm font-sans text-parchment-muted dark:text-obsidian-muted">
                        {siteConfig.siteName} © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    )
}
