// useState is a hook , we can import from React
import React, { useState } from 'react'


export default function Textform(props) {

    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.funcAlert('Converted to Lowercase','success')
    }
    
    const handleOnchange = (event) => {
        setText(event.target.value)
    }

    const handleUpclick = () => {
        setText(text.toUpperCase())
        props.funcAlert('Converted to Uppercase','success')
    }

    const handleclear = ()=>{
        let newText = ""
        setText(newText)
        props.funcAlert('Clear everyting successfully','success')
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.funcAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.funcAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>{props.heading} - </h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark'? 'white' : 'black' }} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoclick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Clear extra spaces</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleclear}>Clear all</button>
            </div>
            <div className='container my-4'style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p> {text.split(" ").filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}  minitues to read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"Write something to preview it"}</p>
            </div>
        </>
    )
}
