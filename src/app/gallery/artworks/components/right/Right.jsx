"use client"
import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import Image from 'next/image'

function Right({data}) {

    return (
        <Grid item xs={12} md={8}>
            <Typography variant='div' component="div" className='p-4'>
                <Grid container>
                    {data?.map((item) => (
                        <Grid key={item.id} className='d-flex  justify-content-center ' item xs={12} sm={6} md={6} lg={4}>
                            <Typography variant='div' component="div" key={item.id} className='font position-relative' sx={{
                                "&:hover": {
                                    transform: "scale(1.1)"
                                }
                                ,
                                marginTop: '30px',
                                transition: "200ms",
                                width: "230px"

                            }}>
                                <Link href={`/productdetails/${item.id}`} style={{ textDecoration: "none", color: "white", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{
                                        height: "300px",
                                        width: "100%",
                                        borderRadius: "131px",
                                        overflow: "hidden",
                                        border: "1px solid #D29F1B",
                                        marginBottom: "20px",
                                    }}>
                                        <Image style={{ objectFit: "cover" }} className='w-100 h-100' src={item.img} alt="img" />
                                    </div>

                                    <div className='text-center'>
                                        <p style={{ fontSize: "16px" }}>{item.title}</p>
                                        <p style={{ fontSize: "12px" }}>{item.name}</p>
                                        <p style={{ fontSize: "14px" }}>$ {item.price}</p>
                                    </div>

                                </Link>
                                {item.sold && (
                                    <div style={{
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
                                    </div>
                                )}

                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Typography >
        </Grid >
    )
}

export default Right
