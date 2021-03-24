import firebase from './backend';
import 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { Chatroom, Error, Intro, Loader } from './components';
import ChatroomMock from './components/ChatroomMock';
function App() {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [err, setErr] = useState<null | Error>(null);
  const [loading, setLoading] = useState(true);
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
  //
  // [Start] Authentication/Sign In
  const handleSignIn: React.MouseEventHandler<HTMLButtonElement> = () => {
    setLoading(true);
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        if (res.user) {
          setUser(res.user);
          setErr(null);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        setErr(err);
        setLoading(false);
      });
  };
  // [End] Authentication/Sign In
  //
  // [Start] Check Auth State(User does not has to sign in manually everytime he visits)
  useEffect((): void => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) setUser(user);
      setLoading(false);
    });
  }, []);

  // [End] Check Auth State
  // The main thing...
  return (
    <div className="h-screen max-h-screen overflow-auto">
      {err && (
        <Error
          err={err}
          handleDismiss={() => {
            setErr(null);
          }}
        />
      )}

      {/* {user && <Chatroom user={user} handleSignOut={handleSignOut} />} */}
      <ChatroomMock />
      {/* {!loading && !user && <Intro handleSignIn={handleSignIn} />} */}

      {loading && <Loader />}
    </div>
  );
}

export default App;
