
import chat from "../../assets/paintpal/svgs/chat.svg";
import creative from "../../assets/paintpal/svgs/creative.svg";
import host from "../../assets/paintpal/svgs/host.svg";
import music from "../../assets/paintpal/svgs/music.svg";
import paid from "../../assets/paintpal/svgs/paid.svg";
import recieve from "../../assets/paintpal/svgs/recieve.svg";
import variant from "../../assets/paintpal/svgs/variant.svg";
import video from "../../assets/paintpal/svgs/video.svg";

const Features = () => {
  //const navigate = useNavigate();
  return (
    <div
      id="features"
      className="lg:mb-64 mt-24 py-32 mx-4 lg:mx-auto lg:max-w-[1200px]  "
    >
      <h1 className="text-3xl  font-semibold text-gray-900">Our features</h1>

      <div className="mt-16 space-y-10 ">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-2">
            <img src={paid} />
            <h1 className="text-md text-gray-800 ">
              Get paid to host painting events
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={host} />
            <h1 className="text-md text-gray-800 ">
              Host painting events with friends all over the world
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={creative} />
            <h1 className="text-md text-gray-800 ">
              Get creative, paint on Huecrib
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={music} />
            <h1 className="text-md text-gray-800 ">
              Vibe to music with friends
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-2">
            <img src={chat} />
            <h1 className="text-md text-gray-800  ">
              Chat with friends while you paint
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={video} />
            <h1 className="text-md text-gray-800 ">
              Video and audio calls available while painting
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={recieve} />
            <h1 className="text-md text-gray-800  ">
              Recieve your art in your email as a guest attendee on Huecrib
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-2">
            <img src={variant} />
            <h1 className="text-md text-gray-800 ">
              Variant paint brush options
            </h1>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-16">
        <button
           onClick={() =>
                  window.open("https://huecrib.framer.website/ ", "_blank")
                }
          className="bg-[#5FBF92]   py-2.5 px-3  font-medium text-lg rounded-lg hover:bg-[#4AA97D] transition"
        >
          Unlock unlimited access
        </button>
      </div>
    </div>
  );
};

export default Features;
