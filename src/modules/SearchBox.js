import React from 'react';

function SearchBox({ location, setLocation, handleConsult, handleQuery, error, setError }) {

    //Levantamos estado con el texto del input
    const handleLocation = (e) => {
        setLocation(e);
    };

    const handleSubmit = e => {
        e.preventDefault();
        //validar que el text input contenga información
        location.trim() === '' ? setError(true) : setError(false);
        //pasar al componente principal     
        handleConsult(true);
    }

    return (
        <header>
            <img className='logo' src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="" />
            <div className="searcher">
                {error ? <p className='custom custom-error'>You must type a valid location</p> : null}
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