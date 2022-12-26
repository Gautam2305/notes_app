import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("Token");
    const [ userDetails, setUserDetails ] = useState({
        cartList: [],
        wishList: [],
        firstName: "",
    })

    useEffect(()=> {
        if(token){
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    const logoutHandler = () => {
        localStorage.removeItem("Token");
        setIsLoggedIn(false);
        navigate("/");
    };
    return(
        <AuthContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            userDetails,
            setUserDetails,
            logoutHandler
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider};