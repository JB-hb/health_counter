import React, {useContext}from "react";
import countContext from "../../Contexts/Count";
import "./counterGrid.css"
import pixelbor from "../../Img/bigpixelbarborder.svg"
import pixelfill from "../../Img/bigpixelbarfill.svg"


export default function Healthbar(){

    const context = useContext(countContext)
    const {health, maxHealth} = context

    const healthProgress = () =>{
        let porcen = (health*100)/maxHealth
        return porcen
    }

    let res = healthProgress()

    const style = {
        width : `${res}%`,
    }


    return(
        <div>
            <span>
                <div style={style} className='fill'>
                    <img src={pixelfill}  className="fill2" alt="" />
                </div>
                <div>
                    <img src={pixelbor} alt="" className="border"/>
                </div>
            </span>
        </div>
    )

}