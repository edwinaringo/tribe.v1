import React, {useState, useEffect} from 'react'
import { SignedInStack, SignedOutStack } from './screens/Navigation'
import { FIREBASE_AUTH } from './firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'


const AuthNavigation = () => {

    const auth = getAuth(FIREBASE_AUTH);

    const [currentUser, setCurrentUser] = useState(null)

    const userHandler = user => 
        user ? setCurrentUser(user) : setCurrentUser(null)
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => userHandler(user));
            return () => {
                // Unsubscribe the auth state listener when the component unmounts
                unsubscribe();
            };
        }, []);
        
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}

export default AuthNavigation