import React, { useEffect, useState } from 'react'

//data for users
const url = 'https://course-api.com/react-tabs-project'
const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';


function App() {
    const [tabs,setTabs] = useState([])
    const [eachtab,seteachtab] = useState(null)
    const [loading,setloading] = useState(false)

    async function fetchurl(variable1){
        try{
            const response = await fetch(proxyUrl+variable1);
            const data = await response.json();
            await setTabs(data);
            await seteachtab(data[0]);
            await console.log(data[0].duties)
            
        }catch(error){
            console.error("Can't load url",error)
            return null;
        }finally{
            setloading(true)
        }
    }

    //load data from course-api
    useEffect(()=>{
        fetchurl(url);
        
        },[]);
        
    return<main>
        <div id='container'>
            
            <div id='name'>
            {loading && tabs.map((tab)=>{
                return(<p className='eachname'key={tab.id} onClick={()=>seteachtab(tabs.filter((tab1)=>tab1.id===tab.id)[0])}>{tab.company}</p>)
            })}
            </div>
                {loading ? (             
            <div className='info'>
                <p className='title'>{eachtab.title}</p>
                <p className='company'>{eachtab.company}</p>
                <p className='dates'>{eachtab.dates}</p>
                <div className='duties'>
                {eachtab.duties.map((duty)=>{
                    return(<div className='dutydiv'>
                    <svg className='arrowimg' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"/></svg>
                    <p className='duty'>{duty}</p>
                    
                    </div>)
                }
                )} 
                </div>
            </div>
                ): (<p>loading</p>)}
            
        </div>
    </main>
}

export default App
