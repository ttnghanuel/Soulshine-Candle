import React from "react";
import "./feedback.css";
import RatingStar from "../RatingStar";
import { convertUnixTimeToDate } from "../../utils";

function Feedback({ feedbackData }) {
  console.log(feedbackData);
  return (
    <div className="feedback">
      <div className="d-flex align-items-center jsutify-conntennt-between">
        <img src={feedbackData.avatar} className="feedback__avatar rounded-circle" alt="" />
        <div className="flex-grow-1 d-flex align-items-start justify-content-between">
          <div>
            <p className="feedback__name text-dark fw-700 font-cormorant">{feedbackData.name}</p>
            <RatingStar rating={feedbackData.rating} />
          </div>
          <p className="feedback__time text-dark font-open-sans fw-300 mb-0">
            {convertUnixTimeToDate(feedbackData.time)}
          </p>
        </div>
      </div>
      <p className="feedback__title font-cormorant text-dark fw-700">{feedbackData.title}</p>
      <p className="feedback__message font-cormorant text-dark fw-400">{feedbackData.message}</p>
    </div>
  );
}

export default Feedback;
