// COMPONENTS
import {
  appwrite,
  boxAppwrite,
  boxExpress,
  boxJs,
  boxMongodb,
  boxNodejs,
  boxReact,
  boxSupabase,
  expressjs,
  boxTailwind,
  js,
  mongodb,
  nodejs,
  reactjs,
  supabase,
  tailwind,
  github,
  boxGitGithub,
} from '../assets/assets';
import SkillCard from './SkillCard';

const Tools = () => {
  const skillItem = [
    {
      imgSrc: js,
      label: 'JavaScript',
      desc: 'JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic content on websites. It runs in the browser and on servers (via Node.js), enabling full-stack web development.',
      imgBox: boxJs,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      imgSrc: reactjs,
      label: 'React',
      desc: 'React.js is a JavaScript library for building fast, interactive user interfaces using a component-based architecture. It efficiently updates and renders UI elements with a virtual DOM.',
      imgBox: boxReact,
      url: 'https://react.dev/',
    },
    {
      imgSrc: supabase,
      label: 'Supabase',
      desc: 'Supabase is an open-source backend-as-a-service that offers a Postgres database, authentication, storage, and real-time subscriptions. It helps developers build full-stack apps quickly without managing backend infrastructure.',
      imgBox: boxSupabase,
      url: 'https://supabase.com/',
    },
    {
      imgSrc: appwrite,
      label: 'Appwrite',
      desc: 'Appwrite is an open-source backend server providing APIs for authentication, databases, storage, and more. It simplifies backend development for web and mobile apps with built-in security and scalability.',
      imgBox: boxAppwrite,
      url: 'https://appwrite.io/',
    },
    {
      imgSrc: nodejs,
      label: 'NodeJS',
      desc: "Node.js is a JavaScript runtime built on Chrome’s V8 engine that allows running JavaScript on the server side. It's ideal for building scalable, real-time, and fast backend applications.",
      imgBox: boxNodejs,
      url: 'https://nodejs.org/docs/latest/api/',
    },
    {
      imgSrc: expressjs,
      label: 'ExpressJS',
      desc: 'Express.js is a minimal and flexible Node.js web framework used to build APIs and web applications. It simplifies routing, middleware handling, and server-side logic.',
      imgBox: boxExpress,
      url: 'https://expressjs.com/',
    },
    {
      imgSrc: mongodb,
      label: 'MongoDB',
      desc: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It's highly scalable and great for handling large volumes of unstructured data.",
      imgBox: boxMongodb,
      url: 'https://www.mongodb.com/docs/',
    },
    {
      imgSrc: tailwind,
      label: 'TailwindCSS',
      desc: 'Tailwind CSS is a utility-first CSS framework that enables rapid UI development with pre-defined classes. It promotes clean, responsive, and customizable designs directly in your HTML.',
      imgBox: boxTailwind,
      url: 'https://tailwindcss.com/docs/installation/using-vite',
    },
    {
      imgSrc: github,
      label: 'Git & Github',
      desc: 'Git is a version control system that tracks code changes, while GitHub is a platform for hosting Git repositories online. Together, they enable efficient collaboration, code management, and project tracking.',
      imgBox: boxGitGithub,
      url: 'https://docs.github.com/en/get-started',
    },
  ];

  return (
    <section
      id='tools'
      className='pt-32 md:pt-36'
    >
      <div className='container px-10 2xl:px-0 max-h-max mx-auto'>
        <h2 className='headline-2 reveal-up'>Essentals tools I use</h2>

        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div>
          {skillItem.map(({ imgSrc, label, desc, imgBox, url }, inx) => (
            <SkillCard
              key={inx}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              imgBox={imgBox}
              url={url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
