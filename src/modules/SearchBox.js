import React, { useState } from 'react';

function SearchBox({ location, setLocation, handleConsult, handleQuery }) {

    const [error, setError] = useState(false);

    const handleLocation = (e) => {
        setLocation(e);
    };

    const handleSubmit = e => {
        e.preventDefault();
        //validar 
        location.trim() === '' ? setError(true) : setError(false);
        //pasar al componente principal 
        handleConsult(true);
    }

    return (
        <header>
            <img className='logo' src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="" />
            <div className="searcher">
                {error ? <p className='custom custom-error'>Debes ingresar una ubicación válida</p> : null}
                <form onSubmit={handleSubmit} >
                    <input className='searcher__input custom' type="text" name='search'
                        onChange={e => handleLocation(e.target.value)}
                    />
                    <input
                        type='submit'
                        value='Search'
                        className='searcher__button'
                        onClick={e => { handleQuery(e) }}
                    />
                </form>
            </div >
        </header >
    );
}

export default SearchBox;