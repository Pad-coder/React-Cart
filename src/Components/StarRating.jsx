import React from "react";

function Star({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <div key={i} className={i < rating ? "bi-star-fill" : "bi-star"} />
    );
  }
  return (
    <>
      <div className="d-flex justify-content-center small text-warning mb-2">
        {stars}
      </div>
    </>
  );
}
export default Star;
