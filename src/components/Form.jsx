import { useState } from 'react';
import axios from 'axios';


const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: 'NGN',
    phoneNumber: '',
    country: 'Nigeria',
    gender: '',
    experienceLevel: '',
    employmentStatus: '',
    educationLevel: '',
    learningPath: '',
    programStructure: '',
    referralSource: '',
    marketingConsent: false,
  });

  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.experienceLevel) newErrors.experienceLevel = 'Experience level is required';
    if (!formData.employmentStatus) newErrors.employmentStatus = 'Employment status is required';
    if (!formData.educationLevel) newErrors.educationLevel = 'Education level is required';
    if (!formData.learningPath) newErrors.learningPath = 'Learning path is required';
    if (!formData.programStructure) newErrors.programStructure = 'Program structure is required';
    if (!formData.referralSource) newErrors.referralSource = 'Referral source is required';

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });


    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // console.log('Form submitted:', formData);

    const dataToSend = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      user_email: formData.email,
      user_phone: formData.phoneNumber,
      user_country: formData.country,
      gender: formData.gender,
      experience_level: formData.experienceLevel,
      employment_status: formData.employmentStatus,
      eduacation: formData.educationLevel,
      learning_path: formData.learningPath,
      program_structure: formData.programStructure,
      heard_about_us: formData.referralSource,
      marketing_consent: formData.marketingConsent,
    };

    try {
      console.log ("Submitting data to API...");
      

      const response = await axios.post("https://apiincubate-production.up.railway.app/api/enroll", dataToSend);

      console.log("API response:", response.data);
      console.log("Response Status:", response.status);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: 'NGN',
        phoneNumber: '',
        country: 'Nigeria',
        gender: '',
        experienceLevel: '',
        employmentStatus: '',
        educationLevel: '',
        learningPath: '',
        programStructure: '',
        referralSource: '',
        marketingConsent: false,
      });

      alert ("Form submitted successfully!");

    } catch (error) {
      if (error.response) {
        console.error ("Error response: ", error.response.data)
        alert(`Submission failed: ${error.response.data.message || "An error occurred"}`)
      } else {
        console.error("Error:", error.message);
        alert ("Failed to submit the form. Please try again later.")
      }
    }
    
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
                className="w-full py-[12px] px-[16px] md:py-[17.56px] md:px-[23.41px] border-[1.46px] border-black rounded-[8.78px] bg-white text-[#434343] font-inter text-[16px] md:text-[23.41px]"
              />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
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
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
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
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                className="flex-1 py-2 ml-4 bg-white w-10 text-[#434343] font-inter text-[16px] md:text-[23.41px] rounded-r-md focus:outline-none"
              />
            </div>
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
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
                <option value="Nigeria">Nigeria</option>
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
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
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
                <option value="Newbie">Newbie</option>
                <option value="Little experience">Little experience</option>
                <option value="Experienced">Experienced</option>
              </select>
              {errors.experienceLevel && <p className="text-red-500 text-sm">{errors.experienceLevel}</p>}
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
                <option value="Not Employed">Not Employed</option>
                <option value="Employed">Employed</option>
                <option value="Self employed">Self employed</option>
                <option value="Student">Student</option>
              </select>
              {errors.employmentStatus && <p className="text-red-500 text-sm">{errors.employmentStatus}</p>}
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
              <option value="O'Levels">O'Levels</option>
              <option value="OND">OND</option>
              <option value="HND">HND</option>
              <option value="B.Sc">B.Sc</option>
              <option value="M.Sc">M.Sc</option>
              <option value="Ph.D">Ph.D</option>
            </select>
            {errors.educationLevel && <p className="text-red-500 text-sm">{errors.educationLevel}</p>}
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
              <option value="Tech sales">Tech sales</option>
              <option value="Product design">Product design</option>
              <option value="Financial management">Financial management</option>
              <option value="Product marketing">Product marketing</option>
              <option value="Customer success">Customer success</option>
              <option value="Graphic design">Graphic design</option>
            </select>
            {errors.learningPath && <p className="text-red-500 text-sm">{errors.learningPath}</p>}
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
              <option value="Part-time">Part-time</option>
              <option value="Full-time">Full-time</option>
              <option value="Online">Online</option>
              <option value="Physical">Physical</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            {errors.programStructure && <p className="text-red-500 text-sm">{errors.programStructure}</p>}
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
              <option value="Through friends">Through friends</option>
              <option value="Google">Google</option>
              <option value="Youtube">Youtube</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter (X)</option>
            </select>
            {errors.referralSource && <p className="text-red-500 text-sm">{errors.referralSource}</p>}
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
            className="w-full h-[58px] font-nexa text-[14px] md:text-[30px] p-2 bg-[#001B3E] border-[1px] border-[#415F91] text-white rounded-[10px] font-bold hover:bg-blue-700"
          >
            Enroll course
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;