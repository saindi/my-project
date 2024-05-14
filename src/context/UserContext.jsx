import {createContext, useState} from "react";


export const UserContext = createContext(null);
UserContext.displayName = "UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({username: null, isAuth: false})

    const changeUser = (username, isAuth) => {
        setUser({username: username, isAuth: isAuth})
    };

    const contextValue = {
        user: user,
        changeUser: changeUser
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;