import { Typography } from '@mui/material'

import img from "../../../../../images/all img/Frame 148.png"
import Image from 'next/image'

function MoreDetails() {
    return (
        <div className='d-flex justify-content-center me-5 mt-4  align-items-center'>
            <Typography variant='div' component="div"
                sx={{
                    width: "127px",
                    height: "127px",
                    overflow: "hidden",
                    borderRadius: '50%',
                    border: "1px solid #D29F1B",
                    marginRight: "20px"
                }}
            >

                <Image style={{ transform: "scale(1.1)" }} className='w-100 h-100' src={img} alt="img" />
            </Typography>

            <Typography variant='div' component="div"
                sx={{
                    width: "127px",
                    height: "127px",
                    overflow: "hidden",
                    borderRadius: '50%',
                    border: "1px solid #D29F1B",
                    marginRight: "20px"
                }}
            >

                <Image style={{ transform: "scale(1.1)" }} className='w-100 h-100' src={img} alt="img" />
            </Typography>

            <Typography variant='div' component="div"
                sx={{
                    width: "127px",
                    height: "127px",
                    overflow: "hidden",
                    borderRadius: '50%',
                    border: "1px solid #D29F1B",
                    marginRight: "20px"
                }}
            >

                <Image style={{ transform: "scale(1.1)" }} className='w-100 h-100' src={img} alt="img" />
            </Typography>

            <Typography variant='div' component="div">
                More ...
            </Typography>


        </div>
    )
}

export default MoreDetails
