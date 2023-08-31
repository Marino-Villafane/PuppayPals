import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {

// Get a list of the puppies to the website
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", puppyList);
  return (
      <div className='App'>
        {puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        })
        }
      </div>
  
  );
}

export default App
