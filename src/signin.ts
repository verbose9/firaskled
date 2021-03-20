import firebase from './backend';

const provider = new firebase.auth.GoogleAuthProvider();
export default firebase.auth;
export { provider };
