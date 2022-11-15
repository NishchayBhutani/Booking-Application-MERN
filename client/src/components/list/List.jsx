import "./List.css";
import { useState } from "react";
import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns/esm";
import { DateRange } from "react-date-range";
import SearchItem from "../searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  let dateDetails;
  let optionDetails;
  if (localStorage.getItem("details")) {
    dateDetails = JSON.parse(localStorage.getItem("details")).dates;
    dateDetails[0].startDate = new Date(dateDetails[0].startDate);
    dateDetails[0].endDate = new Date(dateDetails[0].endDate);
    optionDetails = JSON.parse(localStorage.getItem("details")).options;
  }
  console.log(dateDetails);
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(
    dateDetails ? dateDetails : location.state.dates
  );
  const [options, setOptions] = useState(
    optionDetails ? optionDetails : location.state.options
  );
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:5000/api/hotel?city=${destination}&min=${min || 0}&max=${
      max || 999
    }`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h1 className="ls-title">Search</h1>
            <div className="ls-item">
              <label>Destination</label>
              <input
                type="text"
                onChange={(e) => setDestination(e.target.value)}
                placeholder={destination}
              />
            </div>
            <div className="ls-item">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="ls-item">
              <label>Options</label>
              <div className="ls-options">
                <div className="ls-option-item">
                  <span className="ls-option-text">
                    Min price <small> per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="ls-option-input"
                  />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">
                    Max price <small> per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="ls-option-input"
                  />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Adults</span>
                  <input
                    type="number"
                    min={1}
                    className="ls-option-input"
                    placeholder={options.adults}
                    value={options.adults}
                    onChange={(e) =>
                      setOptions({ ...options, adults: e.target.value })
                    }
                  />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="ls-option-input"
                    placeholder={options.children}
                    value={options.children}
                    onChange={(e) =>
                      setOptions({ ...options, children: e.target.value })
                    }
                  />
                </div>
                <div className="ls-option-item">
                  <span className="ls-option-text">Rooms</span>
                  <input
                    type="number"
                    min={1}
                    className="ls-option-input"
                    placeholder={options.rooms}
                    value={options.rooms}
                    onChange={(e) =>
                      setOptions({ ...options, rooms: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="list-result">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem
                    item={item}
                    options={options}
                    dates={dates}
                    key={item._id}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
