import create from "../../assets/paintpal/svgs/create.svg";
import art from "../../assets/paintpal/svgs/art.svg";
import remote from "../../assets/paintpal/svgs/remote.svg";
import distant from "../../assets/paintpal/svgs/distant.svg";
import neuro from "../../assets/paintpal/svgs/neuro.svg";

const MadeFor = () => {
  return (
    <div className="mt-32 pb-10 mx-4 lg:max-w-[1000px] flex flex-col justify-center items-center lg:mx-auto">
      <div>
        <h1 className="text-2xl text-center font-semibold text-gray-900">
          Made for everyone
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-14">
        <div className="flex flex-col items-center gap-2">
          <img src={neuro} className="w-16" />
          <div className="text-center space-y-1 mt-2">
            <h1 className="text-lg text-gray-800 font-semibold">Neurodivergent Minds</h1>
            <p className="italic">Paint your way, with or without company.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src={art} className="w-10" />
          <div className="text-center space-y-1 mt-2">
            <h1 className="text-lg text-gray-800 font-semibold">Art Educators</h1>
            <p className="italic">Teach & earn globally</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src={create} className="w-16" />
          <div className="text-center space-y-1 mt-2">
            <h1 className="text-lg text-gray-800 font-semibold">Creatives</h1>
            <p className="italic">Zero experience needed</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src={remote} className="w-16" />
          <div className="text-center space-y-1 mt-2">
            <h1 className="text-lg text-gray-800 font-semibold">Remote Teams</h1>
            <p className="italic">Budget-friendly bonding</p>
          </div>
        </div>

        {/* Last item centered */}
        <div className="flex flex-col items-center gap-2 col-span-full">
          <img src={distant} className="w-24" />
          <div className="text-center space-y-1 mt-2">
            <h1 className="text-lg text-gray-800 font-semibold">Distant Friends</h1>
            <p className="italic">Create together anywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MadeFor;
