import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import img1 from "../../../../../images/all img/Frame 146.png"
import img2 from "../../../../../images/all img/Frame 147.png"
import img3 from "../../../../../images/all img/Frame 148.png"
import img4 from "../../../../../images/all img/Frame 149.png"
import img5 from "../../../../../images/all img/Frame 150.png"
import img6 from "../../../../../images/all img/Frame 151.png"
import img7 from "../../../../../images/all img/Frame 152.png"
import img8 from "../../../../../images/all img/Frame 153.png"
import img9 from "../../../../../images/all img/Frame 154.png"
import img10 from "../../../../../images/all img/Frame 155.png"
import Image from 'next/image'

function Right() {

    const data = [
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
    ]


    return (
        <Grid item xs={12} md={8}>
            <Typography variant='div' component="div" className='p-4'>
                <Grid container>
                    {data.map((item) => (
                        <Grid key={item.id} className='d-flex  justify-content-center ' item xs={12} sm={6} md={6} lg={4}>
                            <Typography variant='div' component="div" key={item.id} className='font position-relative' sx={{
                                "&:hover": {
                                    transform: "scale(1.1)"
                                }
                                ,
                                marginTop: '30px',
                                transition: "200ms",
                                width: "230px"

                            }}>
                                <Link href={`/productdetails/${item.id}`} style={{ textDecoration: "none", color: "white", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{
                                        height: "300px",
                                        width: "100%",
                                        borderRadius: "131px",
                                        overflow: "hidden",
                                        border: "1px solid #D29F1B",
                                        marginBottom: "20px",
                                    }}>
                                        <Image style={{ objectFit: "cover" }} className='w-100 h-100' src={item.img} alt="img" />
                                    </div>

                                    <div className='text-center'>
                                        <p style={{ fontSize: "16px" }}>{item.title}</p>
                                        <p style={{ fontSize: "12px" }}>{item.name}</p>
                                        <p style={{ fontSize: "14px" }}>$ {item.price}</p>
                                    </div>

                                </Link>
                                {item.sold && (
                                    <div style={{
                                        position: "absolute",
                                        background: "#C92222",
                                        top: "40px",
                                        right: "3px",
                                        textTransform: "uppercase",
                                        color: "white",
                                        padding: "5px 10px",
                                        borderRadius: "15px"
                                    }}>
                                        sold out
                                    </div>
                                )}

                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Typography >
        </Grid >
    )
}

export default Right
