"use client"
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import style from "./Left.module.css"
import Link from 'next/link';

function Left() {

    const [keyWord, setKeyWord] = useState(true);
    const [artist, setArtist] = useState(true);
    const [genre, setGenre] = useState(true);
    const [medium, setMedium] = useState(true);



    return (
        <Grid item xs={11} md={4} lg={3} >

            <List
                sx={{ width: '100%', }}
                component="nav"
                aria-labelledby="nested-list-subheader"

            >
                <Typography variant='div' component="div" sx={{ borderBottom: "1px solid white", padding: "15px 0" }}>
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
                                <TextField className={style.forInput} sx={{ position: "relative", border: "1px solid white", color: "white" }} fullWidth id="fullWidth" />
                                <SearchIcon sx={{ position: "absolute", right: '25px', top: "17px" }} />
                            </Box>
                        </List>
                    </Collapse>
                </Typography>

                <Typography variant='div' component="div" sx={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setArtist(!artist)}>

                        <ListItemText primary="Artists" />
                        {artist ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={artist} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            <Box
                                sx={{
                                    width: '100%',
                                    padding: "10px 15px"
                                }}
                            >
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
                </Typography>


                <Typography variant='div' component="div" sx={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setGenre(!genre)}>

                        <ListItemText primary="Genre" />
                        {genre ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={genre} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>

                            <Box
                                sx={{
                                    width: '100%',
                                    padding: "10px 15px"
                                }}
                            >
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
                </Typography>



                <Typography variant='div' component="div" sx={{ borderBottom: "1px solid white", padding: "15px 0" }}>
                    <ListItemButton onClick={() => setMedium(!medium)}>

                        <ListItemText primary="Medium" />
                        {medium ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={medium} timeout="auto" unmountOnExit>

                        <List component="div" disablePadding>

                            <Box
                                sx={{
                                    width: '100%',
                                    padding: "10px 15px"
                                }}
                            >
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
                </Typography>


            </List>
        </Grid>
    )
}

export default Left
