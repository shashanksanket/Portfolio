interface Project {
  title: string;
  date: string;
  sourceCode: string;
  liveLink: string;
}

interface CarouselItem {
  position: number;
  elts: HTMLElement | null;
}


export const projects: Project[] = [
  {
    title: "Project 1",
    date: "xx/xx/xxxx",
    sourceCode: "https/github.com/shashanksanket/portfolio",
    liveLink: "https/github.com/shashanksanket/portfolio"
  },
  {
    title: "Project 2",
    date: "xx/xx/xxxx",
    sourceCode: "https/github.com/shashanksanket/portfolio",
    liveLink: "https/github.com/shashanksanket/portfolio"
  },
  {
    title: "Project 3",
    date: "xx/xx/xxxx",
    sourceCode: "https/github.com/shashanksanket/portfolio",
    liveLink: "https/github.com/shashanksanket/portfolio"
  },
  {
    title: "Project 4",
    date: "xx/xx/xxxx",
    sourceCode: "https/github.com/shashanksanket/portfolio",
    liveLink: "https/github.com/shashanksanket/portfolio"
  },
];

const carouselItems: CarouselItem[] = projects.map((project, index) => ({
  position: index,
  elts: null, // You can set this to null for now
}));