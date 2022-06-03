import React, {useContext} from "react";
import healthContext from "../../Contexts/Health";
import Select from "../Landing/select/select.jsx"
import "./landing.css"
import "./landingGrid.css"
import heart from '../../Img/pixel heart.svg'


function Landing() {

    const context = useContext(healthContext)
    const { setUser,setHealth, setMaxHealth, opt, maxHealth, user, setLog} = context


    const submit = (e) => {
        e.preventDefault()
        if (opt == null || user == null || maxHealth == null){
            return
        }
        setLog(1)
        }


    return(
        <div className="container">
            <h1 id="wel">WELCOME TO YOUR HEALTH COUNTER</h1>
                <span className="who">
                    <h2>WHO ARE YOU?</h2>
                    <input type="text" placeholder="Character Name" onChange={(e)=>{ setUser(curr => (curr = e.target.value))}}/>
                </span>
                <span className="max">
                    <h2>MAX HEALTH</h2>
                    <input type="number" placeholder="Don't Get Too OP" inputMode="numeric" onChange={(e) => {setMaxHealth(curr => (curr = e.target.valueAsNumber)); setHealth(curr => curr = e.target.valueAsNumber)}}/>
                </span>
                <span className="type">
                <Select/>
                </span>
                <span className="str">
                <button id="start" onClick={e => submit(e)}>Press Start</button>
                </span>
                <span className="heart">
                    <img src={heart} alt="pixel heart" />
                </span>
        </div>
    )

}

export default Landing