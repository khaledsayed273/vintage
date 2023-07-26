"use client"

import { Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContactImg from "../../../images/all img/contact.png"
import Image from 'next/image';
import Link from 'next/link';

function Contact() {

    const data =
    {
        id: 1,
        city: "cairo",
        country: "egypt",
        address: "No.16, Zamalek",
        time_open: "09:00 am",
        time_close: "23:30 pm",
        location: "UTC +8 Chengdu",

    }



    return (
        <div className='container font text-white mt-5'>

            <div className='my-5'>

                <span
                    className='ms-md-5 '
                    style={{
                        fontSize: "26px",
                        textTransform: "uppercase",

                    }}
                >CONTACT INFO & SOCIAL MEDIA</span>

                <Typography variant='div' component="div"
                    className='mt-3 py-5 px-md-5 px-4 '

                    sx={{
                        background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",

                    }}
                >
                    <div style={{
                        fontSize: "18px"
                    }}>

                        Website :
                        <Link style={{
                            textDecoration: "none",
                            color: "white"

                        }} rel="noreferrer" target='_blank' href="https://arte-gallery.com/"> https://arte-gallery.com/
                        </Link>
                    </div>

                    <div style={{
                        fontSize: "18px",
                        margin: "40px 0"
                    }}>
                        Social Media :
                    </div>

                    <div className='d-flex justify-content-start align-items-center flex-column flex-md-row'>
                        <Typography variant='div' component="div"
                            sx={{
                                background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                                border: "1px solid var(--greyd-ark, rgba(58, 53, 0, 0.20))",
                                padding: "12px 45px 12px 15px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "190px",
                                marginRight: "15px",
                                marginTop: "10px"
                            }}
                        >
                            <InstagramIcon sx={{
                                fontSize: "27px"
                            }} />
                            <span style={{
                                marginLeft: "10px",
                                fontSize: "16px"
                            }}>
                                artegallery
                            </span>
                        </Typography>
                        <Typography variant='div' component="div"
                            sx={{
                                background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                                border: "1px solid var(--greyd-ark, rgba(58, 53, 0, 0.20))",
                                padding: "12px 45px 12px 15px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "190px",
                                marginRight: "15px",
                                marginTop: "10px"
                            }}
                        >
                            <FacebookIcon sx={{
                                fontSize: "27px"
                            }} />

                            <span style={{
                                marginLeft: "10px",
                                fontSize: "16px"
                            }}>
                                artegallery
                            </span>
                        </Typography>
                        <Typography variant='div' component="div"
                            sx={{
                                background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                                border: "1px solid var(--greyd-ark, rgba(58, 53, 0, 0.20))",
                                padding: "12px 45px 12px 15px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "190px",
                                marginRight: "15px",
                                marginTop: "10px"
                            }}
                        >
                            <TwitterIcon sx={{
                                fontSize: "27px"
                            }} />
                            <span style={{
                                marginLeft: "10px",
                                fontSize: "16px"
                            }}>
                                artegallery
                            </span>
                        </Typography>
                    </div>
                </Typography>
            </div>

            <div className='my-5'>

                <span
                    className='ms-md-5 '
                    style={{
                        fontSize: "26px",
                        textTransform: "uppercase",

                    }}
                >
                    COMPANY INFO & LOCATION
                </span>

                <Typography variant='div' component="div"
                    className='mt-3 py-5 px-md-5 px-4 '

                    sx={{
                        background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",

                    }}
                >

                    <div className='d-flex justify-content-between align-items-center'>

                        <Typography variant='div' component="div"
                            sx={{
                                fontSize: "18px"
                            }}
                        >
                            City :

                            <span style={{
                                textTransform: "capitalize"
                            }}>

                                {data.city}
                            </span>

                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                fontSize: "18px",

                            }}
                        >
                            Country :
                            <span style={{
                                textTransform: "capitalize"
                            }}>
                                {data.country}
                            </span>
                        </Typography>

                        <Typography variant='div' component="div"
                            sx={{
                                fontSize: "16px",
                                textAlign: "center",
                                textTransform: "capitalize"
                            }}
                        >
                            Address :
                            <span
                                style={{
                                    textTransform: "uppercase"
                                }}>
                                {data.address}
                            </span>

                            <br />
                            street.

                        </Typography>

                    </div>



                    <div className='d-flex justify-content-between align-items-center my-5'>

                        <Typography variant='div' component="div">
                            Opening hours : {data.time_open} - {data.time_close}
                            <div>
                                {`(${data.location})`}
                            </div>

                        </Typography>


                    </div>

                </Typography>

            </div>

            <div className='my-5'>
                <Typography variant='div' component="div"
                    sx={{
                        background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                        height: "405px"
                    }}
                >
                    <Grid container sx={{ height: "100%" }}>
                        <Grid item xs={12} md={4} sx={{ height: "100%" }}>
                            <div style={{
                                fontSize: "40px",
                                textAlign: "center",
                                fontWeight: "600",
                                letterSpacing: "0.4px",
                                padding: "90px",
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "center",
                                height: "100%"
                            }}>
                                Meet your new art advisor.
                            </div>
                        </Grid>
                        <Grid item xs={12} md={8} sx={{ height: "100%" }}>
                            <div className='w-100 h-100'>
                                <Image className='w-100 h-100' src={ContactImg} alt="img" />
                            </div>
                        </Grid>
                    </Grid>
                </Typography>
            </div>
        </div>
    )
}

export default Contact
