import Grid from '@mui/material/Grid'
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
        <div className='font text-white mt-5'>

            <div className='my-5'>

                <span
                    className='ms-md-5 '
                    style={{
                        fontSize: "26px",
                        textTransform: "uppercase",

                    }}
                >CONTACT INFO & SOCIAL MEDIA

                </span>

                <div
                    className='mt-3 py-7 px-4 md:px-10  '

                    style={{
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

                    <p style={{
                        fontSize: "18px",
                        margin: "40px 0"
                    }}>
                        Social Media :
                    </p>

                    <div className='flex justify-start items-center flex-col md:flex-row '>
                        <div
                            style={{
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
                        </div>
                        <div
                            style={{
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
                        </div>
                        <div
                            style={{
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
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-5'>

                <span
                    className='md:ms-5 uppercase'
                    style={{
                        fontSize: "26px",
                    }}
                >
                    COMPANY INFO & LOCATION
                </span>

                <div
                    className='mt-3 py-7 px-4 md:px-10  '

                    style={{
                        background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",

                    }}
                >

                    <div className='flex justify-between items-center'>

                        <div>
                            City :
                            <span className='capitalize' >
                                {data.city}
                            </span>
                        </div>

                        <div className='text-lg'>
                            Country :
                            <span className='capitalize' >
                                {data.country}
                            </span>
                        </div>

                        <div className='capitalize text-center'>
                            Address :
                            <span className='uppercase'>
                                {data.address}
                            </span>
                            <br />
                            street.
                        </div>
                    </div>
                    <div className='flex justify-between items-center my-5'>
                        <div>
                            Opening hours : {data.time_open} - {data.time_close}
                            <div>
                                {`(${data.location})`}
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='my-5'>
                <div
                    style={{
                        background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                    }}
                >
                    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                        <div >
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
                        </div>
                        <div className='lg:col-span-2'>
                            <div className='w-full h-[350px] relative'>
                                <Image fill src={ContactImg} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
