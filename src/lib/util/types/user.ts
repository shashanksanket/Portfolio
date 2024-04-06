export interface IUser {
  summarySection:{
    name: string,
    summary: string,
    resumeLink: string,
  },
  aboutSection:{
    githubLink: string,
    email: string,
    instagramLink: string,
    linkedinLink: string,
    detailedSummary: string,
  }
  skills: {
    name: string,
    image: Blob,
    type: string,
    projectLink: string,
  }[],
  projects: {
    title: string,
    date: string,
    sourceCode: string,
    liveLink: string,
    image: Blob,
  }[],
}