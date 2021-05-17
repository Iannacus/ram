import React, { useEffect, useState } from 'react'
import ResidentInfo from './ResidentInfo'

function ResidentContainer({ residents, pageNumber }) {

    const [residentArray, setResidentArray] = useState([]);
    const [hasResidents, setHasResidents] = useState(false);
    //Valores de inicio y fin para el metodo slice y seleccionar dentro del arreglo los 
    //personajes correspendientes a cada página
    let start = ((pageNumber - 1) * 9);
    const end = start + 9;

    //Se verifica que el arreglo tenga al menos un residente y se corta dependiendo de la página seleccionada 
    useEffect(() => {
        if (residents.length > 0) {
            setHasResidents(false);
            setResidentArray(residents.slice(start, end));
        } else {
            setHasResidents(true);
        }
    }, [residents, end, start])
    //Se crea la lista de residentes para mostrar en pantalla
    const list = residentArray.map(resident => {
        return (<ResidentInfo
            key={resident}
            url={resident}
        />);
    });



    return (
        <div className='location__character'>
            {hasResidents ? <div className='empty-character custom'> <p> Seems there are no residents at this place. </p></div> : list}

        </div>
    );
}

export default ResidentContainer;