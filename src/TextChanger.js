import React, {useState} from 'react';


function App(props){
    const [text , setText] = useState('');
    const handleTitleCase = ()=>{
        setText(text.toLowerCase().split(' ').map(word => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }).join(' '));
    };

    const handleOnChange = (event)=>{
        setText(event.target.value);
    };
    return (
        <>  
            <div className={`container text-${props.mode==='dark'?'light':'black' }`}>
                <h1 className='my-3'>Enter text to analyze</h1>
                <div className="mb-3">
                <textarea className={`form-control text-${props.mode==='dark'?'light':'black' } border-0`} value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'#f7f7f7'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className={`btn btn-${props.mode==='dark'?'light':'primary'}`} onClick={handleTitleCase}>Convert to TitleCase</button>
            </div>
        </>
    );
}

export default App;
