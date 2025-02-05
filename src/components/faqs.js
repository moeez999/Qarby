import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "What is the purpose of the car chat app?",
    answer: "",
  },
  {
    question: "How can I chat with a dealer about a specific car?",
    answer: "",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes, the basic features are free, but there might be premium options available for advanced functionalities.",
  },
  {
    question: "Can I use the app to schedule a test drive?",
    answer: "",
  },
  {
    question: "Is my chat history private?",
    answer: "",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-heading">Frequently Asked</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">
                {openIndex === index ? "↑" : "↓"}
              </span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
