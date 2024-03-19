"use client"
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import img from "../../../images/all img/Frame 153.png"
import img2 from "../../../images/all img/Frame 152.png"
import img3 from "../../../images/all img/Frame 151.png"
import Image from 'next/image'

function PastExhibition() {


    const [view, setView] = useState(false)


    const data = [
        {
            id: 1,
            img: img,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 2,
            img: img2,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 3,
            img: img3,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 4,
            img: img3,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 5,
            img: img,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 6,
            img: img2,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
    ]


    const handleViewMore = () => {
        setView(true)
    }


    return (
        <div>
            <h3
                className='ps-md-4 ms-md-4'
                style={{
                    fontSize: "26px",
                    letterSpacing: "0.26px",
                    fontWeight: "400",
                    margin: "20px 0"
                }}
            >
                Past Exhibition
            </h3>

            <Typography variant='div' component="div"
                sx={{
                    background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                    padding: "35px 30px"
                }}
            >

                <Grid container spacing={5}>

                    {data.slice(0, view === false ? 6 : data.length).map((item) => (
                        <Grid key={item.id} item xs={12} md={6} lg={4} >
                            <Typography variant='div' component="div" className='d-flex flex-column justify-content-center align-items-center'>
                                <Typography variant='div' component="div"
                                    sx={{
                                        overflow: "hidden",
                                        width: "298.678px",
                                        height: "398.571px",
                                        borderRadius: "131px",
                                        border: "2px solid var(--solid-gold, #D69D66)",
                                        position: "relative"
                                    }}
                                >
                                    <Image sizes='(max-width:992px), 100vw' fill src={item.img} alt="" />
                                </Typography>

                                <div className='mt-3'
                                    style={{
                                        fontSize: "18px",
                                        textTransform: "uppercase",
                                        fontWeight: "400"
                                    }}
                                >
                                    {item.title}

                                </div>
                                <div
                                    style={{
                                        fontSize: "18px",
                                        textTransform: "uppercase",
                                        fontWeight: "400"
                                    }}
                                >
                                    {item.date}

                                </div>

                            </Typography>

                        </Grid>
                    ))}

                    <div className='d-flex justify-content-center w-100 mt-5'>
                        <Button
                            onClick={handleViewMore}
                            sx={{
                                color: "white",
                                border: "1px solid var(--solid-gold, #D69D66)"
                            }}
                        >View More ...
                        </Button>
                    </div>
                </Grid>

            </Typography>

        </div>
    )
}

export default PastExhibition
