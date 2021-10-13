import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
 initializeAuthentication();


const useFirebase = ()=>{
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
   const  signInWithGoogle = ()=>{
        return  signInWithPopup(auth, googleProvider)
        // .finally(() => { setLoading(false) });
        
    }
    const logOut = () => {
  
        signOut(auth)
            .then(() => {
                setUser({})
            })
        
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    }, [])
    return{
        user,
        signInWithGoogle,
        logOut,

    }
}

export default  useFirebase;