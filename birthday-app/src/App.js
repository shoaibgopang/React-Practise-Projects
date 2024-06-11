import React, { useState } from 'react'
import data from './data.js'
import './style.css'


function App() {

  const [people,setpeople] = useState(data);
  
  return(<div id='container'>
  
  {/* Birdthday number indicator */}
  <h2 id='birthday'>{people.length} Birthdays Today</h2>
  
  {/* Iterate each person */}
  {people.map((person)=>{

    const {id,image,name,age} = person

    return(<section key={id} className='person-info'>
    <img src={image} alt={name}/>
    <div className='age-name'>
    <h3>{name}</h3>
    <p>{age} Years</p>
    </div>
    </section>
)
  })}
  <div> 
  <button onClick={()=>setpeople([])} className='buttonclearall'>Clear All Birthdays</button>
  </div>
  </div>)
}

export default App
