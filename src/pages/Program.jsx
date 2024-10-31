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
        <div className='m-8 border-2'>
          <div className="ProgramName w-full h-[4.29rem] md:w-[23rem] md:h-[5rem] rounded-[1.25rem] bg-deepBlue text-center mt-6 border border-black flex items-center justify-center">
            <h1 className={`text-[1.8rem] md:text-[2rem] font-600 leading-[2.25rem] font-clash text-white`}>
              {program.name}
            </h1>
          </div>

          <div className="sides">
            <div className="main">
              <img src= {program.image} alt="" />
            </div>
            <div className="aside">

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