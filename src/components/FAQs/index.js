import React, { useEffect, useState } from "react";
import "./faqs.css";

const data = [
  {
    description: "Product & Promos",
    list: [
      {
        question: "Are candles safe for babies to toddlers? Product & Promos 1",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Product & Promos 1",
      },
      {
        question: "Are candles safe for babies to toddlers? Product & Promos 2",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Product & Promos 2",
      },
      {
        question: "Are candles safe for babies to toddlers? Product & Promos 3",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Product & Promos 3",
      },
      {
        question: "Are candles safe for babies to toddlers? Product & Promos 4",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Product & Promos 4",
      },
    ],
  },
  {
    description: "Delivery",
    list: [
      {
        question: "Are candles safe for babies to toddlers? Delivery 1",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Delivery 1",
      },
      {
        question: "Are candles safe for babies to toddlers? Delivery 2",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Delivery 2",
      },
      {
        question: "Are candles safe for babies to toddlers? Delivery 3",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Delivery 3",
      },
      {
        question: "Are candles safe for babies to toddlers? Delivery 4",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Delivery 4",
      },
    ],
  },
  {
    description: "Refunds",
    list: [
      {
        question: "Are candles safe for babies to toddlers? Refunds 1",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Refunds 1",
      },
      {
        question: "Are candles safe for babies to toddlers? Refunds 2",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Refunds 2",
      },
      {
        question: "Are candles safe for babies to toddlers? Refunds 3",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Refunds 3",
      },
      {
        question: "Are candles safe for babies to toddlers? Refunds 4",
        answer:
          "Absolutely, because we just use organic ingredients and does not use hazardous chemicals Refunds 4",
      },
    ],
  },
];

function FAQs() {
  const [activedescription, setActivedescription] = useState(data[0]);

  const handleClickQuestion = (index) => {
    const faqsListEle = document.querySelectorAll(".faqs .faqs__item");
    faqsListEle[index].classList.toggle("active");
  };

  useEffect(() => {
    const faqsListEle = document.querySelectorAll(".faqs .faqs__item");
    faqsListEle.forEach((faqEle) => faqEle.classList.remove("active"));
  }, [activedescription]);

  return (
    <div className="faqs">
      <div className="row">
        <div className="col-12 col-lg-4 mb-5 mb-lg-0">
          <div className="d-flex justify-content-center flex-lg-column flex-wrap me-0 me-lg-5">
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`faqs__description-button font-cormorant fw-600 btn-outline-ss mx-3 mx-lg-0 ${
                    activedescription.description === item.description && "active"
                  }`}
                  onClick={() => setActivedescription(item)}
                >
                  {item.description}
                </button>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <div className="faqs__list ms-0 ms-lg-5">
            {activedescription.list.map((item, index) => {
              return (
                <div className="faqs__item" key={index} onClick={() => handleClickQuestion(index)}>
                  <h6 className="faqs__item__question fw-500 font-open-sans mb-0 pe-5">
                    {item.question}
                    <span className="faqs__item__question--plus"></span>
                    <span className="faqs__item__question--minus"></span>
                  </h6>
                  <p className="faqs__item__answer fw-300 font-open-sans mb-0">{item.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
