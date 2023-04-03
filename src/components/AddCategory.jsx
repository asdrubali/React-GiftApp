
import React, { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        setInputValue(target.value);
        // console.log(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        // console.log(inputValue);
        // setCategories([ inputValue, ...categories])
        // setCategories( cat => [ inputValue, ...cat ] );
        onNewCategory( inputValue.trim())
        setInputValue('');
    }

  return (

    <form onSubmit={ onSubmit } >
        <input 
            type='text'
            placeholder='Buscar gifts'
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
