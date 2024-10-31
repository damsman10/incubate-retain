import { useParams } from 'react-router-dom'
import ProgramData from '../ProgramData'


const Program = () => {

  const { programSlug } = useParams();

  const program = ProgramData.find(p => p.slug === programSlug);

  if (!program) {
    <h2>Program not found!</h2>
  }

  return (
    <div>
      <div className="top m-auto h-screen">
        <div className='m-12 border-2'>
          <div className="ProgramName mb-[50px] w-full h-[4.29rem] md:w-[23rem] md:h-[5rem] rounded-[1.25rem] bg-deepBlue text-center border border-black flex items-center justify-center">
            <h1 className={`text-[1.8rem] md:text-[2rem] font-600 leading-[2.25rem] font-clash text-white`}>
              {program.name}
            </h1>
          </div>

          <div className="sides flex flex-col md:flex-row justify-between gap-[50px]">
            <div className="main w-[63%] ">
              <img src= {program.image} alt="" className='object-cover h-[27.8rem]'/>
            </div>
            <div className="aside w-[27.8rem]">
              <div className="top h-[42.38rem]">
                <div className="enrol-frame border-2 bg-[#F9F9FF] rounded-[10px] h-[21.2rem]">
                  <div className='w-[24.4rem] m-auto mt-[2.5rem] flex flex-col gap-[1.88rem]'>
                    <div className="enrol h-[3.63rem] border-[1px] border-[#415F91] rounded-[10px] bg-[#001B3E] flex justify-center items-center cursor-pointer">
                      <h1 className='font-nexa text-[1.88rem] text-white leading-[2.34rem]'>Enroll Course</h1>
                    </div>
                    <div className="download-curr h-[3.63rem] border-[1px] border-[#415F91] rounded-[10px] bg-[#FFFFFF] flex justify-center items-center cursor-pointer">
                      <h1 className='font-nexa text-[1.88rem] text-[#415F91] leading-[2.34rem]'>Download Curriculum</h1>
                    </div>  
                  </div>

                  <div className="duration flex items-center justify-center w-[24.06rem] ml-[18px] gap-[15px] mt-16">
                      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 2H14.25V1.25C14.25 1.05109 14.171 0.860322 14.0303 0.71967C13.8897 0.579018 13.6989 0.5 13.5 0.5C13.3011 0.5 13.1103 0.579018 12.9697 0.71967C12.829 0.860322 12.75 1.05109 12.75 1.25V2H5.25V1.25C5.25 1.05109 5.17098 0.860322 5.03033 0.71967C4.88968 0.579018 4.69891 0.5 4.5 0.5C4.30109 0.5 4.11032 0.579018 3.96967 0.71967C3.82902 0.860322 3.75 1.05109 3.75 1.25V2H1.5C1.10218 2 0.720644 2.15804 0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5V18.5C0 18.8978 0.158035 19.2794 0.43934 19.5607C0.720644 19.842 1.10218 20 1.5 20H16.5C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2794 18 18.8978 18 18.5V3.5C18 3.10218 17.842 2.72064 17.5607 2.43934C17.2794 2.15804 16.8978 2 16.5 2ZM3.75 3.5V4.25C3.75 4.44891 3.82902 4.63968 3.96967 4.78033C4.11032 4.92098 4.30109 5 4.5 5C4.69891 5 4.88968 4.92098 5.03033 4.78033C5.17098 4.63968 5.25 4.44891 5.25 4.25V3.5H12.75V4.25C12.75 4.44891 12.829 4.63968 12.9697 4.78033C13.1103 4.92098 13.3011 5 13.5 5C13.6989 5 13.8897 4.92098 14.0303 4.78033C14.171 4.63968 14.25 4.44891 14.25 4.25V3.5H16.5V6.5H1.5V3.5H3.75ZM16.5 18.5H1.5V8H16.5V18.5ZM10.125 11.375C10.125 11.5975 10.059 11.815 9.9354 12C9.81179 12.185 9.63608 12.3292 9.43052 12.4144C9.22495 12.4995 8.99875 12.5218 8.78052 12.4784C8.56229 12.435 8.36184 12.3278 8.2045 12.1705C8.04717 12.0132 7.94002 11.8127 7.89662 11.5945C7.85321 11.3762 7.87549 11.15 7.96064 10.9445C8.04578 10.7389 8.18998 10.5632 8.37498 10.4396C8.55999 10.316 8.7775 10.25 9 10.25C9.29837 10.25 9.58452 10.3685 9.79549 10.5795C10.0065 10.7905 10.125 11.0766 10.125 11.375ZM14.25 11.375C14.25 11.5975 14.184 11.815 14.0604 12C13.9368 12.185 13.7611 12.3292 13.5555 12.4144C13.35 12.4995 13.1238 12.5218 12.9055 12.4784C12.6873 12.435 12.4868 12.3278 12.3295 12.1705C12.1722 12.0132 12.065 11.8127 12.0216 11.5945C11.9782 11.3762 12.0005 11.15 12.0856 10.9445C12.1708 10.7389 12.315 10.5632 12.5 10.4396C12.685 10.316 12.9025 10.25 13.125 10.25C13.4234 10.25 13.7095 10.3685 13.9205 10.5795C14.1315 10.7905 14.25 11.0766 14.25 11.375ZM6 15.125C6 15.3475 5.93402 15.565 5.8104 15.75C5.68679 15.935 5.51109 16.0792 5.30552 16.1644C5.09995 16.2495 4.87375 16.2718 4.65552 16.2284C4.43729 16.185 4.23684 16.0778 4.0795 15.9205C3.92217 15.7632 3.81502 15.5627 3.77162 15.3445C3.72821 15.1262 3.75049 14.9 3.83564 14.6945C3.92078 14.4889 4.06498 14.3132 4.24998 14.1896C4.43499 14.066 4.6525 14 4.875 14C5.17337 14 5.45952 14.1185 5.6705 14.3295C5.88147 14.5405 6 14.8266 6 15.125ZM10.125 15.125C10.125 15.3475 10.059 15.565 9.9354 15.75C9.81179 15.935 9.63608 16.0792 9.43052 16.1644C9.22495 16.2495 8.99875 16.2718 8.78052 16.2284C8.56229 16.185 8.36184 16.0778 8.2045 15.9205C8.04717 15.7632 7.94002 15.5627 7.89662 15.3445C7.85321 15.1262 7.87549 14.9 7.96064 14.6945C8.04578 14.4889 8.18998 14.3132 8.37498 14.1896C8.55999 14.066 8.7775 14 9 14C9.29837 14 9.58452 14.1185 9.79549 14.3295C10.0065 14.5405 10.125 14.8266 10.125 15.125ZM14.25 15.125C14.25 15.3475 14.184 15.565 14.0604 15.75C13.9368 15.935 13.7611 16.0792 13.5555 16.1644C13.35 16.2495 13.1238 16.2718 12.9055 16.2284C12.6873 16.185 12.4868 16.0778 12.3295 15.9205C12.1722 15.7632 12.065 15.5627 12.0216 15.3445C11.9782 15.1262 12.0005 14.9 12.0856 14.6945C12.1708 14.4889 12.315 14.3132 12.5 14.1896C12.685 14.066 12.9025 14 13.125 14C13.4234 14 13.7095 14.1185 13.9205 14.3295C14.1315 14.5405 14.25 14.8266 14.25 15.125Z" fill="black"/>
                      </svg>
                      <p className=' text-[20px] font-nexa'>Validity :&nbsp;&nbsp;&nbsp;&nbsp;For the duration of study</p>
                  </div>
                </div>
                <div className="stat border-2 bg-[#F9F9FF] rounded-[10px] h-[21.2rem]">

                </div>
              </div>

              <div className="bottom course-includes">

              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="bottom">

      </div>
    </div>
  )
}

export default Program