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
    <div className="p-4">
      <div className="max-w-screen-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-center">Enter your details</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block mb-2 text-lg font-medium text-black">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-800 text-base"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block mb-2 text-lg font-medium text-black">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-800 text-base"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-lg font-medium text-black">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-800 text-base"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-lg font-medium text-black">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-md bg-white">
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="py-3 px-4 bg-white text-gray-800 border-r border-gray-300 rounded-l-md"
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
                className="flex-1 py-3 px-4 bg-white text-gray-800 rounded-r-md focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="country" className="block mb-2 text-lg font-medium text-black">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-800"
              >
                <option value="">Select Country</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="gender" className="block mb-2 text-lg font-medium text-black">Gender</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-800"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="experienceLevel" className="block mb-2 text-lg font-medium text-black">Experience Level</label>
              <select
                id="experienceLevel"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-800"
              >
                <option value="">Experience level</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="employmentStatus" className="block mb-2 text-lg font-medium text-black">Employment Status</label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-800"
              >
                <option value="">Employment status</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="educationLevel" className="block mb-2 text-lg font-medium text-black">Education Level</label>
            <select
              id="educationLevel"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-800"
            >
              <option value="">Education level</option>
            </select>
          </div>

          <div>
            <label htmlFor="learningPath" className="block mb-2 text-lg font-medium text-black">Learning Path</label>
            <select
              id="learningPath"
              name="learningPath"
              value={formData.learningPath}
              onChange={handleChange}
              className="w-full py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-800"
            >
              <option value="">Select learning path</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="marketingConsent"
              name="marketingConsent"
              checked={formData.marketingConsent}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="marketingConsent" className="text-gray-800">
              I accept communication and marketing emails from Salesplat
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-800 text-white text-lg font-bold rounded-md hover:bg-blue-700"
          >
            Enroll Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
