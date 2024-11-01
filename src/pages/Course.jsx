import { useParams } from 'react-router-dom'
import CourseData from '../CourseData'
import Aside from '../components/Aside';
import CourseOverview from '../components/CourseOverview';


const Program = () => {

  const { programSlug } = useParams();

  const program = CourseData.find(p => p.slug === programSlug);

  if (!program) {
    <h2>Program not found!</h2>
  }

  return (
    <div>
      <div className="top m-auto">
        <div className='m-12'>
          <div className="ProgramName mb-[50px] w-full h-[4.29rem] md:w-[23rem] md:h-[5rem] rounded-[1.25rem] bg-deepBlue text-center border border-black flex items-center justify-center">
            <h1 className={`text-[1.8rem] md:text-[2rem] font-600 leading-[2.25rem] font-clash text-white`}>
              {program.name}
            </h1>
          </div>

          <div className="sides flex flex-col md:flex-row justify-between gap-[50px]">
            <div className="main w-[63%] ">
              <img src= {program.image} alt="" className='object-cover h-[27.8rem]'/>

              <CourseOverview
              takeaway = {program.takeaway}
              aboutcourse = {program.aboutcourse}
              />
            </div>

            <Aside />
            
          </div>
        </div>
      </div>


      <div className="bottom form">

      </div>
    </div>
  )
}

export default Program