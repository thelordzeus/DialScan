"use client";
import { useEffect, useState } from "react";

import { Html5QrcodeScanner } from "html5-qrcode";
import { QRCodeGenerator } from "@/components/QRCodeGenerator";

export default function Home() {
  const [scanMode, setScanMode] = useState(false);
  const [scanResult, setScanResult] = useState(null);

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
        <QRCodeGenerator />
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
