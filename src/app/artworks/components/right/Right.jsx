import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Right({ data }) {
    return (
        <div className='lg:col-span-2 xl:col-span-3'>
            <div className='py-4'>
                <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                    {data?.map((item) => (
                        <div key={item.id} className='flex justify-center '  >
                            <div key={item.id} className='font relative' style={{
                                "&:hover": {
                                    transform: "scale(1.1)"
                                }
                                ,
                                marginTop: '30px',
                                transition: "200ms",
                                width: "230px"

                            }}>
                                <Link href={`/productdetails/${item.id}`} className='hover:scale-110 transition-all duration-300' style={{ textDecoration: "none", color: "white", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{
                                        height: "300px",
                                        width: "100%",
                                        borderRadius: "131px",
                                        overflow: "hidden",
                                        border: "1px solid #D29F1B",
                                        marginBottom: "20px",
                                        position: "relative"
                                    }}>
                                        <Image style={{ objectFit: "cover" }} sizes='100%' fill src={item.img} alt="img" />
                                    </div>

                                    <div className='text-center mb-3'>
                                        <h3 className='mb-3' style={{ fontSize: "16px" }}>{item.title}</h3>
                                        <h4 className='mb-3' style={{ fontSize: "12px" }}>{item.name}</h4>
                                        <span style={{ fontSize: "14px" }}>$ {item.price}</span>
                                    </div>

                                </Link>
                                {item.sold && (
                                    <span style={{
                                        position: "absolute",
                                        background: "#C92222",
                                        top: "40px",
                                        right: "3px",
                                        textTransform: "uppercase",
                                        color: "white",
                                        padding: "5px 10px",
                                        borderRadius: "15px"
                                    }}>
                                        sold out
                                    </span>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Right
