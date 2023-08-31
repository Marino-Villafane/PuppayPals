import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'



function App() {
 // Get a list of the puppies to the website
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    // some logic here
  }

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => {console.log("puppy id: ", puppy.id)}} key={puppy.id}>
          {puppy.name}
        </p>
      ))}
    </div>
  );
}


export default App
