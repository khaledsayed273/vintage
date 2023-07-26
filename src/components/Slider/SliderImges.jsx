"use client"

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';


import img1 from "../../images/all img/Frame 146.png"
import img2 from "../../images/all img/Frame 147.png"
import img3 from "../../images/all img/Frame 148.png"
import img4 from "../../images/all img/Frame 149.png"
import img5 from "../../images/all img/Frame 150.png"
import img6 from "../../images/all img/Frame 151.png"
import img7 from "../../images/all img/Frame 152.png"
import img8 from "../../images/all img/Frame 153.png"
import img9 from "../../images/all img/Frame 154.png"
import img10 from "../../images/all img/Frame 155.png"
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AsyncSlider } from '@/store/slices/SliderSlice';

function SliderImges() {

   const data = useSelector(store => store.SliderSlice.data)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(AsyncSlider())

   }, [])


   // const data = [
   //    {
   //       id: 0,
   //       img: img1,
   //       title: "Queen. In the south",
   //       name: "Almat Adams",
   //       price: "$ 1000",
   //       sold: false
   //    },
   //    {
   //       id: 1,
   //       img: img5,
   //       title: "Self portrait",
   //       name: "Peter Gemy",
   //       price: "500",
   //       sold: false
   //    },
   //    {
   //       id: 2,
   //       img: img2,
   //       title: "Queen. of dakness",
   //       name: "MIna Fady",
   //       price: "1000",
   //       sold: false
   //    },
   //    {
   //       id: 3,
   //       img: img3,
   //       title: "Black party",
   //       name: "Almat Adams",
   //       price: "400",
   //       sold: true
   //    },
   //    {
   //       id: 4,
   //       img: img4,
   //       title: "Queen. In the south",
   //       name: "Emy Adams",
   //       price: "2000",
   //       sold: false
   //    },
   //    {
   //       id: 5,
   //       img: img6,
   //       title: "Queen. In the south",
   //       name: "Almat Adams",
   //       price: "$ 1000",
   //       sold: false
   //    },
   //    {
   //       id: 6,
   //       img: img7,
   //       title: "Self portrait",
   //       name: "Peter Gemy",
   //       price: "500",
   //       sold: false
   //    },
   //    {
   //       id: 7,
   //       img: img8,
   //       title: "Queen. of dakness",
   //       name: "MIna Fady",
   //       price: "1000",
   //       sold: false
   //    },
   //    {
   //       id: 8,
   //       img: img9,
   //       title: "Black party",
   //       name: "Almat Adams",
   //       price: "400",
   //       sold: false
   //    },
   //    {
   //       id: 9,
   //       img: img10,
   //       title: "Queen. In the south",
   //       name: "Emy Adams",
   //       price: "2000",
   //       sold: false
   //    },
   // ]


   return (
      <aside className='my-5'>
         <div className='d-flex flex-column align-items-center font text-white'>
            <h4>BUY AND SELL ART COMMISSION-FREE</h4>
            <p className='my-2' style={{
               textTransform: "uppercase",
               fontSize: "18px",
               fontWeight: "400"
            }}>All types of art</p>
         </div>


         <div style={{
            margin: "50px 0"
         }}>
            <Swiper
               slidesPerView={5}
               spaceBetween={50}
               scrollbar={{
                  hide: false,
               }}
               modules={[Pagination, Navigation, Scrollbar]}
               navigation={true}
               className="mySwiper"
               style={{ height: "600px" }}
               breakpoints={
                  {
                     0: {
                        slidesPerView: 1,
                        spaceBetween: 5
                     },
                     580: {
                        slidesPerView: 2,
                        spaceBetween: 15
                     },
                     900: {
                        slidesPerView: 3,
                        spaceBetween: 15
                     },
                     1200: {
                        slidesPerView: 4,
                        spaceBetween: 30
                     },
                     1700: {
                        slidesPerView: 5,
                        spaceBetween: 50
                     },
                  }
               }
            >

               {data?.map((item) => {
                  return (
                     <SwiperSlide key={item.id} style={{ display: "flex", justifyContent: "center", padding: "0 15px" }}>
                        <Typography variant='div' key={item.id} className='font position-relative' sx={{

                           "&:hover": {
                              transform: "scale(1.1)"
                           }
                           ,
                           marginTop: '30px',
                           transition: "200ms"
                        }}>
                           <div>
                              <Link href={`productdetails/${item.id}`} style={{ textDecoration: "none", color: "white" }}>
                                 <div style={{
                                    height: "300px",
                                    width: "230px",
                                    borderRadius: "131px",
                                    overflow: "hidden",
                                    border: "1px solid #D29F1B",
                                    marginBottom: "20px"
                                 }}>
                                    <Image style={{ objectFit: "cover" }} width={230} height={300} className='w-100 h-100'  src={item.image[0].path} alt="img" />
                                 </div>

                                 <div className='text-center'>
                                    <p style={{ fontSize: "16px" }}>{item.title}</p>
                                    <p style={{ fontSize: "12px" }}>{item.name}</p>
                                    <p style={{ fontSize: "14px" }}>$ {item.price}</p>
                                 </div>
                                 {item.sold && (
                                    <div style={{
                                       position: "absolute",
                                       background: "#C92222",
                                       top: "40px",
                                       right: "1px",
                                       textTransform: "uppercase",
                                       color: "white",
                                       padding: "5px 10px",
                                       borderRadius: "15px"
                                    }}>
                                       sold out
                                    </div>
                                 )}
                              </Link>
                           </div>
                        </Typography>
                     </SwiperSlide>
                  )
               })}

            </Swiper>
         </div>

         <div className='text-center'>
            <Button
               sx={{
                  background: "white",
                  color: "black",
                  padding: "5px 40px",
                  fontSize: "16px",
                  border: "1px solid white",
                  textTransform: 'capitalize',
                  "&:hover": {
                     color: "white"
                  }
               }}

            > See more..
            </Button>
         </div>

      </aside>
   )
}

export default SliderImges
