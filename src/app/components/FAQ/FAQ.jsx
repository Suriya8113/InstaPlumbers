"use client";
import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    q: "How can I verify that InstaPlumbers are reliable?",
    a: "All our plumbers are vetted, reviewed, and rated by real customers. We only work with trusted, experienced professionals.",
  },
  {
    q: "Are your plumbers registered with Gas Safe (CORGI)?",
    a: "",
  },
  {
    q: "Do your plumbers have insurance?",
    a: "",
  },
  {
    q: "How much do your plumbers cost?",
    a: "",
  },
  {
    q: "Do you charge a call-out fee?",
    a: "",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(-1);

  const toggle = (index) => {
    setActive(active === index ? -1 : index);
  };

  return (
    <section className="faq-section" data-aos="fade-in">
      <div className="faq-container">

        <div className="faq-badge">FAQ</div>

        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          We've answered the most common questions to help you<br />
          book with confidence.
        </p>


        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggle(index)}>

                <h3 className="faq-q" data-aos="zoom-out">{item.q}</h3>

                <div
                  className={`faq-arrow ${active === index ? "rotate" : ""
                    }`}
                >
                  ❯
                </div>
              </div>

              {active === index && item.a && (
                <p className="faq-answer">{item.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
