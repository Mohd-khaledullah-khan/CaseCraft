import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpChange= ()=>{

    console.log("uppercase was clicked" + text); 
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase", "success")
  } 


  

  const handleloChange= ()=>{

    console.log("lowercase was clicked" + text); 
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase", "success")
  } 

  const handleOnChange= (event)=>{
    console.log("on change");
    setText(event.target.value)
  }

  const handleclear= ()=>{
    console.log("on clear");
    let newText= " ";
    setText(newText)
    props.showAlert("Box has been cleared", "danger")
  }

  const convertToSentenceCase = () => {
    if (text) {
      const newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      setText(newText);
      props.showAlert("converted to SentenceCase ", "success")
    }
  };

  const convertToTitleCase = () => {
    if (text) {
      const newText = text
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setText(newText);
      props.showAlert("converted to TitleCase ", "success")

    }
  };

  const lengthofword = (text)=>{
    let count = 0
    for (let i = 0; i < text.split(" ").length; i++) {
        if (text.split(" ")[i] === "") {
            count++
        }
    }
    return text.split(" ").length - count
}



  const [text, setText] =useState("");
  // text="new text "; wrong method to change the state
  // setText=("new text"): correct method to change the state
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
              <h1>{props.heading}</h1>
              <div className="mb-3">
                
                  <textarea  className="form-control" value={text}  onChange={ handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#091057':'white' , color: props.mode === 'dark'?'white':'black'}}  id="myBox" rows="8"></textarea> 
              </div>
              <button className="btn btn-primary my-2 mx-2" onClick={ handleUpChange}>Convert To Upper Case</button>
              <button className="btn btn-primary my-2 mx-2" onClick={ handleloChange}>Convert To Lower Case</button>
              <button className="btn btn-primary my-2 mx-2" onClick={convertToSentenceCase}>Convert To Sentence Case</button>
              <button className="btn btn-primary my-2 mx-2" onClick={convertToTitleCase}>Convert To Title Case</button>
              <button className="btn btn-warning my-2mx-2" onClick={ handleclear}>Clear Text</button>

        </div>
        <div className="conatiner mx-3" style={{color: props.mode === 'dark'?'white':'black'}}>
          <h2>Your Text Summary</h2>
          {/* <p> Characters Count:  {text.length} |  Words Count: {text.split(" ").length}</p>
          <p> {0.008*text.split("").length} Minuts Read</p> */}
          <p>{lengthofword(text)} words, {text.length} characters</p>
          <p> {0.008*text.split("").length} Minuts Read</p>

          <h3>Preview</h3>
          <p>{text.length>0?text : 'Enter Something In The Textbox To Preview Here' }</p>
        </div>
        
        
    </>
  );
}
