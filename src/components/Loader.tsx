import React from 'react';

export default function Loader() {
  return (
    <div className="h-6 w-6 bg-gray-800 rounded-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="h-6 w-6 bg-gray-800 animate-ping rounded-full"></div>
    </div>
  );
}
