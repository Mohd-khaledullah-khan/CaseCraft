// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    // {
    //     color: "black",
    //     backgroundColor: "white" 
    // })
    // const [btntext, setBtnText] = useState('enable light mode')
    //     const togglestyle= ()=>{
    //         if(myStyle.color === 'black'){
    //             setMyStyle({
    //                     color: 'white',
    //                     backgroundColor: 'black',
    //                     border: '1px solid white' 
    //                 })
    //                 setBtnText("enable dark mode")
    //         }
    //         else{
    //             setMyStyle({
    //                     color: 'black',
    //                     backgroundColor: 'white'
    //                 })
    //                 setBtnText("enable light mode");
    //             }

    //     }
  return (
    <>
        <div className='container' style={{backgroundColor: props.mode === 'dark'?'#091057':'white' , color: props.mode === 'dark'?'white':'black'}}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={{backgroundColor: props.mode === 'dark'?'#091057':'white' , color: props.mode === 'dark'?'white':'black'}} >
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={{backgroundColor: props.mode === 'dark'?'#091057':'white' , color: props.mode === 'dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#091057':'white' , color: props.mode === 'dark'?'white':'black'}} >
            <strong>This is the main feature of the CaseCraft App.</strong> It allows users to effortlessly convert text between various formats, including uppercase, lowercase, sentence case, and title case. The app is designed with a clean and user-friendly interface, making it easy to transform your text with just a few clicks
            </div>
            </div>
            </div>
            
            </div>
            {/* <div className="container my-3">
            <button onClick={togglestyle} type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
    </>
  )
 
}
