"use client"
import {Grid } from '@mui/material'
import React from 'react'
import LeftDiscover from "./LeftDiscover";
import RightDiscover from "./RightDiscover";

function ParentDiscover({ data }) {
    return (
        <Grid container spacing={{ lg: 15, md: 5 }}>
            <LeftDiscover />
            <RightDiscover data={data} />
        </Grid>
    )
}

export default ParentDiscover
