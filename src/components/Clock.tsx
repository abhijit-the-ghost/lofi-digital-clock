import { useState, useEffect } from "react";

// Custom hook to track previous value
const usePrevious = (value: string) => {
  const [prev, setPrev] = useState(value);
  useEffect(() => {
    setPrev(value);
  }, [value]);
  return prev;
};

// Custom hook for clock logic
const useClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return time;
};

const Digit = ({ value, textColor }: { value: string; textColor: string }) => {
  const prevValue = usePrevious(value);
  const shouldFlip = prevValue !== value;

  return (
    <div className="relative bg-base-300 w-full h-full rounded-lg px-4 py-2 text-4xl font-[VT323]">
      <span
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out ${
          shouldFlip ? "animate-flip" : ""
        } ${textColor}`}
      >
        {value}
      </span>
    </div>
  );
};

const Clock = () => {
  const time = useClock();
  const [is12Hour, setIs12Hour] = useState(true);

  // Determine theme based on time
  const getTheme = (hour: number): "dawn" | "day" | "dusk" | "night" => {
    if (hour >= 5 && hour < 7) return "dawn";
    if (hour >= 7 && hour < 17) return "day";
    if (hour >= 17 && hour < 19) return "dusk";
    return "night";
  };

  const [theme, setTheme] = useState<"dawn" | "day" | "dusk" | "night">(
    getTheme(time.getHours())
  );

  useEffect(() => {
    setTheme(getTheme(time.getHours()));
  }, [time]);

  const toggleFormat = () => setIs12Hour(!is12Hour);

  const hours = is12Hour
    ? (time.getHours() % 12 || 12).toString().padStart(2, "0")
    : time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const period = is12Hour ? (time.getHours() >= 12 ? "PM" : "AM") : "";

  const dateString = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(time);

  // Theme-specific styles
  const themeStyles = {
    dawn: {
      bg: "bg-gradient-to-br from-pink-300 via-orange-200 to-yellow-100",
      card: "bg-base-100 bg-opacity-80 text-gray-800",
      text: "text-gray-800",
      starOpacity: "opacity-20",
    },
    day: {
      bg: "bg-gradient-to-br from-blue-200 to-yellow-100",
      card: "bg-base-100 bg-opacity-80 text-gray-900",
      text: "text-gray-900",
      starOpacity: "opacity-0",
    },
    dusk: {
      bg: "bg-gradient-to-br from-purple-300 via-orange-300 to-blue-300",
      card: "bg-base-100 bg-opacity-80 text-gray-800",
      text: "text-gray-800",
      starOpacity: "opacity-30",
    },
    night: {
      bg: "bg-gradient-to-br from-gray-900 to-blue-900",
      card: "bg-base-200 bg-opacity-80 text-white",
      text: "text-black",
      starOpacity: "opacity-100",
    },
  };

  return (
    <div
      className={`relative flex flex-col justify-center items-center h-screen ${themeStyles[theme].bg}`}
      data-theme={theme}
      aria-label="digital clock"
    >
      {/* Stars */}
      {["dawn", "dusk", "night"].includes(theme) && (
        <div
          className={`absolute inset-0 pointer-events-none ${themeStyles[theme].starOpacity}`}
        >
          <div className="star star1" />
          <div className="star star2" />
          <div className="star star3" />
          <div className="star star4" />
          {/* Moon */}
          <div className="moon" />
        </div>
      )}
      <div
        className={`card shadow-xl p-6 ${themeStyles[theme].card} relative transition-all duration-300 ease-in-out`}
      >
        <div className="flex space-x-2 items-center justify-center">
          <Digit value={hours[0]} textColor={themeStyles[theme].text} />
          <Digit value={hours[1]} textColor={themeStyles[theme].text} />
          <span className={`text-4xl font-[VT323] ${themeStyles[theme].text}`}>
            :
          </span>
          <Digit value={minutes[0]} textColor={themeStyles[theme].text} />
          <Digit value={minutes[1]} textColor={themeStyles[theme].text} />
          <span className={`text-4xl font-[VT323] ${themeStyles[theme].text}`}>
            :
          </span>
          <Digit value={seconds[0]} textColor={themeStyles[theme].text} />
          <Digit value={seconds[1]} textColor={themeStyles[theme].text} />
          {is12Hour && (
            <div
              className={`text-2xl font-[VT323] ml-2 ${themeStyles[theme].text}`}
            >
              {period}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className={`text-xl font-[VT323] ${themeStyles[theme].text}`}>
            {dateString}
          </div>
          <span
            className={`text-sm font-[VT323] ${themeStyles[theme].text} cursor-pointer hover:underline absolute bottom-2 right-2`}
            onClick={toggleFormat}
            role="button"
            tabIndex={0}
            aria-label={`Switch to ${is12Hour ? "24-hour" : "12-hour"} format`}
            onKeyDown={(e) => e.key === "Enter" && toggleFormat()}
          >
            {is12Hour ? "24h" : "12h"}
          </span>
        </div>
        <span className="sr-only">{`${hours}:${minutes}:${seconds} ${period}`}</span>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
          @keyframes flip {
            0% { transform: rotateX(0deg); }
            50% { transform: rotateX(90deg); }
            100% { transform: rotateX(0deg); }
          }
          .animate-flip {
            animation: flip 0.3s ease-in-out;
          }
          body {
            background: linear-gradient(45deg, ${
              theme === "dawn"
                ? "#f7c7c7, #f7b3a0, #f7e0a0"
                : theme === "day"
                ? "#b3e0ff, #f7e6a0"
                : theme === "dusk"
                ? "#c7a0f7, #f7b3a0, #a0c7f7"
                : "#1a202c, #2d3748"
            });
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle 2s infinite ease-in-out;
          }
          .star1 { top: 10%; left: 20%; width: 2px; height: 2px; animation-delay: 0s; }
          .star2 { top: 30%; left: 60%; width: 3px; height: 3px; animation-delay: 0.5s; }
          .star3 { top: 50%; left: 30%; width: 2px; height: 2px; animation-delay: 1s; }
          .star4 { top: 70%; left: 80%; width: 3px; height: 3px; animation-delay: 1.5s; }
          @keyframes twinkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          .moon {
            position: absolute;
            top: 10%;
            right: 10%;
            width: 30px;
            height: 30px;
            background: radial-gradient(circle, #f7f7f7 60%, transparent 70%);
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-flip, .star, body { animation: none; }
          }
        `}
      </style>
    </div>
  );
};

export default Clock;
