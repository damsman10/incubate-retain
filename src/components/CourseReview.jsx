import fullstar from '../assets/fullstar.svg'
import halfstar from '../assets/halfstar.svg'

const CourseReview = () => {
  return (
    <div className="mt-4">
            {/* <h2 className="text-[30px] font-700 font-nexa leading-[37.5px] mb-4">Course Reviews</h2> */}
            <div className="space-y-6">
              <div className="review p-4 border rounded-lg shadow-md bg-white">
                <div className="flex items-center mb-2">
                  <h3 className="font-nexa text-[20px] mr-2">John Doe</h3>
                  <div className="flex items-center mb-2">
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={halfstar} alt="" />  
                    <span className="ml-2">4.5</span>
                </div>
                </div>
                <p className="leading-[30px]">"This course was fantastic! I learned so much about product design and the hands-on projects really helped me apply what I learned."</p>
              </div>
              <div className="review p-4 border rounded-lg shadow-md bg-white">
                <div className="flex items-center mb-2">
                  <h3 className="font-nexa text-[20px] mr-2">Jane Smith</h3>
                  <div className="flex items-center mb-2">
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <span className="ml-2">5.0</span>
                    </div>
                </div>
                <p className="leading-[30px]">"Great course with a lot of valuable content. The instructor was knowledgeable and supportive throughout the process."</p>
              </div>
              <div className="review p-4 border rounded-lg shadow-md bg-white">
                <div className="flex items-center mb-2">
                  <h3 className="font-nexa text-[20px] mr-2">Alex Johnson</h3>
                  <div className="flex items-center mb-2">
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <span className="ml-2">5.0</span>
                  </div>
                </div>
                <p className="leading-[30px]">"I really enjoyed the collaborative projects and the focus on real-world applications. Highly recommend!"</p>
              </div>
              <div className="review p-4 border rounded-lg shadow-md bg-white">
                <div className="flex items-center mb-2">
                  <h3 className="font-nexa text-[20px] mr-2">Emily Davis</h3>
                  <div className="flex items-center mb-2">
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <img src={fullstar} alt="" />
                    <span className="ml-2">5.0</span>
                  </div>
                </div>
                <p className="leading-[30px]">"An excellent course that helped me gain confidence in my design skills. I appreciated the feedback from my peers."</p>
              </div>
            </div>
          </div>
  )
}

export default CourseReview