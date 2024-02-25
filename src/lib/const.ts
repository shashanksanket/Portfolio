export const name = "Shashank Sanket";
export const summary = " I’m a full-stack web developer and I work remotely from Bharat."
export const detailedSummary = "Meet Shashank , a talented web developer with a passion for crafting elegant and functional digital solutions. Armed with expertise in HTML,CSS, JavaScript, and more, Their keen eye for detail,coupled with their commitment to staying abreast of industry trends,ensures that every project they undertake is not only visually stunning but also optimizedfor peak performance."
export const skills = [
  { "name": "HTML", "image":"/assets/skills/html.svg", "type": "frontend", "projectLink": "https://example.com/html" },
  { "name": "Javascript", "image":"/assets/skills/javascript.svg", "type": "frontend", "projectLink": "https://example.com/javascript" },
  { "name": "Tailwind", "image":"/assets/skills/tailwind.svg", "type": "frontend", "projectLink": "https://example.com/tailwind" },
  { "name": "NodeJs", "image":"/assets/skills/nodeJs.svg", "type": "backend", "projectLink": "https://example.com/nodejs" },
  { "name": "ReactJs", "image":"/assets/skills/reactjs.svg", "type": "frontend", "projectLink": "https://example.com/reactjs" },
  { "name": "NextJs", "image":"/assets/skills/nextjs.svg", "type": "frontend", "projectLink": "https://example.com/nextjs" },
  { "name": "VueJs", "image":"/assets/skills/vuejs.svg", "type": "frontend", "projectLink": "https://example.com/vuejs" },
  { "name": "ExpressJs", "image":"/assets/skills/express.svg", "type": "backend", "projectLink": "https://example.com/expressjs" },
  { "name": "Feathers", "image":"/assets/skills/feathers.svg", "type": "backend", "projectLink": "https://example.com/feathers" },
  { "name": "Django", "image":"/assets/skills/django.svg", "type": "backend", "projectLink": "https://example.com/django" },
  { "name": "PostgreSQL", "image":"/assets/skills/postgresql.svg", "type": "database", "projectLink": "https://example.com/postgresql" },
  { "name": "CSS", "image":"/assets/skills/css.svg", "type": "frontend", "projectLink": "https://example.com/css" },
  { "name": "MongoDb", "image":"/assets/skills/mongodb.svg", "type": "database", "projectLink": "https://example.com/mongodb" },
  { "name": "git", "image":"/assets/skills/git.svg", "type": "utility", "projectLink": "https://example.com/git" },
  { "name": "Python", "image":"/assets/skills/python.svg", "type": "backend", "projectLink": "https://example.com/python" },
  { "name": "Web3.Js", "image":"/assets/skills/web3js.svg", "type": "frontend", "projectLink": "https://example.com/web3js" },
];

export interface ISkill {
  name?: string,
  projectLink?: string,
  image?: string,
  type?: string
}