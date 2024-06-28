import React from 'react'
import img from "../../images/all img/Frame 155.png"
import Image from 'next/image'
import Link from 'next/link'
function Center() {
    return (
        <div className='font my-16 text-white'>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div className='items-center justify-center flex flex-col'>
                    <div className='mb-5'>
                        <h3 style={{
                            fontSize: "50px",
                        }}>Join in, it’s free.
                        </h3>

                        <div className='mt-5'>
                            <p style={{
                                color: "#CCCCCC",
                                fontSize: "14px",
                                margin: "10px 0"
                            }}>Why Vintage ?
                            </p>
                            <p style={{
                                color: "#CCCCCC",
                                fontSize: "14px",
                                margin: "10px 0"
                            }}>
                                Vintage is a global art platform that links galleries, artists, and art lovers from more than 200 nations.
                            </p>
                            <p style={{
                                color: "#CCCCCC",
                                fontSize: "14px",
                                margin: "10px 0"
                            }}>
                                If you’re an artist, Vintage allows you to sell art online commission-free, which distinguishes us from other online gallery websites.
                            </p>

                            <p style={{
                                color: "#CCCCCC",
                                fontSize: "14px",
                                margin: "10px 0"
                            }}>
                                If you want to buy a new painting, Vintage makes it simple to find the best artwork.
                            </p>
                            <p style={{
                                color: "#CCCCCC",
                                fontSize: "14px",
                                margin: "10px 0"
                            }}>
                                Not in the market for buying or selling art?
                            </p>
                            <p style={{
                                color: "#CCCCCC",
                                fontSize: "14px",
                                margin: "10px 0"
                            }}>
                                Vintage is free for anyone who is interested in artworks , paintings and all types of artwork.
                            </p>
                        </div>
                        <div className='flex justify-center sm:justify-start mt-8' >
                            <Link className='py-2 px-16 bg-white border hover:opacity-80 rounded-s-md text-black' href="sign-up">Sign Up</Link>
                            <Link className="py-2 px-16 text-white border hover:opacity-80 rounded-e-md" href="login">Log In</Link>
                        </div>
                    </div>
                </div>
                <div  className='flex items-center justify-center lg:justify-end mt-10 lg:mt-0'>
                    <div className='flex justify-center'>
                        <div className='relative rounded-[224px] overflow-hidden w-[320px] h-[450px] sm:w-[390px] sm:h-[500px] md:w-96 md:h-[550px] lg:w-[450px] lg:h-[595px]'>
                            <Image sizes='100%' fill src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center
