import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-6xl font-light mb-4">404</h1>
                <p className="text-xl text-parchment-muted dark:text-obsidian-muted mb-8">
                    This path leads nowhere
                </p>
                <Link
                    to="/"
                    className="text-parchment-accent dark:text-obsidian-accent hover:underline"
                >
                    Return home
                </Link>
            </div>
        </div>
    )
}
