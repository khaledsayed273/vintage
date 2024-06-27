import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function Loading() {
  return (
    <main style={{height: "100vh"}}>
      <Box sx={{ display: 'flex', justifyContent: "center", margin: '100px 0', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    </main>
  )
}

export default Loading
