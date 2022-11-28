import React from 'react';
import "./Filter.css";
import Button from '@mui/material/Button';

const Filter = () => {
    return (
        <div className="filter">
            <div className="location flex border width">
                <p className="location-name ">Location</p>

            </div>
            <div className="date flex border width">
                <p className="location-name ">When</p>

            </div>
            <div className="price flex border width">
                <p className="location-name ">Price</p>

            </div>
            <div className="property-type flex border width">
                <p className="location-name">Property Type</p>

            </div>
            <div className="search-btn flex border width">
                <Button size="small" variant="contained" className="search">Search</Button>
            </div>
        </div>
    )
}

export default Filter