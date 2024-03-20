"use client"
import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SearchExhibitions() {

    const [country, setCountry] = React.useState('');

    const handleCountry = (event) => {
        setCountry(event.target.value);
    };
    const [city, setCity] = React.useState('');

    const handleCity = (event) => {
        setCity(event.target.value);
    };
    const [showAll, setShowAll] = React.useState('');

    const handleShowAll = (event) => {
        setShowAll(event.target.value);
    };

    return (
        <div className="container px-md-5">
            <div className='row px-3'>
                <div className='col-12 col-sm-7 col-md-8 col-lg-9'>
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", background:
                                "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))"
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1, color: "white" }}
                            placeholder="Search exhibitions by title.."
                            inputProps={{ 'aria-label': 'Search exhibitions by title..' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    </Paper>
                </div>
                <div className='col-12 col-sm-5 col-md-4 col-lg-3 d-flex align-items-center mt-3 mt-sm-0'>
                    <div className="d-flex align-items-center">
                        <Button className="px-4" sx={{
                            background: "white",
                            color: "black",
                            border: "1px solid white",
                            "&:hover": { color: "white" },
                            textTransform: "capitalize"
                        }}
                        >
                            Reset
                        </Button>
                        <Button className="px-4 inputBg" sx={{
                            color: "white",
                            "&:hover": { opacity: "0.5" },
                            textTransform: "capitalize"
                        }}
                        >
                            Search
                        </Button>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-md-4 mt-3">
                            <FormControl sx={{ width: "100%" }}>
                                <Select
                                    className='inputBg text-white'
                                    value={country}
                                    onChange={handleCountry}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>Country</em>
                                    </MenuItem>
                                    <MenuItem value={"Egypt"}>Egypt</MenuItem>
                                    <MenuItem value={"Egypt2"}>Egypt2</MenuItem>
                                    <MenuItem value={"Egypt3"}>Egypt3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <FormControl sx={{ width: "100%" }}>
                                <Select
                                    className='inputBg text-white'
                                    value={city}
                                    onChange={handleCity}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>City</em>
                                    </MenuItem>
                                    <MenuItem value={"cairo"}>cairo</MenuItem>
                                    <MenuItem value={"alex"}>alex</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-12 col-md-4 mt-3">
                            <FormControl sx={{ width: "100%" }}>
                                <Select
                                    className='inputBg text-white'
                                    value={showAll}
                                    onChange={handleShowAll}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>show All</em>
                                    </MenuItem>
                                    <MenuItem value={"black"}>black</MenuItem>
                                    <MenuItem value={"white"}>white</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}






