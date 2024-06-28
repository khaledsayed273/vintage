"use client"
import Button from '@mui/material/Button'
import  Typography  from '@mui/material/Typography'
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
        <div className=' font mb-5'>
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
                        sizes='(max-width:992px) 100vw '
                            priority
                            fill
                            src={img} alt="img_gallery"
                            style={{ transform: "scale(1.01)" }}
                        />
                    </Typography>
                    <div className='flex justify-between my-6 flex-wrap lg:px-20 '>
                        <div className='flex items-center'>
                            <div className='relative overflow-hidden' style={{
                                border: "1px solid #D29F1B",
                                borderRadius: "131px",
                                height: "70px",
                                width: '60px',
                                
                            }}>
                                <Image priority sizes='(max-width:992px) 100vw ' fill src={img} alt="logo" />
                            </div>
                            <div className='flex flex-col ms-3'>
                                <h3 className='my-2 text-white text-xl sm:text-2xl md:text-4xl'>
                                    Arte Contemporary
                                </h3>
                                <span className='text-white'>
                                    cairo
                                </span>
                            </div>
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
                    </div>
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
                        sizes='(max-width:992px) 100vw '
                            priority
                            fill
                            src={img2} alt="img_gallery"
                            style={{ transform: "scale(1.01)" }}
                        />
                    </Typography>
                    <div className='flex justify-between my-6 flex-wrap lg:px-20 '>
                        <div className='flex items-center'>
                            <div className='relative overflow-hidden' style={{
                                border: "1px solid #D29F1B",
                                borderRadius: "131px",
                                height: "70px",
                                width: '60px',
                                
                            }}>
                                <Image priority sizes='(max-width:992px) 100vw ' fill src={img2} alt="logo" />
                            </div>
                            <div className='flex flex-col ms-3'>
                                <h3 className='my-2 text-white text-xl sm:text-2xl md:text-4xl'>
                                    Arte Contemporary
                                </h3>
                                <span className='text-white'>
                                    cairo
                                </span>
                            </div>
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
                    </div>
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
                        sizes='(max-width:992px) 100vw '
                            priority
                            fill
                            src={img} alt="img_gallery"
                            style={{ transform: "scale(1.01)" }}
                        />
                    </Typography>
                    <div className='flex justify-between my-6 flex-wrap lg:px-20 '>
                        <div className='flex items-center'>
                            <div className='relative overflow-hidden' style={{
                                border: "1px solid #D29F1B",
                                borderRadius: "131px",
                                height: "70px",
                                width: '60px',
                                
                            }}>
                                <Image priority sizes='(max-width:992px) 100vw ' fill src={img} alt="logo" />
                            </div>
                            <div className='flex flex-col ms-3'>
                                <h3 className='my-2 text-white text-xl sm:text-2xl md:text-4xl'>
                                    Arte Contemporary
                                </h3>
                                <span className='text-white'>
                                    cairo
                                </span>
                            </div>
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
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}


export default HeadExhibitions