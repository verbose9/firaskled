import React from 'react';

interface ChatroomProps {
  user: firebase.default.User;
  handleSignOut: React.MouseEventHandler<HTMLButtonElement>;
}
const Chatroom: React.FC<ChatroomProps> = ({ user, handleSignOut }) => {
  return (
    <div className="p-8 bg-gray-100 rounded-2xl md:w-3/4 lg:w-1/2 m-8">
      <img
        src={user.photoURL ? user.photoURL : ''}
        className="mb-6 rounded-full h-20 w-20 object-cover border-2 border-blue-500 ring-2 ring-gray-300 ring-offset-4 ring-offset-gray-100"
      />
      <p>Welcome back</p>
      <h1 className="text-3xl text-black font-bold">{user.displayName}</h1>
      <button
        onClick={handleSignOut}
        className="py-2 px-8 bg-gray-300 text-black rounded-lg mt-4 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-100 transition"
      >
        Sign Out
      </button>
    </div>
  );
};
export default Chatroom;
