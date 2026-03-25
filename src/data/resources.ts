export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
}

export const resources: Resource[] = [
  {
    id: "arun-sharma-quant",
    title: "How to Prepare for Quantitative Aptitude for the CAT — Arun Sharma",
    description: "The bible for CAT quant prep. Covers everything from basics to advanced topics.",
    url: "https://www.amazon.in/dp/9355325703",
  },
  {
    id: "word-power-made-easy",
    title: "Word Power Made Easy — Norman Lewis",
    description: "Best book to build vocabulary. Essential for VARC.",
    url: "https://www.amazon.in/dp/8183071007",
  },
  {
    id: "the-hindu",
    title: "The Hindu — Editorial Page",
    description: "Daily reading for RC practice. Helps build reading speed and comprehension.",
    url: "https://www.thehindu.com/opinion/editorial/",
  },
  {
    id: "cat-previous-papers",
    title: "CAT Previous Year Papers",
    description: "Solve past papers to understand the exam pattern and difficulty level.",
    url: "https://iimcat.ac.in/",
  },
  {
    id: "unacademy-cat",
    title: "Unacademy CAT Prep",
    description: "Free lectures and mock tests for all three sections.",
    url: "https://unacademy.com/goal/cat/VLEMN",
  },
];
