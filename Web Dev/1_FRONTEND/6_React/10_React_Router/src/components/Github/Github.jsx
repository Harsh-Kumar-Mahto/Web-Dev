import React, { useEffect } from 'react'
import { useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/harsh-kumar-mahto')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div style={{display:"flex", flexDirection:"column",padding:"1rem",gap:"2rem",backgroundColor:"grey"}}>
        <div >
          Github Followers: {data.followers}
        </div>
          <img src={data.avatar_url} alt="Github Picture" width={250}/>
    </div>
  )
}

export default Github
