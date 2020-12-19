import React from 'react';
import PropTypes from 'prop-types';
// Functional components
const PrimeraApp = ( {saludo,subtitulo} ) => {
    
    return( 
        <>
            {/*<pre>{ JSON.stringify(saludo,null,3) }</pre>*/}
            <h2>{saludo}</h2>
            <p>{subtitulo}</p>
            
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo',
}
export default PrimeraApp;