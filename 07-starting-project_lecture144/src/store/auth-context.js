import React from "react";

// React.createContext will return an object that has a component too.
const AuthContext = React.createContext({
    isLoggedIn: false
});

export default AuthContext;
