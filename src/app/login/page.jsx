"use client"
import { Grid, Typography, Button } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import google from "../../images/google.svg"
import facebook from "../../images/facebook.svg"
import Image from 'next/image';
import Link from 'next/link';

function page() {
    return (
        <div className='container mx-auto d-flex justify-content-center font'>
            <Typography className="py-3" variant='div' component="div" sx={{
                background: "white",
                width: { xs: "95%", sm: "80%", md: "70%", lg: "50%", xl: "45%" },
                borderRadius: "30px"

            }}>
                <h1 className='text-center pb-3 pt-4' style={{ fontSize: "24px" }}>
                    Log in
                </h1>
                <div className='text-center pb-3 ' style={{ fontSize: "16px" }}>
                Don’t have an ccount? <Link style={{color: "black" , textDecoration: "none"}} href="sign-up">Sign up</Link>  
                </div>
                <div className='d-flex  flex-sm-row align-items-center justify-content-center'>
                    <Button sx={{
                        background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                        color: "white",
                        fontSize: "15px",
                        borderRadius: "10px 0 0 7px",
                        "&:hover": {
                            opacity: "0.7"
                        },
                        border: "1px solid black"
                    }} className='p-2 px-sm-3 px-md-5 px-2 font'>
                        <Image className='me-2' width={25} height={25} alt='facebook icon' priority src={facebook} />
                        Log in
                    </Button>
                    <Button sx={{
                        color: "black",
                        fontSize: "15px",
                        borderRadius: "0 10px 7px 0",
                        "&:hover": {
                            opacity: "0.7"
                        },
                        border: "1px solid  #2c290ed9"
                    }} className='p-2 px-sm-3 px-md-5 px-2 font'>
                        <Image className='me-2' width={25} height={25} alt='google icon' priority src={google} />
                        Log in
                    </Button>

                </div>
                <Typography variant='span' component="span" className='d-flex justify-content-center align-items-center fw-bold my-4' sx={{
                    position: "relative",
                    textTransform: "uppercase",
                    color: "rgb(71 70 70)",
                    ":after": {
                        content: "''",
                        width: "40%",
                        background: "rgba(102, 102, 102, 0.25)",
                        position: "absolute",
                        height: "2px",
                        right: { xs: "10px", md: "5%" }
                    },
                    ":before": {
                        content: "''",
                        width: "40%",
                        background: "rgba(102, 102, 102, 0.25)",
                        position: "absolute",
                        height: "2px",
                        left: { xs: "10px", md: "5%" }

                    },
                }}>
                    or
                </Typography>

                <form>
                    <Grid container className='px-3 px-md-5 pt-4' spacing={5}>
                       
                       
                        <Grid className='pt-3' item xs={12}>
                            <div className='d-flex flex-column'>
                                <label htmlFor="email">Your Email </label>
                                <input style={{ borderRadius: "10px", border: "1px solid #939393" }} className='p-2 mt-2' id="email" type="email" />
                            </div>
                        </Grid>
                        <Grid className='pt-3' item xs={12}>
                            <div className='d-flex flex-column'>
                                <label htmlFor="password">Your Password</label>
                                <input style={{ borderRadius: "10px", border: "1px solid #939393" }} className='p-2 mt-2' id="password" type="password" />
                            </div>
                        </Grid>
                        <Grid className='pt-3' item xs={12}>
                            <div className="d-flex justify-content-center">
                                <Button className="w-100" sx={{
                                    background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                                    color: "white",
                                    padding: "8px",
                                    fontSize: "16px",
                                    borderRadius: "25px",
                                    ":hover":{
                                        opacity: "0.7"
                                    }
                                }}>Login</Button>
                            </div>
                        </Grid>
                        
                        <Grid className='pt-3' item xs={12}>
                            <div style={{ fontSize: "17px" }} className="d-flex justify-content-center text-center px-4 my-3">
                            By creating an account, you agree to the Terms of use and Privacy Policy.
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </Typography>
        </div>
    )
}

export default page
