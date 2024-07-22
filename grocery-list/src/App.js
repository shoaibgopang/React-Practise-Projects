import React, { useState, useEffect } from 'react'

function App() {
    const[items,setitems] = useState([])

    function submithandler(event){
        event.preventDefault();
        setitems([...items,event.target.inputtext.value]);
        event.target.inputtext.value =''
    }

    function deleteitem(item1){
        setitems(items.filter((item)=> item!=item1))
    }

    return(<main>
        <div id='card'>
            <p id='grocerytext'>Grocery</p>
            <form onSubmit={submithandler}>
                <div className='formdiv'>

                <input type='text' id='inputtext' placeholder='Enter Grocery items'/>
                <input type='submit' value={'Add Item'}/>
                </div>
            </form>
            {items.map((item)=>{
                return(<div className='itemdiv'>
                <p className='item'>{item}</p>
                <button onClick={()=>{deleteitem(item)}} className='deletebutton'>remove</button>
                </div>
                )
            })} 
        </div>
    </main>)
  
}

export default App
