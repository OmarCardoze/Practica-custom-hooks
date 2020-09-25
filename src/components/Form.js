import React, { useState } from 'react';

const Form = ({setContinent}) => {

    const [busqueda, setBusqueda] = useState('')

    const handleonSubmit = e => {
        e.preventDefault()
        setContinent(busq => [...busq, busqueda])
        setBusqueda('')
    } 

    const handleonChange = e => {
        setBusqueda(e.target.value)
    }
    return ( 
        <form
            onSubmit={handleonSubmit}
        >
            <input 
                type="text"
                value={busqueda}
                onChange={handleonChange}
            />
        </form>
     );
}
 
export default Form;