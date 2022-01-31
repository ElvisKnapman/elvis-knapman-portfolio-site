export type Project = {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  techStack: string[];
  onlineUrl: string;
  githubUrl: string;
};

import movieScreenshot from '../public/images/movie-site-screen.jpg';
import hockeyScreenshot from '../public/images/hockey-shop-screenshot.png';
import portfolioScreenshot from '../public/images/portfolio-screenshot.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Movie App',
    image: movieScreenshot,
    description:
      'Movie app created with some inspiration from sites like Rotten Tomatoes. Shows popular, top rated and trending movies. Has a search feature to search the database for specific movies (search implements debounce to prevent unnecessary api calls).',
    techStack: ['React', 'React Router', 'Redux', 'SASS modules'],
    onlineUrl: 'https://elvisk-movies.netlify.app',
    githubUrl: 'https://github.com/ElvisKnapman/movie-app',
  },
  {
    id: 2,
    title: 'Hockey E-commerce App',
    image: hockeyScreenshot,
    description:
      'Pure front-end application that shows some product data and implements a shopping cart system with quantity and delete controls. Also has test Stripe payment integration.',
    techStack: ['React', 'React Router', 'Redux Toolkit', 'CSS modules'],
    onlineUrl: 'https://ek-hockey.netlify.app',
    githubUrl: 'https://github.com/ElvisKnapman/hockey-ecommerce-store',
  },
  {
    id: 3,
    title: 'Portfolio site',
    image: portfolioScreenshot,
    description:
      'The beautiful site for the even more beautiful software developer that you are currently viewing.',
    techStack: ['NextJS', 'TypeScript', 'SASS modules'],
    onlineUrl: 'https://knapman.dev',
    githubUrl: 'https://github.com/ElvisKnapman/elvis-knapman-portfolio-site',
  },
];
