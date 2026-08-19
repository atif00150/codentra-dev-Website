import React, { useState } from "react";

const faqData = [
  {
    question: "Lorem Ipsum Dolor Sit Amet?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam optio ut officia molestias distinctio dolorem odit rerum dignissimos explicabo suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestias et repellat distinctio beatae.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Aliquam eget proin at ultricies massa etiam dolor pharetra?",
    answer:
      "This is a sample answer. Aliquam eget proin at ultricies massa etiam dolor pharetra.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Aliquam eget proin at ultricies?",
    answer:
      "Sample answer text here for demonstration. Aliquam eget proin at ultricies.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Aliquam eget proin at ultricies?",
    answer: "Answer for question 4.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Aliquam eget proin at ultricies?",
    answer: "Answer for question 5.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Aliquam eget proin at ultricies?",
    answer: "Answer for question 6.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Aliquam eget proin at ultricies?",
    answer: "Answer for question 7.",
  },
];

function FAQ({ hideReadMoreBtn = false }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-no-repeat bg-[#ECF7FF] bg-cover bg-center px-5 py-12 sm:px-6 md:px-10 lg:px-24"
      style={{ backgroundImage: `url('/bg-1.png')` }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          <span className="text-[#FFAF1E]">Frequently</span> Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium text-gray-800"
              >
                <span>Q- {item.question}</span>
                <svg
                  className={`w-5 h-5 transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeIndex === index && (
                <div className="px-4 py-3 sm:px-6 sm:py-4 border-t text-sm sm:text-base text-gray-600">
                  A- {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {!hideReadMoreBtn && (
          <div className="mt-8 text-center">
            <button className="bg-[#FFAF1E] text-black font-medium px-6 py-2 ">
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQ;
