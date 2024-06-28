"use client"
import { Typography, Button } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from "../../images/all img/GalleryImg.png"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ShareIcon from '@mui/icons-material/Share';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CardsAdd from './components/CardsAdd';
function Page() {
    const [image, setImage] = useState(null)
    const [imageToShow, setImageToShow] = useState(null)

    

    useEffect(() => {
        if (image) {
            let img = URL.createObjectURL(image)
            setImageToShow(img)
        }
    }, [image])
    return (
        <div className="container mx-auto px-3 md:px-10">
            <div
                style={{
                    borderRadius: "250px",
                    border: "1px solid var(--solid-gold, #D69D66)",
                    overflow: "hidden",
                    height: '389px',
                    position: "relative"

                }}
            >
                {imageToShow ? (
                    <Image
                        alt="image"
                        fill
                        sizes='100%'
                        src={imageToShow}
                        style={{ objectFit: "", transform: "scale(1.01)" }}
                    />
                ) : (
                    <div style={{ background: " var(--Dark, linear-gradient(180deg, #100F09 0%, #000 100%))" }} className='w-full h-full flex justify-center items-center'>
                        <label htmlFor="uploadImage" className="flex flex-col items-center" style={{ background: "transparent", border: "0", color: "white", cursor: "pointer" }}>
                            <AddAPhotoIcon style={{ width: "70px", height: "70px" }} />
                            <span className="mt-3">Change cover photo</span>
                        </label>
                        <input onChange={(e) => setImage(e.target.files[0])} className="hidden" id="uploadImage" type="file" />
                    </div>
                )}


            </div>

            <Typography variant='div' component="div" className="mx-auto" sx={{ width: { md: "90%" } }}>
                <div className='flex flex-col sm:flex-row justify-between items-center px-5 py-3'>
                    <div className='flex'>
                        <div style={{ position: "relative", width: "74px", height: "74px", overflow: "hidden", borderRadius: "50%" }}>
                            <Image fill className='w-full h-full' alt='profile-image' src={img} />
                        </div>
                        <div className="flex flex-col justify-center ms-3 text-white">
                            <h4>
                                Aya Alaa
                            </h4>
                            <div>
                                egypt
                            </div>
                        </div>


                    </div>
                    <div className='flex mt-4 ms:mt-0'>
                        <Button sx={{
                            border: "1px solid white", background: "rgba(255, 255, 255, 0.60)", color: "black", borderRadius: "50px", "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" }
                        }} className="me-3 p-1 px-3">
                            <ShareIcon className="me-1" style={{ width: "20px", height: "20px", color: "black" }} />
                            Share
                        </Button>
                        <Button sx={{ border: "1px solid white", background: "rgba(255, 255, 255, 0.60)", color: "black", borderRadius: "50px", "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" } }} className="p-1 px-4"><DriveFileRenameOutlineIcon className="me-1" style={{ width: "20px", height: "20px", color: "black" }} /> Edit</Button>
                    </div>

                </div>

                <div className="flex justify-between mt-4"  style={{ background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))" }}>
                    <div className="p-3 py-4" style={{ color: "white" }}>
                        PROFILE COMPLETENESS
                    </div>
                </div>

                <CardsAdd/>
            </Typography>

        </div>
    )
}

export default Page
