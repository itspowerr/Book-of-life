import { essays } from './essays'
import { fragments } from './fragments'
import { themes } from './themes'
import { chapters } from './chapters'

export { essays, fragments, themes, chapters }

export function getChapterBySlug(slug: string) {
    return chapters.find(c => c.slug === slug)
}

export function getEssayBySlug(slug: string) {
    return essays.find(e => e.slug === slug)
}

export function getEssaysByTheme(themeSlug: string) {
    return essays.filter(e => e.theme === themeSlug)
}

export function getFragmentsByTheme(themeSlug: string) {
    return fragments.filter(f => f.theme === themeSlug)
}

export function getThemeBySlug(slug: string) {
    return themes.find(t => t.slug === slug)
}

export function searchEssays(query: string) {
    const q = query.toLowerCase()
    return essays.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.summary.toLowerCase().includes(q) ||
        e.content.toLowerCase().includes(q)
    )
}

export function searchFragments(query: string) {
    const q = query.toLowerCase()
    return fragments.filter(f => f.text.toLowerCase().includes(q))
}
