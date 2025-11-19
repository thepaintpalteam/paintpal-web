import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  title: string;
  content:
    | string
    | {
        text?: string;
        list?: string[];
      };
}

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions: FAQItem[] = [
    {
      title: "What exactly is Huecrib?",
      content:
        "Huecrib is a virtual space for digital painting and creative events. It’s a single platform where you can paint by yourself, host or join live art events with others, and even earn money by running your own ticketed workshops.",
    },
    {
      title: "Who is Huecrib for?",
      content: {
        text: "Huecrib is designed for a wide range of creative people, including:",
        list: [
          "Neurodivergent creators who want a calm, flexible space to paint solo or socialise at their own pace.",
          "Hobbyist artists looking for a fun, low-pressure way to unwind and express themselves.",
          "Art educators and workshop hosts who want to teach virtual classes.",
          "Corporate teams seeking new, wellness-focused team-building activities.",
          "Friends, families, and creative communities who want to connect and collaborate from a distance.",
        ],
      },
    },
    {
      title: "Can I use Huecrib for free?",
      content: {
        text: "Yes, absolutely! Our Free Plan is available to everyone and includes access to basic solo painting features. You can also host up to three of your own events and join two events each month, completely free.\nIf you're looking for more advanced capabilities, you can upgrade:",

        list: [
          "Individual Plan (£9.99/month): Unlocks advanced tools and allows you to host unlimited paid events to monetise your creativity.",
          "Business Plan (£49.99/month): Designed for companies that want to host engaging and creative team-building activities for their staff.",
        ],
      },
    },
    {
      title: "How do I make money on Huecrib?",
      content:
        "With our Individual Plan, you can host paid, ticketed events and monetise your creative skills. You set the ticket price, and we handle the platform. Huecrib takes a 25% commission on each transaction from paid events you host.",
    },
    {
      title:
        "How is Huecrib different from other art apps or event platforms?",
      content:
        "With our Individual Plan, you can host paid, ticketed events and monetise your creative skills. You set the ticket price, and we handle the platform. Huecrib takes a 25% commission on each transaction from paid events you host.",
    },
    {
      title:
        "How is Huecrib different from other art apps or event platforms?",
      content:
        "Our key advantage is our hybrid model. While other platforms focus on either digital painting or virtual events, Huecrib is the first to combine digital painting tools, event hosting, and creator monetisation features into one seamless experience.",
    },

     {
      title: "What devices can I use Huecrib on?",
      content: {
       text: "Huecrib is designed to be accessible across your favourite devices, with features tailored to each experience:",

        list: [
          "On Tablets (e.g., iPad, Android/Samsung tablets): You get the full Huecrib experience. You can use our digital canvas for solo painting, host your own creative events, and join sessions to paint collaboratively in real-time.",
          "On Mobile Phones: You can use your phone as a social and management tool. It's perfect for creating and managing your events, browsing for sessions to join, and participating in the social aspects of an event, even when you're on the go. Please note, the painting feature itself is only available on tablets."
        ],
      },
    },

    {
      title: "As a host, can I see everyone's canvas at the same time?",
      content:
        "As a host, you can interact with your attendees and encourage them to share their screens when they feel comfortable. This allows you to offer guidance, answer questions, and foster a sense of community.",
    },

    {
      title: "As an event host, how do I receive my earnings?",
      content:
        "We have a straightforward payment system. Once your event is complete, your earnings (minus the platform's commission) will be sent to your provided bank account.",
    },
     {
      title: "Is there a limit to how many people can join my event?",
      content: {
       text: "Yes, the maximum number of attendees depends on your plan. We’ve designed the tiers to fit different needs, from small get-togethers to large corporate workshops:",

        list: [
          "Free Plan: You can host events with up to 10 attendees.",
          "Individual Plan (£9.99/month): Host larger events with up to 150 attendees.",
          "Business Plan (£49.99/month): Perfect for large-scale events, allowing up to 1,000 attendees."
        ],
      },
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="py-24">
      <div className="lg:max-w-[1300px] mx-4 lg:mx-auto">
        <div className="flex flex-col lg:flex-row items-start w-full px-10">
          {/* Left side */}
          <div className="w-full lg:w-1/3 mt-10">
            <h1 className="font-semibold text-xl lg:text-4xl lg:leading-10">
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
                    <h2 className="text-md lg:text-lg font-bold">
                      {question.title}
                    </h2>
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="mt-4 text-[#606060] text-md lg:leading-8">
                      {/* Handle plain text */}
                      {typeof question.content === "string" ? (
                        <p className="leading-10">{question.content}</p>
                      ) : (
                        <>
                          {question.content.text && (
                            <p className="mb-3 whitespace-pre-line ">
                              {question.content.text}
                            </p>
                          )}
                          {question.content.list && (
                            <ul className="list-disc lg:whitespace-nowrap list-inside space-y-2">
                              {question.content.list.map((item, i) => {
                                if (item.includes(":")) {
                                  const [boldPart, rest] = item.split(":");
                                  return (
                                    <li key={i }>
                                      <span className="font-semibold">
                                        {boldPart}:
                                      </span>{" "}
                                      <span>{rest.trim()}</span>
                                    </li>
                                  );
                                }
                                return <li key={i}>{item}</li>;
                              })}
                            </ul>
                          )}
                        </>
                      )}
                    </div>
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
