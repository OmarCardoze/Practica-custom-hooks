import React from 'react'

const Countries = ({ countries }) => {

    return (
        <>
            {
                countries.map(({numericCode, flag, name, region, capital, population}) => (
                    <div key={numericCode} className="card">
                        <div className="card__img">
                            <img src={flag} alt={name} />
                        </div>
                    
                        <div className="card-over">
                            <h2>{name}</h2>
                            <p>Region: {region}</p>
                            <p>Capital: {capital}</p>
                            <p>Population: {population}</p>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Countries;