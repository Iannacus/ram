import React, { useState, useEffect } from 'react';
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';
import Spiner from './Spiner';

function LocationContainer({ locationInfo }) {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [dimension, setDimension] = useState('');
    const [residents, setResidents] = useState([]);
    const [isReady, setIsReady] = useState(false);


    useEffect(() => {
        if (locationInfo != null) {
            setName(locationInfo.name);
            setType(locationInfo.type);
            setDimension(locationInfo.dimension);
            setResidents(locationInfo.residents);
        }

    }, [locationInfo]);

    useEffect(() => {
        if (name && type && dimension) {
            setIsReady(true);
        }
    }, [name, type, dimension])



    return (
        <main>
            {isReady ?
                <div className='container'>
                    <div className='location'>
                        <LocationInfo
                            name={name}
                            type={type}
                            dimension={dimension}
                        />
                        <ResidentContainer
                            residents={residents}
                        />
                    </div>
                </div> : <Spiner />
            }
        </main>
    );
}

export default LocationContainer;