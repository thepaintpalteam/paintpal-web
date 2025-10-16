import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      title: "What exactly is PaintPal?",
      content:
        "PaintPal is a virtual space for digital painting and creative events. It’s a single platform where you can paint by yourself, host or join live art events with others, and even earn money by running your own ticketed workshops.",
    },
    {
      title: "Who is PaintPal for?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
    {
      title: "Is PaintPal Pro available for teams?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
    {
      title: "How do I make money on PaintPal?",
      content:
        "With our Individual Plan, you can host paid, ticketed events and monetise your creative skills. You set the ticket price, and we handle the platform. PaintPal takes a 25% commission on each transaction from paid events you host.",
    },
    {
      title: "How is PaintPal different from other art apps or event platforms?
      content:
        "Our key advantage is our hybrid model. While other platforms focus on either digital painting or virtual events, PaintPal is the first to combine digital painting tools, event hosting, and creator monetisation features into one seamless experience.",
    },
     {
      title: "What if I work for a nonprofit?",
      content:
        "PaintPal Free is available to anyone. However, if you want to use PaintPal for work or a side hustle, you can upgrade to Paintpal Pro to unlock premium features, such as unlimited templates and Brand Kits. And if you need to collaborate with colleagues? ",
    },
     {
      title: "As a host, can I see everyone's canvas at the same time?",
      content:
        "As a host, you can interact with your attendees and encourage them to share their screens when they feel comfortable. This allows you to offer guidance, answer questions, and foster a sense of community, just like in a physical workshop. You won't automatically see everyone's private canvas, respecting each user's creative space.",
    },

      {
      title: "As an event host, how do I receive my earnings?",
      content:
        "We have built a straightforward payment system. Once your event is complete, your earnings (minus the platform's commission) will be processed and sent to your provided bank account.",
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
      <div className="lg:max-w-[1200px] mx-4 lg:mx-auto">
        <div className="flex flex-col lg:flex-row items-start w-full px-10 ">
          {/* Left side */}
          <div className="w-full lg:w-1/3 mt-10">
            <h1 className="font-semibold text-xl lg:text-2xl lg:leading-10 ">
              Frequently Asked <br className="hidden lg:block" />{" "}
              <span className="text-[#5FBF92]">Questions</span>
            </h1>
          </div>

          {/* Right side */}
          <div className="w-full lg:w-2/3">
            <div className="divide-y divide-gray-200">
              {questions.map((question, index) => (
                <div key={index} className="py-8">
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <h2 className="text-md lg:text-lg text-[#3D3D3D] font-bold">
                      {question.title}
                    </h2>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 " />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>

                  {openIndex === index && (
                    <p className="mt-4 text-[#606060] text-md lg:text-sm lg:leading-8">
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
