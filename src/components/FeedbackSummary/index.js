import React from "react";
import "./feedback-summary.css";
import RatingStar from "../RatingStar";

function FeedbackSummary({ feedbackList }) {
  let totalRating = 0;
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;

  feedbackList.forEach((item) => {
    totalRating += item.rating;
    const floorRatingItem = Math.floor(item.rating);
    if (floorRatingItem === 5) {
      five = five + 1;
    } else if (floorRatingItem === 4) {
      four = four + 1;
    } else if (floorRatingItem === 3) {
      three = three + 1;
    } else if (floorRatingItem === 2) {
      two = two + 1;
    } else {
      one = one + 1;
    }
  });

  return (
    <div className="feedback-summary">
      <div className="feedback-summary__top">
        <h6 className="text-dark text-center fw-700 font-open-sans mb-0">
          {Math.round((totalRating / feedbackList.length) * 10) / 10}
        </h6>
        <div className="d-flex justify-content-center">
          <RatingStar
            rating={Math.round((totalRating / feedbackList.length) * 10) / 10}
            fontSize={48}
          />
        </div>
        <p className="mb-0 text-dark text-center font-open-sans fw-700">
          {feedbackList.length} {feedbackList.length > 1 ? "reviews" : "review"}
        </p>
      </div>
      <div className="feedback-summary__bottom">
        <h6 className="text-dark fw-700 font-cormorant mb-0">Rating</h6>
        <div className="feedback-summary__rating-item d-flex align-items-center justify-content-between">
          <input type="checkbox" name="rating-filter" value={5} />
          <img src="/assets/icon/star-fill.svg" alt="" width={20} />
          <p className="mb-0 text-dark font-open-sans fw-500">5</p>
          <div className="feedback-summary__rating-item__scale-bar flex-grow-1">
            <div style={{ width: `${(five / feedbackList.length) * 100}%` }}></div>
          </div>
          <p className="mb-0 text-dark font-open-sans fw-500">{five}</p>
        </div>
        <div className="feedback-summary__rating-item d-flex align-items-center justify-content-between">
          <input type="checkbox" name="rating-filter" value={4} />
          <img src="/assets/icon/star-fill.svg" alt="" width={20} />
          <p className="mb-0 text-dark font-open-sans fw-500">4</p>
          <div className="feedback-summary__rating-item__scale-bar flex-grow-1">
            <div style={{ width: `${(four / feedbackList.length) * 100}%` }}></div>
          </div>
          <p className="mb-0 text-dark font-open-sans fw-500">{four}</p>
        </div>
        <div className="feedback-summary__rating-item d-flex align-items-center justify-content-between">
          <input type="checkbox" name="rating-filter" value={3} />
          <img src="/assets/icon/star-fill.svg" alt="" width={20} />
          <p className="mb-0 text-dark font-open-sans fw-500">3</p>
          <div className="feedback-summary__rating-item__scale-bar flex-grow-1">
            <div style={{ width: `${(three / feedbackList.length) * 100}%` }}></div>
          </div>
          <p className="mb-0 text-dark font-open-sans fw-500">{three}</p>
        </div>
        <div className="feedback-summary__rating-item d-flex align-items-center justify-content-between">
          <input type="checkbox" name="rating-filter" value={2} />
          <img src="/assets/icon/star-fill.svg" alt="" width={20} />
          <p className="mb-0 text-dark font-open-sans fw-500">2</p>
          <div className="feedback-summary__rating-item__scale-bar flex-grow-1">
            <div style={{ width: `${(two / feedbackList.length) * 100}%` }}></div>
          </div>
          <p className="mb-0 text-dark font-open-sans fw-500">{two}</p>
        </div>
        <div className="feedback-summary__rating-item d-flex align-items-center justify-content-between">
          <input type="checkbox" name="rating-filter" value={1} />
          <img src="/assets/icon/star-fill.svg" alt="" width={20} />
          <p className="mb-0 text-dark font-open-sans fw-500">1</p>
          <div className="feedback-summary__rating-item__scale-bar flex-grow-1">
            <div style={{ width: `${(one / feedbackList.length) * 100}%` }}></div>
          </div>
          <p className="mb-0 text-dark font-open-sans fw-500">{one}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackSummary;
