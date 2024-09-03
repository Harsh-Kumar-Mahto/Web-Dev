import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user}=useContext(UserContext)       //here the context is used to retrieve the data that user has given
    
    if(!user) return <div>Please Login</div>
    
    return <div>Welcome {user.username}</div> 
}

export default Profile
