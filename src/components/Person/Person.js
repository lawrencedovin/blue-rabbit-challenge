import React from "react";
import "./Person.css";

const Person = ({person}) => {
    return (
        <>
            <img src={person.image ? person.image : ""} alt={`${person.firstName} ${person.lastName}`} />
            <h1>First Name: {person.firstName}</h1>
            <h1>Last Name: {person.lastName}</h1>
        </>
    );
}

export default Person;