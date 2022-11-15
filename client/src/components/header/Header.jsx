import React from "react";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import "./Header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { SearchContext } from "../../context/SearchContext";
const Header = ({ type }) => {
  const [dateIsOpen, setDateIsOpen] = useState(false);
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const optionHandler = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // const { dispatch } = useContext(SearchContext);
  const handleSearch = () => {
    // dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header-container listmode" : "header-container"
        }
      >
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header-title">A lifetime of discounts!</h1>
            <p className="header-desc">
              Get rewarded for you travels - unlock instant savings of 10% or
              more with a free easybooking account
            </p>
            {!user && <button className="header-btn">Sign in/ Register</button>}
            <div className="header-search">
              <div className="header-search-item">
                <FontAwesomeIcon icon={faBed} className="header-icon" />
                <input
                  type="text"
                  placeholder="where are you going?"
                  className="header-search-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header-icon"
                />
                <span
                  className="header-search-text"
                  onClick={() => setDateIsOpen(!dateIsOpen)}
                >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                  dates[0].endDate,
                  "dd/mm/yyyy"
                )}`}</span>
                {dateIsOpen && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon icon={faPerson} className="header-icon" />
                <span
                  className="header-search-text"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {`${options.adults} adults . ${options.children} children . ${options.rooms} rooms`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="option-item">
                      <span className="option-text">Adults</span>
                      <div className="option-counter">
                        <button
                          disabled={options.adults < 1}
                          className="option-counter-btn"
                          onClick={() => optionHandler("adults", "dec")}
                        >
                          -
                        </button>
                        <span className="option-counter-count">
                          {options.adults}
                        </span>
                        <button
                          className="option-counter-btn"
                          onClick={() => optionHandler("adults", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Children</span>
                      <div className="option-counter">
                        <button
                          disabled={options.children < 1}
                          className="option-counter-btn"
                          onClick={() => optionHandler("children", "dec")}
                        >
                          -
                        </button>
                        <span className="option-counter-count">
                          {options.children}
                        </span>
                        <button
                          className="option-counter-btn"
                          onClick={() => optionHandler("children", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Rooms</span>
                      <div className="option-counter">
                        <button
                          disabled={options.rooms < 1}
                          className="option-counter-btn"
                          onClick={() => optionHandler("rooms", "dec")}
                        >
                          -
                        </button>
                        <span className="option-counter-count">
                          {options.rooms}
                        </span>
                        <button
                          className="option-counter-btn"
                          onClick={() => optionHandler("rooms", "inc")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search-item">
                <button className="header-btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
