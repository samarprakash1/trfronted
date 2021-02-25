import React from 'react'
import './Button.css'

const Button = () => {
    const clickHandle=()=>{
        console.log("po")
    }
    return (
        <div className="button__container">
                <div><button onClick={clickHandle}>Add Row</button></div>
        <div><button>Delete Selected Rows</button></div>
        <div><button>Delete Non Selected Rows</button></div>
        <div><button>Submit</button></div>
            
        </div>
    )
}

export default Button
