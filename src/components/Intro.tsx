import React from 'react';

interface IntroProps {
  handleSignIn: React.MouseEventHandler<HTMLButtonElement>;
}
const Intro: React.FC<IntroProps> = ({ handleSignIn }) => {
  return (
    <div className="flex pt-20 mb-6">
      <div
        style={{ backdropFilter: 'blur(4px)' }}
        className="fixed top-0 bg-gray-100 bg-opacity-50 w-screen px-8 py-5 text-2xl left-0"
      >
        FiraSkled
      </div>
      <div className="mx-8 pt-10">
        <h1 className="text-5xl font-bold text-black leading-tight">
          The Utimate Chat Platform for the Web
        </h1>
        <p className="text-xl text-gray-600 mt-4 leading-relaxed">
          Built upon Google Cloud Platform that offers wicked fast API calls.
        </p>
        <p className="mt-4 text-xl">Still Waiting? Sign up now!</p>
        <button
          className="mt-4 px-9 py-2 focus:outline-none focus:bg-gray-900 focus:shadow-xl bg-gray-700 text-white rounded-xl shadow-lg"
          onClick={handleSignIn}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Intro;
