// NODE MODULES...
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// ASSETS...
import {
  backend,
  frontend,
  gitAndGithub,
  python,
  rafey,
  scrollDown,
} from '../assets/assets';

const About = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.card');
    elements.forEach((elem) => {
      gsap.to(elem, {
        y: 200,
        duration: 1,
        scale: 1.1,
        yoyo: true,
        repeat: -1,
        ease: 'power1.out',
      });
    });
  }, []);

  return (
    <section
      id='about'
      className='pt-32 md:pt-36'
    >
      <div className='container px-10 2xl:px-0 max-h-max  mx-auto'>
        <h1 className='headline-2 reveal-up'>Meet the Developer</h1>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
          Passionate about crafting intuitive digital experiences, I bring ideas
          to life through clean code and thoughtful design. Always learning,
          always building.
        </p>

        <div className='w-full max-h-max bg-zinc-800  ring-inset ring-1 ring-zinc-700 rounded-xl mt-2 backdrop-blur-md'>
          <div className='sm:px-10 pt-2 mt-10 w-[80%] h-[80%] mx-auto grid gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] lg:flex lg:flex-row justify-between'>
            <div className='card w-[80%] sm:w-full 2xl:w-[400px] 2xl:h-[500px] lg:w-[320px] h-[400px] bg-zinc-700 rounded-xl overflow-hidden'>
              <img
                src={rafey}
                alt=''
                className='w-full h-full object-fill'
              />
            </div>

            <div className='about-box reveal-up'>
              <h1 className='headline-2'>Introduction</h1>
              <p className='text-zinc-400 text-sm leading-6 2xl:text-[1.21rem] 2xl:leading-[1.82rem] mt-2'>
                Hello! I'm Abdul Rafey, a passionate and self-driven Full Stack
                Web Developer with a strong command over the MERN stack
                (MongoDB, Express.js, React.js, Node.js). My journey began with
                pure curiosity and a desire to understand how things work on the
                internet. What started as a hobby soon grew into a full-blown
                passion. I enjoy solving problems, learning new things, and
                bringing ideas to life through design and development. Each day,
                I strive to grow, improve, and make an impact with the work I
                do.
              </p>
            </div>
          </div>

          <div className='sm:px-10 pt-2 mt-10 w-[80%] h-[80%] mx-auto grid gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] lg:flex lg:flex-row justify-between'>
            <div className='card w-[80%] sm:w-full lg:w-[320px] h-[400px] 2xl:w-[400px] 2xl:h-[500px] bg-zinc-700 rounded-xl overflow-hidden'>
              <img
                src={frontend}
                alt=''
                className='w-full h-full object-fill'
              />
            </div>

            <div className='about-box reveal-up'>
              <h1 className='headline-2'>Frotend Dev</h1>
              <p className='text-zinc-400 text-sm leading-6 mt-2 2xl:text-[1.21rem] 2xl:leading-[1.82rem]'>
                As a frontend developer, I focus on building clean, responsive,
                and user-friendly interfaces that ensure smooth and enjoyable
                user experiences. I pay close attention to design, usability,
                and performance to create visually engaging and functional
                digital products. Along the way, I’ve gained hands-on experience
                with HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap,
                ShadCN UI, and explored backend services like Supabase and
                Appwrite for building feature-rich applications.
              </p>
            </div>
          </div>

          <div className='sm:px-10 pt-2 mt-10 w-[80%] h-[80%] mx-auto grid gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] lg:flex lg:flex-row justify-between'>
            <div className='card w-[80%] sm:w-full lg:w-[320px] 2xl:w-[400px] 2xl:h-[500px] h-[400px] bg-zinc-700 rounded-xl overflow-hidden'>
              <img
                src={backend}
                alt=''
                className='w-full h-full object-fill'
              />
            </div>

            <div className='about-box reveal-up'>
              <h1 className='headline-2'>Backend Dev</h1>
              <p className='text-zinc-400 text-sm leading-6 mt-2 2xl:text-[1.21rem] 2xl:leading-[1.82rem]'>
                As a backend developer, I focus on building robust, scalable,
                and secure server-side systems with efficient APIs and real-time
                features. I have experience with Node.js, Express.js, MongoDB,
                and implementing authentication and authorization using JWT,
                Passport.js, and Clerk. Additionally, I’ve integrated real-time
                communication with Socket.IO, managed sessions with Redis, and
                used Docker to ensure consistency across development and
                production environments, building scalable and maintainable
                applications.
              </p>
            </div>
          </div>

          <div className='sm:px-10 pt-2 mt-10 w-[80%] h-[80%] mx-auto grid gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] lg:flex lg:flex-row justify-between'>
            <div className='card w-[80%] sm:w-full lg:w-[320px] h-[400px] 2xl:w-[400px] 2xl:h-[500px] bg-zinc-700 rounded-xl overflow-hidden'>
              <img
                src={gitAndGithub}
                alt=''
                className='w-full h-full object-fill'
              />
            </div>

            <div className='about-box reveal-up'>
              <h1 className='headline-2'>Git and GitHub</h1>
              <p className='text-zinc-400 text-sm leading-6 mt-2 2xl:text-[1.21rem] 2xl:leading-[1.82rem]'>
                I use Git and GitHub for version control, collaborating on
                projects, and maintaining code repositories. I focus on
                following best practices, including regular commits, branching
                for feature development, and resolving merge conflicts
                efficiently. GitHub allows me to collaborate seamlessly with
                teams, track issues, and deploy projects to various platforms.
                My experience with Git and GitHub ensures that my development
                process remains organized, efficient, and transparent.
              </p>
            </div>
          </div>

          <div className='sm:px-10 pt-2 mt-10 w-[80%] h-[80%] mx-auto grid gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] lg:flex lg:flex-row justify-between'>
            <div className='card w-[80%] sm:w-full lg:w-[320px] h-[400px] 2xl:w-[400px] 2xl:h-[500px] bg-zinc-700 rounded-xl overflow-hidden'>
              <img
                src={python}
                alt=''
                className='w-full h-full object-fill'
              />
            </div>

            <div className='about-box reveal-up'>
              <h1 className='headline-2'>Python Dev</h1>
              <p className='text-zinc-400 text-sm  leading-6 mt-2 2xl:text-[1.21rem] 2xl:leading-[1.82rem]'>
                As a Python developer, I focus on writing clean and efficient
                code that solves problems and automates tasks. I pay attention
                to readability and maintainability to ensure that my code is
                both effective and easy to understand. I have hands-on
                experience with Python basics such as variables, data types,
                control flow, functions, and simple file handling. While I'm
                still exploring advanced topics, I continue to build on my
                foundation to expand my Python skills further.
              </p>
            </div>
          </div>
        </div>

        <div className='relative reveal-up w-full max-h-max my-10 flex items-center justify-center'>
          <a
            href='#home'
            className='w-[100px] h-[100px] rounded-full ring-1 ring-zinc-400/20 bg-zinc-800/40 grid place-items-center transition-colors duration-500 hover:bg-pink-600 group animate-bounce'
          >
            <img
              src={scrollDown}
              alt=''
              width={30}
              height={30}
              className='group-hover:scale-110 transition-transform duration-500'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
