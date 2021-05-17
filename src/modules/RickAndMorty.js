import React, { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import LocationContainer from './LocationContainer';


function RickAndMorty() {
    const [location, setLocation] = useState('');
    const [consult, setConsult] = useState(false);
    const [query, setQuery] = useState('');
    const [locationInfo, setLocationInfo] = useState(null);


    useEffect(() => {
        if (consult) {
            console.log(query);
            fetch(query)
                .then(response => response.json())
                .then(data => setLocationInfo(data.results[0]));
            setConsult(false);
        }

    }, [consult, query]);

    const handleConsult = () => {
        setConsult(true);
    }

    const handleQuery = () => {
        const text = location;
        const baseUrl = 'https://rickandmortyapi.com/api/location'
        const regex = / +/gi;
        const url = baseUrl + '?name=' + text.replace(regex, '%20');
        setQuery(url);

    };

    return (
        < >
            <SearchBox
                location={location}
                setLocation={setLocation}
                handleConsult={handleConsult}
                handleQuery={handleQuery}
            />
            <LocationContainer
                locationInfo={locationInfo}
            />
        </>
    )
}

export default RickAndMorty;