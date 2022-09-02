import React, {useState, useEffect, createContext} from "react";
import "./PersonList.css";
import axios from "axios";
import Person from "../Person/Person";
import { client } from "../../utils/axiosClient";

const PersonList = () => {
    const [persons, setPersons] = useState([]);
    
    async function getPersons() {
        const results = await client.get();
        setPersons(results.data);
    }

    useEffect(() => {
        getPersons();
    }, []);

    if (persons) {
        return (
            <ul>
                {
                    persons.map(person => (
                        <li key={person.id} className="person__card">
                            <Person person={person}/>
                        </li>
                    ))
                }
            </ul>
        );
    }
    else {
        return <p>Data is loading...</p>;
    }
}

export default PersonList;