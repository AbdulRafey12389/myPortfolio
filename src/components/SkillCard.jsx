// NODE MODULES...
import React, { useCallback } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';

// COMPONENTS...
import BUttonEffect from './BUttonEffect';

const SkillCard = ({ imgSrc, label, desc, imgBox, url }) => {
  const boxRef = useRef(null);

  const handleMouseMove = useCallback((event) => {
    const top =
      event.clientY - boxRef.current.getBoundingClientRect().height / 2;
    const left =
      event.clientX - boxRef.current.getBoundingClientRect().width / 2;

    gsap.set(boxRef.current, { display: 'block' });

    gsap.to(boxRef.current, {
      top,
      left,
      transformOrigin: 'center',
      ease: 'power2.out',
      duration: 1,
      scale: 1.1,
      opacity: 1,
      stagger: 0.8,
    });
  }, []);

  const handleMouseLeave = useCallback((event) => {
    const top =
      event.clientY - boxRef.current.getBoundingClientRect().height / 2;
    const left =
      event.clientX - boxRef.current.getBoundingClientRect().width / 2;

    gsap.to(boxRef.current, {
      opacity: 0,
      duration: 0.5,
      scale: 1,
      top,
      left,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(boxRef.current, { display: 'none' });
      },
    });
  }, []);

  return (
    <div className='bg-zinc-800 hover:bg-zinc-700 ring-inset ring-1 ring-zinc-50/5 rounded-2xl h-[200px] transition-colors group flex items-center justify-between pr-4 relative mb-10'>
      <div className=' h-full'>
        <figure className='bg-zinc-50/10 hidden group-hover:bg-zinc-900 p-2 rounded-l-2xl h-full w-56 sm:grid place-items-center'>
          <img
            width={150}
            height={150}
            src={imgSrc}
            alt={label}
          />
        </figure>
      </div>
      <div>
        <h1 className='pl-6 text-3xl lg:text-5xl text-zinc-100 font-bold mb-3'>
          {label}
        </h1>
        <p className='pl-6 text-zinc-400 font-semibold w-full text-sm line-clamp-5 lg:text-base lg:w-[500px]'>
          {desc}
        </p>
      </div>
      <div className='flex-1 flex items-center justify-end sm:pl-10 lg:pr-10'>
        <BUttonEffect
          onMouseDown={handleMouseLeave}
          url={url}
        />
      </div>

      <div
        ref={boxRef}
        className='fixed w-[280px] h-[340px] rounded-lg bg-zinc-600'
      >
        <img
          src={imgBox}
          alt={label}
          className='img-cover rounded-lg'
        />
      </div>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className='absolute top-0 left-0 w-full opacity-0 h-full rounded-xl bg-zinc-500'
      ></div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgBox: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SkillCard;
