import "./SearchItem.css";
import React from "react";

const SearchItem = () => {
  return (
    <div className='search-item'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
        alt=''
        className='si-img'
      />
      <div className='si-desc'>
        <h1 className='si-title'>Tower Street Apartments</h1>
        <span className='si-distance'>500m from center</span>
        <span className='si-taxiOp'>Free airport taxi</span>
        <span className='si-subtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='si-features'>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className='si-cancelOp'>Free cancellation </span>
        <span className='si-cancelOpSubtitle'>
          You can cancel anytime, so lock in this great price today!
        </span>
      </div>
      <div className='si-details'>
        <div className='si-rating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className='si-detailTexts'>
          <span className='si-price'>$123</span>
          <span className='si-taxOp'>Includes taxes and fees</span>
          <button className='si-checkBtn'>check availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
