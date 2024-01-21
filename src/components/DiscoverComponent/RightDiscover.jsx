"use client"
import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function RightDiscover({ data }) {

    return (
        <Grid item xs={12} md={6} lg={5}>
            <div>
                <div className="d-flex justify-content-between  align-items-center ps-md-4 flex-wrap">
                    <p
                        className="p-0 m-0 font mt-3"
                        style={{
                            fontSize: "20px",
                            fontWeight: "400",
                            textTransform: "uppercase",
                        }}
                    >
                        current
                    </p>
                    <Button
                        className="mt-3"
                        sx={{
                            border: "2px solid white",
                            color: "white",
                            padding: "7px 35px",
                            textTransform: "none",
                        }}
                    >
                        See more ...
                    </Button>
                </div>

                {
                    data?.data?.length > 0 ? (
                        data.data.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="d-flex flex-column align-items-start justify-content-between mt-5"
                                    style={{
                                        overflow: "auto",
                                        maxHeight: "650px",
                                    }}
                                >
                                    <div className="w-100">
                                        <Link
                                            className="currentCard d-flex justify-content-between align-items-center w-100 my-3"
                                            style={{ textDecoration: "none", color: "white" }}
                                            href={`exhibition/${item.slug}`}
                                        >
                                            <div
                                                variant="div"
                                                component="div"
                                                style={{
                                                    width: "198px",
                                                    height: "148px",
                                                    borderRadius: "130px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <Image
                                                    style={{ objectFit: "cover" }}
                                                    width={198}
                                                    height={148}
                                                    src={item.image}
                                                    alt="img"
                                                />
                                            </div>
                                            <div
                                                className="currentCard-text d-flex flex-column align-items-start p-3 "
                                                style={{
                                                    flex: 2,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontSize: "16px",
                                                        fontWeight: "400",
                                                    }}
                                                >
                                                    {item.name}
                                                </div>
                                                <div
                                                    className="mt-3"
                                                    style={{
                                                        color: "#CCCCCC",
                                                        fontSize: "14px",
                                                        textTransform: "uppercase",
                                                    }}
                                                >
                                                    {item.country}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <h6 className="font text-white text-center">
                                Sorry There is no data
                            </h6>
                        </div>
                    )
                }

            </div>
        </Grid>
    )

}

export default RightDiscover
