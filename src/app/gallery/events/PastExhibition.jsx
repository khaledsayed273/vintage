import React from 'react'
import img from "../../../images/all img/Frame 153.png"
import img2 from "../../../images/all img/Frame 152.png"
import img3 from "../../../images/all img/Frame 151.png"
import Image from 'next/image'
import Link from 'next/link'

function PastExhibition() {
    const data = [
        {
            id: 1,
            img: img,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 2,
            img: img2,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 3,
            img: img3,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 4,
            img: img3,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 5,
            img: img,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
        {
            id: 6,
            img: img2,
            title: "Laguna Niguel",
            date: "June 8 – 30, 2023"
        },
    ]
    
    return (
        <div>
            <h3
                className=' text-2xl my-5 '>
                Past Exhibition
            </h3>
            <div
                className='py-9 px-8'
                style={{
                    background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                }}
            >
                <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-16'>
                    {data.map((item) => (
                        <div className='flex justify-center items-center' key={item.id}>
                            <Link className='block hover:scale-90 transition-all duration-300' style={{
                                width: "310px",
                                height: "465px"
                            }} href={"/"}   >
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='w-full h-full relative'
                                        style={{
                                            overflow: "hidden",
                                            borderRadius: "131px",
                                            border: "2px solid var(--solid-gold, #D69D66)",
                                            width: "298.678px",
                                            height: "398.571px"
                                        }}
                                    >
                                        <Image sizes='(max-width:992px) 100vw' fill src={item.img} alt="" />
                                    </div>
                                    <h3 className='mt-3'
                                        style={{
                                            fontSize: "18px",
                                            textTransform: "uppercase",
                                            fontWeight: "400"
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                    <div
                                        style={{
                                            fontSize: "18px",
                                            textTransform: "uppercase",
                                            fontWeight: "400"
                                        }}
                                    >
                                        {item.date}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center w-full mt-20 mb-5'>
                    <button className='text-white py-2 px-5 rounded-md hover:opacity-80'
                        style={{
                            border: "1px solid var(--solid-gold, #D69D66)"
                        }}
                    >
                    View More ...
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PastExhibition
