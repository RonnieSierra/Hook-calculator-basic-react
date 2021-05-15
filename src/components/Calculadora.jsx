import {useState} from 'react';
import Boton from './Boton';
import Teclado from './Teclado';
import Pantalla from './Pantalla';
import './Calculadora.css';



function Calculadora (){
    
    const [data, setData] = useState('');
    

    const calcular = () => {
        try {
            const resultado = eval(data);
            setData(resultado);
        } catch (event) {
            setData({data: 'error'});
        }
        
    }

    const handleClick = (event) => {
        const value = event.target.getAttribute('data-value');
        switch(value) {
            case 'Borrar':
                setData('');
                break;
            case 'igual':
                calcular();
                break;
            default:
                setData(data+value);
                
        }
    }
    
        return(
            <div className="Calculadora">
                <Pantalla data={data}/>
                <Teclado>

                    <Boton onClick={handleClick} label="1" value="1" />
                    <Boton onClick={handleClick} label="2" value="2" />
                    <Boton onClick={handleClick} label="3" value="3" />

                    <Boton onClick={handleClick} label="4" value="4" />
                    <Boton onClick={handleClick} label="5" value="5" />
                    <Boton onClick={handleClick} label="6" value="6" />
                    
                    <Boton onClick={handleClick} label="7" value="7" />
                    <Boton onClick={handleClick} label="8" value="8" />
                    <Boton onClick={handleClick} label="9" value="9" />

                    <Boton onClick={handleClick} label="0" size="3" value="0" />

                    <Boton onClick={handleClick} label="+" size="1/4" value="+" />
                    <Boton onClick={handleClick} label="-" size="1/4" value="-" />
                    <Boton onClick={handleClick} label="x" size="1/4" value="*" />
                    <Boton onClick={handleClick} label="/" size="1/4" value="/" />
                    
                    <Boton onClick={handleClick} label="C" value="Borrar" />
                    <Boton onClick={handleClick} label="=" value="igual" />
                    <Boton onClick={handleClick} label="." value="." />

                </Teclado>
            </div>
        );
    
}

export default Calculadora;