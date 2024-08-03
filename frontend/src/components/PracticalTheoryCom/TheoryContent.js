import './TheoryContent.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';




function TheoryContent(){
    const { subject, index } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/practicals/${subject}practicals?subject=${subject}`);
                setData(response.data[index]);
            } catch (error) {
                console.error("There was an error fetching the data!", error);
            }
        };
        fetchData();
    }, [subject, index]);

    if (!data) {
        return <div>Loading...</div>;
    }
    return(
        <>
        <div className="theory">
        <p>{data.theory}</p>
            <h3>Introduction</h3>

            <p> Student will be able to; identifies basic physical quantities 
                and derived physical quantities. Uses appropriate SI base 
                units and derived SI units. Appreciates that all physical 
                quantities consist of a numerical magnitude with or without a unit. 
                Uses the prefixes and their symbols to indicate multiples and submultiples. 
                Converts units appropriately. Uses the knowledge of significant figures.
                Investigates physical quantities using dimensions. Dimensions of basic physical 
                quantities used in mechanics, Mass, Length, Time, Dimensions of derived physical quantities 
                Uses of dimensions. Testing the correctness of a physical equation Finding the units of a given quantity
                Deriving expressions Student will be able to understand the topic clearly.</p>

            <img src="pictures/PracticalContent_PracTheoryPage.jpg" alt="content of practical"></img>
            
            <h3>Equipments</h3>
            <ul>
                <li>Fundamental physical quantities</li>
                <li>International system of units (SI units)</li>
                <li>Base units Supplementary units </li>
                <li>Derived physical quantities and derived units </li>
                <li>Physical quantities without units </li>
                <li>Multiples and submultiples of units</li>
            </ul>
        </div>
        </>
    )
}

export default TheoryContent