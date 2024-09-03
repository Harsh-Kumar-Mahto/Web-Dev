// this file is a jsx file that returns all the data in user context

import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}){
    const [user, setUser]=useState(null)    //here we are using a user's username and password as the required data 
    return(
        // data to be sent is given inside UserContext's Provider tag and value consist of all the values needed to be shared
        <UserContext.Provider value={{user, setUser}}>     
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider