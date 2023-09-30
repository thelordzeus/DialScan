import React from "react";
import { PiQrCodeLight } from "react-icons/pi";
import { AiOutlineScan } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
            <div className="flex gap-4">
              <Link
                href="/"
                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              >
                <span className="sr-only">Home</span>
                <BiHomeAlt2 className="h-5 w-5" />
              </Link>
              <Link
                href="/profile"
                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              >
                <span className="sr-only">Contact QR</span>
                <PiQrCodeLight className="h-5 w-5" />
              </Link>

              <Link
                href="/reader"
                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
              >
                <span className="sr-only">Scan QR </span>
                <AiOutlineScan className="h-5 w-5" />
              </Link>
            </div>

            <button
              type="button"
              className="group flex shrink-0 items-center rounded-lg transition"
            >
              <span className="sr-only">Menu</span>
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              />

              <p className="ms-2 hidden text-left text-xs sm:block">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span className="text-gray-500"> eric@frusciante.com </span>
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome Back, Barry!
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Let's star calling people 📞
          </p>
        </div>
      </div>
    </header>
  );
};
