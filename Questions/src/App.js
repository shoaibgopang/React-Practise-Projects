import React, { useState } from "react";
import questions from "./data.js";
import hideicon from "./icons/hide.svg";
import showicon from "./icons/show.svg";

function Question(variable1) {
    console.log(variable1.props);
    const { id,title, info,} = variable1.props;
    const [showinfo,setinfo] =useState(false)

  return (
    <div key={id} className="article">
      <div className="titlediv">
        <p className="titleparagraph">{title}</p>
        {showinfo? <img src={showicon} alt="show-icon" className="showhide" onClick={()=>{setinfo(!showinfo)}} />:<img src={hideicon} alt="hide-icon" className="showhide" onClick={()=>{setinfo(!showinfo)}} /> }
        
      </div>
      {showinfo && <p className="infoparagraph">{info}</p>}
      
    </div>
  );
}

function App() {
    return (
    <main>
      <div id="container">
        <div id="header">Questions</div>
        {questions.map((question) => {
            return(
                <Question props={question} />
            )
        })}
      </div>
    </main>
  );
}

export default App;
