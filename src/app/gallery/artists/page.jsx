"use client"
import { Typography } from '@mui/material'
import React from 'react'

import img from "../../../images/all img/Frame 152.png"
import Link from 'next/link'
import Image from 'next/image'

function Artists() {

    const data = [
        {
            id: 1,
            img: img,
            name: "Juan Díaz",
            path: "1"
        },
        {
            id: 2,
            img: img,
            name: "Francisco Farreras",
            path: "2"
        },
        {
            id: 3,
            img: img,
            name: "Amadeo Gabino",
            path: ""
        },
        {
            id: 4,
            img: img,
            name: "Ronald Richards",
            path: ""
        },
        {
            id: 5,
            img: img,
            name: "Jenny Wilson",
            path: ""
        },
        {
            id: 6,
            img: img,
            name: "Kathryn Murphy",
            path: ""
        },
        {
            id: 7,
            img: img,
            name: "Cameron Williamson",
            path: ""
        },
        {
            id: 8,
            img: img,
            name: "Paula Anta",
            path: ""
        },
        {
            id: 9,
            img: img,
            name: "Marvin McKinney",
            path: ""
        },
        {
            id: 10,
            img: img,
            name: "Albert Flores",
            path: ""
        },
        {
            id: 11,
            img: img,
            name: "Theresa Webb",
            path: ""
        },
        {
            id: 12,
            img: img,
            name: "José Guerrero (b. 1914)",
            path: ""
        },
        {
            id: 13,
            img: img,
            name: "Ralph Edwards",
            path: ""
        },
        {
            id: 14,
            img: img,
            name: "Diego Moya",
            path: ""
        },


        {
            id: 15,
            img: img,
            name: "Juan Díaz",
            path: ""
        },
        {
            id: 16,
            img: img,
            name: "Francisco Farreras",
            path: ""
        },
        {
            id: 17,
            img: img,
            name: "Amadeo Gabino",
            path: ""
        },
        {
            id: 18,
            img: img,
            name: "Ronald Richards",
            path: ""
        },
        {
            id: 19,
            img: img,
            name: "Jenny Wilson",
            path: ""
        },
        {
            id: 20,
            img: img,
            name: "Kathryn Murphy",
            path: ""
        },
        {
            id: 21,
            img: img,
            name: "Cameron Williamson",
            path: ""
        },
        {
            id: 22,
            img: img,
            name: "Paula Anta",
            path: ""
        },
        {
            id: 23,
            img: img,
            name: "Marvin McKinney",
            path: ""
        },
        {
            id: 24,
            img: img,
            name: "Albert Flores",
            path: ""
        },
        {
            id: 25,
            img: img,
            name: "Theresa Webb",
            path: ""
        },
        {
            id: 26,
            img: img,
            name: "José Guerrero (b. 1914)",
            path: ""
        },
        {
            id: 27,
            img: img,
            name: "Ralph Edwards",
            path: ""
        },
        {
            id: 28,
            img: img,
            name: "Diego Moya",
            path: ""
        },


        {
            id: 29,
            img: img,
            name: "Juan Díaz",
            path: ""
        },
        {
            id: 30,
            img: img,
            name: "Francisco Farreras",
            path: ""
        },
        {
            id: 31,
            img: img,
            name: "Amadeo Gabino",
            path: ""
        },
        {
            id: 32,
            img: img,
            name: "Ronald Richards",
            path: ""
        },
        {
            id: 33,
            img: img,
            name: "Jenny Wilson",
            path: ""
        },
        {
            id: 34,
            img: img,
            name: "Kathryn Murphy",
            path: ""
        },
        {
            id: 35,
            img: img,
            name: "Cameron Williamson",
            path: ""
        },
        {
            id: 36,
            img: img,
            name: "Paula Anta",
            path: ""
        },
        {
            id: 37,
            img: img,
            name: "Marvin McKinney",
            path: ""
        },
        {
            id: 38,
            img: img,
            name: "Albert Flores",
            path: ""
        },
        {
            id: 39,
            img: img,
            name: "Theresa Webb",
            path: ""
        },
        {
            id: 40,
            img: img,
            name: "José Guerrero (b. 1914)",
            path: ""
        },
        {
            id: 41,
            img: img,
            name: "Ralph Edwards",
            path: ""
        },
        {
            id: 42,
            img: img,
            name: "Diego Moya",
            path: ""
        },


        {
            id: 43,
            img: img,
            name: "Juan Díaz",
            path: ""
        },
        {
            id: 44,
            img: img,
            name: "Francisco Farreras",
            path: ""
        },
        {
            id: 45,
            img: img,
            name: "Amadeo Gabino",
            path: ""
        },
        {
            id: 46,
            img: img,
            name: "Ronald Richards",
            path: ""
        },
        {
            id: 47,
            img: img,
            name: "Jenny Wilson",
            path: ""
        },
        {
            id: 48,
            img: img,
            name: "Kathryn Murphy",
            path: ""
        },
        {
            id: 49,
            img: img,
            name: "Cameron Williamson",
            path: ""
        },
        {
            id: 50,
            img: img,
            name: "Paula Anta",
            path: ""
        },
        {
            id: 51,
            img: img,
            name: "Marvin McKinney",
            path: ""
        },
        {
            id: 52,
            img: img,
            name: "Albert Flores",
            path: ""
        },
        {
            id: 53,
            img: img,
            name: "Theresa Webb",
            path: ""
        },
        {
            id: 54,
            img: img,
            name: "José Guerrero (b. 1914)",
            path: ""
        },
        {
            id: 55,
            img: img,
            name: "Ralph Edwards",
            path: ""
        },
        {
            id: 56,
            img: img,
            name: "Diego Moya",
            path: ""
        },


    ]


    return (
        <div className='container font text-white mt-5'>

            <span
                className='ms-md-5'
                style={{
                    fontSize: "26px",
                }}
            >
                Artists
            </span>

            <Typography variant='div' component="div"
                sx={{
                    background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                    padding: "35px 20px",
                    margin: "25px 0"
                }}
            >
                <div className='d-flex justify-content-between align-items-start flex-column flex-sm-row flex-wrap'>

                    <Typography variant='div' component="div">
                        {data.slice(0, 14).map((item) => (
                            <Typography key={item.id} variant='div' component="div"
                                sx={{
                                    "&:hover": {
                                        scale: "1.08",
                                        transition: "300ms"
                                    }
                                }}
                            >
                                <Link
                                    href={`/artist/${item.id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: "white"
                                    }}
                                >
                                    <div className='d-flex align-items-center my-3'>

                                        <Typography variant='div' component="div"
                                            sx={{
                                                width: "25.391px",
                                                height: "25.291px",
                                                borderRadius: "131px",
                                                border: "1px solid #D29F1B",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <Image className='w-100 h-100 object-fit-cover' src={item.img} alt="" />
                                        </Typography>

                                        <Typography className='ms-2' variant='div' component="div"

                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: "400",
                                                lineHeight: "26px"
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                    </div>
                                </Link>
                            </Typography>
                        ))}
                    </Typography>

                    <Typography variant='div' component="div">
                        {data.slice(14, 28).map((item) => (
                            <Typography key={item.id} variant='div' component="div"

                                sx={{
                                    "&:hover": {
                                        scale: "1.08",
                                        transition: "300ms"
                                    }
                                }}
                            >
                                <Link
                                    href={`/artist/${item.id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: "white"
                                    }}
                                >
                                    <div className='d-flex align-items-center my-3'>

                                        <Typography variant='div' component="div"
                                            sx={{
                                                width: "25.391px",
                                                height: "25.291px",
                                                borderRadius: "131px",
                                                border: "1px solid #D29F1B",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <Image className='w-100 h-100 object-fit-cover' src={item.img} alt="" />
                                        </Typography>

                                        <Typography className='ms-2' variant='div' component="div"

                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: "400",
                                                lineHeight: "26px"
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                    </div>
                                </Link>
                            </Typography>
                        ))}
                    </Typography>

                    <Typography variant='div' component="div">
                        {data.slice(28, 42).map((item) => (
                            <Typography key={item.id} variant='div' component="div"
                                sx={{
                                    "&:hover": {
                                        scale: "1.08",
                                        transition: "300ms"
                                    }
                                }}
                            >
                                <Link
                                    href={`/artist/${item.id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: "white"
                                    }}
                                >
                                    <div className='d-flex align-items-center my-3'>

                                        <Typography variant='div' component="div"
                                            sx={{
                                                width: "25.391px",
                                                height: "25.291px",
                                                borderRadius: "131px",
                                                border: "1px solid #D29F1B",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <Image className='w-100 h-100 object-fit-cover' src={item.img} alt="" />
                                        </Typography>

                                        <Typography className='ms-2' variant='div' component="div"

                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: "400",
                                                lineHeight: "26px"
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                    </div>
                                </Link>
                            </Typography>
                        ))}
                    </Typography>

                    <Typography variant='div' component="div">
                        {data.slice(42, 56).map((item) => (
                            <Typography key={item.id} variant='div' component="div"
                                sx={{
                                    "&:hover": {
                                        scale: "1.08",
                                        transition: "300ms"
                                    }
                                }}
                            >
                                <Link
                                    href={`/artist/${item.id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: "white"
                                    }}
                                >
                                    <div className='d-flex align-items-center my-3'>

                                        <Typography variant='div' component="div"
                                            sx={{
                                                width: "25.391px",
                                                height: "25.291px",
                                                borderRadius: "131px",
                                                border: "1px solid #D29F1B",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <Image className='w-100 h-100 object-fit-cover' src={item.img} alt="" />
                                        </Typography>

                                        <Typography className='ms-2' variant='div' component="div"

                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: "400",
                                                lineHeight: "26px"
                                            }}
                                        >
                                            {item.name}
                                        </Typography>

                                    </div>
                                </Link>
                            </Typography>
                        ))}
                    </Typography>

                </div>


            </Typography>

        </div>
    )
}

export default Artists
