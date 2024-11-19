import girlpic from '../assets/girlpic.png';
import Button from './Button';

const LearnGrowEarn = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between gap-8 md:gap-12 md:ml-[5.03rem]">
      <div className="left px-4 md:px-0 w-full md:w-[41.5%] md:mt-[5rem]">
        <h1 className="text-[2.12rem] md:text-[3.75rem] font-nexa leading-[2.12rem] md:leading-[3.75rem] font-[700]">
          Learn, Grow, and Earn with <span className='text-[#4884DF] font-[800]'>Incubate</span>
        </h1>

        <p className='text-[1.13rem] md:text-[1.875rem] font-nexa mt-[20px] md:mt-[40px] leading-[30px] md:leading-[36px] text-[#191C20]'>
          Kick start your career with the RETAIN program! Get the skills you need and a guaranteed paid internship with earnings between N70,000 to N150,000.
        </p>
        <br />

        <p className='text-[1.13rem] font-nexa md:text-[1.875rem] md:mt-[10px] leading-[30px] mb-[30px] md:mb-[40px]'>
          Real experience and real pay to launch your professional journey.
        </p>

        <Button 
          text="Learn More"
          bgColor="bg-deepBlue"
          color="text-white"
        />
      </div>

      <div className="right w-full md:w-[50%] h-auto min-h-[23.44rem] md:min-h-[48.88rem] rounded-bl-[14.49rem] md:rounded-bl-[31.25rem] bg-cover bg-center" style={{backgroundImage: `url(${girlpic})`}}>
        
        
      </div>
    </div>
  );
}

export default LearnGrowEarn;
