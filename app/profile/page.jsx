"use client";
import { QRCodeGenerator } from "@/components/QRCodeGenerator";

export default function Profile() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 shadow-xl rounded-md">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Generate your contact QR code
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Users will be able to scan this qr code and give you a call using
          Twillio services
        </p>

        <div className="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8">
          <div>
            <QRCodeGenerator />
          </div>
        </div>
      </div>
    </div>
  );
}
