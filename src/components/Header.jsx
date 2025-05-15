// NODE MODULES...
import { useState } from 'react';

// ASSETS...
import { Menu, X } from 'lucide-react';
import { logo } from '../assets/assets';

// COMPONENTS...
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='fixed top-0 left-[7%] rounded-xl mt-2 ring-inset ring-1 ring-zinc-400/5 backdrop-blur-md w-[85%] h-20 z-10'>
      <div className='max-w-screen-2xl py-2 px-6 mx-auto flex items-center justify-between h-full'>
        <h1 className='flex items-center'>
          <img
            src={logo}
            width={40}
            height={40}
            alt='logo'
          />
          <span className='logo-title text-sm font-bold text-zinc-300'>
            Abdul Rafey
          </span>
        </h1>

        <div className=''>
          <button
            className='menu-btn md:hidden'
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X /> : <Menu />}
          </button>
          <Navbar navOpen={navOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
