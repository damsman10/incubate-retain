import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: 'NGN',
    phoneNumber: '',
    country: '',
    gender: '',
    experienceLevel: '',
    employmentStatus: '',
    educationLevel: '',
    learningPath: '',
    programStructure: '',
    referralSource: '',
    marketingConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

  };

  return (
    <div className="frame">
      <div className="w-[85%] md:w-[43.88rem] mx-auto mt-10 py-6 bg-white rounded-md">
        <h2 className="text-[21.5px] sm:text-[43.9px] font-[600] font-raleway mb-6 text-center">Enter your details</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[16px]"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Phone Number</label>
            <div className="py-[5px] px-[14px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white flex">
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="rounded-[8.78px] bg-white rounded-l-md text-[#434343] font-inter text-[16px] md:text-[23.41px]"
              >
                <option value="NGN">NGN</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+234 (555) 000-0000"
                className="flex-1 py-2 ml-4 bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px] rounded-r-md focus:outline-none"
              />
            </div>
          </div>


          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="country" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
              >
                <option value="">Select Country</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="gender" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="experienceLevel" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Experience Level</label>
              <select
                id="experienceLevel"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
              >
                <option value="">Experience level</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="employmentStatus" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Employment Status</label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
              >
                <option value="">Employment status</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="educationLevel" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Education Level</label>
            <select
              id="educationLevel"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
            >
              <option value="">Education level</option>
            </select>
          </div>

          <div>
            <label htmlFor="learningPath" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Learning Path</label>
            <select
              id="learningPath"
              name="learningPath"
              value={formData.learningPath}
              onChange={handleChange}
              className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
            >
              <option value="">Select learning path</option>
            </select>
          </div>

          <div>
            <label htmlFor="programStructure" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">Program Structure</label>
            <select
              id="programStructure"
              name="programStructure"
              value={formData.programStructure}
              onChange={handleChange}
              className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
            >
              <option value="">Preferred program structure</option>
            </select>
          </div>

          <div>
            <label htmlFor="referralSource" className="block mb-2 text-[14px] md:text-[20.5px] font-inter font-medium text-black">How Did You Hear About Us?</label>
            <select
              id="referralSource"
              name="referralSource"
              value={formData.referralSource}
              onChange={handleChange}
              className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
            >
              <option value="">Select option</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="marketingConsent"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="mr-2 bg-white custom-checkbox"
            />
            <label htmlFor="marketingConsent" className="text-black py-2 md:py-6 text-[12.47px] leading-[15.47px] md:text-[20px] md:leading-[20px] font-inter">
              I accept communication and marketing emails from Salesplat
            </label>
          </div>

          <button
            type="submit"
            className="w-full h-[58px] font-nexa text-[30px] p-2 bg-[#001B3E] border-[1px] border-[#415F91] text-white rounded-[10px] font-bold hover:bg-blue-700"
          >
            Enroll course
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;