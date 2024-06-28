import React from 'react'
import img from "../../images/all img/image 21.png"
import style from "./Section.module.css"
import ukLogo from "../../images/all img/uk.png"
import Image from 'next/image'
import Link from 'next/link'

function Section() {
    return (
        <section className='mt-16 font'>
                <div className=' grid md:grid-cols-2 ' >
                    <div className='flex items-start md:items-center justify-center mb-5 mb-lg-0'  >
                        <div>
                            <h1 className={`font mb-16 px-3 text-2xl md:text-4xl lg:text-5xl ${style.title}`}>
                                Art is an expression of the soul.
                            </h1>
                            <div className='px-3 '>
                                <p className={`mt-10 mb-2 font ${style.paragragh}`}>
                                    You&apos;ve come to the perfect location if art is
                                </p>
                                <p className={`font ${style.paragragh}`}>
                                    your passion or your job.
                                </p>
                            </div>

                            <div className='flex items-center p-2 my-5 px-3'>
                                <div className='relative w-5 h-4'>
                                    <Image priority fill src={ukLogo} alt="" />
                                </div>

                                <span className={`font ${style.uk}`}>
                                    English
                                </span>
                            </div>

                            <div className='flex items-center mt-4 flex-wrap px-3'>
                                <button className='font text-base py-1.5 px-4 bg-white border normal-case hover:opacity-80'>
                                    <Link style={{ textDecoration: "none" }} className='w-full h-full text-black' href="/login">
                                        Get a Free Account
                                    </Link>
                                </button>
                                <button className='font py-1.5 pe-4 ps-8 text-white border-transparent hover:border-white'>
                                    Learn more ...
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center md:justify-end mt-10 lg:mt-0' >
                        <div className='my-5 md:my-0 w-[300px]  sm:w-[400px] h-[400px] sm:h-[500px] min-[767px]:h-[490px]  md:w-[430px] lg:h-[450px] xl:h-[550px]   lg:w-[390px] xl:w-[430px]  relative'>
                            <Image fill priority src={img} alt="img" />
                        </div>
                    </div>
                </div>
        </section>
    )
}


export default Section
