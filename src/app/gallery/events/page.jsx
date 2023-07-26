
import { Button, Grid, Typography } from '@mui/material'

import img1 from "../../../images//all img/Frame 152.png"
import img2 from "../../../images//all img/Frame 151.png"

import style from "./Events.module.css"
import PastExhibition from './PastExhibition'
import Image from 'next/image'

function Events() {

    const data = [
        {
            id: 1,
            title: "Current Exhibition",
            titleCard: "Laguna Niguel - June 8th Art After Hours",
            date: "June 8 – 30, 2023",
            country: "Laguna Niguel",
            discreption: 'Join us at our monthly "2nd Thursday - Art After Hours" in our gallery at the Laguna Design Center on June 8th from 5:00pm–7:00pm! This month we will feature artworks by French artist duo Leo & Steph and American painter Tom Lieber.',
            img: img1
        },
        {
            id: 2,
            title: "Upcoming Exhibition",
            titleCard: "Laguna Niguel - June 8th Art After Hours",
            date: "June 8 – 30, 2023",
            country: "Laguna Niguel",
            discreption: 'Join us at our monthly "2nd Thursday - Art After Hours" in our gallery at the Laguna Design Center on June 8th from 5:00pm–7:00pm! This month we will feature artworks by French artist duo Leo & Steph and American painter Tom Lieber.',
            img: img2
        },
    ]


    return (
        <div className='container font text-white mt-5'>

            {data.map((item) => (
                <Typography key={item.id} variant='div' component="div" sx={{
                    margin: "50px 0"
                }}>

                    <h3
                        className='ps-md-4 ms-md-4'
                        style={{
                            fontSize: "26px",
                            letterSpacing: "0.26px",
                            fontWeight: "400",

                        }}

                    >{item.title}
                    </h3>

                    <div
                        className='p-4 px-md-5 py-md-5'
                        style={{
                            background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                            margin: "25px 0",
                        }}
                    >

                        <Grid container spacing={{ xs: 2, lg: 10 }}>

                            <Grid item xs={12} md={6} lg={8}>

                                <Typography variant='div' component="div" className='pe-md-5 my-3 my-md-0'>
                                    <h5 className={style.text}>
                                        {item.titleCard}
                                    </h5>

                                    <Typography variant='div' component="div" className='mt-5 mb-3'>
                                        <div
                                            className={style.text}
                                            style={{

                                                marginTop: "70px"
                                            }}>{item.date}
                                        </div>
                                        <div
                                            className={style.text}
                                            style={{
                                                marginTop: "5px"
                                            }}
                                        >{item.country}
                                        </div>

                                    </Typography>

                                    <div
                                        className={style.text}
                                        style={{
                                            margin: "30px 0"
                                        }}>
                                        {item.discreption}
                                    </div>


                                    <div className='mt-5'>
                                        <Button
                                            sx={{
                                                border: '1px solid var(--solid-gold, #D69D66)',
                                                padding: "8px",
                                                fontSize: "14px",
                                                color: "white"
                                            }}

                                        >View More ...
                                        </Button>
                                    </div>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Typography variant='div' component="div" className='d-flex justify-content-lg-end justify-content-center'>
                                    <div
                                        style={{
                                            borderRadius: "131px",
                                            overflow: "hidden",
                                            height: "398.571px",
                                            width: "298.678px",
                                            border: "2px solid var(--solid-gold, #D69D66)"
                                        }}
                                    >
                                        <Image className='w-100 h-100' src={item.img} alt="" />
                                    </div>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </Typography>
            ))}

            <PastExhibition/>

        </div>
    )
}

export default Events
