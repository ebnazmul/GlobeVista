import { useContext } from "react";
import { AuthContexts } from "../Context/AuthContext";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContexts);


    if(loading){
        return <div>Loading...</div>
    }

    if(!user){
        return <div></div>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;