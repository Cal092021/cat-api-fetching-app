import {useState, useEffect} from "react"
import './App.css';

//https://cat-fact.herokaupp.com/facts/random

const App = () => {
  const [fact, setFAct] = useState({})

  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random")
    const data = await response.json()
    console.log(data)
    setFAct(data)
  }
  return (
    <div className="App">
      <h1>Hello API's!</h1>
      <button onClick = {handleFetch}> Retrieve cat facts!</button>
  
      <p>{fact.text}</p>
    </div>
  );
}

export default App;