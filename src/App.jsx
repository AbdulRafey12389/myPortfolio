// NODE MODULES...
import { ReactLenis } from 'lenis/react';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// REGISTER GSAP PLUGINS...
gsap.registerPlugin(useGSAP, ScrollTrigger);

// COMPONENTS...
import About from './components/About';
import Header from './components/Header';
import Skill from './components/Skill';
import Work from './components/work';
import Hero from './Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ASSETS...
import { loadingCircle, rLogo } from './assets/assets';

const App = () => {
  const boxRef = useRef(null);
  const [totalScrollPercent, setTotalScrollPercent] = useState(0);
  const cursorRef = useRef(null);
  const loadingRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  window.addEventListener('load', function () {
    setTimeout(() => {
      loadingRef.current.classList.add('loaded');
      setIsLoaded(true);
    }, 1000);
  });

  window.addEventListener('scroll', function () {
    const bodyHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollEndPos = bodyHeight - windowHeight;

    const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

    setTotalScrollPercent(totalScrollPercent.toFixed(0));
  });

  // CHANGE CURSORELEMENT POSITION BASED ON CURSOR MOVE...
  document.body.addEventListener('mousemove', (event) => {
    cursorRef.current.style.top = `${event.clientY}px`;
    cursorRef.current.style.left = `${event.clientX}px`;
  });

  // ADD HOVERED OR DEACTIVATED CLASS ON CURSORELEMENT...
  const elements = document.querySelectorAll('.hoverable, button, a, h1, h2');
  elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
      cursorRef.current.classList.add('hovered');
    });

    element.addEventListener('mouseout', () => {
      cursorRef.current.classList.remove('hovered');
    });
  });

  // ADD DISABLED CLASS ON CURSORELEMENT, WHEN MOUSE OUT OF BODY...
  document.body.addEventListener('mouseout', () => {
    cursorRef.current.classList.add('disabled');
  });

  // REMOVE DIABLED CLASS ON CURSORELEMENT, WHEN MOUSE IN THE BODY...
  document.body.addEventListener('mouseover', () => {
    cursorRef.current.classList.remove('disabled');
  });

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: '-100 bottom',
          end: 'bottom 80%',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  }, []);

  return (
    <ReactLenis root>
      <div
        className='loading hidden md:block'
        ref={loadingRef}
      >
        <img
          src={rLogo}
          width='55'
          height='55'
          alt='loading'
          className='img'
        />
        <img
          src={loadingCircle}
          width='70'
          height='70'
          alt='loading-circle'
          className='circle'
        />
      </div>
      <div
        ref={cursorRef}
        className='cursor md:block hidden'
      ></div>
      <a
        href='#home'
        ref={boxRef}
        className={` border-dashed border border-pink-600 text-pink-600 w-[4.5rem] h-[4.5rem] rounded-full fixed bottom-10 right-10 z-20 grid place-items-center text-base font-bold ${totalScrollPercent > 1 ? '-translate-x-0' : 'translate-x-96'} transition-all duration-500 ease-in-out`}
      >
        {totalScrollPercent}%
      </a>
      <Header />
      <main className={`${isLoaded ? 'block' : 'hidden'}`}>
        <Hero />
        <Work />
        <Skill />
        <About />
        <Contact />
      </main>
      <Footer isLoaded={isLoaded} />
    </ReactLenis>
  );
};

export default App;
