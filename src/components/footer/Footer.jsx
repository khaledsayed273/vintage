import Grid from '@mui/material/Grid'
import Link from 'next/link'
import React from 'react'
function Footer() {
    return (
        <footer
            className='font mt-5'
            style={{
                background: "#222222",
                minHeight: "400px"
            }}
        >
            <div className="container mx-auto p-3">
                <div className='grid sm:grid-cols-2 md:grid-cols-4'>
                    <div className='flex md:justify-center lg:justify-start'>
                        <div>
                            <ul className='flex flex-col  text-white items-start md:items-center my-3'>
                                <h3 style={{
                                    color: "#FFFCF7",
                                    fontSize: "36px",
                                    fontWeight: "400",
                                    margin: "20px 0"
                                }}>Vintage</h3>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/galleries">Galleries</Link>
                                </li>
                                <li>
                                    <Link href="/artworks">artworks</Link>
                                </li>
                                <li>
                                    <Link href="/exhibitions">exhibitions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex md:justify-center'>
                        <div>
                            <ul className='flex flex-col  text-white items-start md:items-center my-3'>
                                <h3 style={{
                                    color: "#FFFCF7",
                                    fontSize: "36px",
                                    fontWeight: "400",
                                    margin: "20px 0"
                                }}>about</h3>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/galleries">Galleries</Link>
                                </li>
                                <li>
                                    <Link href="/artworks">artworks</Link>
                                </li>
                                <li>
                                    <Link href="/exhibitions">exhibitions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex md:justify-center'>
                        <div>
                            <ul className='flex flex-col  text-white items-start md:items-center my-3'>
                                <h3 style={{
                                    color: "#FFFCF7",
                                    fontSize: "36px",
                                    fontWeight: "400",
                                    margin: "20px 0"
                                }}>
                                    contact</h3>
                                <li>
                                    <Link href="mail">mail</Link>
                                </li>
                                <li>
                                    <Link href="whatsapp">whatsapp</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='flex md:justify-center   justify-content-lg-end'>
                        <div>
                            <ul className='flex flex-col  text-white items-start md:items-center  my-3'>
                                <h3 style={{
                                    color: "#FFFCF7",
                                    fontSize: "36px",
                                    fontWeight: "400",
                                    margin: "20px 0"
                                }}>
                                    Social</h3>
                                <li>
                                    <Link href="instgram">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="facebook">Facebook</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
