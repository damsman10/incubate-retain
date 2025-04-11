import { useState } from "react";
import Ezihe from '../assets/ezihe.jpg'
import Israel from '../assets/Israel.png'
import Josephine from '../assets/Josephine.jpg'
import Esther from '../assets/Esther.png'
import star from '../assets/Star.svg'
import lefticon from '../assets/lefticon.svg'
import righticon from '../assets/righticon.svg'

const testimonials = [
    {
        image: Ezihe,
        text: "I completed the Customer Success course, which included 3 months of training followed by a 6-month paid internship. The experience exceeded my expectations and played a pivotal role in setting me up for career growth. I highly recommend it to anyone looking to break into tech.",
        name: "Ezihe Daberechi",
        company: "RETAIN Program graduate",
    },
    {
        image: Israel,
        text: "Learning a tech skill has always been my desire but I was afraid of doing coding... and I recommend RETAIN program to everybody like me looking to learn a tech skill that do not involve coding.",
        name: "Israel Blessed",
        company: "RETAIN Program graduate",
    },
    {
        image: Josephine,
        text: "I feel ready for my career as a sales professional now as I'm confident in handling any sales challenge. It's a great program for anyone starting in tech sales.",
        name: "Josephine",
        company: "RETAIN Program graduate",
    },
    {
        image: Esther,
        text: "I was able to apply the skills and knowledge I acquired during the program in a real-world setting and received valuable, constructive feedback from my supervisors.",
        name: "Esther Titilayo",
        company: "RETAIN Program graduate",
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
            <div className="flex flex-col sm:flex-row sm:justify-start sm:gap-32 sm:h-[22.1rem] sm:px-8 py-8 sm:py-16">
                
                <div className="left w-[12.5rem] h-[12.5rem] sm:w-[20.5rem] sm:h-[22.1rem] bg-cover bg-center rounded-[16px] mb-8 sm:mb-0"
                style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }} />
        
                
                <div className="right sm:w-3/5 space-y-5 sm:space-y-[32px] text-left">
                    <div className="stars flex justify-start gap-1 items-center">
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </div>
                     <p className="font-bold text-[1.25rem] sm:text-[1.75rem] h-[15rem] sm:h-[18rem] */">{testimonials[currentIndex].text}</p>
                    <div className="author space-y-2">
                        <p className="font-bold text-[18px] font-clash text-[#101828]">- {testimonials[currentIndex].name}</p>
                        <p className="font-semibold text-[16px] font-clash text-[#667085]">{testimonials[currentIndex].company}</p>
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
