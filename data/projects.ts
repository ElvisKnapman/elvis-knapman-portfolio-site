export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  techStack: string[];
  onlineUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Movie App',
    image: 'fdklfd',
    description: 'Description for movie app',
    techStack: ['React', 'React Router', 'Redux', 'SASS modules'],
    onlineUrl: 'https://elvisk-movies.netlify.app',
    githubUrl: 'https://github.com/ElvisKnapman/movie-app',
  },
  {
    id: 2,
    title: 'Hockey E-commerce App',
    image: 'fdlkfjlkd',
    description: 'Description for e-commerce app',
    techStack: ['React', 'React Router', 'Redux Toolkit', 'CSS modules'],
    onlineUrl: 'https://ek-hockey.netlify.app',
    githubUrl: 'https://github.com/ElvisKnapman/hockey-ecommerce-store',
  },
  {
    id: 3,
    title: 'Portfolio site',
    image: 'fdlfjld',
    description: 'Description for portfolio site',
    techStack: ['NextJS', 'TypeScript', 'SASS modules'],
    onlineUrl: 'https://knapman.dev',
    githubUrl: 'https://github.com/ElvisKnapman/elvis-knapman-portfolio-site',
  },
];
