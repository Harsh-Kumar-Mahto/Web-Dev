// Here also we are accessing the data, but this time the actual data so we are using user from the context and remaining is same

import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return <div>Please Login</div>   //This line is necessary as in the very beginning, there is no data of user so if we don't handle this condition then there will be a error
    //as the file will try to access a data which is not present. Once user data is available the other return will be rendered
  return (
    <div>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  )
}

export default Profile
