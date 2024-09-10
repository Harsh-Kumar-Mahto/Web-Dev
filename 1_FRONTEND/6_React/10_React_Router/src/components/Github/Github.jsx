import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData()   //with the help of this hook we can directly use the data from loader
    
    // This use effect will do the api call as we click on github in the navbar
    // But the other one is faster as it perform the api call as the cursor goes over the button
    // At the end we have exported a loader 

    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/harsh-kumar-mahto')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))
    // },[])

  return (
    <div className='text-center p-4 m-4 bg-gray-400 text-white'>
      Github Followers: {data.followers}
      <img className='h-28 w-28' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github


// This loader will be used to load a value as soon as cursor is over the button, we perform the api call and return the data in json format
// We receive this data in the loader of github route in main.jsx 

export const githubLoader = async () =>{
    const response = await fetch('https://api.github.com/users/harsh-kumar-mahto')
    return response.json()
}