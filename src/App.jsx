
import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import NewsBoard from './assets/components/NewsBoard'

function App() {

  const[category,setcategory]=useState("general")

  return (
    <>
      <Navbar setcategory={setcategory}/>
      <NewsBoard category={category}/>
    </>
  )
}

export default App
