import React from "react";
import QRCode from "qrcode.react";
import { useState } from "react";

export const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input
        type="number"
        onChange={handleChange}
        className="text-black border-black"
        placeholder="Enter your number here"
      />
      <QRCode value={inputValue} />
    </div>
  );
};
