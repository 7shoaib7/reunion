import React from 'react';
import { useState } from "react"
import "./Filter.css";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Card from "../Card/Card";
import Grid from '@mui/material/Grid';
import dummy from "../../../data/dummy.json"

const Filter = () => {
    const [location, setLocation] = useState(null);
    const [price, setPrice] = useState(null);
    const [propertyType, setPropertyType] = useState(null);
    const [date, setDate] = useState(dayjs('2014-08-18T21:11:54'));
    const [data, setData] = useState(dummy);



    const handleDateChange = (newValue) => {
        setDate(newValue);
        console.log(newValue.$d);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handlePriceChange = (event) => {
        console.log(event.target.value)
        setPrice(event.target.value);

    };

    const handlePropertyChange = (event) => {
        setPropertyType(event.target.value)
    }


    const filterByLocation = () => {
        if (location !== null) {
            return dummy.filter(item => item.location === location)
        }
        return dummy;
    }

    const filterByPrice = (data) => {
        if (price !== null) {
            const rate1 = price.split("-")[0];
            const rate2 = price.split("-")[1];
            return data.filter(item=>item.price<=rate2 && item.price>=rate1)
        }
        return data
    }

    const filterByProperty = (data) => {
        if (propertyType !== null) {
            return data.filter(item => item["property-type"] === propertyType)
        }
        return data
    }



    const handleFilter = () => {
        const byLocation = filterByLocation();
        console.log("ByLocation", byLocation)
        const byPrice = filterByPrice(byLocation);
        console.log("ByPrice", byPrice)
        const byProperty = filterByProperty(byPrice)
        console.log("ByProperty", byProperty)
        setData(byProperty)
    }


    return (
        <>
            <div className="filter">
                <div className="location flex border width">
                    <p className="filter-name ">Location</p>
                    <div className="selection">
                        <Select
                            value={location}
                            onChange={handleLocationChange}
                            className="select-container"
                            displayEmpty
                        >

                            <MenuItem value={null}><em>Select Location</em></MenuItem>
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="USA">USA</MenuItem>
                            <MenuItem value="China">China</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="date flex border width">
                    <p className="filter-name ">When</p>
                    <div className="selection">
                        <LocalizationProvider dateAdapter={AdapterDayjs} style={{height:"2rem"}}>
                            <DesktopDatePicker
                                inputFormat="MM/DD/YYYY"
                                value={date}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className="price flex border width">
                    <p className="filter-name ">Price</p>
                    <div className="selection">
                        <Select
                            value={price}
                            onChange={handlePriceChange}
                            className="select-container"
                            displayEmpty
                        >

                            <MenuItem value={null}><em>Select Price</em></MenuItem>
                            {/* <MenuItem value="500-2500">$500-2500</MenuItem> */}
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
                            displayEmpty
                        >
                            <MenuItem value={null}><em>Select Property</em></MenuItem>
                            <MenuItem value="Houses">Houses</MenuItem>
                            <MenuItem value="Luxury">Luxury</MenuItem>
                            <MenuItem value="Apartment">Apartment</MenuItem>
                        </Select>
                    </div>
                </div>
                <div className="search-btn flex-row border width">
                    <Button size="small" variant="contained" className="search" onClick={handleFilter}>Search</Button>
                </div>
            </div>


            <div className="filter-grid">
                {data.length ? <Grid container spacing={8} paddingX="2rem">
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card item={item} key={item.price + index} />
                        </Grid>
                    ))}
                </Grid>
                    : (<div className="not-found">
                        <h1>No results found😔</h1>
                    </div>
                    )}

            </div>
        </>
    )
}

export default Filter


