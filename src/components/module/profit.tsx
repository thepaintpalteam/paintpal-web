import profit from "../../assets/paintpal/images/profit.png";

const Profit = () => {
  return (
    <div className="py-20 px-6 lg:px-12 mx-auto max-w-[1300px]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex flex-col gap-6 lg:w-[800px] text-center lg:text-left">
          <h1 className="text-xl lg:text-3xl font-semibold text-gray-900">
            PaintPal for Nonprofits
          </h1>
          <p className="text-md lg:text-md text-gray-700 lg:leading-10">
            As a nonprofit supporting neurodivergent communities, you understand
            the transformative power of creative expression and inclusive social
            experiences. Eligible nonprofit organisations dedicated to
            neurodivergent support get their own free version of PaintPal,
            specially designed for hosting therapeutic art sessions that build
            community, confidence, and connection.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-[#5FBF92] py-3 px-6 font-medium text-md rounded-lg hover:bg-[#4AA97D] transition">
              Apply for PaintPal nonprofits
            </button>
            <button className="bg-white border border-gray-300 px-6 py-3 font-medium text-md rounded-lg hover:bg-gray-50 transition">
              Check for eligibility
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[500px]">
          <img
            src={profit}
            alt="PaintPal for Nonprofits"
            className="max-w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Profit;
