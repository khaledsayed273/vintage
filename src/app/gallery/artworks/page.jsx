"use client"
import Left from './components/left/Left'
import Right from './components/right/Right'
import { Grid, Typography } from '@mui/material'

function ArtWorks() {
  return (
    <Typography variant='div' component="div" className='font text-white mt-5'
      sx={{
        padding: { md: "0 40px", lg: "0 30px", xl: "0 170px" }
      }}
    >
      <Grid container sx={{display: "flex" , justifyContent: "center"}}>
        <Left />
        <Right />
      </Grid>
    </Typography>
  )
}

export default ArtWorks
