
import countContext from '../../Contexts/Count.js'
import Increas from './Button.jsx'
import React, {useContext} from "react";
import divider from '../../Functions/divider.js';
import Heart from './Heart.jsx';
import './counterGrid.css'
import Healthbar from './Bar.jsx';
import './counter.css'

function Counter(){

    let hl
    let dmg
    const context = useContext(countContext);
    const { health, maxHealth, decreas, increase, damageHeal, damageTaken, user, opt } = context
    let dat = divider(maxHealth)

    return(
            <div className='cont'>
                <span className='span Tuser'>
                    <h1>
                        {user}
                    </h1>
                    <h4>
                        {health} / {maxHealth}
                    </h4>
                </span>
                <span className='span'>
                    {opt === true && 
                        <div className='br'>
                            {dat.map( data => <Heart min={data.min} max={data.maxi} count={data.cuart}/>)}
                        </div>
                    }
                    {opt === false &&
                        <div id="conbr">
                            <Healthbar/>
                        </div>
                    }
                </span>
                <span className='span'>
                    <h2>
                        Damage
                    </h2>
                    <form>
                        <span className='contin'>
                            <Increas action={decreas} signo={"-"}/>
                            <input type="number" placeholder='Damage Taken' inputMode='numeric' onBlur={(a) => a.target.value = ""} onChange={ (e) => dmg = e.target.valueAsNumber}/>
                            <input type="submit" className='butin' value={"Take Damage"} onClick={e => {e.preventDefault() ;damageTaken(dmg)}}/>
                        </span>
                    </form>
                </span>
                <span className='span'>
                    <h2>
                        Heal
                    </h2>
                    <form>
                        <span className='contin'>
                            <Increas action={increase} signo={"+"}/>
                            <input type="number" placeholder='Damage Healed' inputMode='numeric' onBlur={(a) => a.target.value = ""} onChange={ (e) => hl = e.target.valueAsNumber} />
                            <input className='butin' type="submit" value={"Heal Damage"} onClick={e => {e.preventDefault() ; damageHeal(hl)}}/>
                        </span>
                    </form>
                </span>
            </div>
    )
}

export default Counter