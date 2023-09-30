import React from "react";
import QRCode from "qrcode.react";
import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";

export const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex flex-col">
      <div>
        <div className="relative">
          <input
            type="number"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter your phone number"
            onChange={handleChange}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <AiFillPhone className="h-4 w-4 text-gray-600" />
          </span>
        </div>
      </div>

      <div className="mx-auto">
        <QRCode
          value={inputValue}
          className="w-full rounded-lg border-gray-200 p-4"
        />
      </div>
    </div>
  );
};
