import React, {useState } from 'react'
import data from './data'


 
function App() {

    const [menus,setmenus] = useState(data)

    function changemenu(variable1){
           
        setmenus(
               data.filter((eachdata)=>
               eachdata.category ===variable1
                   )
            ) 
        
    }
    return(<main>
        <div className='headings'>Our Menu</div>
        <div className='borderlinediv'></div>
        <div className='categoriesdiv'>
            <button className='categorybutton' onClick={()=>{setmenus(data)}}>ALL</button>
            <button className='categorybutton' onClick={()=>{changemenu('shakes')}}>Shakes</button>
            <button className='categorybutton' onClick={()=>{changemenu('breakfast')}}>Breakfast</button>
            <button className='categorybutton' onClick={()=>{changemenu('lunch')}}>Lunch</button>
        </div>
        <div id='container'>
        {menus.map((menu)=>{
            const {id,title,price,img,desc} = menu;

            // Generate each menu item card
            return<article key={id}>
                <img src={`${process.env.PUBLIC_URL}${img}`} alt={id}/>
                <div className='title_price'>
                    <p className='title'>{title}</p>
                    <span className='price'>${price}</span>
                </div>
                <p className='info'>{desc}</p>
            </article>
        })}
        </div>
    </main>)
  
}

export default App
