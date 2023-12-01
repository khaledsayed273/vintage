"use client"
import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <Typography variant='div' component="div" sx={{
            borderBottom: "1px solid white",
            paddingBottom: "1px",

            display: "flex",
            // flexDirection: {xs: "column" , md: "row"}
        }}>


            <Typography variant="div" component="div">
                <Link
                    className="px-2 py-1"

                    href="/"
                    variant='div'
                    component="div"
                    style={{
                        background: "linear-gradient(0deg, rgba(58, 53, 0, 0.2), rgba(58, 53, 0, 0.2)),linear-gradient(180deg, #242319 0%, #404040 100%)",
                        color: "white",
                        // padding: '10px 15px 7px ',
                        textDecoration: "none",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <Typography sx={{fontSize: {xs: "14px" , md: "16px"}}} variant="span" component="span">

                        More like this
                    </Typography>

                </Link>
            </Typography>
            <Typography variant="div" component="div">
                <Link
                    className="px-2 py-1"

                    href=""
                    variant='div'
                    component="div"
                    style={{
                        background: "white",
                        color: "black",
                        // padding: '10px 10px 7px ',
                        textDecoration: "none",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <Typography sx={{fontSize: {xs: "14px" , md: "16px"}}} variant="span" component="span">

                    About THIS ARTIST
</Typography>
                </Link>
            </Typography>
            <Typography variant="div" component="div">
                <Link
                    className="px-3 py-1"
                    href=""
                    variant='div'
                    component="div"
                    style={{
                        background: "white",
                        color: "black",
                        // padding: '10px 10px 7px ',
                        textDecoration: "none",
                        fontSize: "14px",
                        borderLeft: "1px solid black",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <Typography sx={{fontSize: {xs: "14px" , md: "16px"}}} variant="span" component="span">

                    Shipping Policy
</Typography>
                </Link>
            </Typography>

        </Typography>
    )
}

export default Nav
