import Typography  from '@mui/material/Typography'

import Image from 'next/image'

function MoreDetails({ images , handleImg }) {

    return (
        <div className='flex flex-col md:flex-row  justify-center xl:justify-start mt-4 items-center'>

            <div className='grid grid-cols-3 gap-3 my-5'>
            {images?.map(item => (
                <Typography  onClick={() => handleImg(item.src)} key={item.id} variant='div' component="div"
                    sx={{
                        width: "127px",
                        height: "127px",
                        overflow: "hidden",
                        borderRadius: '50%',
                        border: "1px solid #D29F1B",
                        cursor: "pointer",
                        position: "relative"
                    }}
                >

                    <Image style={{ transform: "scale(1.1)" , objectFit: "cover" }} sizes='(max-width:992px) , 100vw' fill src={item.src} alt="img" />
                </Typography>
            ))}
            </div>
            <div className='ms-5'>
                More ...
            </div>
        </div>
    )
}

export default MoreDetails
