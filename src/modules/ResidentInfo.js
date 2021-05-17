import React, { useState, useEffect } from 'react'

function ResidentInfo({ url }) {
    const [residentInfo, setResidentInfo] = useState(null);
    const [characteName, setCharacterName] = useState('');
    const [status, setStatus] = useState('');
    const [origin, setOrigin] = useState('');
    const [episodes, setEpisodes] = useState(0);
    const [imgURL, setImgURL] = useState('');

    useEffect(() => {
        if (url !== '') {
            fetch(url)
                .then(response => response.json())
                .then(data => setResidentInfo(data));
        }
    }, [url]);

    useEffect(() => {
        if (residentInfo !== null) {
            setCharacterName(residentInfo.name);
            setStatus(residentInfo.status);
            setOrigin(residentInfo.origin.name);
            setEpisodes(residentInfo.episode.length);
            setImgURL(residentInfo.image);
        }
    }, [residentInfo])


    return (
        <div className='character'>
            <div className='character__info'>
                <img src={imgURL} alt="" />
                <div className="character__info-layout">
                    <h5 className='custom'>{characteName}</h5>
                    <div className="character__info-flex">
                        <h5>{status}</h5>
                        <h5>from: {origin}</h5>
                        <h5>{episodes} Episodes</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResidentInfo;