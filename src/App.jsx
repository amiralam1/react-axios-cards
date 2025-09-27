import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Cards'
import axios from "axios";

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{
      setData(response.data)
    })
    .catch(err=>{console.log("could not fetch data: ",err)})
  }, []);

  return (
    <>
    <div className="cardContainer">
    {data.map((data)=>{
      return <Card key = {data.id} title={data.title} desc={data.body}/>
    })}
    </div>
    </>
  )
}

export default App
