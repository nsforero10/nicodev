declare module "*.svg" {
  const content: any;
  export default content;
}

interface Project {
  name: string;
  description: string;
  image: string;
  stack: string[];
  links: {
    github: string;
    live: string;
  };
}
