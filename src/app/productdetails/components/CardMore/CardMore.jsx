"use client"
import { Typography } from '@mui/material'
import React from 'react'

function CardMore({data}) {
    return (
        <Typography
            variant='div'
            component="div"
            sx={{
                background: "linear-gradient(0deg, rgba(58, 53, 0, 0.2), rgba(58, 53, 0, 0.2)),linear-gradient(180deg, #242319 0%, #404040 100%)",
                margin: "60px 0",
                padding: "45px",
                borderRadius: "50px",
                fontSize: "16px",
                lineHeight: "28.2px",
                fontWeight: "400"
            }}
        >
            {data.details}
        </Typography>
    )
}

export default CardMore
