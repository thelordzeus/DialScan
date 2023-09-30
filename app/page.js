"use client";
import { QRCodeGenerator } from "@/components/QRCodeGenerator";
import { Scanner } from "@/components/Scanner";

export default function Home() {
  return (
    <main>
      <div>
        <QRCodeGenerator />
        <Scanner />
      </div>
    </main>
  );
}
