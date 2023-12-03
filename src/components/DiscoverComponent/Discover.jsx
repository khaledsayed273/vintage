"use client"
import { Button, FormControl, Grid, NativeSelect, Typography } from '@mui/material'
import img1 from "../../images/all img/world.png"
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { AsyncDiscover } from '../../store/slices/DiscoverSlice'
import Link from 'next/link'

function Discover() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(AsyncDiscover())
    }, [])

    const data = useSelector(store => store.DiscoverSlice)



    return (
        <article className='font text-white font'
            style={{
                margin: "100px 0"
            }}>
            <div className='container'>
                <Typography  variant='h4' component="h4"  sx={{
                    fontSize: {xs: "16px",md:"20px"},
                    fontWeight: "400"
                }}>DISCOVER WORLDWIDE EXHIBITIONS
                </Typography>

                <div className='mt-5 '>
                    <Grid container spacing={{ lg: 15, md: 5 }}>
                        <Grid item xs={12} md={6} lg={7}>
                            <div className='h-100'>

                                <FormControl className="font form" sx={{
                                    width: "170px",
                                    color: "white",
                                    border: "1px solid transparent",
                                }}>

                                    <NativeSelect
                                        defaultValue={10}
                                        inputProps={{
                                            name: 'select a location',
                                            id: 'uncontrolled-native',
                                        }}
                                        sx={{
                                            color: "white",

                                            "&:before": {
                                                borderBottom: "none !important"
                                            },
                                            "&:after": {
                                                borderBottom: "none "
                                            },
                                        }}
                                    >
                                        <option className="font" style={{ color: "black" }} value={10}>select a location</option>
                                        <option className="font" style={{ color: "black" }} value={20}>Twenty</option>
                                        <option className="font" style={{ color: "black" }} value={30}>Thirty</option>
                                    </NativeSelect>
                                </FormControl>

                                <div className='d-flex align-items-center justify-content-start h-100'>
                                    <Typography className='mb-3 mb-md-0' variant='div' component="div" sx={{
                                        // width: "100%",
                                        // height: { md: "540px", xs: "300px", sm: "450px" },
                                        borderRadius: "180px ",
                                        overflow: "hidden",
                                        padding: "10px 0",
                                    }}>
                                        <Image
                                            style={{
                                                // objectFit: "cover"
                                            }}
                                            className='w-100 h-100' src={img1} alt="img" />
                                    </Typography>
                                </div>

                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} lg={5}>
                            <div>
                                <div className="d-flex justify-content-between  align-items-center ps-md-4 flex-wrap">
                                    <p className='p-0 m-0 font mt-3'
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "400",
                                            textTransform: "uppercase"
                                        }}
                                    >current
                                    </p>
                                    <Button className='mt-3'
                                        sx={{
                                            border: "2px solid white",
                                            color: "white",
                                            padding: "7px 35px",
                                            textTransform: "none"
                                        }}
                                    >See more ...
                                    </Button>
                                </div>

                                {

                                    data?.data.length > 0 ? (
                                        data.data.map((item) => {
                                            return (
                                                <div key={item.id} className='d-flex flex-column align-items-start justify-content-between mt-5'
                                                    style={{
                                                        overflow: "auto",
                                                        maxHeight: "650px"
                                                    }}
                                                >
                                                    <div className="w-100"  >
                                                        <Link className='currentCard d-flex justify-content-between align-items-center w-100 my-3' style={{ textDecoration: "none", color: "white" }} href={`exhibition/${item.slug}`}>
                                                            <Typography variant='div' component="div"
                                                                sx={{
                                                                    width: "198px",
                                                                    height: "148px",
                                                                    borderRadius: "130px",
                                                                    overflow: "hidden"
                                                                }}
                                                            >
                                                                <Image style={{ objectFit: "cover" }} width={198} height={148} src={item.image} alt="img" />
                                                            </Typography>
                                                            <div className='currentCard-text d-flex flex-column align-items-start p-3 ' style={{
                                                                flex: 2
                                                            }}>
                                                                <div style={{
                                                                    fontSize: "16px",
                                                                    fontWeight: "400"
                                                                }}>
                                                                    {item.name}
                                                                </div>
                                                                <div className='mt-3'
                                                                    style={{
                                                                        color: "#CCCCCC",
                                                                        fontSize: "14px",
                                                                        textTransform: "uppercase"
                                                                    }}
                                                                >
                                                                    {item.country}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })) :
                                        <div className='d-flex justify-content-center align-items-center mt-5'>
                                            <h6 className='font text-white text-center'>Sorry There is no data</h6>
                                        </div>
                                }
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </article>
    )
}

export default Discover
