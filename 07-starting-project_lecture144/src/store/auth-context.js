import React, { useEffect, useState } from "react";

// React.createContext will return an object that has a component too.
const AuthContext = React.createContext({
    isLoggedIn: false
    , onLogout: () => { }
    , onLogin: (username, password) => { }
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (username, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn
            , onLogin: loginHandler
            , onLogout: logoutHandler
        }} >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
