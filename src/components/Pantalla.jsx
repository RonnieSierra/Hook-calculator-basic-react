import React from 'react';
import "./Pantalla.css";

function Pantalla (props) {
        return(
            <div className="Pantalla">
                {props.data}
            </div>
        );
    
}

export default Pantalla;
