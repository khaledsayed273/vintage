import { Typography } from '@mui/material'
import React from 'react'

import img1 from "../../../../images/all img/Frame 153.png"
import img2 from "../../../../images/all img/Frame 152.png"
import img3 from "../../../../images/all img/Frame 151.png"
import Image from 'next/image'


function Suggest() {


    const data = [
        {
            id: 0,
            img: img1,
            title: "Queen. In the south",
            name: "Almat Adams",
            price: "$ 1000",
        },
        {
            id: 1,
            img: img2,
            title: "Self portrait",
            name: "Peter Gemy",
            price: "500",
        },
        {
            id: 2,
            img: img3,
            title: "Queen. of dakness",
            name: "MIna Fady",
            price: "1000",
        },

    ]

    return (
        <Typography variant='div' component="div"
            className='justify-content-center justify-content-lg-start'
            sx={{
                display: "flex",
                alignItems: 'center',
                margin: "40px 0",
                flexWrap: "wrap"
            }}
        >
            {data.map((item) => (
                <div key={item.id} className='font position-relative'
                    style={{
                        margin: "0 40px 20px 0"
                    }}
                >
                    <div style={{
                        height: "298px",
                        width: "228px",
                        borderRadius: "131px",
                        overflow: "hidden",
                        border: "1px solid #D29F1B",
                        marginBottom: "20px",

                    }}>
                        <Image style={{ objectFit: "cover" }} className='w-100 h-100' src={item.img} alt="img" />
                    </div>

                    <div className='text-center'>
                        <p style={{ fontSize: "16px" }}>{item.title}</p>
                        {/* <p style={{ fontSize: "12px" }}>{item.name}</p> */}
                        <p style={{ fontSize: "14px" }}>$ {item.price}</p>
                    </div>
                    
                </div>
            ))}
        </Typography>
    )
}

export default Suggest
