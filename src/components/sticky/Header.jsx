import logo from '../../assets/headerlogo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import hamburger from '../../assets/hamburger.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='flex flex-row justify-between items-center gap-4 h-[96px] mt-1 ml-1 py-2 px-4 border-b-2 md:border-2 border-[#C4C6D0]'>
      <img src={logo} alt="logo" className='h-10 w-auto' />

      <nav className={`w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:bg-transparent bg-white md:relative absolute left-0 top-[96px] md:top-auto transition-all duration-300`}>
        <ul className='flex flex-col md:flex-row gap-4 p-4 md:p-0'>
          <li>
            <Link to="/" className='hover:border-b-2 border-gray-400'>Tech Sales</Link>
          </li>
          <li>
            <Link to="program/financial-management" className='hover:border-b-2 border-gray-400'>Financial Management</Link>
          </li>
          <li>
            <Link to="program/product-design" className='hover:border-b-2 border-gray-400'>Product Design</Link>
          </li>
          <li>
            <Link to="program/product-marketing" className='hover:border-b-2 border-gray-400'>Product Marketing</Link>
          </li>
          <li>
            <Link to="program/customer-success" className='hover:border-b-2 border-gray-400'>Customer Success</Link>
          </li>
          <li>
            <Link to="program/graphic-design" className='hover:border-b-2 border-gray-400'>Graphics Design</Link>
          </li>
          <li>
            <Link to=".faq" className='hover:border-b-2 border-gray-400'>FAQ</Link>
          </li>
        </ul>
      </nav>

      <button className="hidden md:block h-[3.25rem] w-[8.25rem] rounded-full py-[0.875rem] px-[1.25rem] bg-deepBlue hover:bg-deepBlue/75 text-white cursor-pointer font-nexa font-bold leading-[24px]">
        Get Started
      </button>

      <button
        className='md:hidden h-[56px] w-[72px] rounded-full bg-[#ECF0FF] flex items-center justify-center ml-auto'
        onClick={toggleMenu}
      >
        <img src={hamburger} alt="Menu" />
      </button>
    </div>
  );
}

export default Header;
