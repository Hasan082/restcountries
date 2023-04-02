import React from 'react';
import './Country.css'

const Country = ({country}) => {
    // console.log(country);
    const {name, population, region, area, flags} = country;
    return (
        <div className='single_country'>
            <img src={flags.png} alt="" />
            <h3><b>Name: </b>{name.common}</h3>
            <p><small><b>Population: </b>{population}</small></p>
            <p><small><b>Region: </b>{region}</small></p>
            <p><small><b>Area: </b>{area}</small></p>
        </div>
    );
};

export default Country;