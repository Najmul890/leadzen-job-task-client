import React, { useEffect, useState } from 'react';


const PeopleDetails = ({url, setClickToDetail}) => {
    const [people, setPeople]= useState({});
    const {name, gender, height, mass, hair_color, skin_color, eye_color, birth_year}= people;
    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch(url);
            const data = await res.json();
            setPeople(data)
        }

        fetchData()

            .catch(console.error);;
    }, [])

    
    return (
        <div style={{backgroundColor:"#dff9fb"}} className='p-5 w-50 position-relative' >
            <span style={{cursor:"pointer"}} onClick={()=>setClickToDetail(false)} className='position-absolute top-0 end-0' >✖</span>
            <h2>{name} </h2>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair Color {hair_color}</p>
            <p>Skin Color: {skin_color}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Birth Year: {birth_year}</p>
        </div>
    );
};

export default PeopleDetails;