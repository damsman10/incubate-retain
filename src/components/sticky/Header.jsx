import logo from '../../assets/headerlogo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import hamburger from '../../assets/hamburger.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className={`flex flex-row justify-between items-center gap-4 h-[96px] py-2 px-4`}>
      
      <Link to="/" className=''>
        <img src={logo} alt="logo" className='h-10 w-auto' />
      </Link>

      <nav className={`w-full md:w-auto ${isOpen ? 'fixed inset-0 top-[96px] bg-white z-50 py-4 border-b border-gray-300' : 'hidden'} md:flex md:items-center md:bg-transparent md:relative`}>
        <ul className='flex flex-col md:flex-row gap-8 p-4 md:p-0'>
          <li>
            <Link 
              to="program/tech-sales" 
              className='hover:text-blue-500 active:text-blue-700'
              onClick={handleLinkClick}
            >
              Tech Sales
            </Link>
          </li>
          <li>
            <Link 
              to="program/financial-management" 
              className='hover:text-blue-500 active:text-blue-700'
              onClick={handleLinkClick}
            >
              Financial Management
            </Link>
          </li>
          <li>
            <Link 
              to="program/product-design" 
              className='hover:text-blue-500 active:text-blue-700'
              onClick={handleLinkClick}
            >
              Product Design
            </Link>
          </li>
          <li>
            <Link 
              to="program/product-marketing" 
              className='hover:text-blue-500 active:text-blue-700'
              onClick={handleLinkClick}
            >
              Product Marketing
            </Link>
          </li>
          <li>
            <Link 
              to="program/customer-success" 
              className='hover:text-blue-500 active:text-blue-700'
              onClick={handleLinkClick}
            >
              Customer Success
            </Link>
          </li>
          <li>
            <Link 
              to="program/graphic-design" 
              className='hover:text-blue-500 active:text-blue-700'
              onClick={handleLinkClick}
            >
              Graphics Design
            </Link>
          </li>
          <li>
            <Link 
              to=".faq" 
              className='hover:text-blue-500 active:text-blue-700'
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
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
