"use client"
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import img from "../../../../images/all img/Frame 148.png"
import img2 from "../../../../images/all img/Frame 147.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import style from "../../[productid]/details.module.css"
import Image from 'next/image';
import { useContext, useState } from 'react';
import MoreDetails from "../../components/Suggest/moreDetails/MoreDetails"
import { Context } from '../../../../store/Context'

function Details({ data }) {

    const { addToCart } = useContext(Context)

    const images = [
        {
            id: 1,
            src: img
        },
        {
            id: 2,
            src: img2
        },
        {
            id: 3,
            src: img
        },
    ]

    const [imge, setImg] = useState(images[0].src)

    const handleImg = (img10) => {
        setImg(img10)
    }



    return (
        <div className='grid lg:grid-cols-2 md:gap-20'>
            <div className='my-4 lg:my-0 items-center flex flex-col'>
                <Typography className="mx-auto ms-xl-0" variant='div' component="div"
                    sx={{
                        borderRadius: "282.5px",
                        overflow: "hidden",
                        width: { xs: "90%", lg: "465px" },
                        height: { xs: "320px", sm: "420px", md: "450px", lg: "620px", xl: "650px" },
                        position: "relative"
                    }}
                >
                    <Image priority sizes='(max-width:992px) 100vw' fill src={imge} alt="img" />
                </Typography>

                <MoreDetails images={images} handleImg={handleImg} />
            </div>

            <div className='h-full'>
                <Typography className='flex flex-col justify-between' variant='div' component="div"
                    sx={{
                        background: "linear-gradient(0deg, rgba(58, 53, 0, 0.2), rgba(58, 53, 0, 0.2)), linear-gradient(180deg, #242319 0%, #404040 100%)",
                        borderRadius: "50px",
                        padding: "40px 30px",
                        height: "100%"
                    }}
                >
                    <div>
                        <div>
                            <h4
                                style={{
                                    fontSize: "28px",
                                    lineHeight: "37px",
                                    fontStyle: "normal",
                                    fontWeight: "400"
                                }}
                            >
                                {data.title}
                            </h4>
                            <div className='flex mt-8 items-center flex-wrap'>
                                <div className='flex items-center '>
                                    <Typography
                                        sx={{
                                            width: "25px",
                                            height: "32px",
                                            overflow: "hidden",
                                            borderRadius: "50px",
                                            marginRight: "10px",
                                            position: "relative"
                                        }}
                                        variant='div' component="div">
                                        <Image sizes='(max-width:992px)  100vw' style={{ objectFit: "cover" }} fill src={data.userImg} alt="img" />
                                    </Typography>
                                    <h5 className='m-0'
                                        style={{
                                            fontSize: "19px",
                                            lineHeight: "25px"
                                        }}
                                    >{data.userName}
                                    </h5>
                                </div>
                                <div>
                                    <ul className='py-0 m-0 ms-5'>
                                        <li>{data.country}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='my-4'>
                                <div
                                    style={{
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        margin: "15px 0"
                                    }}
                                >
                                    Year: {data.year}
                                </div>
                                <div
                                    style={{
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        margin: "15px 0"
                                    }}
                                >
                                    Material: {data.material}
                                </div>
                        
                                <div
                                    style={{
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        margin: "15px 0"
                                    }}
                                >
                                    Size: {data.size}
                                </div>
                        
                                <div
                                    style={{
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        margin: "15px 0"
                                    }}
                                >
                                    Price : {data.price} $
                                </div>
                        
                            </div>
                        </div>
                        
                        <div>
                        
                            <div className={style.describe} >
                                {data.describe1}
                            </div>
                            <div className={style.describe} >
                                {data.describe2}
                            </div>
                            <div className={style.describe}>
                                {data.describe3}
                            </div>
                        
                        </div>
                    </div>

                    <div className='flex justify-between items-center  flex-wrap mt-10'>

                        <div>
                            <div className='ms-4'>
                                <Button onClick={() => addToCart(data)} className={style.addToCart} sx={{
                                    background: "white",
                                    color: 'black',
                                    padding: "8px 35px",
                                    borderRadius: "15px",
                                    border: "1px solid white",
                                    "&:hover": {
                                        color: 'white',

                                    }
                                }}>
                                    <ShoppingCartIcon color='black' />

                                    <p style={{
                                        color: "black",
                                        fontSize: "16px",
                                        margin: "0 0 0 5px",
                                        textTransform: 'capitalize'

                                    }}>Add to Cart</p>
                                </Button>

                            </div>
                            <div className='flex items-center'>
                                <div>
                                    <LocalShippingIcon />
                                </div>
                                <div className='flex flex-col ms-3 mt-3'>
                                    <div className='my-1'>Domestic Shipping: {data.DomesticShipping} $</div>
                                    <div className='my-1'>International Shipping: {data.InternationalShipping} $</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button className={style.addToCart} sx={{
                                margin: "10px 15px 0 0",
                                background: "white",
                                color: 'black',
                                padding: "8px 20px",
                                borderRadius: "50%",
                                width: "88px",
                                height: "74.59px",
                                border: "1px solid white",
                                "&:hover": {
                                    color: 'white'
                                }
                            }}>
                                <p style={{
                                    color: "black",
                                    fontSize: "16px",
                                    margin: "0 0 0 5px",
                                    textTransform: 'capitalize'
                                }}>
                                    Add to Wishlist
                                </p>
                            </Button>
                        </div>
                    </div>
                </Typography>
            </div>

        </div>
    )
}

export default Details
