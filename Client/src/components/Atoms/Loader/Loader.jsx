import { useTheme } from "@/styles/theme";
import React, { useRef, useEffect } from "react";

const Loader = ({ isLoading = true }) => {
  const colors = useTheme();
  const spinnerRef = useRef(null);
  const lettersRef = useRef([]);
  const textArray = ["E", "c", "h", "o", "M", "e"];

  useEffect(() => {
    if (!isLoading) return;
    const letters = lettersRef.current.filter(Boolean);
    const spinner = spinnerRef.current;
    if (!spinner || letters.length === 0) return;

    const textCount = letters.length;
    let position = -20;
    let direction = 1;
    const speed = 2;
    const max = 250;

    const animate = () => {
      if (!spinner || letters.some((l) => !l)) {
        requestAnimationFrame(animate);
        return;
      }

      position += direction * speed;
      if (position >= max) direction = -1;
      if (position <= -20) direction = 1;

      spinner.style.transform = `translateX(${position}%) rotate(${
        (position / max) * 360
      }deg)`;

      letters.forEach((letter, i) => {
        const threshold = (i / (textCount - 1)) * 100;
        const relativePos = (position + 20) / (max + 20);
        letter.style.opacity = Math.min(
          Math.max(relativePos - threshold / 100, 0),
          1
        );
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [isLoading]); // added isLoading as dependency

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
      style={{ backgroundColor: `${colors.background}E6` }}
    >
      {isLoading && (
        <div className="flex w-max-content relative items-center justify-between">
          {/* Spinner */}
          <img
            ref={spinnerRef}
            src="/EchoMe.svg"
            alt="EchoMe Logo"
            className="object-contain absolute cursor-not-allowed w-[5rem] transition-all duration-300 ease-linear"
          />

          {/* Text */}
          <div className="text-7xl font-semibold italic relative z-10 flex gap-0.5">
            {textArray.map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) lettersRef.current[index] = el;
                }}
                style={{ color: index < 4 ? "#0E6BA8" : "#CE8380", opacity: 0 }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
