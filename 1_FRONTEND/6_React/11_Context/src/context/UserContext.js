// This file has no other work than to create a context using create context
// After this we have to create a context provider who will provide this data to the required components
// For this, context provider file is used which is a jsx file

import React, { createContext } from "react";

const UserContext = createContext()

export default UserContext