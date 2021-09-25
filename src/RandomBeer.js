import axios from "axios";
import React, {useState, useEffect} from "react";

function RandomBeer() {
    const [beer, setBeer] = useState({})


    useEffect(() => {
        async function getRandom() {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
            setBeer(response.data);
        }
        getRandom();
    }, [])


    return (
        <>
        <h3>Random Beer</h3>
        <img src={beer.image_url}/>
        <h4>{beer.name}</h4>
        <p>{beer.tagLine}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Attenuation Level: {beer.attenuation_level}</p>
        <p>Description: {beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
        </>
    )
}

export default RandomBeer;