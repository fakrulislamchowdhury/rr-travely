import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    // sign in google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    // sign in github
    const signInUsingGithub = () => {
        setIsLoading(true);
        const githubProvider = new GithubAuthProvider();

        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                console.log(result.user);
            })
            .finally(() => setIsLoading(false));
    }

    // Observed user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInUsingGithub,
        logOut
    };
}

export default useFirebase;