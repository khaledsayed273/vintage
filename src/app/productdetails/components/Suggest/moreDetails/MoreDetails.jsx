import { Typography } from '@mui/material'

import Image from 'next/image'

function MoreDetails({ images , handleImg }) {

    return (
        <div className='d-flex justify-content-center me-5 mt-4  align-items-center'>

            {images.map(item => (
                <Typography  onClick={() => handleImg(item.src)} key={item.id} variant='div' component="div"
                    sx={{
                        width: "127px",
                        height: "127px",
                        overflow: "hidden",
                        borderRadius: '50%',
                        border: "1px solid #D29F1B",
                        marginRight: "20px",
                        cursor: "pointer"
                    }}
                >

                    <Image style={{ transform: "scale(1.1)" }} className='w-100 h-100 object-fit-cover' src={item.src} alt="img" />
                </Typography>
            ))}

            {/* <Typography variant='div' component="div">
                More ...
            </Typography> */}


        </div>
    )
}

export default MoreDetails
