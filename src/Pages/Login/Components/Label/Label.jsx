import React from "react";
import "./Label.css";

const Label = ({text, param}) => {
    return(
        <div> 
           <label className={ param ? "label-error" : "label" } > 
               {text} 
            
            </label>

        </div>
    )
}

export default Label;