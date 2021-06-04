import { useEffect, useState } from 'react';

export function useAuth(authFirebase) {
  const [authentification, setAuthentification] = useState(null);

  const auth = authFirebase();
  const provider = new authFirebase.GoogleAuthProvider();

  const logIn = () => auth.signInWithPopup(provider);

  const logOut = () => auth.signOut()
    .catch(err => console.error(err))

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user ? 
        setAuthentification(user) :
        setAuthentification(null);
    })
  }, [auth, authentification]);

  return { authentification, logIn, logOut };
}