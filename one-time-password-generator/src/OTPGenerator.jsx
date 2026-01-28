import React from 'react'
const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(5);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!otp) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [otp]);

  const generateOTP = () => {
    setOtp(Math.floor(100000 + Math.random() * 900000));
    setTimeLeft(5);
  };

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="assertive">
        {!otp
          ? ""
          : timeLeft === 0
          ? "OTP expired. Click the button to generate a new OTP."
          : `Expires in: ${timeLeft} seconds`}
      </p>

      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={otp && timeLeft > 0}
      >
        Generate OTP
      </button>
    </div>
  );
};

