import profit from "../../assets/paintpal/images/Earn.gif";
import invite from "../../assets/invite.png";
import music from "../../assets/meet.png";
import save from "../../assets/save.gif"

const Earn = () => {
  return (
    <div className="mx-4 lg:mx-auto lg:max-w-[1200px]">
      {/* Text Header */}
      <div className="flex items-center text-center justify-center mb-10">
        <div>
          <span className="text-md mb-2 text-gray-600 block">
            Paint, chat, call collaborate
          </span>
          <h1 className="text-xl lg:text-3xl font-semibold text-gray-900">
            Create, Laugh, and Paint like you're in the{" "}
            <br className="hidden lg:block" /> same room.
          </h1>
        </div>
      </div>

      {/* Earn while you create */}
      <div className="bg-[#5FBF92]/10 rounded-2xl py-14 px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div  className="flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Earn while you create
            </h1>
            <p className="text-md text-gray-900">
              Run your own painting sessions, invite participants, and receive
              payments directly after your event.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <button
               onClick={() =>
                  window.open("https://paintpal.framer.website/", "_blank")
                }
               className="bg-[#5FBF92] py-2 px-6 font-medium text-md rounded-lg hover:bg-[#4AA97D] transition">
                Watch our video
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
            <img
              src={profit}
              alt="PaintPal for Nonprofits"
              className="max-w-[280px] lg:max-w-[350px] w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Save your art + More Features */}
      <div className="my-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 w-full">
        <div className="bg-[#FFEFEB] rounded-2xl py-12 px-6 flex flex-col items-center gap-8">
          {/* Text Section */}
          <div  className="flex-1 text-center lg:w-[300px]">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Save your art
            </h1>
            <p className="text-md text-gray-900 mt-2">
            Your creativity grows here. Every painting you save becomes part of your journey
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end flex-1">
            <img
              src={save}
              alt="PaintPal for Nonprofits"
              className="max-w-[260px] lg:max-w-[350px] w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="bg-[#FFF4E4] rounded-2xl py-12 px-6 flex flex-col items-center gap-8">
          {/* Text Section */}
          <div  className="flex-1 text-center lg:w-[300px]">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
             Music meets creativity
            </h1>
            <p className="text-md text-gray-900 mt-2">
              
              Play your favourite tracks and paint with friends in real-time, all in one place, no extra apps needed
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end flex-1">
            <img
              src={music}
              alt="PaintPal for Nonprofits"
              className="max-w-[260px] lg:max-w-[350px] w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>


       <div className="bg-[#E9FBFF] rounded-2xl py-14 px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="flex flex-col gap-4 w-full lg:w-[400px] text-center lg:text-left">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
              Invite your friends
            </h1>
            <p className="text-md ">
           Every painting session comes with a secret code. Share it with your crew and paint together, no matter where you are
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <button
               onClick={() =>
                  window.open("https://paintpal.framer.website/", "_blank")
                }
               className="bg-[#5FBF92] py-2 px-6 font-medium text-md rounded-lg hover:bg-[#4AA97D] transition">
                Watch our video
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
            <img
              src={invite}
              alt="PaintPal for Nonprofits"
              className="max-w-[280px] lg:max-w-[300px] w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
