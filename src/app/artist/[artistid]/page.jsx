import React from 'react'
import img1 from "../../../images/all img/Frame 146.png"
import img2 from "../../../images/all img/Frame 147.png"
import img3 from "../../../images/all img/Frame 148.png"
import img4 from "../../../images/all img/Frame 149.png"
import img5 from "../../../images/all img/Frame 150.png"
import img6 from "../../../images/all img/Frame 151.png"
import img7 from "../../../images/all img/Frame 152.png"
import img8 from "../../../images/all img/Frame 153.png"
import img9 from "../../../images/all img/Frame 154.png"
import img10 from "../../../images/all img/Frame 155.png"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import ArtWorksComp from '../../gallery/artworks/components/ArtWorksComp'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link'

function page({ params }) {

    const data = {
        artist: {
            name: "aya alaa",
            img: img3,
            country: "egypt",
            about: 'After opening a rare contemporary gallery in Singapore in 1987, the owner, Akio Tamura, moved to Tokyo in 1991 and started an art gallery. He has two galleries in Japan and has also proposed exhibitions to external galleries. The main concept of his activities is to propose "Art works that make you want to look at them with empathy again and again in your daily life". With empathy as a keyword, we will continue our activities to find artists who are worth introducing to the world today from the perspective of Kyoto.After opening a rare contemporary gallery in Singapore in 1987, the owner, Akio Tamura, moved to Tokyo in 1991 and started an art gallery. He has two galleries in Japan and has also ',
            webSite: "https://arte-gallery.com/",
            socialMedia: {
                instagram: "https://arte-gallery.com/",
                facebook: "https://arte-gallery.com/",
                twitter: "https://arte-gallery.com/",
            },
            artworks: [
                {
                    id: 0,
                    img: img1,
                    title: "Queen. In the south",
                    name: "Almat Adams",
                    price: "$ 1000",
                    sold: false
                },
                {
                    id: 1,
                    img: img5,
                    title: "Self portrait",
                    name: "Peter Gemy",
                    price: "500",
                    sold: false
                },
                {
                    id: 2,
                    img: img2,
                    title: "Queen. of dakness",
                    name: "MIna Fady",
                    price: "1000",
                    sold: false
                },
                {
                    id: 3,
                    img: img3,
                    title: "Black party",
                    name: "Almat Adams",
                    price: "400",
                    sold: true
                },
                {
                    id: 4,
                    img: img4,
                    title: "Queen. In the south",
                    name: "Emy Adams",
                    price: "2000",
                    sold: false
                },
                {
                    id: 5,
                    img: img6,
                    title: "Queen. In the south",
                    name: "Almat Adams",
                    price: "$ 1000",
                    sold: false
                },
                {
                    id: 6,
                    img: img7,
                    title: "Self portrait",
                    name: "Peter Gemy",
                    price: "500",
                    sold: false
                },
                {
                    id: 7,
                    img: img8,
                    title: "Queen. of dakness",
                    name: "MIna Fady",
                    price: "1000",
                    sold: false
                },
                {
                    id: 8,
                    img: img9,
                    title: "Black party",
                    name: "Almat Adams",
                    price: "400",
                    sold: false
                },
                {
                    id: 9,
                    img: img10,
                    title: "Queen. In the south",
                    name: "Emy Adams",
                    price: "2000",
                    sold: false
                },
                {
                    id: 10,
                    img: img1,
                    title: "Queen. In the south",
                    name: "Almat Adams",
                    price: "$ 1000",
                    sold: false
                },
            ]
        }
    }

    const dataGalary = data?.artist.artworks

    return (
        <>
            <div className='container font text-white'>
                <div
                    className='d-flex justify-content-between align-items-center flex-md-row flex-column pb-4' style={{ borderBottom: '1px solid #d3d3d34d' }}>
                    <div className='d-flex'>
                        <div
                            style={{
                                borderRadius: "131px",
                                width: "59px",
                                height: "69px",
                                overflow: "hidden",
                                border: "1px solid #D29F1B"

                            }}>
                            <Image alt="img" width={59} height={69} src={data.artist.img} />
                        </div>
                        <div style={{ textTransform: "capitalize", fontWeight: "400" }} className='ms-3 text-white'>
                            <h1 style={
                                {
                                    fontSize: "38px",
                                    letterSpacing: "0.4px",
                                }
                            }>
                                {data.artist.name}
                            </h1>
                            <h3 style={{ fontSize: "18px" }}>{data.artist.country}</h3>
                        </div>
                    </div>

                    <Button className='mt-5 mt-md-0' sx={{
                        background: 'white', color: "black", fontSize: "16px", fontWeight: "500",
                        textTransform: "capitalize",
                        padding: "5px 50px",
                        borderRadius: "15px",
                        border: "1px solid white",
                        "&:hover": {
                            color: "white"
                        }
                    }}>Follow</Button>

                </div>

                <div>
                    <h3 className='px-lg-5' style={{
                        padding: "30px 0px 20px",
                        fontSize: "26px",
                        letterSpacing: "0.26px",
                        textTransform: "uppercase"

                    }}>
                        About
                    </h3>

                    <div
                        style={{
                            background: "linear-gradient(0deg, rgba(58, 53, 0, 0.2), rgba(58, 53, 0, 0.2)),linear-gradient(180deg, #242319 0%, #404040 100%)",
                            padding: "40px 45px"
                        }}
                    >
                        <p style={{ fontSize: "16px", lineHeight: "26px" }}>
                            {data.artist.about}
                        </p>


                        <div className='d-flex justify-content-end'>
                            <Link className='text-white' href="/">Show more</Link>
                        </div>
                    </div>

                </div>

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
                        className='mt-3 py-5 px-md-5 px-4 '

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

                            }} rel="noreferrer" target='_blank' href={data.artist.webSite}> {data.artist.webSite}
                            </Link>
                        </div>

                        <div style={{
                            fontSize: "18px",
                            margin: "40px 0"
                        }}>
                            Social Media :
                        </div>

                        <div className='d-flex justify-content-start align-items-center flex-column flex-md-row'>
                            <Typography variant='div' component="div" sx={{
                                "&:hover": {
                                    transform: "scale(1.07)",
                                    transition: "400ms all"
                                }
                            }}>
                                <Link className='text-white text-decoration-none' href={data.artist.socialMedia.instagram}>
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
                                </Link>
                            </Typography>
                            <Typography variant='div' component="div" sx={{
                                "&:hover": {
                                    transform: "scale(1.07)",
                                    transition: "400ms all"
                                }
                            }}>
                                <Link className='text-white text-decoration-none' href={data.artist.socialMedia.facebook}>
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
                                </Link>
                            </Typography>
                            <Typography variant='div' component="div" sx={{
                                "&:hover": {
                                    transform: "scale(1.07)",
                                    transition: "400ms all"
                                }
                            }}>
                                <Link className='text-white text-decoration-none' href={data.artist.socialMedia.twitter}>
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
                                </Link>
                            </Typography>
                        </div>
                    </div>
                </div>


            </div>

            <ArtWorksComp data={dataGalary} />

        </>
    )
}

export default page
