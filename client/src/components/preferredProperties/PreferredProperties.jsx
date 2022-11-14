import "./PreferredProperties.css";
import React from "react";
import useFetch from "../../hooks/useFetch";
const PreferredProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotel?featured=true&limit=4",
  );
  console.log(data);
  return (
    <div className='preferred-properties'>
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div className='pp-item' key={item._id}>
              <img
                src={item.photos[0]}
                alt='image not available'
                className='pp-img'
              />
              <span className='pp-name'>{item.name}</span>
              <span className='pp-city'>{item.city}</span>
              <span className='pp-price'>
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className='pp-rating'>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PreferredProperties;
