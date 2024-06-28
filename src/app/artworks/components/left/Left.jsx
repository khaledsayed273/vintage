"use client"
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import style from "./Left.module.css"
import Link from 'next/link';
import React, { useState } from 'react'

function Left() {

    const [keyWord, setKeyWord] = useState(true);
    const [artist, setArtist] = useState(true);
    const [genre, setGenre] = useState(true);
    const [medium, setMedium] = useState(true);
    const [price, setPrice] = useState(true);
    const [size, setSize] = useState(true);
    const [material, setMaterial] = useState(true);
    const [country, setCountry] = useState(true);
    const [timePeriod, setTimePeriod] = useState(true);
    const [range, setRange] = useState(400)

    return (
        <div>
            <List
                sx={{ width: '100%', }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {/* Keyword Search */}
                <div style={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setKeyWord(!keyWord)}>

                        <ListItemText primary="Keyword Search" />
                        {keyWord ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={keyWord} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            <Box
                                sx={{
                                    width: '100%',
                                    padding: "10px 15px"

                                }}
                            >
                                <TextField className={style.forInput} sx={{ position: "relative", border: "1px solid white", color: "white" }} fullWidth id="KeywordSearch" />
                                <SearchIcon sx={{ position: "absolute", right: '25px', top: "17px" }} />
                            </Box>
                        </List>
                    </Collapse>
                </div>

                {/* Artists */}
                <div style={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setArtist(!artist)}>
                        <ListItemText primary="Artists" />
                        {artist ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={artist} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Box sx={{ width: '100%', padding: "10px 15px" }}>
                                <FormGroup sx={{ userSelect: "none" }}>
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Artists You Follow (  100 )" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Alberto Zamboni" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Alfredo Roldan" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Angela Glajcar" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Antonio Cazorla" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Cha Jong Rye" />
                                    <Link style={{ color: "white", fontSize: "16px", marginTop: "10px" }} href="/">Show more</Link>
                                </FormGroup>
                            </Box>
                        </List>
                    </Collapse>
                </div>

                {/* Genre */}
                <div style={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setGenre(!genre)}>
                        <ListItemText primary="Genre" />
                        {genre ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={genre} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Box sx={{ width: '100%', padding: "10px 15px" }}>
                                <FormGroup sx={{ userSelect: "none" }}>
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Abstract" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Realism" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Pop art" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Surrealism" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Portrait" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Landscape" />
                                    <Link style={{ color: "white", fontSize: "16px", marginTop: "10px" }} href="/">Show more</Link>
                                </FormGroup>
                            </Box>
                        </List>
                    </Collapse>
                </div>

                {/* Medium */}
                <div style={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setMedium(!medium)}>
                        <ListItemText primary="Medium" />
                        {medium ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={medium} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Box sx={{ width: '100%', padding: "10px 15px" }}>
                                <FormGroup sx={{ userSelect: "none" }}>
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Painting" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Sculpture" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Installation" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Photography" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Work on Paper" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Film/Video" />
                                    <Link style={{ color: "white", fontSize: "16px", marginTop: "10px" }} href="/">Show more</Link>
                                </FormGroup>
                            </Box>
                        </List>
                    </Collapse>
                </div>

                {/* Price */}
                <div style={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setPrice(!price)}>
                        <ListItemText primary="Price" />
                        {price ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={price} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Box sx={{ width: '100%', padding: "10px 15px" }}>
                                <FormGroup sx={{ userSelect: "none" }}>
                                    <div style={{ gap: "15px" }} className='w-full flex flex-col md:flex-row r justify-between items-center mb-3'>

                                        <div>
                                            <label className='mb-2' htmlFor="min">Min</label>
                                            <input style={
                                                {
                                                    background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                                                    color: "white",
                                                    padding: "10px",
                                                    border: "1px solid white",
                                                    borderRadius: "8px"
                                                }
                                            } className='w-full' type="number" id="min" />
                                        </div>

                                        <div>
                                            <label className='mb-2' htmlFor="max">Max</label>
                                            <input style={
                                                {
                                                    background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                                                    color: "white",
                                                    padding: "10px",
                                                    border: "1px solid white",
                                                    borderRadius: "8px"
                                                }
                                            } className='w-full' type="number" id="max" />
                                        </div>


                                    </div>

                                    <div className='mt-3 w-full'>
                                        <input style={{
                                            cursor: "pointer",
                                            background: "#3D6D79",
                                            "WebkitAppearance": "none",
                                            height: "3px"
                                        }} className='w-full' onChange={(e) => setRange(e.target.value)} type="range" value={range} min="0" max="5000" />
                                        <div className='flex justify-between'>
                                            <p>${range}</p>
                                            <p>$5000</p>
                                        </div>
                                    </div>

                                    <Link style={{ color: "white", fontSize: "16px", marginTop: "10px" }} href="/">Show more</Link>
                                </FormGroup>
                            </Box>
                        </List>
                    </Collapse>
                </div>

                {/* Size */}
                <div style={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setSize(!size)}>
                        <ListItemText primary="Size" />
                        {size ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={size} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Box sx={{ width: '100%', padding: "10px 15px" }}>
                                <FormGroup sx={{ userSelect: "none" }}>
                                    <p>This is based on the artwork’s average dimension.</p>
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Small (under 40cm)" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Medium (40 – 100cm)" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Large (over 100cm)" />
                                    <Link style={{ color: "white", fontSize: "16px", marginTop: "10px" }} href="/">Show more</Link>
                                </FormGroup>
                            </Box>
                        </List>
                    </Collapse>
                </div>

                {/* Material */}
                <div style={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setMaterial(!material)}>
                        <ListItemText primary="Material" />
                        {material ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={material} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Box
                                sx={{
                                    width: '100%',
                                    padding: "10px 15px"
                                }}
                            >
                                <TextField className={style.forInput} sx={{ position: "relative", border: "1px solid white", color: "white" }} fullWidth id="Material" />
                                <SearchIcon sx={{ position: "absolute", right: '25px', top: "17px" }} />
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    padding: "10px 15px"
                                }}
                            >
                                <FormGroup sx={{ userSelect: "none" }}>
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Acrylic" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Aluminum" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Bronze" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Canvas" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Charcoal" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Collage" />
                                    <Link style={{ color: "white", fontSize: "16px", marginTop: "10px" }} href="/">Show more</Link>
                                </FormGroup>
                            </Box>
                        </List>
                    </Collapse>
                </div>

                {/* Country */}
                <div style={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setCountry(!country)}>
                        <ListItemText primary="Country" />
                        {country ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={country} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Box
                                sx={{
                                    width: '100%',
                                    padding: "10px 15px"
                                }}
                            >
                                <TextField className={style.forInput} sx={{ position: "relative", border: "1px solid white", color: "white" }} fullWidth id="Country" />
                                <SearchIcon sx={{ position: "absolute", right: '25px', top: "17px" }} />
                            </Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    padding: "10px 15px"
                                }}
                            >
                                <FormGroup sx={{ userSelect: "none" }}>
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Egypt" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="America" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="China" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="France" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Germany" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="London" />
                                    <Link style={{ color: "white", fontSize: "16px", marginTop: "10px" }} href="/">Show more</Link>
                                </FormGroup>
                            </Box>
                        </List>
                    </Collapse>
                </div>

                {/* Time Period */}
                <div style={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setTimePeriod(!timePeriod)}>
                        <ListItemText primary="Time Period" />
                        {timePeriod ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={timePeriod} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Box sx={{ width: '100%', padding: "10px 15px" }}>
                                <FormGroup sx={{ userSelect: "none" }}>
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="2020s" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="2010s" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="2000s" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="1990s" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="1980s" />
                                    <FormControlLabel className={style.cheackInput} control={<Checkbox sx={{ color: "white" }} />} label="Cha Jong 1970s" />
                                    <Link style={{ color: "white", fontSize: "16px", marginTop: "10px" }} href="/">Show more</Link>
                                </FormGroup>
                            </Box>
                        </List>
                    </Collapse>
                </div>
            </List>
        </div>
    )
}

export default Left
