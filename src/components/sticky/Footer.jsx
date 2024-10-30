import { Link } from 'react-router-dom';
import footerlogo from '../../assets/logofooter.svg';
import whatsapp from '../../assets/whatsapp.svg';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import youtube from '../../assets/youtube.svg';
import instagram from '../../assets/instagram.svg';

const Footer = () => {
  return (
    <div className="mt-4 bg-[#284777] pt-[4rem] md:pt-[6.8rem] pb-8 flex flex-col">
      <div className="top flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center justify-between w-[90%] md:w-[85%] m-auto text-white">
        <div className="left w-full md:w-[25%] flex flex-col gap-8 mb-8 md:mb-0">
          <img src={footerlogo} alt="footer logo" className='w-[142px] md:w-[192px]' />

          <p className='text-[1rem] leading-[1.5rem] font-inter'>
            Our goal at Incubate is to help you grow exponentially in income and revenue through training and development.
          </p>
        </div>

        <div className="right w-full md:w-auto flex md:justify-end">
          <ul className='flex flex-wrap md:flex-row justify-between md:justify-center items-center gap-8 text-[1rem] font-raleway'>
            <li>
              <Link to="/finmag" className='hover:border-b-2 border-gray-400'>
                Learning paths
              </Link>
            </li>
            <li>
              <Link to="/finmag" className='hover:border-b-2 border-gray-400'>
                Program structure
              </Link>
            </li>
            <li>
              <Link to="/finmag" className='hover:border-b-2 border-gray-400'>
                Download brochure
              </Link>
            </li>
            <li>
              <Link to="/finmag" className='hover:border-b-2 border-gray-400'>
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className='w-[90%] mt-12 m-auto' />

      <div className="bottom mt-6 m-auto w-[90%]">
        <div className="copyright gap-6 md:gap-0 text-white md:px-4 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
          <p className='font-raleway'>© 2023 Salesplat Technologies All rights reserved.</p>
          <div className="socials flex md:justify-center items-center gap-6 md:gap-4 mt-4 md:mt-0">
            <img src={whatsapp} alt="WhatsApp" />
            <img src={twitter} alt="Twitter" />
            <img src={linkedin} alt="LinkedIn" />
            <img src={facebook} alt="Facebook" />
            <img src={youtube} alt="YouTube" />
            <img src={instagram} alt="Instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
