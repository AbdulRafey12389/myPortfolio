// NODE MODULES...
import PropTypes from 'prop-types';
import { useCallback, useRef, useState } from 'react';
import gsap from 'gsap';

// ICONS
import {
  ChevronDown,
  ChevronRight,
  Github,
  Image,
  Linkedin,
  MoveUpRight,
  Video,
} from 'lucide-react';

const WorkCard = ({
  imgSrc,
  title,
  tags,
  description,
  projectLink,
  githubLink,
  videoLink,
}) => {
  const [descOpen, setDescOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState('image');
  const videoRotationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const cardRef = useRef(null);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 724) {
      setIsMobile(window.innerWidth);
    } else {
      setIsMobile(window.innerWidth);
    }
  });

  const handleChangeVideo = useCallback(() => {
    if (videoOpen === 'video') {
      setVideoOpen('image');
    } else {
      setVideoOpen('video');
    }

    gsap.to(videoRotationRef.current, {
      rotateY: videoOpen === 'video' ? 0 : 180,
      duration: 1.5,
      ease: 'elastic.out(1, 0.6)',
    });
  }, [videoOpen]);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 20;
    const rotateX = ((y - centerY) / centerY) * -20;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 2000,
      transformOrigin: 'center',
      ease: 'power2.out',
      duration: 0.5,
      scale: 1.1,
    });
  }, []);

  const handleMouseLeave = useCallback((e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      ease: 'power3.out',
      scale: 1,
      duration: 0.5,
    });
  }, []);
  return (
    <div style={{ perspective: 2000 }}>
      <div
        onMouseMove={isMobile <= 724 ? null : handleMouseMove}
        onMouseLeave={isMobile <= 724 ? null : handleMouseLeave}
        className='relative reveal-up p-4 max-h-max overflow-hidden rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-inset ring-zinc-50/5 transition-colors'
        ref={cardRef}
      >
        <figure
          className=' img-box aspect-square rounded-lg mb-4 '
          ref={videoRotationRef}
          style={{ perspective: '2000px' }}
        >
          {videoOpen === 'image' ? (
            <img
              src={imgSrc}
              alt=''
              className='img-cover '
            />
          ) : (
            <video
              src={videoLink}
              autoPlay
              loop
              muted
              className='img-cover'
            />
          )}
        </figure>

        <div>
          <div className='flex items-center justify-between relative'>
            <div>
              <h1 className='ml-2 text-3xl md:text-[20px] font-bold'>
                {title}
              </h1>
              <div className='flex gap-2 items-center ml-2 mt-2'>
                {tags.map((tag, indx) => (
                  <span
                    key={indx}
                    className='tags '
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              className='menu-btn'
              onClick={() => setDescOpen(true)}
            >
              <ChevronRight className='font-bold' />
            </button>
          </div>

          <div className='flex items-center justify-between mt-10 mx-2 '>
            <div className='flex gap-4'>
              <button className='menu-btn'>
                <Linkedin size={19} />
              </button>

              <button className='menu-btn relative'>
                <Github size={19} />
                <a
                  href={githubLink}
                  target='_blank'
                  className='absolute top-0 left-0 inset-0 z-10'
                ></a>
              </button>

              <button
                className='menu-btn'
                onClick={handleChangeVideo}
              >
                {videoOpen === 'video' ? (
                  <Image size={19} />
                ) : (
                  <Video size={19} />
                )}
              </button>
            </div>
            <button
              onClick={() =>
                projectLink
                  ? window.open(projectLink, '_blank')
                  : alert(
                      "This project couldn't be deployed due to some issues. Feel free to check out the code on my GitHub.",
                    )
              }
              className='btn btn-primary'
            >
              <MoveUpRight size={18} />
            </button>
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 w-full h-[155px] rounded-t-2xl p-4 rounded-2xl bg-zinc-700 backdrop-blur-2xl hover:bg-zinc-600  ring-inset ring-1 ring-zinc-50/5 transition-transform ease-in-out  ${descOpen ? '' : ' translate-y-full'}`}
        >
          <div className='flex items-center justify-between'>
            <h2 className='ml-2 text-2xl font-bold'>Description</h2>
            <button
              className='menu-btn'
              onClick={() => setDescOpen(false)}
            >
              <ChevronDown className='font-bold' />
            </button>
          </div>

          <p className='mt-3 mx-2 font-semibold text-zinc-300 text-sm line-clamp-3'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

WorkCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
};

export default WorkCard;
