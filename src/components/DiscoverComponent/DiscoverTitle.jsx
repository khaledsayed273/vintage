"use client"
import { Typography } from '@mui/material'
import React from 'react'

function DiscoverTitle() {
    return (
        <Typography
            variant="h4"
            component="h4"
            sx={{
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: "400",
            }}
        >
            DISCOVER WORLDWIDE EXHIBITIONS
        </Typography>
    )
}

export default DiscoverTitle
