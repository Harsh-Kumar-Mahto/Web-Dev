// Usercontext is used to provide all the required info directly to a particular component so that it may not required to be shared with each parent of the component
// For this we make an independent Context js file and create a context
// Then a context provider need to be created that propagates the data

import React from "react";

const UserContext = React.createContext()

export default UserContext