import { useState } from "react";
import { useClock } from "../hooks/useClock";

const Clock = () => {
  const time = useClock();
  const [is12Hour, setIs12Hour] = useState(true);

  const toggleFormat = () => setIs12Hour(!is12Hour);

  const hours = is12Hour
    ? (time.getHours() % 12 || 12).toString().padStart(2, "0")
    : time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const period = is12Hour ? (time.getHours() >= 12 ? "PM" : "AM") : "";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-baseline gap-2 md:gap-4 font-[VT323] text-base-content drop-shadow-lg">
        <div className="text-6xl md:text-9xl lg:text-[12rem] leading-none tracking-tighter">
          {hours}:{minutes}
        </div>
        <div className="flex flex-col items-start">
          <div className="text-3xl md:text-5xl lg:text-6xl leading-none opacity-80">{seconds}</div>
          {is12Hour && <div className="text-xl md:text-3xl lg:text-4xl leading-none opacity-60 mt-1 md:mt-2">{period}</div>}
        </div>
      </div>

      <button
        onClick={toggleFormat}
        className="btn btn-ghost btn-sm font-[VT323] text-xl opacity-50 hover:opacity-100 transition-opacity"
      >
        {is12Hour ? "24H" : "12H"}
      </button>
    </div>
  );
};

export default Clock;
