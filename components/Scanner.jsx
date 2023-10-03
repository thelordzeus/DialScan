"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export const Scanner = () => {
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
    <div>
      {scanResult ? (
        <div className="flex mt-20">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow   mx-auto">
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://static.thenounproject.com/png/4038155-200.png"
                alt="User image "
              />

              <span className="text-sm text-gray-500 dark:text-gray-400">
                John Doe
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {scanResult}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Call Contact
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Add to Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="reader"></div>
      )}
    </div>
  );
};
