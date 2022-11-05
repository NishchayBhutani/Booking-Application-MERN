import "./PreferredProperties.css";
import React from "react";

const PreferredProperties = () => {
  return (
    <div className='preferred-properties'>
      <div className='pp-item'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
          alt=''
          className='pp-img'
        />
        <span className='pp-name'>Aparthotel Stare Miasto</span>
        <span className='pp-city'>Madrid</span>
        <span className='pp-price'>Starting from $120</span>
        <div className='pp-rating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='pp-item'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1'
          alt=''
          className='pp-img'
        />
        <span className='pp-name'>Comfort Suites Airport</span>
        <span className='pp-city'>Austin</span>
        <span className='pp-price'>Starting from $140</span>
        <div className='pp-rating'>
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className='pp-item'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1'
          alt=''
          className='pp-img'
        />
        <span className='pp-name'>Four Seasons Hotel</span>
        <span className='pp-city'>Lisbon</span>
        <span className='pp-price'>Starting from $99</span>
        <div className='pp-rating'>
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='pp-item'>
        <img
          src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1'
          alt=''
          className='pp-img'
        />
        <span className='pp-name'>Hilton Garden Inn</span>
        <span className='pp-city'>Berlin</span>
        <span className='pp-price'>Starting from $105</span>
        <div className='pp-rating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default PreferredProperties;
