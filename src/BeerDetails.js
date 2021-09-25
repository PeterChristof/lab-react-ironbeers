import React, {useState, useEffect} from "react";
import axios from "axios";

function BeerDetails ({match}) {
    const [beer, setBeer] = useState({});

    useEffect(() => {
        async function getBeerDetails() {
            const beerId = match.params.id
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
            setBeer(response.data);
        }
        getBeerDetails();
    })

    return(
        <>
            <img src={beer.image_url}/>
            <h2>{beer.name}</h2>
        </>
    )

}

export default BeerDetails;