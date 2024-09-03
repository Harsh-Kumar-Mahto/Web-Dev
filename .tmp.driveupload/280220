// There is one problem here in selection of currency type, list doesn't contain any element as i was unable to extract key values and add them as options in the list
import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [fromAmt,setFromAmt]=useState(0)
  const [toAmt,setToAmt]=useState(5)

  const currencyInfo=useCurrencyInfo(from)    //this is currency api realted, we get currency values using the api
  const option=Object.keys(currencyInfo)

  // function for the conversion of values
  function fromChange(){
    setToAmt(()=>fromAmt*currencyInfo[to])
  }


  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",position:"fixed",top:"0",left:"0",width:"100vw",backgroundImage:`url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>

      <h1 style={{color:"orange",backgroundColor:"black",padding:"1rem",borderRadius:"1rem"}}>Currency Converter</h1>
      <div style={{height:"19rem",width:"30rem",backgroundColor:"white",borderRadius:"1rem"}}>

        <div style={{padding:"0.2rem",border:"1px solid black",display:"flex",color:"black",justifyContent:"space-between",backgroundColor:"white",height:"5rem",borderRadius:"0.8rem",width:"28rem",margin:"1rem"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            <span style={{marginTop:"0.4rem"}} >From</span>
            <input onChange={(e)=>setFromAmt(e.target.value)} value={fromAmt}  style={{width:"10rem",marginLeft:"0.7rem",textAlign:"center",fontSize:"larger",backgroundColor:"white",border:"none",color:"black"}} type="number" id="" defaultValue={0} />
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{marginTop:"0.1rem"}}>Currency Type</span>
            <select style={{marginTop:"0.8rem",height:"2rem",width:"5rem",textAlign:"center",fontSize:"larger",borderRadius:"0.5rem",backgroundColor:"grey",border:"none",color:"black"}} id="">
              <option value="usd">{from}</option>
            </select>
          </div>
        <button onClick={()=>{setFrom(to);setTo(from);setFromAmt(toAmt);setToAmt(fromAmt)}} style={{position:'fixed',left:"48%",top:"53%",height:"2rem",padding:"0 1rem",backgroundColor:"black"}}>Swap</button>
        </div>

        <div style={{padding:"0.2rem",border:"1px solid black",display:"flex",color:"black",justifyContent:"space-between",backgroundColor:"white",height:"5rem",borderRadius:"0.8rem",width:"28rem",margin:"1rem",marginBottom:"0rem"}}>
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            <span style={{marginTop:"0.4rem"}}>To</span>
            <input onChange={(e)=>setToAmt(e.target.value)} value={toAmt} style={{marginLeft:"1rem",width:"10rem",textAlign:"center",fontSize:"larger",backgroundColor:"white",border:"none",color:"black"}} type="number" id="" />
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
            <span style={{marginTop:"0.1rem"}}>Currency Type</span>
            <select style={{marginTop:"0.8rem",height:"2rem",width:"5rem",textAlign:"center",fontSize:"larger",borderRadius:"0.5rem",backgroundColor:"grey",border:"none",color:"black"}} id="">
              <option value="ind">{to}</option>
            </select>
          </div>
        </div>
        
        <button onClick={fromChange} style={{backgroundColor:"blue",height:"4rem",borderRadius:"0.8rem",width:"28rem",margin:"1rem"}}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
    </div>
  )
}

export default App
