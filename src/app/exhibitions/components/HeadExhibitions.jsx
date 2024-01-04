"use client"
import { Button, Typography } from '@mui/material'
import img from "../../../images/all img/GalleryImg.png"
import img2 from "../../../images/all img/Frame 148.png"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const HeadExhibitions = () => {
    return (
        <div className='container font mb-5'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    type: "progressbar"
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper3"
            >
                <SwiperSlide>
                    <Typography variant='div' component="div"
                        sx={{
                            borderRadius: "250px",
                            border: "1px solid var(--solid-gold, #D69D66)",
                            overflow: "hidden",
                            maxHeight: '389px',
                            position: "relative",
                            height: { xs: "250px", sm: "240px", md: "320px", lg: "400px" }

                        }}
                    >
                        <Image
                            priority
                            className='w-100 h-100'
                            src={img} alt="img_gallery"
                            style={{ transform: "scale(1.01)" }}
                        />

                    </Typography>

                    <Typography variant='div' component="div" className='d-flex justify-content-between my-4 flex-wrap px-lg-5'>
                        <div className='d-flex align-items-center'>
                            <Typography variant='div' component="div" sx={{
                                border: "1px solid #D29F1B",
                                borderRadius: "131px",
                                height: "70px",
                                width: '60px',
                                overflow: "hidden",
                                position: "relative"
                            }}>
                                <Image style={{ objectFit: "cover" }} className='w-100 h-100' src={img} alt="logo" />

                            </Typography>

                            <Typography variant='div' component="div" className='d-flex flex-column ms-3'>
                                <Typography variant='div' component="div"
                                    sx={{
                                        fontSize: { xs: "20px", sm: "25px", md: "38px" },
                                        letterSpacing: "0.4px",
                                        color: "white"
                                    }}>
                                    Arte Contemporary
                                </Typography>
                                <p className='text-white'>
                                    cairo
                                </p>

                            </Typography>
                        </div>

                        <div>
                            <Button
                                sx={{
                                    background: "white",
                                    color: "black",
                                    border: "1px solid white",
                                    padding: { xs: "4px 30px", md: "8px 50px" },
                                    borderRadius: "50px",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                    marginTop: "12px",
                                    "&:hover": {
                                        color: "white"
                                    }
                                }}
                            >
                                Follow
                            </Button>
                        </div>

                    </Typography>
                </SwiperSlide>

                <SwiperSlide>
                    <Typography variant='div' component="div"

                        sx={{
                            borderRadius: "250px",
                            border: "1px solid var(--solid-gold, #D69D66)",
                            overflow: "hidden",
                            maxHeight: '389px',
                            position: "relative",
                            height: { xs: "250px", sm: "240px", md: "320px", lg: "400px" }


                        }}
                    >
                        <Image
                            priority
                            className='w-100 h-100'
                            src={img2} alt="img_gallery"
                            style={{ transform: "scale(1.01)" }}
                        />

                    </Typography>


                    <Typography variant='div' component="div" className='d-flex justify-content-between my-4 flex-wrap px-lg-5'>
                        <div className='d-flex align-items-center'>
                            <Typography variant='div' component="div" sx={{
                                border: "1px solid #D29F1B",
                                borderRadius: "131px",
                                height: "70px",
                                width: '60px',
                                overflow: "hidden",
                                position: "relative"
                            }}>
                                <Image style={{ objectFit: "cover" }} className='w-100 h-100' src={img2} alt="logo" />

                            </Typography>

                            <Typography variant='div' component="div" className='d-flex flex-column ms-3'>
                                <Typography variant='div' component="div"
                                    sx={{
                                        fontSize: { xs: "20px", sm: "25px", md: "38px" },
                                        letterSpacing: "0.4px",
                                        color: "white"
                                    }}>
                                    Arte Contemporary 2
                                </Typography>
                                <p className='text-white'>
                                    cairo
                                </p>

                            </Typography>
                        </div>

                        <div>
                            <Button
                                sx={{
                                    background: "white",
                                    color: "black",
                                    border: "1px solid white",
                                    padding: { xs: "4px 30px", md: "8px 50px" },
                                    borderRadius: "50px",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                    marginTop: "12px",
                                    "&:hover": {
                                        color: "white"
                                    }
                                }}
                            >
                                Follow
                            </Button>
                        </div>

                    </Typography>
                </SwiperSlide>

                <SwiperSlide>
                    <Typography variant='div' component="div"

                        sx={{
                            borderRadius: "250px",
                            border: "1px solid var(--solid-gold, #D69D66)",
                            overflow: "hidden",
                            maxHeight: '389px',
                            position: "relative",
                            height: { xs: "250px", sm: "240px", md: "320px", lg: "400px" }


                        }}
                    >
                        <Image
                            priority
                            className='w-100 h-100'
                            src={img} alt="img_gallery"
                            style={{ transform: "scale(1.01)" }}
                        />

                    </Typography>

                    <Typography variant='div' component="div" className='d-flex justify-content-between my-4 flex-wrap px-lg-5'>
                        <div className='d-flex align-items-center'>
                            <Typography variant='div' component="div" sx={{
                                border: "1px solid #D29F1B",
                                borderRadius: "131px",
                                height: "70px",
                                width: '60px',
                                overflow: "hidden",
                                position: "relative"
                            }}>
                                <Image style={{ objectFit: "cover" }} className='w-100 h-100' src={img} alt="logo" />

                            </Typography>

                            <Typography variant='div' component="div" className='d-flex flex-column ms-3'>
                                <Typography variant='div' component="div"
                                    sx={{
                                        fontSize: { xs: "20px", sm: "25px", md: "38px" },
                                        letterSpacing: "0.4px",
                                        color: "white"
                                    }}>
                                    Arte Contemporary 3
                                </Typography>
                                <p className='text-white'>
                                    cairo
                                </p>

                            </Typography>
                        </div>

                        <div>
                            <Button
                                sx={{
                                    background: "white",
                                    color: "black",
                                    border: "1px solid white",
                                    padding: { xs: "4px 30px", md: "8px 50px" },
                                    borderRadius: "50px",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    textTransform: "capitalize",
                                    marginTop: "12px",
                                    "&:hover": {
                                        color: "white"
                                    }
                                }}
                            >
                                Follow
                            </Button>
                        </div>

                    </Typography>
                </SwiperSlide>


            </Swiper>



        </div>
    )
}


export default HeadExhibitions