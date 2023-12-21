import React from "react";
import "./rating-star.css";

function RatingStar({ rating, fontSize = 20 }) {
  return (
    <>
      {rating > 0 && (
        <div className="rating-star">
          {/* render star full */}
          {Array.from(Array(Math.round(rating - 1))).map((item, index) => {
            return <img key={index} src="/assets/icon/star-fill.svg" alt="" width={fontSize} />;
          })}
          {rating - Math.round(rating - 1) > 0.3 && (
            <img src="/assets/icon/star-haft.svg" alt="" width={fontSize} />
          )}
        </div>
      )}
    </>
  );
}

export default RatingStar;
