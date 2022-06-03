
import './App.css';
import Counter from './Components/Counter/Counter.jsx'
import Landing from './Components/Landing/landing.jsx'
import countContext from './Contexts/Count.js'
import healthContext from "./Contexts/Health";
import {useState} from 'react'

function App() {


  const [log, setLog] = useState(null)
  
  const [maxHealth, setMaxHealth] = useState(null)
  const [user, setUser] = useState(null)
  const [health, setHealth] = useState(maxHealth)
  const [opt, setOpt] = useState(true)
  const [num, setNum] = useState(null)

  const increase = () => { 
    (health + 1 <= maxHealth) ? setHealth(crr => crr + 1) : overheal()
}
  const decreas = ()=> {
    (health - 1 >= 0) ? setHealth(crr => crr - 1) : setHealth(crr => crr = 0)
  }
  const damageTaken = (dmg) => {
    if(dmg < 0) {
      dmg *= -1
    }  
    if (health - dmg > 0) {
      setHealth(crr => crr - dmg)
    }else if(dmg !== undefined && dmg !== "" && isNaN(dmg)===false){
      setHealth(crr => crr = 0)
    }
  }
  const overheal = () => {
    alert("Overhealing Detected")
    setHealth(crr => crr = maxHealth)
  }
  const damageHeal = (hl) => {
    if(hl < 0){
      alert("You Take Damage When Someone Heal You?")
    }else{
      (hl + health <= maxHealth) ? setHealth(crr => crr + hl) : overheal()
    }
  }



  if (log === null){

    return(
      <>
      <healthContext.Provider value={{user, maxHealth, opt, num, setUser,setHealth, setMaxHealth, setLog, setOpt, setNum}}>
        <Landing/>
      </healthContext.Provider>
      </>
    )
    
  }else{

    return (
      <>
        <countContext.Provider value={{increase, user , health, decreas, maxHealth, damageHeal, damageTaken, opt}}>
          <Counter/>
        </countContext.Provider>
      </>
    );

  }
}

export default App;
