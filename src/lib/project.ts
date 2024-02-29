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
    title: "Resume Maker",
    date: "12/12/2023",
    sourceCode: "https://github.com/shashanksanket/resume-web-pdf",
    liveLink: "https://resume-web-pdf.vercel.app/"
  },
  {
    title: "Route Planning Tool",
    date: "17/02/2024",
    sourceCode: "https://github.com/shashanksanket/route-planning-tool",
    liveLink: "https://route-planning-tool.vercel.app/"
  },
  {
    title: "CMS",
    date: "25/10/2023",
    sourceCode: "https://github.com/shashanksanket/ComexDataEntry",
    liveLink: "http://cms.comexcomputer.org/"
  },
  {
    title: "UserPortal",
    date: "04/07/2022",
    sourceCode: "https://github.com/shashanksanket/UserPortal",
    liveLink: "https://github.com/shashanksanket/UserPortal/"
  },
  {
    title: "WishIt App",
    date: "04/12/2023",
    sourceCode: "https://github.com/shashanksanket/wishit",
    liveLink: "https://github.com/shashanksanket/wishit"
  },
  {
    title: "Weather App",
    date: "29/07/2022",
    sourceCode: "https://github.com/shashanksanket/Weather-App",
    liveLink: "https://github.com/shashanksanket/Weather-App"
  },
  {
    title: "Project Apsis",
    date: "11/04/2022",
    sourceCode: "https://shashanksanket.github.io/Project_Apsis/main.html",
    liveLink: "https://resume-web-pdf.vercel.app/"
  },
];