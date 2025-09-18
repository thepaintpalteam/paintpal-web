import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Video, Mic, Volume2 } from "lucide-react";

const JoinCall = () => {
  const navigate = useNavigate();

  // States
  const [videoOn, setVideoOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [volume, setVolume] = useState(50);

  return (
    <div className="min-h-screen flex items-center justify-center py-24 mx-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg">
        {/* Header */}
        <div className="mt-3 mx-6 py-4">
          <p className="text-gray-500 mt-1">£5.99</p>
          <h2 className="text-2xl font-semibold text-gray-800">Event price</h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-6 px-6 pb-10 pt-6">
          {/* Video box + controls */}
          <div className="w-full">
            {/* Gray video placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Video Preview
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center gap-6 mx-3">
              {/* Video toggle */}
              <div className="flex items-center gap-4">
                <Video className={`w-6 h-6 ${videoOn ? 'text-[#5FBF92]' : 'text-gray-400'}`} />
                <div className={`relative w-14 h-7  rounded-full p-1 ${videoOn ? 'bg-[#5FBF92]' : 'bg-gray-300'}`}>
                  <span
                    onClick={() => setVideoOn(!videoOn)}
                    className={`absolute w-5 h-5 bg-white rounded-full shadow transform transition cursor-pointer ${
                      videoOn ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  ></span>
                </div>
              </div>

              {/* Mic toggle */}
              <div className="flex items-center gap-4">
                <Mic className={`w-6 h-6 ${micOn ? 'text-[#5FBF92]' : 'text-gray-400'}`} />
                <div className={`relative w-14 h-7  rounded-full p-1 ${micOn ? 'bg-[#5FBF92]' : 'bg-gray-300'}`}>
                  <span
                    onClick={() => setMicOn(!micOn)}
                    className={`absolute w-5 h-5 bg-white rounded-full shadow transform transition cursor-pointer ${
                      micOn ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  ></span>
                </div>
              </div>

              {/* Volume slider */}
              <div className="flex items-center gap-4 flex-1">
                <Volume2 className="w-5 h-5 text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-1 rounded-lg appearance-none bg-gray-100"
                  style={{
                    background: `linear-gradient(to right, #5FBF92 0%, #5FBF92 ${volume}%, #e5e7eb ${volume}%, #e5e7eb 100%)`,
                  }}
                />
                {/* Custom thumb */}
                <style>
                  {`
                    input[type="range"]::-webkit-slider-thumb {
                      -webkit-appearance: none;
                      width: 16px;
                      height: 16px;
                      border-radius: 50%;
                      background: #5FBF92;
                      cursor: pointer;
                      border: none;
                      box-shadow: 0 0 2px rgba(0,0,0,0.3);
                    }
                    input[type="range"]::-moz-range-thumb {
                      width: 16px;
                      height: 16px;
                      border-radius: 50%;
                      background: #5FBF92;
                      cursor: pointer;
                      border: none;
                      box-shadow: 0 0 2px rgba(0,0,0,0.3);
                    }
                  `}
                </style>
              </div>
            </div>
          </div>

          {/* Input field */}
          <div className="w-full my-4">
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="peer w-full border border-gray-400 rounded-lg px-3 py-3 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-4 w-full">
            <button
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              className="bg-white border w-full border-gray-200 py-3 font-medium px-4 text-lg rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
              className="w-full bg-[#5FBF92] py-3 rounded-lg font-medium transition"
            >
              Join now
            </button>
          </div>

          {/* Footer link */}
          <div
            onClick={() => {
              navigate("/login");
              scrollTo(0, 0);
            }}
            className="text-center text-md cursor-pointer"
          >
            Already have an account?{" "}
            <span className="text-[#5FBF92] underline font-medium">Log in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCall;
