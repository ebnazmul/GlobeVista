import { createContext } from "react";

const AuthContexts = createContext(null);

const value = "HHHH";

// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) => {
    return (
        <AuthContexts.Provider value={value}>
            {children}
        </AuthContexts.Provider>
    );
};

export default AuthContext;