import Typography  from '@mui/material/Typography'

import Image from 'next/image'

function MoreDetails({ images , handleImg }) {

    return (
        <div className='d-flex flex-column flex-md-row justify-content-center  justify-content-xl-start  mt-4  align-items-center'>

            <Typography sx={{width: {xs: "100%" , sm: "auto"}}} variant='div' component="div" className='d-flex justify-content-center  mt-4  align-items-center'>
            {images?.map(item => (
                <Typography  onClick={() => handleImg(item.src)} key={item.id} variant='div' component="div"
                    sx={{
                        width: "127px",
                        height: "127px",
                        overflow: "hidden",
                        borderRadius: '50%',
                        border: "1px solid #D29F1B",
                        margin: "0 10px",
                        cursor: "pointer",
                        position: "relative"
                    }}
                >

                    <Image style={{ transform: "scale(1.1)" , objectFit: "cover" }} sizes='(max-width:992px) , 100vw' fill src={item.src} alt="img" />
                </Typography>
            ))}
            </Typography>

            <Typography className="mt-4" variant='div' component="div">
                More ...
            </Typography>


        </div>
    )
}

export default MoreDetails
