import React from 'react';
import Button from './Button';

const Program = ({ img, name, details }) => {
  return (
    <div className='mt-8'>
      <div className="top">
        <img src={img} alt="" className='md:h-auto h-[22.17rem] object-cover w-full md:max-h-[37rem]' />
      </div>

      <div className="bottom flex flex-col md:flex-row justify-between mt-2 w-[90%] m-auto">
        <div className="left flex-1">
          <div className="ProgramName shadow-inner-custom w-full h-[4.29rem] md:w-[23rem] md:h-[5rem] rounded-[1.25rem] bg-deepBlue text-center mt-6 border border-black flex items-center justify-center">
            <h1 className={`text-[1.8rem] md:text-[2rem] font-600 leading-[2.25rem] font-clash text-white`}>
              {name}
            </h1>
          </div>

          <div className='ProgramDetails w-full max-w-[36.3rem] mt-4'>
            <p className="font-nexa font-800 text-[1.04rem] md:text-[1.75rem] leading-[1.39rem] md:leading-[2.1rem]">
              {details}
            </p>
          </div>
        </div>

        <div className="right flex items-end mt-7 md:mt-0">
          <Button 
            text="Click to Enroll"
            bgColor="bg-deepBlue"
            color="text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Program;
