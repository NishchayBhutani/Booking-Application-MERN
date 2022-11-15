import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Reserve.css";
const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(
    `http://localhost:5000/api/hotel/room/${hotelId}`
  );
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  console.log(selectedRooms);
  return (
    <div className="Reserve">
      <div className="reserve-Container">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="reserve-close"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms: </span>
        {data.map((item) => (
          <div className="reserve-item">
            <div className="reserve-item-info">
              <div className="r-title">{item.title}</div>
              <div className="r-desc">{item.desc}</div>
              <div className="r-max">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="r-price">{item.price}</div>
            </div>
            {item.roomNumbers.map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reserve;
