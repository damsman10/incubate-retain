import learners from '../assets/learners.png';
import Button from './Button';

const WhyLearnWithUs = () => {
  return (
    <div>
      <div className="top h-auto flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="left w-full md:w-[55%] md:ml-[5.03rem] px-4 md:px-0">
          <div className='w-[20.63rem] md:w-[39rem]'>
            <div className='h-[4.25rem] md:h-[7.56rem] w-full border-2 border-[#4884DF] rounded-3xl flex justify-center items-center shadow-2xl'>
              <h1 className='text-[1.69rem] md:text-[3rem] font-nexa font-[800]'>Why Learn With Us?</h1>
            </div>

            <p className='font-nexa font-light text-[1.05rem] leading-[1.4rem] md:leading-[2.25rem] md:text-[1.7rem] mt-8'>
              At RETAIN, we’re not just about ticking boxes or rushing you through a program. Our mission is to transform talents into the best versions of themselves. We take the time to ensure every learner is fully equipped to thrive in the real job market, providing hands-on training and guaranteed paid internships. We don’t stop until you’re ready to succeed and excel in your career.
            </p>

            <div className="button mt-8">
              <Button 
                text="View Courses"
                bgColor="bg-[#D6E3FF]"
                color="text-deepBlue"
              />
            </div>
          </div>
        </div>

        <div className="right w-full md:w-[43%] object-cover">
          <img src={learners} alt="learners" className='h-auto w-full md:h-[40rem]' />
        </div>
      </div>
      {/*  */}
      <div className="bottom  h-[3.21rem] py-[3.65px] px-[21.88px] md:p-0 md:h-[12.3rem] bg-[#284777] mt-8 md:flex md:items-center md:justify-center">
        <div className="stats w-full md:w-[80rem] md:px-4 h-full md:h-[10.5rem] gap-12 text-white flex justify-between items-center">
          <div className="left">
            <h1 className='text-[16.67px] md:text-[64px] font-spaceGrotesk font-700'>2000+</h1>
            <p className='font-nexa text-[7.29px] md:text-[28px] font-900 leading-[0.7rem] md:leading-[2.6rem]'>Young Africans trained</p>
          </div>
          <div className="middle">
            <h1 className='text-[16.67px] md:text-[64px] font-spaceGrotesk font-700'>100+</h1>
            <p className='font-nexa text-[7.29px] md:text-[28px] font-900 leading-[0.7rem] md:leading-[2.6rem]'>Exceptional Tech-sales talent</p>
          </div>
          <div className="right">
            <h1 className='text-[16.67px] md:text-[64px] font-spaceGrotesk font-700'>80%</h1>
            <p className='font-nexa text-[7.29px] md:text-[28px] font-900 leading-[0.7rem] md:leading-[2.6rem]'>Successful career placement</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyLearnWithUs;
