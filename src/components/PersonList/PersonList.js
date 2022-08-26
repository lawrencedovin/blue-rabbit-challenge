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
            console.log(persons);
        }
        getPersons();
        // axios.get(`https://6308a96a722029d9ddd5005f.mockapi.io/api/users`)
        // .then(res => {
        //     const data = res.data;
        //     console.log(data);
        //     console.log(persons);
        //     setPersons(data);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
        // .finally(() => {
        //     setLoading(false);
        // })
    }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const response = await fetch(`https://6308a96a722029d9ddd5005f.mockapi.io/api/users/`);
    //       const newData = await response.json();
    //       setPersons(newData);
    //     };
    
    //     fetchData();
    //   }, [persons]);

    if (persons) {
        return (
            <div>
                {/* {
                    persons.map(person => (
                        <Person person={person} />
                    ))
                } */}
                <Person />
            </div>
        );
    }
    else {
        return <p>Data is loading...</p>;
    }
}

export default PersonList;