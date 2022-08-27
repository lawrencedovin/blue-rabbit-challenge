import React from "react";
import "./Person.css";

const Person = ({person}) => {
    return (
        <>
            <img src={person.image ? person.image : ""} alt={`${person.firstName} ${person.lastName}`} className="person__img"/>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
        </>
    );
}

export default Person;