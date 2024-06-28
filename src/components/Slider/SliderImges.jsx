"use client"
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

function SliderImges({ baseUrl }) {

   const [data, setData] = useState([])
   const [loading, setLoading] = useState(true)

   const getData = async () => {
      const res = await fetch(`${baseUrl}slider`, { cache: "no-store" }).then((res) => {
         return res.json()
      }).then((data) => {
         return data
      }).catch((e) => {
         return e
      });
      setData(res)
      setLoading(false)
   }

   useEffect(() => {
      getData()
   }, [])

   return (
      <aside className='my-16'>
         <div className='flex flex-col items-center font text-white'>
            <h3 className='text-lg	md:text-xl'>BUY AND SELL ART COMMISSION-FREE</h3>
            <p className='my-3 uppercase text-lg md:text-xl'>All types of art</p>
         </div>
         <div className='my-11'>
            {
               loading ?
                  (
                     <Box sx={{ display: 'flex', justifyContent: "center", margin: '100px 0', alignItems: 'center' }}>
                        <CircularProgress />
                     </Box>
                  )
                  :
                  (
                     <Swiper
                        slidesPerView={5}
                        spaceBetween={0}
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
                              },
                              900: {
                                 slidesPerView: 3,
                              },
                              1200: {
                                 slidesPerView: 4,
                              },
                              1700: {
                                 slidesPerView: 5,
                              },
                           }
                        }
                     >
                        {data?.data?.length > 0 ?
                           data.data.map((item) => (
                              <SwiperSlide key={item.id} style={{ display: "flex", justifyContent: "center", padding: "0 15px", height: "405px" }}>
                                 <div key={item.id} className='font relative hover:scale-105 duration-300 transition-all'>
                                    <Link href={`productdetails/${item.id}`} style={{ textDecoration: "none", color: "white", height: "100%" }}>
                                       <div style={{
                                          height: "300px",
                                          width: "230px",
                                          borderRadius: "131px",
                                          overflow: "hidden",
                                          border: "1px solid #D29F1B",
                                          marginBottom: "20px"
                                       }}>
                                          <Image style={{ objectFit: "cover" }} width={230} height={300} src={item.image[0].path} alt="img" />
                                       </div>
                                       <div className='text-center'>
                                          <h3 style={{ fontSize: "16px" }}>{item.title}</h3>
                                          <h4 style={{ fontSize: "12px" }}>{item.name}</h4>
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
                              </SwiperSlide>
                           ))
                           : (
                              <SwiperSlide className='d-flex justify-content-center align-items-center w-100'>
                                 <h3 className='font text-white text-center'>Sorry There is no data</h3>
                              </SwiperSlide>
                           )}
                     </Swiper>
                  )
            }
         </div>
         <div className='text-center'>
            <button className='bg-white px-10 py-1.5 text-base border capitalize hover:bg-transparent hover:text-white transition-all duration-200 rounded-md'>
               See more..
            </button>
         </div>
      </aside>
   )
}

export default SliderImges





