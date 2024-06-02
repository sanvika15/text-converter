import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
   // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase(); 
    setText(newText)
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
     let newText = text.toLowerCase(); 
     setText(newText)
     props.showAlert("Converted to lowercase", "success");

   }

   const handleSeClick = ()=>{
    //sentence case
    let text1= text.toLowerCase()
    let newText = text1.charAt(0).toUpperCase() + text1.slice(1); 
    setText(newText)
    props.showAlert("Converted to sentence rcase", "success");

  }

  const handleAtClick = ()=>{
    //atypical case
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
            newText += text[i].toLowerCase();
        } else {
            newText += text[i].toUpperCase();
        }
    }; 
    setText(newText)
    props.showAlert("Converted to atypical rcase", "success");

  }
  const handleCaClick = ()=>{
    //capital case
    let text1 = text.toLowerCase();
    let newText = text1.replace(/\b\w/g, char => char.toUpperCase()); 
    setText(newText)
    props.showAlert("Converted to capitalized rcase", "success");

  }
   const handleClClick = ()=>{
    // clear case
     let newText = ""; 
     setText(newText)
   }
   
   

  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
  }
  const [text , setText] = useState('');
   
  return (
    <>
     <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
         <h1>{props.heading} </h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
         </div>
         <button className="btn btn-info mx-1" onClick={handleUpClick}> UpperCase</button>
         <button className="btn btn-info mx-1" onClick={handleLoClick}> LowerCase</button>
         <button className="btn btn-info mx-1" onClick={handleSeClick}> SentenceCase</button>
         <button className="btn btn-info mx-1" onClick={handleCaClick}> CapitalizedCase</button>
         <button className="btn btn-info mx-1" onClick={handleAtClick}> aTyicalCase</button>

         <button className="btn btn-info mx-1" onClick={handleClClick}>Clear Text</button>       

         

      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length  } words and {text.length } characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somethingin the textbox above to preview here"}</p>
      </div>
    </>
  )
}
