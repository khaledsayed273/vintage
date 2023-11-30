
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import img from "../../images/all img/Frame 155.png"
import Image from 'next/image'
import Link from 'next/link'

function Center() {
    return (
        <aside>
            <div className="container font">

                <Grid container spacing={{ sm: 3, md: 5, lg: 15 }}>
                    <Grid item xs={12} sm={7} md={6}>
                        <Typography variant='div' component="div" className='mb-5'>
                            <h1 style={{
                                fontSize: "50px",
                                color: "white"
                            }}>Join in, it’s free.
                            </h1>

                            <div className='my-5'>
                                <p style={{
                                    color: "#CCCCCC",
                                    fontSize: "14px",
                                    margin: "10px 0"
                                }}>Why Vintage ?
                                </p>


                                <p style={{
                                    color: "#CCCCCC",
                                    fontSize: "14px",
                                    margin: "10px 0"
                                }}>
                                    Vintage is a global art platform that links galleries, artists, and art lovers from more than 200 nations.
                                </p>

                                <p style={{
                                    color: "#CCCCCC",
                                    fontSize: "14px",
                                    margin: "10px 0"
                                }}>
                                    If you’re an artist, Vintage allows you to sell art online commission-free, which distinguishes us from other online gallery websites.
                                </p>

                                <p style={{
                                    color: "#CCCCCC",
                                    fontSize: "14px",
                                    margin: "10px 0"
                                }}>
                                    If you want to buy a new painting, Vintage makes it simple to find the best artwork.
                                </p>

                                <p style={{
                                    color: "#CCCCCC",
                                    fontSize: "14px",
                                    margin: "10px 0"
                                }}>
                                    Not in the market for buying or selling art?
                                </p>

                                <p style={{
                                    color: "#CCCCCC",
                                    fontSize: "14px",
                                    margin: "10px 0"
                                }}>
                                    Vintage is free for anyone who is interested in artworks , paintings and all types of artwork.
                                </p>

                            </div>

                            <Typography variant='div' component="div" sx={{
                                display: "flex",
                                justifyContent: { xs: "center", sm: "flex-start" }
                            }}>
                                <Button
                                    sx={{
                                        background: "white",
                                        color: 'black',
                                        border: "1px solid white",
                                        width: "178px",
                                        "&:hover": {
                                            opacity: "0.7",
                                            background: "white",
                                        }
                                    }}
                                >
                                   <Link className="w-100 h-100" style={{color: "black" , textDecoration: "none" , padding: '2px 40px'}} href="sign-up">Sign Up</Link> 
                                </Button>
                                <Button
                                    sx={{
                                        background: "transparent",
                                        color: 'white',
                                        border: "1px solid white",
                                        width: "178px"
                                    }}

                                >
                                   <Link className="w-100 h-100" href="login" style={{color: "white" , textDecoration: "none" , padding: '2px 40px'}}>Log In</Link> 
                                </Button>
                            </Typography>

                        </Typography>
                    </Grid>


                    <Grid item xs={12} sm={5} md={6} className='d-flex align-items-center justify-content-end mb-5'>
                        <Typography variant='div' component="div" className='d-flex justify-content-center'>
                            <Typography variant='div' component="div" sx={{
                                width: { xs: "auto", md: "390px", lg: "450px" },
                                height: { xs: "auto", md: "550px", lg: "595px" },
                                // width: "450px",
                                // height: "595px",
                                overflow: "hidden",
                                borderRadius: "224px"
                            }}>
                                <Image className='w-100 h-100' src={img} alt="" />
                            </Typography>

                        </Typography>
                    </Grid>
                </Grid>


            </div>
        </aside>
    )
}

export default Center
