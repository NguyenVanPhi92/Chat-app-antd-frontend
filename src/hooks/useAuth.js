import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const userCurrent = true;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userCurrent) {
      navigate("/login");
    }
  }, [userCurrent]);

  return <div>useAuth</div>;
};

export default useAuth;
