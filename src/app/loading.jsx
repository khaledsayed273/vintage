"use client"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
  return (
    <main className='d-flex justify-content-center align-items-center ' style={{height: "100vh"}}>
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  </main>
  )
}

export default Loading