import React from "react";
import '../../App.css'


function Increas({action, signo}){
    const alg = ((signo === "-") ? "-1" : "+1")
    const click = (e)=>{
        e.preventDefault();
        action()
    }
    return(
        <>
            <button onClick={e => click(e)} className='butin'>
                {alg}
            </button>
        </>
    )
}

export default Increas

