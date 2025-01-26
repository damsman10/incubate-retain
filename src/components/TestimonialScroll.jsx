import { useState } from "react";
import retimg from '../assets/ret-img.png'
import girlpic from '../assets/testi-girl.jpg'
import star from '../assets/Star.svg'
import lefticon from '../assets/lefticon.svg'
import righticon from '../assets/righticon.svg'

const testimonials = [
    {
        image: retimg,
        text: "The RETAIN program was a defining platform for me. I learned to develop my skills, understood team spirit and also cultivated a culture of experience.",
        name: "Mr Name",
        company: "Software Engineer - IBM",
    },
    {
        image: girlpic,
        text: "Amazing service and support. I can't imagine doing business without it.",
        name: "John Smith",
        company: "Founder of Company Y",
    },
];


const TestimonialScroll = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative">
            <div className="flex flex-col sm:flex-row sm:justify-start sm:gap-32 sm:h-[22.1rem] px-4 sm:px-8 py-8 sm:py-16">
                
                <div className="left w-2/5 sm:w-[20.5rem] h-[15rem] sm:h-[22.1rem] bg-cover bg-center rounded-[16px]"
                    style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }} />
                
                
                <div className="right w-3/5 space-y-4 sm:space-y-[32px] text-center sm:text-left">
                    <div className="stars flex justify-center sm:justify-start gap-1 items-center">
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                    <p className="font-bold text-[1.25rem] sm:text-[1.75rem] sm:h-[7rem]">{testimonials[currentIndex].text}</p>
                    <div className="author space-y-2">
                        <p className="font-bold text-[1rem] sm:text-[18px] font-clash text-[#101828]">- {testimonials[currentIndex].name}</p>
                        <p className="font-semibold text-[0.875rem] sm:text-[16px] font-clash text-[#667085]">{testimonials[currentIndex].company}</p>
                    </div>
                    <div className="buttons flex justify-center sm:justify-start gap-[16px]">
                        <button className="w-[48px] h-[48px] border-2 border-[#E4E7EC] bg-white rounded-[28px] flex justify-center items-center" 
                                onClick={prevTestimonial}>
                            <img src={lefticon} alt="prev" />
                        </button>
                        <button className="w-[48px] h-[48px] border-2 border-[#E4E7EC] bg-white rounded-[28px] flex justify-center items-center" 
                                onClick={nextTestimonial}>
                            <img src={righticon} alt="next" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialScroll;
