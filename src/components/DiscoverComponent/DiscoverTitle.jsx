"use client"
import Typography  from '@mui/material/Typography'
import React from 'react'

function DiscoverTitle() {
    return (
        <Typography
            variant="h1"
            component="h1"
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
