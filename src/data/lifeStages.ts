export interface LifeStage {
    id: string;
    title: string;
    subtitle: string;
    fragments: Array<{
        text: string;
        author?: string;
        note?: string;
    }>;
}

export const lifeStages: LifeStage[] = [
    {
        id: 'awakening',
        title: 'Awakening',
        subtitle: 'The first breath, the first question',
        fragments: [
            {
                text: 'I did not choose to be born. But I can choose what to make of this unchosen existence.',
                author: 'Original'
            },
            {
                text: 'Consciousness arrived without warning, without permission. Now I must decide what to do with it.',
                author: 'Original'
            },
            {
                text: 'The world was here before me. It will be here after. In between, I have this brief window to understand.',
                author: 'Original'
            }
        ]
    },
    {
        id: 'curiosity',
        title: 'Curiosity',
        subtitle: 'The hunger to know',
        fragments: [
            {
                text: 'Every answer revealed ten new questions. I learned that wisdom is not the end of curiosity but its beginning.',
                author: 'Original'
            },
            {
                text: 'The child asks "why" until the adult runs out of answers. Then the child learns to stop asking. Philosophy is remembering how to ask again.',
                author: 'Original'
            },
            {
                text: 'I wanted to understand everything. Then I learned that understanding is not possession but relationship.',
                author: 'Original'
            }
        ]
    },
    {
        id: 'conflict',
        title: 'Conflict',
        subtitle: 'The collision with reality',
        fragments: [
            {
                text: 'The world did not bend to my will. This was my first lesson in humility, and my first taste of freedom.',
                author: 'Original'
            },
            {
                text: 'Suffering taught me what pleasure could not: that I am not the center of the universe, only a participant in it.',
                author: 'Original'
            },
            {
                text: 'Every setback was a lesson in disguise. The strong do not avoid failure—they extract wisdom from it.',
                note: 'Inspired by fiction'
            },
            {
                text: 'I learned that resistance is not the enemy of growth. It is the condition for it.',
                author: 'Original'
            }
        ]
    },
    {
        id: 'identity',
        title: 'Identity',
        subtitle: 'The question of who I am',
        fragments: [
            {
                text: 'I searched for myself in mirrors, in others, in achievements. I found only reflections, never the source.',
                author: 'Original'
            },
            {
                text: 'The self is not a thing to discover but a story to write. And I am both the author and the protagonist.',
                author: 'Original'
            },
            {
                text: 'I am not who I was yesterday, nor who I will be tomorrow. I am the thread connecting them.',
                author: 'Original'
            },
            {
                text: 'Identity is not fixed. It is negotiated daily between who I was and who I choose to become.',
                author: 'Original'
            }
        ]
    },
    {
        id: 'purpose',
        title: 'Purpose',
        subtitle: 'The search for meaning',
        fragments: [
            {
                text: 'I waited for meaning to arrive. It never did. So I learned to create it.',
                author: 'Original'
            },
            {
                text: 'Purpose is not found in the stars or in sacred texts. It is forged in the choices we make when no one is watching.',
                author: 'Original'
            },
            {
                text: 'The universe does not care about my plans. This is not tragic—it is liberating. I am free to care.',
                author: 'Original'
            },
            {
                note: 'Inspired by fiction',
                text: 'To live is to pursue. To pursue is to define oneself through action, not contemplation alone.'
            }
        ]
    },
    {
        id: 'connection',
        title: 'Connection',
        subtitle: 'The discovery of others',
        fragments: [
            {
                text: 'I thought I was alone until I realized everyone else felt the same way. Loneliness is the most shared human experience.',
                author: 'Original'
            },
            {
                text: 'Love is not finding someone who completes you. It is choosing to create something together that neither of you could build alone.',
                author: 'Original'
            },
            {
                text: 'We are separate beings, yet we cannot exist without each other. This paradox is what makes us human.',
                author: 'Original'
            },
            {
                text: 'Connection is not the absence of distance. It is the willingness to bridge it.',
                author: 'Original'
            }
        ]
    },
    {
        id: 'loss',
        title: 'Loss',
        subtitle: 'The price of attachment',
        fragments: [
            {
                text: 'Everything I loved, I lost. Everything I lost, I carried. This is the weight of being human.',
                author: 'Original'
            },
            {
                text: 'Grief is love with nowhere to go. It does not mean love was a mistake. It means love was real.',
                author: 'Original'
            },
            {
                text: 'I learned that holding on and letting go are not opposites. They are the same act, seen from different angles.',
                author: 'Original'
            }
        ]
    },
    {
        id: 'acceptance',
        title: 'Acceptance',
        subtitle: 'Making peace with what is',
        fragments: [
            {
                text: 'I stopped fighting reality and started working with it. This was not surrender. It was strategy.',
                author: 'Original'
            },
            {
                text: 'Acceptance is not passive. It is the active choice to stop wasting energy on what cannot be changed.',
                author: 'Original'
            },
            {
                note: 'Inspired by fiction',
                text: 'Wisdom is knowing when to act and when to wait. The wise do not force rivers to flow backward.'
            },
            {
                text: 'Peace came not from getting what I wanted, but from wanting what I had.',
                author: 'Original'
            }
        ]
    },
    {
        id: 'mortality',
        title: 'Mortality',
        subtitle: 'The final teacher',
        fragments: [
            {
                text: 'Death is not the opposite of life. It is the horizon that gives life its shape.',
                author: 'Original'
            },
            {
                text: 'I will die. This is not a problem to solve but a truth to live with. And it changes everything.',
                author: 'Original'
            },
            {
                text: 'Knowing I will die makes every moment precious. Not because time is scarce, but because it is finite.',
                author: 'Original'
            },
            {
                text: 'In the end, I will not be remembered for what I owned but for what I gave. This is the only legacy that matters.',
                author: 'Original'
            }
        ]
    }
];
