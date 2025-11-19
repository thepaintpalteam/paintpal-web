import header from "../../assets/paintpal/images/simple.png";
import logo from "../../assets/hue.png";

const Simple = () => {
  return (
    <div id="how-it-works" className="mt-32 pb-28 mx-4 lg:max-w-[1300px] lg:mx-auto ">
      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-2xl lg:text-3xl text-center font-semibold text-gray-900 lg:leading-10">
          Simple stroke today, <br className="hidden lg:block" /> stunning
          masterpieces tomorrow
        </h1>
      </div>

      {/* Image with overlay */}
      <div className="flex items-center justify-center mt-8 relative">
        <img
          src={header}
          alt="PaintPal header"
          className="w-full lg:w-[1200px] h-[500px] lg:h-full rounded-lg object-cover"
        />

        {/* Overlay content */}
        <div className="absolute bottom-6 w-full flex flex-col items-center px-4 " >
          <img src={logo} className="w-16 sm:w-20 md:w-24 mb-4" alt="Logo" />

          {/* Play + Text */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-4 text-center">
            <span className="text-2xl font-semibold leading-snug">
              Watch the <br className="hidden lg:block" /> walkthrough
            </span>
          </div>

          {/* Buttons */}
          <div className="flex  items-center gap-3 " >
            {/* <button className="bg-[#5FBF92] py-2 px-4 w-32 lg:w-full font-medium text-base sm:text-lg rounded-lg hover:bg-[#4AA97D] transition">
              Sign up
            </button> */}
            <button
             onClick={() =>
                  window.open("https://paintpal.framer.website/", "_blank")
                }
             className="bg-white border border-gray-300 py-2 px-4 w-32 lg:w-full whitespace-nowrap font-medium text-base sm:text-lg rounded-lg hover:bg-gray-50 transition">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simple;
