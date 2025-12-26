export interface SiteConfig {
    siteName: string;
    tagline: string;
    shortDescription: string;
    authorName: string;
    authorEmail: string;
    nav: Array<{
        label: string;
        href: string;
    }>;
    themes: {
        default: 'parchment' | 'obsidian';
    };
}

export const siteConfig: SiteConfig = {
    siteName: 'Philosophy',
    tagline: 'A Space for Contemplation',
    shortDescription: 'Deep reading and reflection on the fundamental questions of existence, meaning, and the examined life.',
    authorName: 'The Examined Life',
    authorEmail: 'hello@philosophy.example',
    nav: [
        { label: 'Home', href: '/' },
        { label: 'Essays', href: '/essays' },
        { label: 'Fragments', href: '/fragments' },
        { label: 'Themes', href: '/themes' },
        { label: 'Life', href: '/life' },
        { label: 'About', href: '/about' },
    ],
    themes: {
        default: 'parchment',
    },
};
