import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([])


  // We are using axios in place of fetch as it provides additional features. npm i axios

  // fetch('http://localhost:3000/jokes')
  // .then((res) => {
  //   setJokes(res.json());
  // })


  // We will encounter the CORS error and we have to fix it by either whitelisting our website or by other methods
  // Here we have done it using proxy in the vite.config file
  // proxy makes the request to be originated from the same localhost on which req is sent due to which the CORS error is takled
  useEffect(() => {
    axios.get('/api/jokes')   //We don't need to write the whole http://localhost:3000 because of proxy, as soon as it encounters /api it will automatically append it
    .then((res) => {
      setJokes(res.data)  //We don't need to convert to json format it is automatically done by axios
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
    <>
      <h1>This is my fullstack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => (  //This part was initially not rendering as we used {} without return. Other way is to directly use ()
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
