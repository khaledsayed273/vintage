import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import img from "../../images/all img/image 21.png"
import style from "./Section.module.css"
import ukLogo from "../../images/all img/uk.png"
import Image from 'next/image'
import Link from 'next/link'

function Section() {
    return (
        <section className='mt-5 font'>
            <div className='container'>

                <Grid className='d-flex justify-content-center' container>
                    <Grid item className='d-flex align-items-flex-start mb-5 mb-lg-0' lg={8} md={7} sx={{ marginTop: { md: "60px" } }} >
                        <Typography variant='div' component="div">
                            <Typography variant="div" component="div" sx={{
                                fontSize: { xs: "25px", md: "38px", lg: "48px" }, lineHeight: { md: "80px", lg: "106px" }
                            }} className={`font px-3 ${style.title}`}>Art is an expression of the soul.
                            </Typography>
                            <Typography variant='div' component="div" className='px-3'>
                                <p className={`mt-5 mb-1 font ${style.paragragh}`}>
                                    You&apos;ve come to the perfect location if art is
                                </p>
                                <p className={`font ${style.paragragh}`}>
                                    your passion or your job.
                                </p>
                            </Typography>

                            <Typography variant='div' component="div" className='d-flex align-items-center p-2 px-3'>
                                <Typography variant='div' component="div" >
                                    <Image priority className='w-100 h-100' src={ukLogo} alt="" />
                                </Typography>

                                <Typography className={`font ${style.uk}`} variant='div' component="div">
                                    English
                                </Typography>
                            </Typography>

                            <Typography variant='div' component="div" className='d-flex align-items-center mt-4 flex-wrap px-3'>
                                <Button className='font' sx={{
                                    padding: "7px 15px",
                                    background: "white",
                                    color: "black",
                                    border: "1px solid white",
                                    textTransform: "none",
                                    fontSize: "16px",
                                    "&:hover": {
                                        background: "white",
                                        opacity: "0.6"
                                    }
                                }}>
                                    <Link style={{ textDecoration: "none" }} className='w-100 h-100 text-black' href="/login">
                                        Get a Free Account
                                    </Link>

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

                            <Typography variant='div' component="div" sx={{ width: {xs: "auto" , lg: "390px", xl: "430px"} }}>
                                <Image className='w-100 h-100' priority src={img} alt="img" />
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </section>

    )
}


export default Section
