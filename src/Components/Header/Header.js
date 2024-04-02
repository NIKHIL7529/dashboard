import React, { useState, useEffect } from "react";

export default function Header() {
  const [timeLeft, setTimeLeft] = useState(400); // 20 seconds for testing
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      // Timer has expired
      setTimerExpired(true);
    }
  }, [timeLeft]);

  if (timerExpired) return null; // Hide the header if timer has expired

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <header className="bg-[#F9DEBF] text-black font-bold py-1 px-6 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="bg-[#F5C67B] text-[#333333] px-3 py-1 rounded-full flex items-center gap-2">
          <i className="fa-solid fa-clock"></i>
          <p className="text-sm">One-Time Offer</p>
        </div>
        <div className="bg-[#F9DEBF] px-3 py-1 rounded-md flex items-center gap-2">
          <p className="text-sm">
            Your AI Storyboarding Bundle Discount expires in{" "}
            <span className="text-pink-400 bg-[#fae8c8] py-1 px-2 rounded">{`${minutes}:${seconds
              .toString()
              .padStart(2, "0")}`}</span>
          </p>
        </div>
      </div>
      <button className="bg-[#E69BA0] hover:bg-[#D9808A]  py-1 px-4 rounded">
        Claim Discount
      </button>
    </header>
  );
}
