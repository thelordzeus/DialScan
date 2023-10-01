"use client";
import { useState } from "react";
import axios from "axios";

function CallButton() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCall = async () => {
    try {
      const response = await axios.post("/api/make-call/router", {
        phoneNumber: phoneNumber, // Use the phoneNumber state
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error making the call:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="text-black border-black p-4 w-full"
      />
      <button onClick={handleCall}>Call</button>
    </div>
  );
}

export default CallButton;
