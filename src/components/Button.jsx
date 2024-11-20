import { Link } from "react-router-dom";

const Button = ({ text, bgColor, color, to }) => {
  return (
    <Link to={to}>
      <button 
        className={`w-[10.98rem] h-[3.03rem] md:h-[5rem] md:w-[18rem] rounded-[1.89rem] md:rounded-[3.125rem] font-[600] cursor-pointer font-clash text-[18.18px] md:text-[30px] ${bgColor} ${color} hover:bg-blue-300`}
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
