import React, {useState, useEffect} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

function NewBeer () {
    const [beer, setBeer] = useState({});
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [tagLine, setTagLine] = useState('');
    const [contributedBy, setContributedBy] = useState('');
    const history = useHistory();

    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        const body = {
            image_url: image,
            name: name,
            tagLine: tagLine,
            contributed_by: contributedBy,
        };
        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
        /* setTitle('');
        setPrice('');
        setImage(''); */
        console.log('apartment created');
        /* toast.success("Apartment Created") */
        history.push("/");
    }

    return (
        <>
        <h3>Create Apartment</h3>
        <form onSubmit={handleFormSubmit}>

            <label>Image</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>

            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>Tag Line:</label>
            <input type="text" value={tagLine} onChange={(e) => setTagLine(e.target.value)}/>

            <label>Contribution by:</label>
            <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)}/>
            
            <button type="submit">Submit</button>

        </form>
        </>

    )
}

export default NewBeer;