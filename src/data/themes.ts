export interface Theme {
    slug: string;
    name: string;
    description: string;
    longDescription: string;
}

export const themes: Theme[] = [
    {
        slug: 'existence',
        name: 'Existence',
        description: 'The nature of being and becoming.',
        longDescription: 'What does it mean to occupy space in the universe? Existence is not a static state but a continuous act of creation. Here we explore the fundamental architecture of reality and our place within it.',
    },
    {
        slug: 'time',
        name: 'Time',
        description: 'Memory, anticipation, and the eternal now.',
        longDescription: 'Time is the water in which we swim. It flows, it bends, it dissolves. We investigate the human relationship with temporality—from the haunting of the past to the anxiety of the future.',
    },
    {
        slug: 'meaning',
        name: 'Meaning',
        description: 'The architecture of purpose in a void.',
        longDescription: 'In a cosmos largely indifferent to our presence, meaning is the light we generate ourselves. We examine how purpose is forged through connection, struggle, and the defiance of absurdity.',
    },
    {
        slug: 'identity',
        name: 'Identity',
        description: 'The construct of the self.',
        longDescription: 'Who are you? The answer shifts with every breath. We dismantle the illusion of a fixed self and explore the narrative structures we build to maintain continuity in a changing world.',
    },
    {
        slug: 'ethics',
        name: 'Ethics',
        description: 'The art of living well.',
        longDescription: 'Not a set of rules, but a practice of being. Ethics is the alignment of action with value. We explore virtue, responsibility, and the complex geometry of human relationships.',
    },
    {
        slug: 'consciousness',
        name: 'Consciousness',
        description: 'The mystery of the felt experience.',
        longDescription: 'The hard problem. The ghost in the machine. We probe the limits of what can be known about the mind and the strange loop of the universe observing itself.',
    },
];
