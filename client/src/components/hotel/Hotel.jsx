import "./Hotel.css";
import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../mailList/MailList";
import Footer from "../footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Reserve from "../reserve/Reserve";
// import { SearchContext } from "../../context/SearchContext";
// import { useContext } from "react";
const Hotel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.toString().split("/")[2];
  const [openModal, setOpenModal] = useState(false);
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/hotel/find/${id}`
  );

  // const { dates, options } = useContext(SearchContext);
  const dates = location.state.dates[0];
  const options = location.state.options;

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  // console.log(location.state[0].startDate);
  const days = dayDifference(dates.endDate, dates.startDate);
  const user = localStorage.getItem("user");
  const handleClick = (e) => {
    e.preventDefault();
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotel-container">
          <div className="hotel-wrapper">
            <button className="book-now">Reserve or Book Now!</button>
            <h1 className="hotel-title">{data.name}</h1>
            <div className="hotel-address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotel-distance">
              Excellent location – {data.distance} from center
            </span>
            <span className="hotel-price-highlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotel-images">
              {data.photos?.map((photo, i) => (
                <div className="hotel-img-wrapper">
                  <img src={photo} alt="" className="hotel-img" />
                </div>
              ))}
            </div>
            <div className="hotel-details">
              <div className="hotel-details-texts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>

              <div className="hotel-details-price">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.rooms}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
      {openModal && <Reserve dates={dates} setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
};

export default Hotel;
