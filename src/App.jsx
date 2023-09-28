import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'



function App() {
 // Get a list of the puppies to the website
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  function handleClick() {
    // some logic here
  }

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>
          {puppy.name}
        </p>

       
      ))}
      
      <p>
        {featPupId && <p> {featPupId } 
        <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
            </div></p>  } 
      </p>
    </div>
  );
}


export default App
