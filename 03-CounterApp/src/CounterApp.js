//rafcp rafce rafc snnipet
//events React inician on On
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {

    const [counter,setCounter] = useState(value); // [counter,setCounter]
    
    // handleAdd
    const handleAdd = () => setCounter( counter+1 ); //setCounter ( (counter) => counter+1);
    const handleSubstract = () => setCounter( counter-1 );
    const handleReset = () => setCounter( value );
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            {/* <button onClick={ (e) => handleAdd(e)}> </button> */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}
 
export default CounterApp;