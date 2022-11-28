import React from 'react';
import { useState } from "react"
import "./Filter.css";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Filter = () => {
    const [location, setLocation] = useState("India");
    const [price,setPrice] = useState("500-2500");
    const [propertyType,setPropertyType] = useState("Houses")

    const handleChange = (event) => {
        setLocation(event.target.value);
    };
    
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handlePropertyChange = (event) => {
       setPropertyType(event.target.value)
    }

    return (
        <div className="filter">
            <div className="location flex border width">
                <p className="filter-name ">Location</p>
                <div className="selection">
                    <Select
                        value={location}
                        onChange={handleChange}
                        className="select-container"
                    >
                        <MenuItem value="India">India</MenuItem>
                        <MenuItem value="USA">USA</MenuItem>
                        <MenuItem value="China">China</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="date flex border width">
                <p className="filter-name ">When</p>

            </div>
            <div className="price flex border width">
                <p className="filter-name ">Price</p>
                <div className="selection">
                    <Select
                        value={price}
                        onChange={handlePriceChange}
                        className="select-container"
                    >
                        <MenuItem value="500-2500">$500-2500</MenuItem>
                        <MenuItem value="2501-4500">$2500-4500</MenuItem>
                        <MenuItem value="4501-7000">$4500-7000</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="property-type flex border width">
                <p className="filter-name">Property Type</p>
                <div className="selection">
                    <Select
                        value={propertyType}
                        onChange={handlePropertyChange}
                        className="select-container"
                    >
                        <MenuItem value="Houses">Houses</MenuItem>
                        <MenuItem value="Luxury">Luxury</MenuItem>
                        <MenuItem value="Apartment">Apartment</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="search-btn flex border width">
                <Button size="small" variant="contained" className="search">Search</Button>
            </div>
        </div>
    )
}

export default Filter