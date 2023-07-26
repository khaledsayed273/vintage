import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function Nav() {
    return (
        <Typography sx={{
            borderBottom: "1px solid white",
            paddingBottom: "1px",
            flexWrap: "wrap",
            display: "flex"
        }}>
            <Link
                href="/"
                variant='div'
                component="div"
                style={{
                    background: "linear-gradient(0deg, rgba(58, 53, 0, 0.2), rgba(58, 53, 0, 0.2)),linear-gradient(180deg, #242319 0%, #404040 100%)",
                    color: "white",
                    padding: '10px 40px 7px ',
                    textDecoration: "none",
                    fontSize: "16px"
                }}
            >
                More like this

            </Link>
            <Link
                href=""
                variant='div'
                component="div"
                style={{
                    background: "white",
                    color: "black",
                    padding: '10px 40px 7px ',
                    textDecoration: "none",
                    fontSize: "16px"
                }}
            >
                About THIS ARTIST
            </Link>
            <Link
                href=""
                variant='div'
                component="div"
                style={{
                    background: "white",
                    color: "black",
                    padding: '10px 40px 7px ',
                    textDecoration: "none",
                    fontSize: "16px",
                    borderLeft: "1px solid black"
                }}
            >
                Shipping Policy
            </Link>

        </Typography>
    )
}

export default Nav
