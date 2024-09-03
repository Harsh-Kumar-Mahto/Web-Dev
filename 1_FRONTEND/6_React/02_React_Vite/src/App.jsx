import MyFile from "./MyFile.jsx"
function App() {
  const name="Harsh Kumar Mahto"
  return (
    // {} is used to inject any variable while returning as we can only give the final value and can't write the whole code to derive value in return 
    <>
    <h1>HI I am {name}</h1>  
    <MyFile/>
    </>
  )
}

export default App
