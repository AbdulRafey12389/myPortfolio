// NODE MODULES...
import { useRef } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';

// ICONS
import { MoveRight } from 'lucide-react';

const BUttonEffect = ({ onMouseDown, url }) => {
  const btnRef = useRef(null);
  const iconRef = useRef(null);
  const bgRef = useRef(null);

  const handleEnter = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.set(bgRef.current, {
      top: y,
      left: x,
      transform: 'translate(-50%, -50%) scale(0)',
    });

    gsap.to(bgRef.current, {
      scale: 10,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(btnRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
    });

    gsap.to(iconRef.current, {
      x: 6,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleLeave = () => {
    gsap.to(bgRef.current, {
      scale: 0,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.to(btnRef.current, {
      scale: 1,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.to(iconRef.current, {
      x: 0,
      duration: 1,
      ease: 'power2.out',
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseDown={onMouseDown}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className='relative z-10 overflow-hidden btn !rounded-full !h-14 w-16 flex items-center justify-center bg-zinc-800 transition-transform group'
    >
      {/* Expanding White BG Layer */}
      <span
        ref={bgRef}
        className='absolute w-32 h-32 bg-white rounded-full pointer-events-none z-0'
        style={{ transform: 'translate(-50%, -50%) scale(0)', top: 0, left: 0 }}
      ></span>

      {/* Icon on top */}
      <span
        ref={iconRef}
        className='relative z-10 text-white group-hover:text-black'
      >
        <MoveRight />
      </span>

      <a
        href={url}
        target='_blank'
        className='absolute z-10 top-0 left-0 inset-0'
      ></a>
    </button>
  );
};

BUttonEffect.propTypes = {
  onMouseDown: PropTypes.func,
  url: PropTypes.string,
};

export default BUttonEffect;
