// COMPONENTS...
import WorkCard from './WorkCard';

// ASSETS...
import {
  aiTaskApp,
  animatedPort,
  blogApp,
  chatApp,
  crudApp,
  emsSystem,
  facebookClone,
  loanManagementSystem,
  locomotive,
  movieApp,
  musicApp,
  netflix,
  stranger,
  ticTacToe,
} from '../assets/assets';

// PROJECT ARRAYS...
const Work = () => {
  const works = [
    {
      imgSrc: musicApp,
      title: 'Music app',
      tags: ['Nodejs', 'MVC', 'Reactjs'],
      description:
        'A mern-stack music streaming app like Spotify, with user authentication, real-time chat, and admin dashboard.',
      projectLink: null,
      githubLink: 'https://github.com/AbdulRafey12389/spotify-clone--MERN-', // Add your GitHub repo
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id1', // Replace with actual video
    },
    {
      imgSrc: facebookClone,
      title: 'Facebook clone',
      tags: ['Nodejs', 'SPA', 'Reactjs'],
      description:
        'A full-featured Facebook clone built using the MERN stack (MongoDB, Express, React, Node.js). Includes user authentication, real-time posts, likes, comments, and friend requests. Responsive UI with modern design and seamless user experience across devices.',
      projectLink: null,
      githubLink: 'https://github.com/AbdulRafey12389/facebook-clone', // Add your GitHub repo
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id2',
    },
    {
      imgSrc: blogApp,
      title: 'Blog app',
      tags: ['Development', 'Nodejs', 'Ejs'],
      description:
        'A dynamic blog application built using Node.js with pure Express logic and MongoDB as the database. Implements session-based authentication for secure login and user management. Frontend rendered with EJS templates.',
      projectLink: null,
      githubLink: 'https://github.com/AbdulRafey12389/nodejs-blog-application/', // Add if you host it
      videoLink: null,
    },
    {
      imgSrc: aiTaskApp,
      title: 'Ai Tasky App',
      tags: ['Web-design', 'Development'],
      description:
        'Developed an AI-powered Task Management System using React.js, Tailwind CSS, and ShadCN UI, featuring a clean and responsive interface. Integrated Google Gemini API to generate smart task suggestions and automate workflow planning.',
      projectLink: 'https://github.com/codewithsadee-org/wealthome',
      githubLink: 'https://github.com/AbdulRafey12389/Ai_Task_Manager',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id3',
    },
    {
      imgSrc: chatApp,
      title: 'Chat app',
      tags: ['Ai', 'Development'],
      description:
        'Built an AI chatbot using React.js, Tailwind CSS, integrated with Google Gemini API for smart task assistance and real-time conversations. Designed a modern, responsive interface for smooth user interaction',
      projectLink: 'https://phoenixbyrafey.netlify.app/',
      githubLink: 'https://github.com/AbdulRafey12389/phoenix',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id4',
    },
    {
      imgSrc: loanManagementSystem,
      title: 'LM-System',
      tags: ['Dashboard', 'Supabase'],
      description:
        'Built a Loan Management System using React.js with ShadCN UI for a clean, responsive design and Supabase as the backend. Implemented a multi-step form for smooth loan application flow and real-time data handling.',
      projectLink: 'https://loan-management-system-murex.vercel.app/',
      githubLink: 'https://github.com/AbdulRafey12389/loan_Management_System',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id5',
    },
    {
      imgSrc: movieApp,
      title: 'Movie app',
      tags: ['TMDB', 'Apis'],
      description:
        'Built a Movie App using React.js and Tailwind CSS, integrated with the TMDB API to fetch and display real-time movie data. Implemented a powerful search and filter system for easy movie discovery by genre, rating, and popularity. Designed a responsive and user-friendly interface for smooth browsing across all devices',
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
      githubLink: 'https://movieflixbyrafey.netlify.app/',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id5',
    },
    {
      imgSrc: crudApp,
      title: 'Crud app',
      tags: ['HTML', 'CSS', 'JAVASCRIPT'],
      description:
        'Built a beautiful CRUD application using HTML, CSS, and JavaScript with a clean and modern user interface. Implemented create, read, update, and delete functionalities with smooth interactions and responsive design. Focused on delivering an intuitive user experience with visually appealing layouts and transitions..',
      projectLink: 'https://abdulrafey12389.github.io/NoteKeeper/',
      githubLink: 'https://github.com/AbdulRafey12389/NoteKeeper',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id5',
    },
    {
      imgSrc: emsSystem,
      title: 'EM-System',
      tags: ['JAVASCRIPT', 'SUPABASE'],
      description:
        'Developed an Employee Management System using HTML, CSS, JavaScript, and Supabase for backend operations. Included full CRUD functionality for employee profiles, task assignment, profile editing, and employee deletion through an admin dashboard. Designed a efficient employee and task management.',
      projectLink: 'https://ems-system-rafey.netlify.app/',
      githubLink:
        'https://github.com/AbdulRafey12389/Employee-Management-System',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id5',
    },
    {
      imgSrc: stranger,
      title: 'Stranger Clone',
      tags: ['HTML', 'CSS', 'GSAP'],
      description:
        'Created a "Stranger Things: Chapter One" website clone using HTML, CSS, Locomotive Scroll, and GSAP with ScrollTrigger for immersive animations. Implemented smooth scrolling effects, cinematic transitions, and scene-based storytelling for a dramatic user experience.',
      projectLink: 'https://abdulrafey12389.github.io/StrangerClone/',
      githubLink: 'https://github.com/AbdulRafey12389/StrangerClone',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id5',
    },
    {
      imgSrc: netflix,
      title: 'Netflix Clone',
      tags: ['HTML', 'CSS'],
      description:
        'Built a Netflix-inspired landing page using HTML and CSS, featuring a responsive layout with seamless animations. Designed a clean, modern interface with movie thumbnails, hover effects, and a navigation bar.',
      projectLink: 'https://abdulrafey12389.github.io/Netflix/',
      githubLink: 'https://github.com/AbdulRafey12389/Netflix',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id5',
    },
    {
      imgSrc: locomotive,
      title: 'Locomotive Web',
      tags: ['Locomotive', 'GSAP'],
      description:
        'Created a Locomotive Scroll-based website clone using HTML, CSS, and JavaScript, featuring smooth scrolling effects and parallax animations. Implemented a modern, responsive design with dynamic content reveal and interactive elements as the user scrolls.',
      projectLink: 'https://abdulrafey12389.github.io/locoMotive/',
      githubLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
      videoLink: 'https://github.com/AbdulRafey12389/locoMotive',
    },
    {
      imgSrc: ticTacToe,
      title: 'Tic Tac Toe',
      tags: ['HTML', 'CSS', 'JAVSCRIPT'],
      description:
        'Developed a Tic-Tac-Toe game using HTML, CSS, and JavaScript, featuring an interactive and responsive interface. Implemented game logic with player turn transitions, win detection, and a restart button for a smooth user experience.',
      projectLink: 'https://abdulrafey12389.github.io/TikTacToc/',
      githubLink: 'https://github.com/AbdulRafey12389/TikTacToc',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id5',
    },
    {
      imgSrc: animatedPort,
      title: 'Animated Portfolio',
      tags: ['HTML', 'CSS', 'JAVSCRIPT'],
      description:
        'Created an animated portfolio using HTML, CSS, and JavaScript, featuring smooth transitions and dynamic effects. Implemented engaging animations for sections like project showcases, skill highlights, and contact forms, providing an interactive and visually appealing user experience.',
      projectLink: 'https://abdulrafey12389.github.io/Animated-portfolio/',
      githubLink: 'https://github.com/AbdulRafey12389/Animated-portfolio',
      videoLink: 'https://www.youtube.com/watch?v=your_demo_id5',
    },
  ];

  return (
    <section
      id='work'
      className=''
    >
      <div className='container px-10 2xl:px-0 max-h-max  mx-auto'>
        <h2 className='headline-2 mb-8 mt-32 reveal-up'>
          My portfolio highlights
        </h2>

        <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
          {works.map(
            (
              {
                imgSrc,
                title,
                tags,
                description,
                projectLink,
                githubLink,
                videoLink,
              },
              index,
            ) => (
              <WorkCard
                key={index}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                description={description}
                projectLink={projectLink}
                githubLink={githubLink}
                videoLink={videoLink}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
