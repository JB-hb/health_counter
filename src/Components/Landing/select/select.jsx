import React, {useContext, useState} from "react";
import healthContext from "../../../Contexts/Health";
import bar from '../../../Img/pixelhealthbar.svg'
import heart from '../../../Img/pixel heart.svg'
import "./select.css"

export default function Select() {

    const context = useContext(healthContext)
    const {setOpt} = context
    const [checkB, setCheckB] = useState(false)
    const [checkH, setCheckH] = useState(true)
    const che = () => {
        setCheckB(curr => curr = !curr)
        setCheckH(curr => curr = !curr)
        setOpt(curr => curr = !curr)
    }

    return(
        <div className="con">
            <span id="bar">
                <input id="CheckBar" type="checkbox" onChange={che} checked={checkB}/>
                <label htmlFor = "CheckBar">
                    <img className="hb" src={bar} alt="health bar"/>
                </label>
            </span>
            <span id= "hrt">
                <input type="checkbox" id="CheckHeart" onChange={che} checked={checkH}/>
                <label htmlFor="CheckHeart">
                    <img src={heart} className="ht" alt="hearts" />
                </label>
            </span>
        </div>
    )

}
