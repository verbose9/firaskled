import React, { useState } from 'react';

interface user {
  name: string;
  age: number;
}
export default function App() {
  const [dialog, setDialog] = useState(false);
  const [user, setUser] = useState<user>();
  return (
    <div className="m-10 text-gray-500">
      <h1 className="text-black font-bold text-4xl">
        Video <code>➡</code> Gif
      </h1>
      <div className="flex flex-col-reverse md:flex-row mt-10">
        <div className="border-t border-gray-300 w-full">
          <p className="mt-4 text-lg text-black font-medium">
            Select a video file
          </p>
          <button className="px-8 py-2 flex items-center font-medium text-lg bg-gray-900 text-white shadow-md mt-4 rounded-md hover:bg-black hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition">
            <span>Select</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline-block h-6 w-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
          <p className="text-red-500 mt-4 align-middle flex">
            Converting to GIF may result in color and quality loss.
          </p>
        </div>

        <div className="h-60 w-full bg-gray-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      <div className="fixed right-0 bottom-0 px-4 py-2 bg-gray-100 m-4 rounded-lg">
        Proudly hosted by <span className="text-black">Github</span>
      </div>
    </div>
  );
}
