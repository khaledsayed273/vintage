"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img from "../../../images/all img/GalleryImg.png"

// import required modules
import { Pagination, Navigation, Grid } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';

export default function SwiperGalleries() {

    const data = [
        {
            id: 1,
            image: img,
            title: "Dark Game"
        },
        {
            id: 2,
            image: img,
            title: "Dark fdsg"
        },
        {
            id: 3,
            image: img,
            title: "Dark 45fghd"
        },
        {
            id: 4,
            image: img,
            title: "hddfh Gafjfjme"
        },
        {
            id: 5,
            image: img,
            title: "dfsgdh';dfsd"
        },
        {
            id: 6,
            image: img,
            title: "dfafpovv efsf"
        },
        {
            id: 7,
            image: img,
            title: "sdgvdf rwefsf"
        },
        {
            id: 8,
            image: img,
            title: "asfd dsfas"
        },
        {
            id: 9,
            image: img,
            title: "dfgssd gfsdfasdf"
        },
        {
            id: 10,
            image: img,
            title: "fdsgs dfg "
        },
        {
            id: 11,
            image: img,
            title: "gdsfcrf sdfs "
        },
        {
            id: 12,
            image: img,
            title: "fdsafs fwefwef"
        },
        {
            id: 13,
            image: img,
            title: "sadf fwerwerwerwe"
        },
        {
            id: 13,
            image: img,
            title: "dsfsdaf fsrferwf"
        },
        {
            id: 14,
            image: img,
            title: "fdg fdgergferw "
        },
        {
            id: 15,
            image: img,
            title: "gdfg dfgege "
        },
        {
            id: 16,
            image: img,
            title: "Dark"
        },
        {
            id: 17,
            image: img,
            title: "Game"
        },
        
    ]


    return (
        <div className='container my-5'>
            <Swiper
                grid={{
                    rows: 4,
                    fill: "row",
                }}
                pagination={{
                    clickable: true,
                    type: 'progressbar',

                }}
                navigation={true}
                modules={[Pagination, Navigation, Grid]}
                className="mySwiper2 px-md-5"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    580: {
                        slidesPerView: 2,
                        spaceBetween: 45,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                    },
                }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="mt-5  px-2 px-lg-3 px-xl-4" style={{ display: "flex", justifyContent: "center", height: "290px", width: "320px", userSelect: "none" }}>
                        <Typography variant='div' component="div" className='font position-relative' sx={{
                            marginTop: '30px',
                            transition: "200ms"
                        }}>
                            <div style={{ textDecoration: "none", color: "white", height: "100%" }}>

                                <div style={{
                                    height: "200px",
                                    width: "100%",
                                    borderRadius: "131px",
                                    overflow: "hidden",
                                    marginBottom: "20px"
                                }}>
                                    <Image style={{ objectFit: "cover" }} width={230} height={300} className='w-100 h-100' src={item.image} alt="img" />
                                </div>

                                <div className='text-center d-flex justify-content-between align-items-center'>
                                    <p className="ms-3" style={{ fontSize: "16px" }}>{item.title}</p>
                                    <Link href={`productdetails/1`}>
                                        <Button className='px-4' sx={{
                                            background: "white",
                                            color: "black",
                                            border: "1px solid white",
                                            borderRadius: "15px",
                                            textTransform: "capitalize",
                                            ":hover": {
                                                color: "white"
                                            }
                                        }}>Follow</Button>
                                    </Link>

                                </div>


                            </div>
                        </Typography>

                    </SwiperSlide>
                )
                )}


            </Swiper>
        </div>
    );
}
