import type firebase from './backend';
import signIn, { provider } from './signin';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    signIn()
      .signInWithPopup(provider)
      .then(({ user }) => {
        setUser(user);
      });
  };
  useEffect(() => {
    signIn().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [user]);
  return (
    <div className="m-8">
      <h1 className="text-black font-bold text-4xl mb-8">
        Welcome, Sign in with Google
      </h1>
      {user && (
        <div className="bg-gray-100 p-8 rounded-2xl text-4xl md:w-1/2">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt="User's image"
              className="h-20 w-20 rounded-full border-2 border-blue-500 ring-2 ring-gray-300 ring-offset-4 ring-offset-gray-100 mb-6 mx-auto"
            />
          )}
          Hello, <span className="font-bold">{user.displayName}</span>
        </div>
      )}
      {!user && (
        <button
          onClick={handleClick}
          className="bg-blue-500 rounded-lg px-8 py-2 text-white focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default App;
