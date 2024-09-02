import React, { useState, useEffect } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import axios from 'axios';

const PropertyListing = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/properties');
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    return (
        <ul className="PropertyListing">
            {properties.map((property, index) => (
                <li key={property.id || index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
 