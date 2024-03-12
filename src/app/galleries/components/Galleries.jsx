import React from 'react';

import img from "../../../images/all img/GalleryImg.png"

import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Galleries() {

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
            id: 14,
            image: img,
            title: "dsfsdaf fsrferwf"
        },
        {
            id: 15,
            image: img,
            title: "fdg fdgergferw "
        },
        {
            id: 16,
            image: img,
            title: "gdfg dfgege "
        },
        {
            id: 17,
            image: img,
            title: "Dark"
        },
        {
            id: 18,
            image: img,
            title: "Game"
        },

    ]


    return (
        <div className='container my-5'>

            <div className="row">
                {data.map((item) => (
                    <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-ceter' key={item.id} >
                        <Typography variant='div' component="div" className='font position-relative' sx={{
                            marginTop: '30px',
                            transition: "200ms",
                            width: "364px",
                        }}>
                            <div style={{ textDecoration: "none", color: "white", height: "100%" }}>

                                <Typography variant='div' component="div" sx={{
                                    height: { xs: "145px", sm: "188px" },
                                    width: "100%",
                                    borderRadius: "88px",
                                    overflow: "hidden",
                                    marginBottom: "20px",
                                    position: "relative"
                                }}>
                                    <Image style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw" priority fill src={item.image} alt="img" />
                                </Typography>

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
                    </div>

                )
                )}
            </div>
        </div>
    );
}
