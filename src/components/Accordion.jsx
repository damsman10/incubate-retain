import { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="mb-6 rounded-[2.5rem] shadow-inner-custom2 border-[5px] border-[#4884DF40] overflow-hidden p-4">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full p-4"
      >
        <span className="font-nexa font-[700] text-[0.93rem] leading-[0.93rem] md:text-[2rem]">{title}</span>
        
        <svg
          className="fill-black shrink-0 ml-8 transition-transform duration-200"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${accordionOpen ? "rotate-0" : "rotate-90"}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${accordionOpen ? "rotate-90" : "rotate-0"}`}
          />
        </svg>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out text-sm ${accordionOpen ? "max-h-[340px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="font-nexa text-[0.8rem] leading-[1.2rem] md:text-[1.9rem] md:leading-[2.2rem] p-4">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
