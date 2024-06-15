import React, { useState } from 'react';
import reviews from './data.js';


//prev and next button
function changereview(x,id){
    if (x ===1) {
        if (id >= 1 && id <=3){
            return id+1;
        }
        else{
            return 1;
        }
    }
    else if (x===-1){
        if (id >= 2 && id <=4){
            return id-1;
        }
        else{
            return 4;
        }
    }

}

//surprise me button
function randomnumber(length,id){

    //generate number inbetween length
   const number = Math.floor(Math.random()*length)

    if(id !== number ){
        return number;
    }

    //If generated number is same as current id regenerate number
   return randomnumber(length,id);
}

function App() {

    const [review,setreview] = useState(reviews[0])
    const {id,name,job,text,image} = review;
  
    return(<main>
        <div className='container'>
            <div className='imagediv'>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" stroke="none"/></svg>
            <img src={image} alt={name}/>
            </div>
            <p id='name'>{name}</p>
            <p id='job'>{job}</p>
            <p id='review'>{text}</p>
            <div id='buttons'>
                <button className='prevbutton' onClick={()=>setreview(reviews[changereview(-1,id)-1])}></button>
                <button className='nextbutton' onClick={()=>setreview(reviews[changereview(1,id)-1])}></button>
            </div>
            <button className='randombutton' onClick={()=>setreview(reviews[randomnumber(reviews.length,id)])}>Surprise me</button>
        </div>
    </main>)
}

export default App
