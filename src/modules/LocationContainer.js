import React, { useState, useEffect } from 'react';
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';
import Pagination from './Pagination';

function LocationContainer({ locationInfo }) {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [dimension, setDimension] = useState('');
    const [residents, setResidents] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const [buttons, setButtons] = useState(0);
    const [pagination, setPagination] = useState(1);

    //Asignamos valores a las variables de estado
    useEffect(() => {
        if (locationInfo != null) {
            setName(locationInfo.name);
            setType(locationInfo.type);
            setDimension(locationInfo.dimension);
            setResidents(locationInfo.residents);
            //Se asigna la cantidad de botones -> cantidad de resisdentes entre 9 (se muestran 9 por página)
            setButtons(Math.ceil(locationInfo.residents.length / 9))
        }
    }, [locationInfo]);
    //Verificamos que tenemos todos los valores listos para mostrarlos
    useEffect(() => {
        if (name && type && dimension) {
            setIsReady(true);
        }
    }, [name, type, dimension]);
    //Obtenemos el valor de la página a cosnultar
    const handlePagination = (e) => {
        setPagination(e.target.textContent);
    }



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
                        <Pagination
                            buttons={buttons}
                            pagination={handlePagination}
                        />
                        <ResidentContainer
                            residents={residents}
                            pageNumber={pagination}
                        />
                    </div>
                </div> : null
            }
        </main>
    );
}

export default LocationContainer;