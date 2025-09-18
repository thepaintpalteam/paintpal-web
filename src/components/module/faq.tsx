import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      title: "Can I use PaintPal for free?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
    {
      title: "If I add a team member, will they be able to see all my designs?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
    {
      title: "Is PaintPal Pro available for teams?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
    {
      title: "What is the difference between PaintPal Pro and PantPal Advance?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
    {
      title: "How long is my free PaintPal Pro or PaintPal Advance trial?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
     {
      title: "What if I work for a nonprofit?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
     {
      title: "What if I am a student or teacher?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },

      {
      title: "What payment methods can I use?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },  {
      title: "How does the billing work?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div id="faqs" className="py-16">
      <div className="lg:max-w-[1500px] mx-4 lg:mx-auto">
        <div className="flex flex-col lg:flex-row items-start w-full px-10 ">
          {/* Left side */}
          <div className="w-full lg:w-1/3 mt-10">
            <h1 className="font-semibold text-2xl lg:text-3xl lg:leading-10 ">
              Frequently Asked <br className="hidden lg:block" />{" "}
              <span className="text-[#5FBF92]">Questions</span>
            </h1>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-2/3">
            <div className="divide-y divide-gray-200">
              {questions.map((question, index) => (
                <div key={index} className="py-12">
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h2 className="text-lg lg:text-xl text-[#3D3D3D] font-bold">
                      {question.title}
                    </h2>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 " />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>

                  {openIndex === index && (
                    <p className="mt-4 text-[#606060] text-md lg:text-lg lg:leading-10">
                      {question.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
