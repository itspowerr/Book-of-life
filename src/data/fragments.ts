export interface Fragment {
    id: string
    text: string
    author?: string
    theme: string
}

export const fragments: Fragment[] = [
    // Existence
    { id: '1', text: "We are the universe experiencing itself.", author: "Alan Watts", theme: "existence" },
    { id: '2', text: "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.", author: "Jean-Paul Sartre", theme: "existence" },
    { id: '3', text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde", theme: "existence" },
    { id: '4', text: "The unexamined life is not worth living.", author: "Socrates", theme: "existence" },
    { id: '5', text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche", theme: "existence" },

    // Time
    { id: '6', text: "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to'.", author: "Lao Tzu", theme: "time" },
    { id: '7', text: "The future depends on what you do today.", author: "Mahatma Gandhi", theme: "time" },
    { id: '8', text: "Time is the longest distance between two places.", author: "Tennessee Williams", theme: "time" },
    { id: '9', text: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy", theme: "time" },
    { id: '10', text: "Time takes it all, whether you want it to or not.", author: "Stephen King", theme: "time" },

    // Meaning
    { id: '11', text: "Life has no meaning. Each of us has meaning and we bring it to life.", author: "Joseph Campbell", theme: "meaning" },
    { id: '12', text: "The meaning of life is just to be alive. It is so plain and so obvious and so simple. And yet, everybody rushes around in a great panic as if it were necessary to achieve something beyond themselves.", author: "Alan Watts", theme: "meaning" },
    { id: '13', text: "Man is not made for defeat. A man can be destroyed but not defeated.", author: "Ernest Hemingway", theme: "meaning" },
    { id: '14', text: "There is no easy way from the earth to the stars.", author: "Seneca", theme: "meaning" },
    { id: '15', text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson", theme: "meaning" },

    // Identity
    { id: '16', text: "I am not what happened to me, I am what I choose to become.", author: "Carl Jung", theme: "identity" },
    { id: '17', text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle", theme: "identity" },
    { id: '18', text: "We define our identity by the things we love.", author: "Thomas Merton", theme: "identity" },
    { id: '19', text: "At every moment, I am the sum of my past.", author: "Jean-Paul Sartre", theme: "identity" },
    { id: '20', text: "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.", author: "Oscar Wilde", theme: "identity" },

    // Ethics
    { id: '21', text: "Waste no more time arguing what a good man should be. Be one.", author: "Marcus Aurelius", theme: "ethics" },
    { id: '22', text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama", theme: "ethics" },
    { id: '23', text: "It is not the man who has too little, but the man who craves more, that is poor.", author: "Seneca", theme: "ethics" },
    { id: '24', text: "No man is an island, entire of itself; every man is a piece of the continent.", author: "John Donne", theme: "ethics" },
    { id: '25', text: "Character is destiny.", author: "Heraclitus", theme: "ethics" },

    // Consciousness
    { id: '26', text: "The mind is everything. What you think you become.", author: "Buddha", theme: "consciousness" },
    { id: '27', text: "I think, therefore I am.", author: "René Descartes", theme: "consciousness" },
    { id: '28', text: "The eye through which I see God is the same eye through which God sees me.", author: "Meister Eckhart", theme: "consciousness" },
    { id: '29', text: "Consciousness is a much smaller part of our mental life than we are conscious of.", author: "Julian Jaynes", theme: "consciousness" },
    { id: '30', text: "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.", author: "Marcus Aurelius", theme: "consciousness" },
]
