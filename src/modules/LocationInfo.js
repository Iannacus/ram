import React from 'react'

function LocationInfo({ name, type, dimension }) {
    return (
        <div className='location__info custom'>
            <h2>Name : {name}</h2>
            <h2>Type : {type}</h2>
            <h2>Dimension : {dimension} </h2>
        </div>
    );
}

export default LocationInfo;