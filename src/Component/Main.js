import React from 'react'
import './Main.css'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Main = () => {

    const notify = (text) => {
        toast.error(text, {
            position: "top-center"
          });
        }

    let[val,setVal] = useState('');
    let[length,setLength] = useState(0);
    let[len2,setLen2] = useState(0);
    let[reading,setReading] = useState(0);

    const getValue = (e) => {
        setVal(e.target.value)
        setLength(val.length)
        setLen2(val.split(" ").length);
        let total = val.length;
        setReading(total/200);
    }

    const getUpperTxt = () => {
        setVal(val.toUpperCase());
    }

    const getLowerTxt = () => {
        setVal(val.toLowerCase());
    }

    const getClearTxt = () => {
        setVal("");
    }
    
    const getCopyTxt = () => {
        navigator.clipboard.writeText(val);
    }

    const getRemoveSpaces = () => {
        console.log();
    }
    
    const cannotChange = ()  => {
        notify("You Cannot Change")
    }

  return (
    <div className='main_Container'>
          <ToastContainer />
      <div className="mini_Container">
        <h1 className='center'>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <h2 className='txtCenter'>Enter Your Text Here:</h2>
        <textarea value={val} onChange={getValue} cols="150" rows="10"></textarea>

            <div className='btns'>
                <button type="button" className="button" onClick={getUpperTxt}>
                    <div className="button-top">UPPERCASE</div>
                    <div className="button-bottom"></div>
                    <div className="button-base"></div>
                </button>

                <button type="button" className="button" onClick={getLowerTxt}>
                    <div className="button-top">LOWERCASE</div>
                    <div className="button-bottom"></div>
                    <div className="button-base"></div>
                </button>

                <button type="button" className="button" onClick={getClearTxt}>
                    <div className="button-top">CLEAR TEXT</div>
                    <div className="button-bottom"></div>
                    <div className="button-base"></div>
                </button>

                <button type="button" className="button" onClick={getCopyTxt}>
                    <div className="button-top">COPY TO CLIPBOARD</div>
                    <div className="button-bottom"></div>
                    <div className="button-base"></div>
                </button>

                <button type="button" className="button" onClick={getRemoveSpaces}>
                    <div className="button-top">REMOVE EXTRA SPACES</div>
                    <div className="button-bottom"></div>
                    <div className="button-base"></div>
                </button>
            </div>
            <h1 className='summery'>Summery Of Your Text</h1> <br />
            <p>Number of Words : {len2}</p> <br />
            <p>Number of Characters : {length}</p> <br />
            <p>Reading Time : {reading}</p> 
            
            <div className='footer'>
                 <h1 className='mid'>Preview Document</h1>
                 <textarea value={val} onChange={cannotChange} cols="150" rows="7"></textarea>
            </div>        

      </div>
    </div>
  )
}

export default Main
