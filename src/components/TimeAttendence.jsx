import { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = time.toLocaleDateString([], {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="mt-1 mx-5 p-3  rounded-xl">
      <p className="text-[#FF0000] text-3xl text-center py-1 mb-2 font-bold">
        {formattedTime}
      </p>
      <p className="text-center text-black text-lg ">{formattedDate}</p>
    </div>
  );
};

export default Time;
