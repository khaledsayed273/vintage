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
        <div className='font text-white mt-5'>
            <span
                className='ms-md-5'
                style={{
                    fontSize: "26px",
                }}
            >
                Artists
            </span>
            <div
                style={{
                    background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                    padding: "35px 20px",
                    margin: "25px 0"
                }}
            >
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {data.map(item => (
                        
                            <Link key={item.id} className='text-white hover:scale-105 transition-all  duration-200' href={`/artist/${item.id}`}>
                                <div className='flex items-center my-3'>
                                    <div className='relative overflow-hidden'
                                        style={{
                                            width: "25.391px",
                                            height: "25.291px",
                                            borderRadius: "131px",
                                            border: "1px solid #D29F1B",
                                        }}
                                    >
                                        <Image sizes='(max-width:992px) 100vw' fill style={{ objectFit: "cover" }} src={item.img} alt="" />
                                    </div>
                                    <span className='ms-2'
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: "400",
                                            lineHeight: "26px"
                                        }}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            </Link>
                    ))}

                </div>


            </div>

        </div>
    )
}

export default Artists
