import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

function App() {
  const [showcolour, setcolour] = useState("#f15025");
  const [lightcolour, setlightcolour] = useState([]);
  const [shadecolour, setshadecolour] = useState([]);

  function converthextodecimal(hexnumber) {
    
    if (hexnumber[0] == "#") {
      let temp_hexnumber = "";
      for (let i = 1; i < hexnumber.length; i++) {
        temp_hexnumber = temp_hexnumber + hexnumber[i];
      }
      hexnumber = temp_hexnumber;
    }
    if (hexnumber.length<6){
      for(let i=0;hexnumber.length<6;i++){
        hexnumber = hexnumber+'0'
      }
    }

    let r = "";
    let g = "";
    let b = "";

    for (let i = 0; i < 2; i++) {
      r = r + hexnumber[i];
    }
    for (let i = 2; i < 4; i++) {
      g = g + hexnumber[i];
    }
    for (let i = 4; i < 6; i++) {
      b = b + hexnumber[i];
    }
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);

    let nlr = (255 - r) / 10;
    let nlg = (255 - g) / 10;
    let nlb = (255 - b) / 10;
    let temp_lightarray = [];

    let nsr = (r - 0) / 10;
    let nsg = (g - 0) / 10;
    let nsb = (b - 0) / 10;
    let temp_shadearray = [];
    for (let i = 1; i < 11; i++) {
      temp_lightarray = [
        rgbToHex(
          parseInt(r + nlr * i, 10),
          parseInt(g + nlg * i, 10),
          parseInt(b + nlb * i, 10)
        ),
        ...temp_lightarray,
      ];
      temp_shadearray = [
        ...temp_shadearray,
        rgbToHex(
          parseInt(r - nsr * i, 10),
          parseInt(g - nsg * i, 10),
          parseInt(b - nsb * i, 10)
        ),
      ];
    }
    setlightcolour(temp_lightarray);
    setshadecolour(temp_shadearray);
  }
  useEffect(() => {
    converthextodecimal(showcolour);
  }, [showcolour]);

  function inputhandler(event) {
    let new_value = event.target.value;
    setcolour(new_value);

  }

  function submithandler(event){
    event.preventDefault()
    let new_value = event.target.textbox.value
    if(new_value.length<7){
      for(let i =0;new_value.length<7; i++){
        new_value = new_value +'0';
      }
    }
    setcolour(new_value)
    console.log(new_value)
  }

  return (
    <main>
      <form onSubmit={submithandler}>
        <p id="colortext">Color Generator</p>
        <input id="colorpicker" type="color" onChange={inputhandler} value={showcolour} />
        <input type="text" placeholder="#f15025" id='textbox' />
        <button type="submit" id="submitbutton" style={{backgroundColor: showcolour}}>Submit</button>
      </form>
      <div id='colorsdiv'>

      
      {lightcolour.map((color, index) => {
        return (
          <div className="showcolourdiv" style={{ backgroundColor: color }}>
            <div>{10 * (9 -index+1)}%</div>
            <div className="colorname">{color}</div>
          </div>
        );
      })}
      <div className="showcolourdiv" style={{ backgroundColor: showcolour }}>
        <div>0%</div>
        <div className="colorname">{showcolour}</div>
      </div>
      {shadecolour.map((color, index) => {
        return (
          <div className="showcolourdiv" style={{ backgroundColor: color }}>
            <div style={{color: 'white'}}>{10 * (index + 1)}%</div>
            <div style={{color: 'white'}} className="colorname">{color}</div>
          </div>
        );
      })}
      </div>
    </main>
  );
}

export default App;
