import { logo } from '../assets/assets';

const sitemap = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Skills',
    href: '#tools',
  },
  {
    label: 'Meet the developer',
    href: '#about',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/codewithsadee-org',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/codewithsadee',
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/codewithsadee_',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/codewithsadee',
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/codewithsadee',
  },
];

const Footer = ({ isLoaded }) => {
  return (
    <footer className={`section ${isLoaded ? 'block' : 'hidden'}`}>
      <div className='container pt-[16rem]  md:pt-[7rem] lg:pt-0 px-10 2xl:px-0 h-[77vh]  mx-auto'>
        <div className='lg:grid lg:grid-cols-2'>
          <div className='mb-10'>
            <h2 className='headline-1 mb-8 lg:max-w-[12ch] reveal-up'>
              Let&apos;s work together today!
            </h2>

            <button
              type='submit'
              className='btn btn-primary justify-center reveal-up'
            >
              Start project
            </button>
          </div>

          <div className='grid grid-cols-2 gap-4 lg:pl-20'>
            <div>
              <p className='mb-2 reveal-up'>Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 hover:underline reveal-up'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='mb-2 reveal-up'>Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target='_blank'
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 hover:underline reveal-up'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between py-5 mb-8'>
          <a
            href='/'
            className='logo reveal-up'
          >
            <img
              src={logo}
              width={40}
              height={40}
              alt='logo'
            />
          </a>

          <p className='text-zinc-500 text-sm reveal-up'>
            &copy; 2025 <span className='text-zinc-200'>AbdulRafey</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
