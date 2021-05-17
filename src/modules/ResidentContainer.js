import React, { useEffect, useState } from 'react'
import ResidentInfo from './ResidentInfo'

function ResidentContainer({ residents }) {

    const [residentArray, setResidentArray] = useState([]);

    useEffect(() => {
        if (residents.length > 0) {
            setResidentArray(residents.slice(0, 10));
        }
    }, [residents])

    const list = residentArray.map(resident => {
        return (<ResidentInfo
            key={resident}
            url={resident}
        />);
    });



    return (
        <div className='location__character'>
            {list}
        </div>
    );
}

export default ResidentContainer;