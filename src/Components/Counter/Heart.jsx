import React , {useContext} from "react";
import countContext from "../../Contexts/Count.js";
import pixel14 from "../../Img/pixel heart 1-4.svg"
import pixel0 from "../../Img/pixel heart 0.svg"
import pixel12 from "../../Img/pixel heart 1-2.svg"
import pixel34 from "../../Img/pixel heart 3-4.svg"
import pixelh from "../../Img/pixel heart.svg"

export default function Heart({min, max, count}){

    const context = useContext(countContext)
    const {health} = context


    if (health <= min ){
        return(
            <div className="cora">
                <img src={pixel0} alt=""  width='100px'/>
            </div>
        )
    }
    else if (health > min && health <= min+count){
        return(
            <div className="cora">
                <img src={pixel14} alt="" width='100px'/>
            </div>
        ) 
    }
    else if (health > min+count && health <= min + (2*count)){
        return(
            <div className="cora">
                <img src={pixel12} alt="" width='100px'/>
            </div>
        )
    }
    else if(health > min + (count*2) && health <= min + (count*3)){
        return(
            <div className="cora">
                <img src={pixel34} alt="" width='100px'/>
            </div>
        )
    }
    else if(health > min + (count*3) && (health >= max || health <= max)){
        return(
            <div className="cora">
                <img src={pixelh} alt="" width='100px'/>
            </div>
        )
    }
}