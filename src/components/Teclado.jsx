import React from 'react';
import "./Teclado.css";

function Teclado (props) {
            return(
            <div className="Teclado">
                {props.children}
            </div>
        );
 }

export default Teclado;