import React from 'react'
import { useParams } from 'react-router-dom'

// Here we are capturing the data from the url bar, this will take the userid written in the format user/userid in the url

function User() {

    const {userid} = useParams()  //This hook is used to capture the data as they are received with the help of route written in main.jsx
    // name above must be same as that of the param captured in the Route

  return (
    <div className='text-3xl text-white bg-gray-500 text-center p-4'>
      User:{userid}
    </div>
  )
}

export default User
