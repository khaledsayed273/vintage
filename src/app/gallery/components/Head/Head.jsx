import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import img from "../../../../images/all img/GalleryImg.png"
import img2 from "../../../../images/all img/Frame 148.png"
import Image from 'next/image'

function Head() {
    return (
        <div className='container font' style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.25)"
        }}>

            <Typography variant='div' component="div"

                sx={{
                    borderRadius: "250px",
                    border: "1px solid var(--solid-gold, #D69D66)",
                    overflow: "hidden",
                    maxHeight: '389px',
                    position: "relative",
                    height: { xs: "250px", sm: "240px", md: "320px", lg: "400px" }

                }}
            >
                <Image
                    priority
                    fill
                    sizes='(max-width:992px) , 100vw'
                    src={img} alt="img_gallery"
                    style={{ transform: "scale(1.01)" }}
                />

            </Typography>

            <Typography variant='div' component="div" className='d-flex justify-content-between my-4 flex-wrap px-lg-5'>
                <div className='d-flex align-items-center'>
                    <Typography variant='div' component="div" sx={{
                        border: "1px solid #D29F1B",
                        borderRadius: "131px",
                        height: "70px",
                        width: '60px',
                        overflow: "hidden",
                        position: "relative"
                    }}>
                        <Image sizes='(max-width:992px), 100vw' style={{ objectFit: "cover" }} fill src={img2} alt="logo" />

                    </Typography>

                    <Typography variant='div' component="div" className='d-flex flex-column ms-3'>
                        <Typography variant='div' component="div"
                            sx={{
                                fontSize: { xs: "20px", sm: "25px", md: "38px" },
                                letterSpacing: "0.4px",
                                color: "white"
                            }}>
                            Arte Contemporary
                        </Typography>
                        <p className='text-white'>
                            cairo
                        </p>

                    </Typography>
                </div>

                <div>
                    <Button
                        sx={{
                            background: "white",
                            color: "black",
                            border: "1px solid white",
                            padding: { xs: "4px 30px", md: "8px 50px" },
                            borderRadius: "50px",
                            fontSize: "16px",
                            fontWeight: "500",
                            textTransform: "capitalize",
                            marginTop: "12px",
                            "&:hover": {
                                color: "white"
                            }
                        }}
                    >
                        Follow
                    </Button>
                </div>

            </Typography>
        </div>
    )
}

export default Head
