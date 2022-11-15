import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Reserve.css";
const Reserve = ({ dates, setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/hotel/room/${hotelId}`,
  );
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value),
    );
  };

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };
  const allDates = getDatesInRange(dates.startDate, dates.endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime()),
    );
    return !isFound;
  };

  const handleClick = async () => {
    try {
      await Promise.all(selectedRooms.map(roomId => {
        const res = axios.put("")
      }))
    } catch(err) {

    }
  };
  return (
    <div className='reserve'>
      <div className='reserve-container'>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='reserve-close'
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms: </span>
        {data.map((item) => (
          <div className='reserve-item'>
            <div className='reserve-item-info'>
              <div className='r-title'>{item.title}</div>
              <div className='r-desc'>{item.desc}</div>
              <div className='r-max'>
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className='r-price'>{item.price}</div>
            </div>
            <div className='r-select-rooms'>
              {item.roomNumbers.map((roomNumber) => (
                <div className='room'>
                  <label>{roomNumber.number}</label>
                  <input
                    type='checkbox'
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className='r-button'>
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
