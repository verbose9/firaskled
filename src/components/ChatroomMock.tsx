import React, { useState } from 'react';

export default function ChatroomMock() {
  const [panel, setPanel] = useState(false);
  return (
    <div className="max-h-screen h-screen grid chatroom-grid-template">
      <div className="bg-white shadow-lg rounded-b-3xl flex justify-between items-center px-8">
        <div className="flex items-center text-gray-800 text-lg">
          <div className="w-10 h-10 bg-gray-200 rounded-full mr-2"></div>
          My Name
        </div>
        <button
          onClick={() => setPanel(!panel)}
          className="text-gray-600 focus:outline-none rounded-full focus:ring-2 focus:ring-gray-600 focus:ring-offset-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29.264"
            height="28.915"
            viewBox="0 0 29.264 28.915"
          >
            <path
              id="Icon_ionic-ios-cog"
              data-name="Icon ionic-ios-cog"
              d="M32.126,17.03l-1.835-.3a.559.559,0,0,1-.464-.478c-.035-.225-.07-.45-.12-.668a.567.567,0,0,1,.274-.6l1.624-.9a.564.564,0,0,0,.274-.7l-.281-.773a.559.559,0,0,0-.661-.352l-1.821.352a.566.566,0,0,1-.6-.288q-.158-.3-.337-.591a.572.572,0,0,1,.049-.668l1.216-1.4a.559.559,0,0,0,.021-.745l-.527-.633a.555.555,0,0,0-.738-.105l-1.6.956a.562.562,0,0,1-.661-.063c-.169-.148-.345-.3-.52-.436A.561.561,0,0,1,25.242,8L25.9,6.265a.563.563,0,0,0-.232-.71l-.717-.415a.561.561,0,0,0-.731.155L23.055,6.757a.5.5,0,0,1-.6.176s-.394-.162-.689-.26a.559.559,0,0,1-.387-.541l.028-1.856a.566.566,0,0,0-.464-.591l-.816-.141a.568.568,0,0,0-.64.394l-.6,1.758a.562.562,0,0,1-.548.38c-.112,0-.232-.007-.345-.007s-.232,0-.345.007A.568.568,0,0,1,17.1,5.7l-.6-1.758a.568.568,0,0,0-.64-.394l-.816.141a.566.566,0,0,0-.464.591L14.6,6.131a.563.563,0,0,1-.387.541c-.162.063-.513.2-.682.26a.56.56,0,0,1-.619-.2L11.756,5.3a.561.561,0,0,0-.731-.155l-.717.415a.556.556,0,0,0-.232.71l.661,1.737a.566.566,0,0,1-.176.64c-.176.141-.352.288-.52.436a.562.562,0,0,1-.661.063L7.8,8.177a.563.563,0,0,0-.738.105l-.527.633a.559.559,0,0,0,.021.745l1.216,1.4a.56.56,0,0,1,.049.668q-.179.285-.338.591a.571.571,0,0,1-.6.288l-1.821-.352a.566.566,0,0,0-.661.352l-.281.773a.564.564,0,0,0,.274.7l1.624.9a.557.557,0,0,1,.274.6c-.042.225-.084.443-.12.668a.567.567,0,0,1-.464.478l-1.835.3a.568.568,0,0,0-.5.555V18.4a.552.552,0,0,0,.5.555l1.835.3a.559.559,0,0,1,.464.478c.035.225.07.45.12.668a.567.567,0,0,1-.274.6l-1.624.9a.564.564,0,0,0-.274.7l.281.773a.559.559,0,0,0,.661.352l1.821-.352a.566.566,0,0,1,.6.288q.158.3.338.591a.572.572,0,0,1-.049.668l-1.216,1.4a.559.559,0,0,0-.021.745l.527.633A.555.555,0,0,0,7.8,27.8l1.6-.956a.562.562,0,0,1,.661.063c.169.148.345.3.52.436a.561.561,0,0,1,.176.64L10.1,29.721a.563.563,0,0,0,.232.71l.717.415a.561.561,0,0,0,.731-.155l1.181-1.448a.516.516,0,0,1,.577-.183c.239.1.4.155.7.253a.559.559,0,0,1,.387.541l-.028,1.856a.566.566,0,0,0,.464.591l.816.141a.568.568,0,0,0,.64-.394l.6-1.758a.562.562,0,0,1,.548-.38c.112,0,.232.007.345.007s.232,0,.345-.007a.568.568,0,0,1,.548.38l.6,1.758a.568.568,0,0,0,.64.394l.816-.141a.566.566,0,0,0,.464-.591L21.4,29.855a.559.559,0,0,1,.387-.541c.3-.1.492-.176.675-.246a.49.49,0,0,1,.584.148l1.2,1.47a.561.561,0,0,0,.731.155l.717-.415a.556.556,0,0,0,.232-.71l-.661-1.737a.566.566,0,0,1,.176-.64c.176-.141.352-.288.52-.436a.562.562,0,0,1,.661-.063l1.6.956a.563.563,0,0,0,.738-.105l.527-.633a.559.559,0,0,0-.021-.745l-1.216-1.4a.56.56,0,0,1-.049-.668q.179-.285.337-.591a.571.571,0,0,1,.6-.288l1.821.352a.566.566,0,0,0,.661-.352l.281-.773a.564.564,0,0,0-.274-.7L30,21a.557.557,0,0,1-.274-.6c.042-.225.084-.443.12-.668a.567.567,0,0,1,.464-.478l1.835-.3a.568.568,0,0,0,.5-.555v-.823A.578.578,0,0,0,32.126,17.03ZM12.783,25.095a1.133,1.133,0,0,1-1.758.253A10.135,10.135,0,0,1,11,10.68a1.129,1.129,0,0,1,1.758.246L16.7,17.719a.573.573,0,0,1,0,.563ZM27.844,20.37a10.136,10.136,0,0,1-12.7,7.348,1.122,1.122,0,0,1-.654-1.638l3.916-6.813a.558.558,0,0,1,.485-.281h7.854A1.123,1.123,0,0,1,27.844,20.37Zm-1.09-3.354H18.893a.55.55,0,0,1-.485-.281l-3.945-6.8A1.128,1.128,0,0,1,15.11,8.29,10.148,10.148,0,0,1,27.844,15.63,1.122,1.122,0,0,1,26.754,17.016Z"
              transform="translate(-3.375 -3.535)"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="max-h-full overflow-auto bg-blue-500 bg-opacity-25"></div>
      <div
        style={{ backdropFilter: 'blur(16px)' }}
        className="px-4 w-full flex items-center"
      >
        <input
          type="text"
          className="focus:outline-none bg-white py-2 px-4 rounded-full w-full"
          placeholder="Type something awesome..."
        />
        <button className="flex items-center justify-center px-2 bg-blue-500 rounded-full ml-2 w-10 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="14.344"
            viewBox="0 0 27 14.344"
            className="h-6 w-6"
          >
            <path
              id="Icon_ionic-ios-return-left"
              data-name="Icon ionic-ios-return-left"
              d="M4.957,18.661l4.191-4.177a.978.978,0,0,1,.7-.288.961.961,0,0,1,.7.288.985.985,0,0,1,0,1.392l-.007.007L7.643,18.7H26.016A3.5,3.5,0,0,0,28.5,17.67a3.461,3.461,0,0,0,1.034-2.482V11.813a.984.984,0,0,1,1.969,0v3.375a5.5,5.5,0,0,1-5.484,5.484H7.615L10.4,23.5a.978.978,0,0,1,.288.7.961.961,0,0,1-.288.7l-.007.007a1.017,1.017,0,0,1-.689.274.939.939,0,0,1-.7-.288l-4.05-4.036a1.553,1.553,0,0,1-.457-1.1A1.505,1.505,0,0,1,4.957,18.661Z"
              transform="translate(-4.5 -10.828)"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
