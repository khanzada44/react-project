import React, { useState } from "react";
import UserContext from "./Context/UserContext";

const UserContexProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider vaule={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContexProvider;
