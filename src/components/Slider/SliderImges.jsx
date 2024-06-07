"use client"
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../../app/gallery/loading';
import { useEffect, useState } from 'react';

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
      <aside className='my-5'>
         <div className='d-flex flex-column align-items-center font text-white'>
            <Typography variant="h3" component="h3" sx={{ fontSize: { xs: "18px", md: "20px" } }}>BUY AND SELL ART COMMISSION-FREE</Typography>
            <p className='my-2' style={{
               textTransform: "uppercase",
               fontSize: "18px",
               fontWeight: "400"
            }}>All types of art</p>
         </div>
         <div style={{
            margin: "50px 0"
         }}>
            {
               loading ?
                  (
                     <Loading />
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
                                 <Typography variant='div' key={item.id} className='font position-relative' sx={{

                                    "&:hover": {
                                       transform: "scale(1.1)"
                                    }
                                    ,
                                    marginTop: '30px',
                                    transition: "200ms"
                                 }}>
                                    <div>
                                       <Link href={`productdetails/${item.id}`} style={{ textDecoration: "none", color: "white", height: "100%" }}>
                                          <div style={{
                                             height: "300px",
                                             width: "230px",
                                             borderRadius: "131px",
                                             overflow: "hidden",
                                             border: "1px solid #D29F1B",
                                             marginBottom: "20px"
                                          }}>
                                             <Image style={{ objectFit: "cover" }} width={230} height={300} className='w-100 h-100' src={item.image[0].path} alt="img" />
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
                                 </Typography>
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





