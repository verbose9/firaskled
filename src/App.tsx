import firebase from './backend';
import 'firebase/auth';
import React, { useState, useEffect } from 'react';
import Chatroom from './components/chatroom';

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [err, setErr] = useState<null | Error>(null);
  const [loading, setLoading] = useState<boolean>(true);
  // [Start] Sign Out
  const handleSignOut: React.MouseEventHandler<HTMLButtonElement> = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };
  // [End] Sign Out
  // [Start] Authentication
  //
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        if (res.user) {
          setUser(res.user);
          setErr(null);
        }
      })
      .catch((err: Error) => {
        setErr(err);
      });
  };
  // [End]
  //
  // Check Auth State
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) setUser(user);
      setLoading(false);
    });
  }, []);
  return (
    <div className="h-screen max-h-screen overflow-auto">
      {err && (
        <div className="py-2 px-4 bg-red-100 text-red-600 rounded-lg fixed bottom-0 right-0 m-8">
          Whoops...{err.message} Retry Later.
        </div>
      )}

      {user && <Chatroom user={user} handleSignOut={handleSignOut} />}

      {!loading && !user && (
        <div className="m-8">
          <h1 className="text-black font-bold text-4xl mb-8">
            Welcome, Sign in with Google
          </h1>
          <button
            onClick={handleClick}
            className="bg-blue-500 rounded-lg px-8 py-2 text-white focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
