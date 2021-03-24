import React from 'react';

interface ErrorProps {
  err: Error;
  handleDismiss: React.MouseEventHandler<HTMLButtonElement>;
}

function Error({ err, handleDismiss }: ErrorProps) {
  return (
    <div className="fixed flex items-center m-2 bottom-0 right-0 md:max-w-md space-x-2">
      <div className="w-full px-3 py-2 bg-red-100 text-sm text-red-600 rounded-xl">
        <strong>Whoops...</strong>
        {err.message}
      </div>

      <button
        onClick={handleDismiss}
        className="text-white bg-red-500 focus:outline-none hover:bg-red-600 rounded-full p-2"
      >
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
export default Error;
