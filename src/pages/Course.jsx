import { useParams } from 'react-router-dom'
import CourseData from '../CourseData'
import Aside from '../components/Aside';
import CourseOverview from '../components/CourseOverview';
import Form from '../components/Form';


const Program = () => {

  const { programSlug } = useParams();

  const program = CourseData.find(p => p.slug === programSlug);

  if (!program) {
    <h2>Program not found!</h2>
  }

  return (
    <div>
      {/* <div className="top border-4"> */}
        <div className='mx-[14.5px] m-0 md:m-12'>
          <div className="ProgramName mb-[25px] md:mb-[50px] w-[9.16rem] h-[2.23rem] md:w-[23rem] md:h-[5rem] rounded-[8.91px] bg-deepBlue text-center border border-black flex items-center justify-center shadow-inner-custom">
            <h1 className={`text-[1.02rem] leading-[1.02rem] md:text-[2rem] font-600 md:leading-[2.25rem] font-clash text-white`}>
              {program.name}
            </h1>
          </div>

          <div className="sides flex flex-col md:flex-row justify-between gap-[50px]">
            <div className="main w-full md:w-[63%]">

              
              <img src= {program.image} alt="" className='object-cover min-h-[12.39rem] md:min-h-[28.8rem]'/>

              <CourseOverview
              takeaway = {program.takeaway}
              aboutcourse = {program.aboutcourse}
              />
            </div>

            <Aside />
            
          </div>
        </div>
      {/* </div> */}


      <div className="bottom form">
        <Form />
      </div>
    </div>
  )
}

export default Program