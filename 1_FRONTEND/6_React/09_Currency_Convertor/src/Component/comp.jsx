import React from 'react'

function Comp(props) {
  return (
    <>
      <div className='bg-slate-500 h-20 p-4 text-black flex'>
        <div className='flex bg-white flex-col m-2'>
            <span >{props.dir}</span>
            <input className='bg-white text-black' defaultValue={0} type="number" name="number" id="number" />
        </div>
        <div className='flex bg-white flex-col'>
            <span>Currency Type</span>
            <select className='bg-white text-black' name="select" id="select">
                <option value="ind">ind</option>
                <option value="usd">usd</option>
            </select>
        </div>
      </div>
    </>
  )
}

export default Comp
