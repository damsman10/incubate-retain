import { useState } from "react";
import CourseReview from "./CourseReview";

const CourseOverview = (props) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="mt-8">
      <div className="tabs w-[20.94rem] flex justify-between mb-4 border-gray-300">
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
            <h2 className="text-[30px] font-700 font-nexa leading-[37.5px] mb-2">About Course</h2>
            <p dangerouslySetInnerHTML={{ __html: props.aboutcourse }} className="leading-[30px] font-nexa text-[20px]" /> 

            <div className="takeaway mt-4">
                <h2 className="text-[30px] font-700 font-nexa leading-[37.5px] mb-2">Take-Away</h2>
                
                <p dangerouslySetInnerHTML={{ __html: props.takeaway }} className="font-nexa text-[20px] leading-[30px]"
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
