import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import { DetailsContext } from "../../context/DetailsContext";

export const Logout = () => {
  const { logoutUser } = useContext(DetailsContext);

  useEffect(() => {
    logoutUser();
  }, [Logout]);

  return <Navigate to="/login" />;
};
