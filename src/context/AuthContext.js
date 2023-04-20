import { createContext, useContext,useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const _token = localStorage.getItem ("token");
    const _username = localStorage.getItem ("username");


    const [token, setToken] = useState(_token)
    const [username, setUserName] = useState(_username)

    // const setAuthToken = (token) => {
    //     localStorage.setItem("token", token);
    //     setToken(token)
    // }

    const createSession = (token, username)=>{
        localStorage.setItem("token",token);
        localStorage.setItem("username",username);
        setToken(token)
        setUserName(username)
    }

    const clearSession = () => {
        localStorage.clear("token");
        localStorage.clear("username");
        setToken("")
        setUserName("")
    }

    return(
        <AuthContext.Provider value={{token,username,createSession, clearSession}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthContext;