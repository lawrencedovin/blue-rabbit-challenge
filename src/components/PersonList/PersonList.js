import React, {useState, useEffect} from "react";
import "./PersonList.css";
import axios from "axios";
import Person from "../Person/Person";

const PersonList = () => {
    const [persons, setPersons] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function getPersons() {
            const results = await axios('https://6308a96a722029d9ddd5005f.mockapi.io/api/users');
            setPersons(results.data);
        }
        getPersons();
    }, []);

    if (persons) {
        return (
            <ul>
                {
                    persons.map(person => (
                        <li key={person.id}>
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