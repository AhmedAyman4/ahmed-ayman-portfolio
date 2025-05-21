"use client";
import { useState, useEffect } from "react";

export default function AvailableStatus() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center w-full p-4">
      <p className="text-sm flex items-center">
        <span style={{ color: "hsl(215,100%,90%)" }}>Available for work </span>
        <span
          className={`inline-block h-2 w-2 ml-1 bg-green-500 rounded-full ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "opacity 0.5s ease-in-out" }}
        />
      </p>
    </div>
  );
}
