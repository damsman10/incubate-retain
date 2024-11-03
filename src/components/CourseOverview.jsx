import { useState } from "react";
import CourseReview from "./CourseReview";

const CourseOverview = (props) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="mt-8">
      <div className="tabs w-[19.7rem] md:w-[20.94rem] flex justify-between mb-4">
        <button
          className={`tab text-[24px] cursor-pointer leading-[36px] font-nexa pb-2 ${activeTab === 'overview' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Course Overview
        </button>
        <button
          className={`tab text-[24px] cursor-pointer leading-[36px] font-nexa pb-2 ${activeTab === 'review' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('review')}
        >
          Reviews
        </button>
      </div>

      <div>
        {activeTab === 'overview' && (
          <div className="mt-4">
            <h2 className="text-[20px] leading-[25px] md:text-[30px] font-bold font-nexa md:leading-[37.5px] mb-2">About Course</h2>
            <p dangerouslySetInnerHTML={{ __html: props.aboutcourse }} className="md:leading-[30px] font-nexa text-[14px] leading-[21px] md:text-[20px]" /> 

            <div className="takeaway mt-4">
                <h2 className="text-[20px] leading-[25px] md:text-[30px] font-bold font-nexa md:leading-[37.5px] mb-2">Take-Away</h2>
                
                <p dangerouslySetInnerHTML={{ __html: props.takeaway }} className="md:leading-[30px] font-nexa text-[14px] leading-[21px] md:text-[20px]"
                />

                
            </div>
          </div>

          
        )}
        {activeTab === 'review' && (
          <CourseReview />
        )}
      </div>

    </div>
  );
};

export default CourseOverview;
