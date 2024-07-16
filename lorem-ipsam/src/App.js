import React, { useState,useEffect } from 'react'
import text from './data.js'

function App() {
    const[showtext,settext] = useState([])
    const[paragraphcount,setparagraphcount] = useState(1);

    function clickHandler(event){
        const newvalue = parseInt(event.target.value,10);
        setparagraphcount(newvalue)
        
    }
    function submithandler(event){
        event.preventDefault();
        
        let temp_text = []
        for (let i=0;i<paragraphcount;i++){
            temp_text.push(text[i])
        }   
        settext(temp_text);
    }
    

    return(
        <main>
            <div id='formdiv'>
            <p id='title'>tired of boring lorem ipsum?</p>
            <form onSubmit={submithandler}>
                <label for='paragraphs'>Paragprahs: </label>
                <input id='paragraphs' type='number' min={1} max={text.length} step={1} value={paragraphcount} onChange={clickHandler}></input>
                <button id='submitbutton' type='submit' >Generate</button>
                {showtext.map((eachtext)=>{
                    return(
                        <p className='eachparagraph'>{eachtext}</p>

                    )
                })}
            </form>
            </div>
        </main>
    )
  
}

export default App
