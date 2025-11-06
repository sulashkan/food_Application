import { createContext , useContext,useState,useEffect, Children } from "react";
import { getAuth,onAuthStateChanged, signOut } from "firebase/auth";
import {app} from "../firebase"

export const AuthContext = createContext();
const auth = getAuth(app);

export const AuthProvider = ({ children }) =>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null);

    useEffect(()=>{

        const subscrbe = onAuthStateChanged(auth ,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => subscrbe();

    },[]);

    const logout = async() =>{
        await signOut(auth);
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user,loading,logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

