"use client"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
  return (
    <main className='flex justify-center items-center ' style={{ height: "90vh" }}>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    </main>
  )
}

export default Loading