import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import LocationContainer from './LocationContainer';


function RickAndMorty() {
    //Declaración de states
    const [location, setLocation] = useState('');
    const [consult, setConsult] = useState(false);
    const [query, setQuery] = useState('');
    const [locationInfo, setLocationInfo] = useState(null);
    const [error, setError] = useState(false);
    //Se realiza una perición aleatoria a la API para mosstrarla al iniciar la página
    useEffect(() => {
        const url = getRandomQuery();
        fetch(url)
            .then(response => response.json())
            .then(data => setLocationInfo(data));
        setConsult(false);
    }, []);

    //Se realiza una consulta a la API con el valor del searchBox Container
    useEffect(() => {
        if (consult) {
            fetch(query)
                .then(response => response.json())
                .then(data => setLocationInfo(data.results[0]))
                .catch(err => setError(true));

            setConsult(false);
        }
    }, [consult, query]);
    //Función para verificar que la consulta se haga cuando se presiona el submit y no en el onchange del textinput
    const handleConsult = (t) => {
        setConsult(t);
    }
    //Creamos la url con el valor del text input
    const handleQuery = () => {
        const text = location;
        const baseUrl = 'https://rickandmortyapi.com/api/location'
        const regex = / +/gi;
        const url = baseUrl + '?name=' + text.replace(regex, '%20');
        setQuery(url);
    };
    //Se obtiene un id al azar para la consultar una ubicación aleatoria al inicio 
    const getRandomQuery = () => {
        const baseUrl = 'https://rickandmortyapi.com/api/location/'
        const randomID = Math.floor(Math.random() * 108);
        return baseUrl + randomID;
    };

    return (
        < >
            <SearchBox
                location={location}
                setLocation={setLocation}
                handleConsult={handleConsult}
                handleQuery={handleQuery}
                error={error}
                setError={setError}
            />
            {error ? null :
                <LocationContainer
                    locationInfo={locationInfo}
                />
            }
        </>
    )
}

export default RickAndMorty;