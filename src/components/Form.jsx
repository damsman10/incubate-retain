import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Other form submission logic goes here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Enter your details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        
        <div className="flex gap-4">
            <label>
                <input
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    placeholder="First name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </label>
          <input
            type="text"
            {...register('lastName', { required: 'Last name is required' })}
            placeholder="Last name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>
        
        {/* Email */}
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        
        {/* Phone Number */}
        <div className="flex gap-4">
          <select {...register('countryCode')} className="p-2 border border-gray-300 rounded-md">
            <option value="NGN">NGN</option>
          </select>
          <input
            type="tel"
            {...register('phoneNumber')}
            placeholder="+234 (555) 000-0000"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        {/* Country and Gender */}
        <div className="flex gap-4">
          <select
            {...register('country', { required: 'Country is required' })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Country</option>
            {/* Add country options here */}
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
          
          <select
            {...register('gender', { required: 'Gender is required' })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
        </div>
        
        {/* Experience Level and Employment Status */}
        <div className="flex gap-4">
          <select
            {...register('experienceLevel', { required: 'Experience level is required' })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Experience level</option>
          </select>
          {errors.experienceLevel && <p className="text-red-500 text-sm">{errors.experienceLevel.message}</p>}
          
          <select
            {...register('employmentStatus', { required: 'Employment status is required' })}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Employment status</option>
          </select>
          {errors.employmentStatus && <p className="text-red-500 text-sm">{errors.employmentStatus.message}</p>}
        </div>
        
        {/* Education Level */}
        <select
          {...register('educationLevel', { required: 'Education level is required' })}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Education level</option>
        </select>
        {errors.educationLevel && <p className="text-red-500 text-sm">{errors.educationLevel.message}</p>}
        
        {/* Learning Path */}
        <select
          {...register('learningPath', { required: 'Learning path is required' })}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select learning path</option>
        </select>
        {errors.learningPath && <p className="text-red-500 text-sm">{errors.learningPath.message}</p>}
        
        {/* Program Structure */}
        <select
          {...register('programStructure', { required: 'Program structure is required' })}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Preferred program structure</option>
        </select>
        {errors.programStructure && <p className="text-red-500 text-sm">{errors.programStructure.message}</p>}
        
        {/* How did you hear about us */}
        <select
          {...register('referralSource')}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">How did you hear about us</option>
        </select>
        
        {/* Marketing Consent */}
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register('marketingConsent')}
            className="mr-2"
          />
          <label>I accept communication and marketing emails from Salesplat</label>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700"
        >
          Enroll course
        </button>
      </form>
    </div>
  );
};

export default Form;
