import { useEffect, useState } from "react";

const Time = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(intervalId); // Clear the interval on unmount
    }, []);

    return (
        <div>
            <p className="text-blue-600 font-bold">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
    );
};

export default Time;
