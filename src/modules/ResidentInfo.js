import React, { useState, useEffect } from 'react'


function ResidentInfo({ url }) {
    const [residentInfo, setResidentInfo] = useState(null);
    const [characteName, setCharacterName] = useState('');
    const [status, setStatus] = useState('');
    const [origin, setOrigin] = useState('');
    const [episodes, setEpisodes] = useState(0);
    const [imgURL, setImgURL] = useState('https://lh3.googleusercontent.com/vuVRQC1_ZVi29yGwqEytMWZZyxO6on3mXo8w0SME-xV52nE1RuBHetowiGFHyZZjNcTCNCfsx0V5BfX_CO5FnhQxquyPGFIR0e0aGsgSQTLgaVMceGRHzwnN5QLbHPxF7Aocz4XF4eWrP5dvcinFcseGmhykBweCKprD51-sRDNCkWKn5SiOGoMitlp5fQZR9RFJ3Z1lxhKVEaXJQaUQF7fjVUsW9B2LZ8UUNRvbxw6JnYJUBtF6BNuik6ejaLwYlQcC4sE8bqrM7YSbCOZz2kTFmqbgrp9H5wKSX-ZXqweoMyeQGspxUto-fpeFiv1tMuk9jurz73UtDYbNvBxMyqVMS0vJ3V-A96TyCK1JYboUF4FHEcFa4DkyqqtJsXg5Deo7ZhpFq5pEFSZDPIL5o7HVYLFaC-ZZj9MDxNWxmZjX2k_tSY745H6_Ji6gVqa0lQmjyS0J4qPmQrFweWoPOQ1kcnAyikBJyEMzhWG0nBWksevGjYMWBUySxOjZOJq1WE3W__E-hvWGF4BM88rccXaImvZ8Z83H79HGyM7sMbTl86AU5Cob-VNPVmwlCwUyl1R6dNKFQB0w6y6HtwMhXJ6VPDPXJCYxQ6RC6FNbIhsZUXOSjxt4J9Cf-kObFlKwbEX5AnS9PZ5-n7zbhUHGoL_PeJnTfGg1r1zqmJ8dst9wjsneePntW8BLHTLEG-bvakBiqZsxG5uwE5WAAePpYhfB=s300-no?authuser=0');

    //se obtiene la información del personaje. 
    useEffect(() => {
        if (url !== '') {
            fetch(url)
                .then(response => response.json())
                .then(data => setResidentInfo(data));
        }
    }, [url]);
    // Se asignan los valores en cuanto se tiene la información del personaje. 
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