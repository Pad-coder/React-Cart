import React, { useState } from "react";
import Star from "./StarRating";

function Card({ Cart, setCart, title, price, MRP, rating, img }) {
  let [toggleCart, setToggle] = useState(true);

  return (
    <>
      <div className="col mb-5">
        <div className="card h-100">
          {/*  <!-- Sale badge--> */}
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          {/* <!-- Product image--> */}
          <img className="card-img-top" src={img} alt={title} />
          {/*  <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/*  <!-- Product name--> */}
              <h5 className="fw-bolder">{title}</h5>
              {/*  <!-- Product reviews--> */}
              <Star rating={rating} />
              {/*  <!-- Product price--> */}
              <span className="text-muted text-decoration-line-through">
                ₹{MRP}
              </span>
              <b> ₹{price}</b>
            </div>
          </div>
          {/*  <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {toggleCart ? (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setToggle((prev) => !prev);
                    setCart(Cart + 1);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => {
                    setToggle((prev) => !prev);
                    setCart(Cart - 1);
                  }}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
