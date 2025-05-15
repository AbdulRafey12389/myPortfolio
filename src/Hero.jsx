// COMPONENTS...

import { useRef, useState } from 'react';
import TextTitle from './components/TextTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import VideoCard from './components/VideoCard';
import { ArrowDownToLine } from 'lucide-react';
import { logo, rLogo } from './assets/assets';

function Hero() {
  const titleRef = useRef();
  const [rotate, setRotate] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 724) {

      setRotate({ resultX: 0, resultY: 0 });
      setIsMobile(window.innerWidth);
    } else {
      setIsMobile(window.innerWidth);
    }
  });

  const handleMaouseMove = (event) => {
    let { width, height, x, y } = titleRef.current.getBoundingClientRect();

    const resultX = event.clientX - width / 2 - x;
    const resultY = event.clientY - height / 2 - y;

    setRotate({ resultX, resultY });
  };

  useGSAP(() => {
    gsap.to(titleRef.current, {
      transform: `rotateX(${rotate.resultY / 25}deg) rotateY(${rotate.resultX / 25}deg)`,
      duration: 1.5,
      ease: 'elastic.out(1, 0.3)',
    });
  }, [rotate.resultX, rotate.resultY]);

  const handleMaouseLeave = () => {
    setRotate({ resultX: 0, resultY: 0 });
  };

  return (
    <section
      id='home'
      className='pt-32 md:pt-36'
    >
      <div className='container px-10 2xl:px-0 h-[77vh]  mx-auto'>
        <div
          className='h-full relative flex items-start justify-start w-full bg-zinc-800 rounded-xl backdrop-blur-lg'
          style={{ perspective: '1000px' }}
          onMouseMove={isMobile <= 724 ? () => {} : handleMaouseMove}
          onMouseLeave={isMobile <= 724 ? () => {} : handleMaouseLeave}
        >
          <div className='hoverable w-full max-h-max absolute z-10 rounded-xl top-0 grid place-items-end pt-8 pr-10'>
            <img
              src={rLogo}
              alt='rafey-logo'
            />
          </div>
          <VideoCard />
          <TextTitle titleRef={titleRef} />

          <div className='w-full h-[120px] absolute z-10 rounded-xl bottom-0 flex sm:flex-row flex-col items-center justify-center sm:justify-between pl-[4.7rem] pr-10'>
            <div className='flex flex-col items-center gap-1 sm:gap-0  sm:items-start justify-center'>
              <button className='btn btn-outline nax-w-max relative'>
                Download Cv <ArrowDownToLine size={16} />{' '}
                <a
                  href='./myCv.pdf'
                  download
                  className='inset-0 absolute top-0 left-0 z-10'
                ></a>
              </button>
              <p className='text-zinc-400 mt-1 font-semibold text-[12px] w-[40ch] pl-1 sm:text-start text-center'>
                Download my CV to explore my skills, experience, and journey as
                a Full Stack Developer.
              </p>
            </div>
            <img
              src={logo}
              alt='logo'
              className='rotate-90 hoverable sm:block hidden'
            />
          </div>
          <div className='absolute w-full h-full rounded-xl opacity-85 bg-black shadow-md'></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
