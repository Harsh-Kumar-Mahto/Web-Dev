import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyFile from './MyFile.jsx'
import './index.css'
import React from 'react'

// This is the code to create an element using the skeleton which is in react, we need to write the element type, then props in a {} and at last the text
// If below element is rendered it will work correctly but if we create element using skeleton of custom react file, it will not work as react has this structure and that is made by us
// const reactElement= React.createElement(
//   'a',
//   {href:"https://www.google.com",target:"_blank"},
//   "click here"
// )

createRoot(document.getElementById('root')).render(
  // In jsx we can return only one block that is why we use <>, this is known as a fragment
  <>  
    <App />
    <MyFile />
  </>
)
