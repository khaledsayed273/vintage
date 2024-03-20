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
        <div className='container my-5'>
            <div className='row'>
                {data.map((item) => (
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-ceter' key={item.id} >
                        <div className='font position-relative' style={{
                            marginTop: '30px',
                            transition: "200ms",
                            width: "320px"
                        }}>
                            <div style={{ textDecoration: "none", color: "white", height: "100%" }}>
                                <div style={{
                                    height: "210px",
                                    width: "100%",
                                    borderRadius: "131px",
                                    overflow: "hidden",
                                    marginBottom: "20px",
                                    position: "relative"
                                }}>
                                    <Image priority style={{ objectFit: "cover" }} sizes='(max-width:992px) , 100vw' fill src={item.image} alt="img" />
                                </div>
                                <div className='text-center '>
                                    <p className='mx-auto' style={{ fontSize: "16px", width: "50%" }}>{item.title}</p>
                                    <Link className="text-white" href={`productdetails/1`}>
                                        See more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Exhibitions
