// components/UserDetailsWrapper.js
import React from "react";
import useUserDetails from "./useUserDetails";

const UserDetailsWrapper = ({ children }) => {
  useUserDetails();
    
  // You can pass the user object to the children components if necessary.
  // For this example, we'll just render the children as they are.
  return <>{children}</>;
};

export default UserDetailsWrapper;
