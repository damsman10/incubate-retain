import React, { useState } from 'react';
import fullstar from '../assets/fullstar.svg';
import halfstar from '../assets/halfstar.svg';

const CourseReview = ({ courseId }) => {
  // State for reviews
  const [reviews, setReviews] = useState({
    [courseId]: [
      {
        name: 'John Doe',
        rating: 4.5,
        review: 'This course was fantastic! I learned so much about product design and the hands-on projects really helped me apply what I learned.',
      },
      {
        name: 'Jane Smith',
        rating: 5.0,
        review: 'Great course with a lot of valuable content. The instructor was knowledgeable and supportive throughout the process.',
      },
    ],
  });

  // State for new review form
  const [newReview, setNewReview] = useState({
    name: '',
    rating: '',
    review: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.rating || !newReview.review) return alert('Please fill all fields');

    // Add the new review to the reviews state
    setReviews((prev) => ({
      ...prev,
      [courseId]: [...(prev[courseId] || []), { ...newReview, rating: parseFloat(newReview.rating) }],
    }));

    // Clear the form
    setNewReview({ name: '', rating: '', review: '' });
  };

  return (
    <div className="mt-4">
      <h2 className="text-[30px] font-700 font-nexa leading-[37.5px] mb-4">Course Reviews</h2>
      <div className="space-y-6">
        {reviews[courseId]?.map((review, index) => (
          <div key={index} className="review p-4 border rounded-lg shadow-md bg-white">
            <div className="flex items-center mb-2">
              <h3 className="font-nexa text-[20px] mr-2">{review.name}</h3>
              <div className="flex items-center mb-2">
                {[...Array(Math.floor(review.rating))].map((_, i) => (
                  <img key={i} src={fullstar} alt="star" />
                ))}
                {review.rating % 1 !== 0 && <img src={halfstar} alt="half star" />}
                <span className="ml-2">{review.rating.toFixed(1)}</span>
              </div>
            </div>
            <p className="md:leading-[30px] font-nexa text-[14px] leading-[21px] md:text-[20px]">{`"${review.review}"`}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded-lg bg-white shadow-md">
        <h3 className="font-nexa text-[20px] mb-4">Add Your Review</h3>
        <input
          type="text"
          name="name"
          value={newReview.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full mb-3 p-2 border rounded-lg"
        />
        <input
          type="number"
          name="rating"
          value={newReview.rating}
          onChange={handleChange}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          step="0.5"
          className="w-full mb-3 p-2 border rounded-lg"
        />
        <textarea
          name="review"
          value={newReview.review}
          onChange={handleChange}
          placeholder="Your Review"
          className="w-full mb-3 p-2 border rounded-lg"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default CourseReview;
