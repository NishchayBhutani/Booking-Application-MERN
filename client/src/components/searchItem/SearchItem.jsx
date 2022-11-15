import "./SearchItem.css";
import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({ item, dates, options }) => {
  console.log(options);
  console.log(dates);
  return (
    <div className="search-item">
      <img src={item.photos[0]} alt="" className="si-img" />
      <div className="si-desc">
        <h1 className="si-title">{item.name}</h1>
        <span className="si-distance">{item.distance} from center</span>
        <span className="si-taxiOp">Free airport taxi</span>
        <span className="si-subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="si-features">{item.desc}</span>
        <span className="si-cancelOp">Free cancellation </span>
        <span className="si-cancelOpSubtitle">
          You can cancel anytime, so lock in this great price today!
        </span>
      </div>
      <div className="si-details">
        {item.rating && (
          <div className="si-rating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="si-detailTexts">
          <span className="si-price">${item.cheapestPrice}</span>
          <span className="si-taxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`} state={{ options, dates }}>
            <button
              onClick={() =>
                localStorage.setItem(
                  "details",
                  JSON.stringify({ dates, options })
                )
              }
              className="si-checkBtn"
            >
              check availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
