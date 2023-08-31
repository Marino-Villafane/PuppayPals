import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {

// Get a list of the puppies to the website
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    setFeatPupId(puppyId); // Update the featPupId state with the clicked puppy's ID
  }
 
  
  return (
      <div className='App'>
       
        {puppies.map((puppy) => {
          return <p onClick={handleClick} key={puppy.id}>{puppy.name}</p>
        })
        }
        {featPupId && <p>{featPupId}</p>}
      </div>
  
  );
}

export default App
