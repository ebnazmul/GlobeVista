import { useContext } from "react";
import { AuthContexts } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import Loading from "../Extra/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContexts);

  if (loading) {
    return <Loading/>;
  }


  else{
    if (!user) {
      return <Navigate to="/login" />;
    }
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
