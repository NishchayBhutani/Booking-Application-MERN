import "./List.css";
import { useState } from "react";
import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns/esm";
import { DateRange } from "react-date-range";
import SearchItem from "../searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='list-container'>
        <div className='list-wrapper'>
          <div className='list-search'>
            <h1 className='ls-title'>Search</h1>
            <div className='ls-item'>
              <label>Destination</label>
              <input type='text' placeholder={destination} />
            </div>
            <div className='ls-item'>
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy",
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item].selection)}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className='ls-item'>
              <label>Options</label>
              <div className='ls-options'>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>
                    Min price <small> per night</small>
                  </span>
                  <input type='number' className='ls-option-input' />
                </div>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>
                    Max price <small> per night</small>
                  </span>
                  <input type='number' className='ls-option-input' />
                </div>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>Adults</span>
                  <input
                    type='number'
                    min={1}
                    className='ls-option-input'
                    placeholder={options.adults}
                  />
                </div>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>Children</span>
                  <input
                    type='number'
                    min={0}
                    className='ls-option-input'
                    placeholder={options.children}
                  />
                </div>
                <div className='ls-option-item'>
                  <span className='ls-option-text'>Rooms</span>
                  <input
                    type='number'
                    min={1}
                    className='ls-option-input'
                    placeholder={options.rooms}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='list-result'>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
