import { useState } from "react";
import dynamic from "next/dynamic";

const QrReader = dynamic(
  () => import("react-qr-reader").then((mod) => mod.default),
  { ssr: false }
);

function Scanner() {
  const [result, setResult] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </div>
  );
}

export default Scanner;
