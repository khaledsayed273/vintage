"use client"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
  return (
    <Box sx={{ display: 'flex' , justifyContent: "center" , margin: '100px 0' , alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  )
}

export default Loading