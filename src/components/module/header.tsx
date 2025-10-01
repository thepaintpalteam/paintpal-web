import { useNavigate } from "react-router-dom";
import header from "../../assets/paintpal/images/header.png";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="pt-6 pb-16 mx-4 lg:mx-0">
      <div className="flex justify-center items-center text-center px-6 py-14" data-aos="fade-down">
        <div className="max-w-3xl flex flex-col justify-center items-center">
          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-semibold text-gray-900 leading-snug lg:leading-[50px]">
            Sip, Paint & Connect <br className="hidden lg:block" /> Together
            Online
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-md sm:text-lg text-gray-600 leading-relaxed">
            Host virtual painting parties with live music, real-time
            collaboration, and shared experiences. Create memories, one brush
            stroke at a time.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
            <button  onClick={() => {navigate("/signup"); scrollTo(0,0)}} className="bg-[#5FBF92] hover:bg-[#5FBF92]/90 py-3 w-44 font-medium px-4 text-md  rounded-lg ">
              Sign up
            </button>
            <button className="bg-white border border-gray-200 w-44  py-3 font-medium px-4 text-md  rounded-lg ">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:max-w-[1300px] lg:mx-auto " data-aos="fade-up">
        <img
          src={header}
          alt="PaintPal header"
          className="lg:w-[1200px] h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
