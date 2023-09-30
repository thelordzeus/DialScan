"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { FiCamera } from "react-icons/fi";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [scanMode, setScanMode] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const toggleScanMode = () => {
    setScanMode(!scanMode);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.log(err);
    }
  }, []);

  return (
    <main>
      <div>
        <input
          type="number"
          onChange={handleChange}
          className="text-black border-black"
          placeholder="Enter your number here"
        />
        <QRCode value={inputValue} />
        {scanResult ? (
          <div>
            Success: <a href={"http://" + scanResult}>{scanResult}</a>{" "}
          </div>
        ) : (
          <div id="reader"></div>
        )}
      </div>
    </main>
  );
}
