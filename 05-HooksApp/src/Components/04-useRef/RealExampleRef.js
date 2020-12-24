import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
export const RealExampleRef = () => {
    //renderizar componente de manera condicional.
    
    const [show, setShow] = useState(false);
    return (
        <>
            <h1>Ref Example</h1>
            <hr/>{
                show && <MultipleCustomHooks/>
            }
            <button onClick = { () => setShow(!show) } 
                    className="btn btn-outline-primary mt-6">
                Show/hide
            </button>
            
        </>
    );
};
