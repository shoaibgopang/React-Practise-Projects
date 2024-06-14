import React, { useState } from 'react'
import dataimport from './dataimport'

// URL of data
const url = 'https://www.course-api.com/react-tours-project';

// generating data
const tourdata = await dataimport(url)

// Remove any place from list and return the new list with removal of place
function removefuntion(id,list){
    const list1 = list.filter((item)=>item.id!==id)
    return list1;
}

function App() {
    const [places,setplaces] = useState(tourdata)
    
    return(<>
    
    <h2 id='headline'>Our Tours</h2>

    <div className='container'>
    {places.map((place)=>{
        const {id,image,info,name,price} = place
        
        console.log(places)
        return(<div className='placesection' id={id}>
            <img src={image} alt={name}/>
            
            <span className='price'>${price}</span>
            <h3 className='placename'>{name}</h3>
            <p className='info'>{info}</p>
            <div className='notinterested-div'>
            <button onClick={()=>{setplaces(removefuntion(id,places))}} className='notinterested-button'>Not Interested</button>
            
            </div>
        </div>)
    })}
    </div>
    </>)
}

export default App
