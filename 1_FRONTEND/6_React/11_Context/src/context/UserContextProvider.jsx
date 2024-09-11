// This will contain the data which needs to be stored as here is the data of user.
// Then we just return the name of context.provider and this will provide acces of data globally but we need to pass children as parameter to function and put it inside tags as shown
// Also we have to write all the data inside the value field which need to be shared
// This file now can be used directly in the App.jsx

import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}) {
    const [user,setUser]=useState(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
