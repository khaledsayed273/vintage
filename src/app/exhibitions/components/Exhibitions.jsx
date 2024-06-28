import React from 'react';
import img from "../../../images/all img/GalleryImg.png"
import Image from 'next/image';
import Link from 'next/link';

function Exhibitions() {

    const data = [
        {
            id: 1,
            image: img,
            title: "Vintage Art gallery Cairo, Egypt Permanent"
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
        
    ]

    return (
        <div className='my-5'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item) => (
                    <div className='flex justify-center items-center' key={item.id} >
                        <div className='font position-relative' style={{
                            marginTop: '30px',
                            transition: "200ms",
                            width: "320px"
                        }}>
                            <Link href={`productdetails/1`} className='h-full block hover:scale-105 transition-all duration-300 text-white'>
                                <div style={{
                                    height: "210px",
                                    width: "100%",
                                    borderRadius: "131px",
                                    overflow: "hidden",
                                    marginBottom: "20px",
                                    position: "relative"
                                }}>
                                    <Image style={{ objectFit: "cover" }} sizes='(max-width:992px) 100vw' fill src={item.image} alt="img" />
                                </div>
                                <div className='text-center '>
                                    <h3 className='mx-auto' style={{ fontSize: "16px", width: "50%" , lineHeight: "30px" }}>{item.title}</h3>
                                    <span className="text-white mt-5 block" href={`productdetails/1`}>
                                        See more
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Exhibitions
