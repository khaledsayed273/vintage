import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import img from "../../images/all img/image 21.png"
import style from "./Section.module.css"
import ukLogo from "../../images/all img/uk.png"
import Image from 'next/image'

function Section() {
    return (
        <section className='mt-5'>
            <div className='container'>

                <Grid className=' d-flex justify-content-center' container>
                    <Grid item className='d-flex align-items-flex-start mb-5 mb-lg-0' lg={8} md={7} sx={{ marginTop: { md: "60px" } }} >
                        <Typography variant='div' component="div">
                            <h1 className={`font px-3 ${style.title}`}>Art is an expression of the soul.</h1>
                            <Typography variant='div' component="div" className='px-3'>
                                <p className={`mt-5 mb-1 font ${style.paragragh}`}>
                                    You've come to the perfect location if art is
                                </p>
                                <p className={`font ${style.paragragh}`}>
                                    your passion or your job.
                                </p>
                            </Typography>

                            <Typography variant='div' component="div" className='d-flex align-items-center p-2 px-3'>
                                <Typography variant='div' component="div" >
                                    <Image className='w-100 h-100' src={ukLogo} alt="" />
                                </Typography>

                                <Typography className={`font ${style.uk}`} variant='div' component="div">
                                    English
                                </Typography>
                            </Typography>

                            <Typography variant='div' component="div" className='d-flex align-items-center mt-4 flex-wrap px-1'>
                                <Button className='font' sx={{
                                    padding: "7px 15px",
                                    background: "white",
                                    color: "black",
                                    border: "1px solid white",
                                    textTransform: "none",
                                    fontSize: "16px",
                                    "&:hover": {
                                        color: "white"
                                    }
                                }}>Get a Free Account
                                </Button>
                                <Button className='font' sx={{
                                    padding: "7px 15px 7px 30px",
                                    color: "white",
                                    textTransform: "none",
                                    fontSize: "16px",
                                    border: "1px solid transparent",
                                    "&:hover": {
                                        border: "1px solid white",
                                    }
                                }}>Learn more ...</Button>
                            </Typography>
                        </Typography>
                    </Grid>

                    <Grid item className='d-flex justify-content-center' lg={4} md={5}>
                        <Typography className='my-5 my-md-0' variant='div' component="div">

                            <Typography variant='div' component="div" sx={{ width: { lg: "450px", xs: "auto" } }}>
                                <Image className='w-100 h-100' src={img} alt="img" />
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </section>

    )
}


export default Section
