
import slide_one from "../../assets/paintpal/images/slide_one.png";
import slide_two from "../../assets/paintpal/images/slide_two.png";
import slide_three from "../../assets/paintpal/images/slide_three.png";
import slide_four from "../../assets/paintpal/images/slide_four.png";

const slides = [ slide_one, slide_two,  slide_three, slide_four];

const Slide = () => {
  return (
    <div className="mt-10 -mb-10 lg:-mb-44 mx-4 lg:mx-auto lg:max-w-[1500px]">
      {/* Text Header */}
      <div className="flex flex-wrap items-end justify-between mb-10 ">
        <div>
          <span className="text-md text-gray-600">
            Paint, chat, call collaborate
          </span>
          <h1 className="text-2xl lg:text-4xl font-semibold text-gray-900">
            Create, Laugh, and Paint like <br className="hidden lg:block" />
            you're in the same room.
          </h1>
        </div>
        <button className="bg-white border border-gray-300 px-2 py-2 w-36 font-medium text-lg rounded-lg hover:bg-gray-50 transition">
          Start for free
        </button>
      </div>

      {/* Slides */}
      <div className="relative flex items-center gap-4 overflow-x-scroll">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0  h-[100vh] lg:h-[1900px]  transition-all duration-700 ease-in-out ${
              index === 0 ? "w-[500px] lg:w-[1200px]  " : "w-[500px] lg:w-[1200px] "
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slide;
