import React, {useState, useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function BeersList () {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        async function getBeers() {
            const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(response.data);
        }
        getBeers();
    }, [])

    return (
        <>
        <ul>
            <h3>Beers List</h3>
            {beers.length > 0 ? (
            beers.map((beer, index) => {
                return <li key={index}>
                    <NavLink to={`/beers/${beer._id}`}>
                        <img src={beer.image_url}/>
                        <p>{beer.name}</p>
                        </NavLink>
                        <p>{beer.tagLine}</p>
                        <p>{beer.contributed_by}</p>
                    </li>
            })) : (
                <p>Loading</p>
            )}
        </ul>
        </>
    )
}

export default BeersList;