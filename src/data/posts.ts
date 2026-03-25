export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    id: "day-one",
    title: "Day One — Why I'm doing this",
    date: "2026-03-25",
    excerpt: "I finally decided to take the plunge. CAT 2026 it is. Here's why I'm documenting every step.",
    content: `I've been thinking about this for months now. MBA has always been at the back of my mind, but the fear of CAT kept pushing it away. Today, I'm done running from it.

CAT is not just an exam — it's a test of discipline, consistency, and how well you handle pressure over months. And that's exactly why I want to document this journey. Not to show off, not to inspire anyone, just to hold myself accountable.

**My starting point:**
- Quant: Decent. Did okay in engineering math but CAT quant is a different beast.
- VARC: This scares me. Reading has never been my strong suit.
- DILR: Genuinely no idea where I stand.

The plan for now is simple: study, reflect, write. Every few days, I'll drop a note here about what I learned, what tripped me up, and what's working.

No sugar-coating. No motivational fluff. Just the raw experience of preparing for one of India's toughest exams.

Let's see where this goes.`,
    tags: ["start", "motivation"],
  },
  {
    id: "first-mock",
    title: "First mock — a humbling experience",
    date: "2026-03-28",
    excerpt: "Took my first full-length CAT mock. The results were... educational.",
    content: `Okay so I took my first mock today. Full 2 hours. Timed. No breaks.

**Score: 87/228**

Yeah. Not great. But honestly? I expected worse. Here's the breakdown:

- **VARC:** 24/72 — I ran out of time on the RC passages. Read too slowly, got stuck on two passages that I should've skipped.
- **DILR:** 18/72 — Attempted only 2 sets. Couldn't crack the third one and panicked.
- **Quant:** 45/84 — This was relatively better. Got most of the arithmetic and algebra right. Geometry needs serious work.

**Key takeaways:**
1. Time management is everything. I spent 25 minutes on one RC passage. That's insane.
2. I need to learn to skip. Not every question deserves my time.
3. DILR is going to need structured practice. Can't just "figure it out" on the spot.

The mock was from a popular test series. The interface felt clunky at first but I got used to it. Need to practice more just to get comfortable with the format.

Tomorrow: Starting a reading habit. 1 article a day, minimum. Building speed before building comprehension.`,
    tags: ["mock", "analysis"],
  },
  {
    id: "reading-habit",
    title: "Building a reading habit from zero",
    date: "2026-04-02",
    excerpt: "VARC won't fix itself. Time to actually start reading regularly.",
    content: `It's been a week since the first mock and I've been reading every single day. Here's what I've been doing:

**Daily reading list:**
- 1 editorial from The Hindu or Indian Express
- 1 long-form article from Aeon or The Atlantic
- Summary in 3 lines (forces me to actually understand what I read)

**What I've noticed:**
- Day 1-3: Painful. I'd zone out after 2 paragraphs.
- Day 4-5: Started getting better at identifying the main argument.
- Day 6-7: Could summarize most articles without re-reading.

The trick isn't reading more — it's reading actively. I've started underlining the thesis, noting counter-arguments, and identifying the tone. This is exactly what CAT tests.

For quant, I've been doing 20 problems a day from Arun Sharma. Focusing on number systems and percentages this week. The basics need to be rock solid before I move to advanced topics.

**Study hours this week:** ~28 hours
**Feeling:** Cautiously optimistic. Long way to go.`,
    tags: ["varc", "habits", "study-plan"],
  },
];
