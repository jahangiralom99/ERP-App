import { useEffect, useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import {
  PiArrowsCounterClockwiseFill,
  PiClockClockwiseFill,
  PiClockCounterClockwiseFill,
} from "react-icons/pi";

const BottomCheckIn = ({
  latitude,
  setLatitude,
  longitude,
  setLongitude,
  address,
  setAddress,
  checkInTime,
  checkOutTime,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  // get location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          fetchAddress(latitude, longitude);
        },
        (error) => {
          setErrorMessage(
            "Location access denied. Please enable location services."
          );
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      setErrorMessage("Geolocation is not supported by this browser.");
    }
  };

  // fined address
  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
      );
      const data = await response.json();
      // console.log(data);
      // const addressParts = data.display_name.split(", ");
      // const shortAddress = `${addressParts[0]}, ${addressParts[1]}`; // Adjust indices for desired format

      setAddress(data?.display_name);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };
  // console.log(latitude, longitude, address);

  // call getLocation when component mounts or on demand
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="   rounded-2xl mx-5 pb-">
      {/* location */}

      <div className="flex justify-between items-center px-7  pb-3  rounded-2xl">
        <div className="flex items-center gap-2">
          <BiCurrentLocation className="text-3xl text-[#FF0000]" />
          <div className="text-xs">
            <p className="">{address}</p>
            {/* <p>Dhaka, Bangladesh</p> */}
          </div>
        </div>
        <div className="">
          <iframe
            title="Google Map"
            className="w-32 h-32 border-[1px] border-[#FF0000] rounded-full"
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=en&z=14&output=embed`}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
          {/* <button>get my location</button> */}
        </div>
      </div>
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

      {/* checkin */}

      <div className=" flex justify-between  items-center py-1 px-5">
        <div className="flex flex-col justify-end items-center">
          <PiClockClockwiseFill className="text-[#FF0000] text-2xl" />
          <p className="text- font-medium">{checkInTime && checkInTime}</p>
          <p className="text-[#FF0000] text-xs font-medium"> Check In</p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <PiClockCounterClockwiseFill className="text-[#FF0000] text-2xl" />
          <p className="text- font-medium">{checkOutTime && checkOutTime}</p>
          <p className="text-[#FF0000] text-xs font-medium"> Check Out</p>
        </div>
        <div className="flex flex-col justify-end items-center">
          <PiArrowsCounterClockwiseFill className="text-[#FF0000] text-2xl" />
          <p className="text- font-medium">--:--</p>
          <p className="text-[#FF0000] text-xs font-medium"> Duration</p>
        </div>
      </div>
    </div>
  );
};

export default BottomCheckIn;
