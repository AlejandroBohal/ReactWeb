import React, { useState } from 'react'
import PropTypes from 'prop-types'

//Componente padre GifExpertApp
const AddCategory = ({setCategories}) => {

    //El inputValue vive en el state de la aplicación (recordar).

    const [inputValue, setInputValue] = useState('');
    // e.target.value será el nuevo valor del inputValue
    const handleInputChange = ({target:{value}}) => setInputValue(value);
    const handleSubmit = (e) =>{
        //previene el refresh
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue,...categories] );
            setInputValue('');
        }else{
            alert('Minimun Category length 2 is required')
        }
    
    }
    //El fragment agrupa los elementos html y no es necesario si hay una etiqueta que cumpla esta función (form)
    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input  
                type="text" 
                placeholder="Type a category..."
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
        
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory

