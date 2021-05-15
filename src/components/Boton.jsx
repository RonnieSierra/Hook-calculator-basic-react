import React from 'react';
import "./Boton.css";


function Boton (props) {
    
        return(
            <div 
                className="Boton"
                onClick={props.onClick}
                data-size={props.size}
                data-value={props.value}>
                {props.label}
            </div>
        );
    
}

export default Boton;
