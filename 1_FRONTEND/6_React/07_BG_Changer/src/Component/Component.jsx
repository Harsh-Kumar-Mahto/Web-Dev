import React from 'react'

function Component(props) {

  const bgChange=()=>{
    document.body.style.backgroundColor=props.Name
  }

  return (
    <>
      <button onClick={bgChange} className={`bg-${props.Name}-500 rounded-xl m-1`}>{props.color}</button>
    </>
  )
}

export default Component
