import React, { useState } from 'react'
import { Typography, Button  } from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TextField from '@mui/material/TextField';

function CardsAdd() {

    const [showAbout, setShowAbout] = useState(false)
    const [technique, setTechnique] = useState(false)
    const [contactInfo, setContactInfo] = useState(false)
    const [awards, setAwards] = useState(false)
    const [pastExhibitions, setPastExhibitions] = useState(false)
    const [artworks, setArtworks] = useState(false)


    const [imageAwards, setImageAwards] = useState("")
    return (
        <>
            {/* ABOUT */}
            <Typography variant='div' component="div" sx={{ background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))" }}>
                <div style={{ borderBottom: "1px solid white" }} className="mx-1 mx-md-3 d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 pe-sm-3">
                    <div className="p-3 py-4" style={{ color: "white" }}>
                        ABOUT
                    </div>
                    {showAbout && (
                        <div className='d-flex my-4 my-sm-0'>
                            <Button onClick={() => setShowAbout(false)} sx={{
                                border: "1px solid white",
                                background: "rgba(255, 255, 255, 0.60)",
                                color: "black",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" }
                            }} className="me-3 py-1 px-3">
                                Cancel
                            </Button>
                            <Button onClick={() => setShowAbout(false)} sx={{
                                border: "1px solid white",
                                background: "black",
                                color: "white",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "black" }
                            }} className="py-2 px-4"> Save</Button>
                        </div>
                    )}
                </div>
                {showAbout ? (
                    <div className="p-3 mt-3">
                        <textarea placeholder="Write something about yourself ..." className="p-3" style={{ minWidth: "100%", maxWidth: "100%", minHeight: "200px", maxHeight: "200px", border: "1px solid #D69D66", background: "transparent", color: "white" }}></textarea>
                    </div>
                ) : (
                    <div className="mt-3 p-3 d-flex justify-content-between align-items-center">
                        <div className="text-white">
                            No about text added
                        </div>
                        <Button onClick={() => setShowAbout(true)} sx={{ border: "1px solid white", background: "rgba(255, 255, 255, 0.60)", color: "black", borderRadius: "50px", "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" } }} className="p-1 px-3"><DriveFileRenameOutlineIcon className="me-1" style={{ width: "20px", height: "20px", color: "black" }} /> Edit</Button>

                    </div>
                )}
            </Typography>

            {/* TECHNIQUE */}
            <Typography variant='div' component="div" sx={{ background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))" }}>
                <div style={{ borderBottom: "1px solid white" }} className="mx-1 mx-md-3 d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 pe-sm-3">
                    <div className="p-3 py-4" style={{ color: "white" }}>
                        TECHNIQUE
                    </div>
                    {technique && (
                        <div className='d-flex my-4 my-sm-0'>
                            <Button onClick={() => setTechnique(false)} sx={{
                                border: "1px solid white",
                                background: "rgba(255, 255, 255, 0.60)",
                                color: "black",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" }
                            }} className="me-3 py-1 px-3">
                                Cancel
                            </Button>
                            <Button onClick={() => setTechnique(false)} sx={{
                                border: "1px solid white",
                                background: "black",
                                color: "white",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "black" }
                            }} className="py-2 px-4"> Save</Button>
                        </div>
                    )}
                </div>
                {technique ? (
                    <div className="p-3 mt-3">
                        <textarea placeholder="Insert description about your art technique ..." className="p-3" style={{ minWidth: "100%", maxWidth: "100%", minHeight: "200px", maxHeight: "200px", border: "1px solid #D69D66", background: "transparent", color: "white" }}></textarea>
                    </div>
                ) : (
                    <div className="mt-3 p-3 d-flex justify-content-between align-items-center">
                        <div className="text-white">
                            No techniques found
                        </div>
                        <Button onClick={() => setTechnique(true)} sx={{ border: "1px solid white", background: "rgba(255, 255, 255, 0.60)", color: "black", borderRadius: "50px", "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" } }} className="p-1 px-3"><DriveFileRenameOutlineIcon className="me-1" style={{ width: "20px", height: "20px", color: "black" }} /> Edit</Button>

                    </div>
                )}
            </Typography>

            {/* CONTACT INFO & SOCIAL MEDIA */}

            <Typography variant='div' component="div" sx={{ background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))" }}>
                <div style={{ borderBottom: "1px solid white" }} className="mx-1 mx-md-3 d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 pe-sm-3">
                    <div className="p-3 py-4" style={{ color: "white" }}>
                        CONTACT INFO & SOCIAL MEDIA
                    </div>
                    {contactInfo && (
                        <div className='d-flex my-4 my-sm-0'>
                            <Button onClick={() => setContactInfo(false)} sx={{
                                border: "1px solid white",
                                background: "rgba(255, 255, 255, 0.60)",
                                color: "black",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" }
                            }} className="me-3 py-1 px-3">
                                Cancel
                            </Button>
                            <Button onClick={() => setContactInfo(false)} sx={{
                                border: "1px solid white",
                                background: "black",
                                color: "white",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "black" }
                            }} className="py-2 px-4"> Save</Button>
                        </div>
                    )}
                </div>
                {contactInfo ? (
                    <div className="p-3 mt-3">

                        {/* <textarea placeholder="Insert description about your art technique ..." className="p-3" style={{ minWidth: "100%", maxWidth: "100%", minHeight: "200px", maxHeight: "200px", border: "1px solid #D69D66", background: "transparent", color: "white" }}></textarea> */}
                    </div>
                ) : (
                    <div className="mt-3 p-3 d-flex justify-content-between align-items-center">
                        <div className="text-white">
                            No contact information added
                        </div>
                        <Button onClick={() => setContactInfo(true)} sx={{ border: "1px solid white", background: "rgba(255, 255, 255, 0.60)", color: "black", borderRadius: "50px", "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" } }} className="p-1 px-3"><DriveFileRenameOutlineIcon className="me-1" style={{ width: "20px", height: "20px", color: "black" }} /> Edit</Button>

                    </div>
                )}
            </Typography>

            {/* AWARDS */}

            <Typography variant='div' component="div" sx={{ background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))" }}>
                <div style={{ borderBottom: "1px solid white" }} className="mx-1 mx-md-3 d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 pe-sm-3">
                    <div className="p-3 py-4" style={{ color: "white" }}>
                        AWARDS
                    </div>
                    {awards && (
                        <div className='d-flex my-4 my-sm-0'>
                            <Button onClick={() => setAwards(false)} sx={{
                                border: "1px solid white",
                                background: "rgba(255, 255, 255, 0.60)",
                                color: "black",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" }
                            }} className="me-3 py-1 px-3">
                                Cancel
                            </Button>
                            <Button onClick={() => setAwards(false)} sx={{
                                border: "1px solid white",
                                background: "black",
                                color: "white",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "black" }
                            }} className="py-2 px-4"> Save</Button>
                        </div>
                    )}
                </div>
                {awards ? (
                    <div className="p-3 mt-3">
                        <textarea placeholder="Insert description about your art awards ..." className="p-3" style={{ minWidth: "100%", maxWidth: "100%", minHeight: "200px", maxHeight: "200px", border: "1px solid #D69D66", background: "transparent", color: "white" }}></textarea>
                        <div className="my-4 d-flex align-items-center justify-content-center" style={{ border: "1px solid #D69D66", height: "170px" }}>

                            <label htmlFor="uploadImage" className="d-flex flex-column align-items-center" style={{ background: "transparent", border: "0", color: "white", cursor: "pointer" }}>
                                <AddAPhotoIcon style={{ width: "50px", height: "50px" }} />
                                <span className="mt-3">Add images</span>
                            </label>
                            <input onChange={(e) => setImageAwards(e.target.files[0])} className="d-none" id="uploadImage" type="file" />

                        </div>
                    </div>
                ) : (
                    <div className="mt-3 p-3 d-flex justify-content-between align-items-center">
                        <div className="text-white">
                            No awards added
                        </div>
                        <Button onClick={() => setAwards(true)} sx={{ border: "1px solid white", background: "rgba(255, 255, 255, 0.60)", color: "black", borderRadius: "50px", "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" } }} className="p-1 px-3"><DriveFileRenameOutlineIcon className="me-1" style={{ width: "20px", height: "20px", color: "black" }} /> Edit</Button>

                    </div>
                )}
            </Typography>

            {/* PAST EXHIBITIONS */}

            <Typography variant='div' component="div" sx={{ background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))" }}>
                <div style={{ borderBottom: "1px solid white" }} className="mx-1 mx-md-3 d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 pe-sm-3">
                    <div className="p-3 py-4" style={{ color: "white" }}>
                        PAST EXHIBITIONS
                    </div>
                    {pastExhibitions && (
                        <div className='d-flex my-4 my-sm-0'>
                            <Button onClick={() => setPastExhibitions(false)} sx={{
                                border: "1px solid white",
                                background: "rgba(255, 255, 255, 0.60)",
                                color: "black",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" }
                            }} className="me-3 py-1 px-3">
                                Cancel
                            </Button>
                            <Button onClick={() => setPastExhibitions(false)} sx={{
                                border: "1px solid white",
                                background: "black",
                                color: "white",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "black" }
                            }} className="py-2 px-4"> Save</Button>
                        </div>
                    )}
                </div>
                {pastExhibitions ? (
                    <div className="p-3 mt-3">
                        <textarea placeholder="Insert description of your past exhibitionss ..." className="p-3" style={{ minWidth: "100%", maxWidth: "100%", minHeight: "200px", maxHeight: "200px", border: "1px solid #D69D66", background: "transparent", color: "white" }}></textarea>
                        <div className="my-4 d-flex align-items-center justify-content-center" style={{ border: "1px solid #D69D66", height: "170px" }}>

                            <label htmlFor="uploadImage" className="d-flex flex-column align-items-center" style={{ background: "transparent", border: "0", color: "white", cursor: "pointer" }}>
                                <AddAPhotoIcon style={{ width: "50px", height: "50px" }} />
                                <span className="mt-3">Add images</span>
                            </label>
                            <input onChange={(e) => setPastExhibitions(e.target.files[0])} className="d-none" id="uploadImage" type="file" />

                        </div>
                    </div>
                ) : (
                    <div className="mt-3 p-3 d-flex justify-content-between align-items-center">
                        <div className="text-white">
                            No past exhibitions found
                        </div>
                        <Button onClick={() => setPastExhibitions(true)} sx={{ border: "1px solid white", background: "rgba(255, 255, 255, 0.60)", color: "black", borderRadius: "50px", "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" } }} className="p-1 px-3"><DriveFileRenameOutlineIcon className="me-1" style={{ width: "20px", height: "20px", color: "black" }} /> Edit</Button>

                    </div>
                )}
            </Typography>

            {/* Artworks */}

            <Typography variant='div' component="div" sx={{ background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))" }}>
                <div style={{ borderBottom: "1px solid white" }} className="mx-1 mx-md-3 d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 pe-sm-3">
                    <div className="p-3 py-4" style={{ color: "white" }}>
                        Artworks
                    </div>
                    {artworks && (
                        <div className='d-flex my-4 my-sm-0'>
                            <Button onClick={() => setArtworks(false)} sx={{
                                border: "1px solid white",
                                background: "rgba(255, 255, 255, 0.60)",
                                color: "black",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" }
                            }} className="me-3 py-1 px-3">
                                Cancel
                            </Button>
                            <Button onClick={() => setArtworks(false)} sx={{
                                border: "1px solid white",
                                background: "black",
                                color: "white",
                                borderRadius: "50px",
                                height: "40px",
                                "&:hover": { opacity: "0.7", background: "black" }
                            }} className="py-2 px-4"> Save</Button>
                        </div>
                    )}
                </div>
                {artworks ? (
                    <div className="p-3 mt-3">
                        <textarea placeholder="Insert description about your artworks ..." className="p-3" style={{ minWidth: "100%", maxWidth: "100%", minHeight: "200px", maxHeight: "200px", border: "1px solid #D69D66", background: "transparent", color: "white" }}></textarea>
                        <div className="my-4 d-flex align-items-center justify-content-center" style={{ border: "1px solid #D69D66", height: "170px" }}>

                            <label htmlFor="uploadImage" className="d-flex flex-column align-items-center" style={{ background: "transparent", border: "0", color: "white", cursor: "pointer" }}>
                                <AddAPhotoIcon style={{ width: "50px", height: "50px" }} />
                                <span className="mt-3">Add images</span>
                            </label>
                            <input onChange={(e) => setArtworks(e.target.files[0])} className="d-none" id="uploadImage" type="file" />

                        </div>
                    </div>
                ) : (
                    <div className="mt-3 p-3 d-flex justify-content-between align-items-center">
                        <div className="text-white">
                            No artworks added
                        </div>
                        <Button onClick={() => setArtworks(true)} sx={{ border: "1px solid white", background: "rgba(255, 255, 255, 0.60)", color: "black", borderRadius: "50px", "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" } }} className="p-1 px-3"><DriveFileRenameOutlineIcon className="me-1" style={{ width: "20px", height: "20px", color: "black" }} /> Edit</Button>

                    </div>
                )}
            </Typography>
            {/* PERSONAL INFO */}

            <Typography variant='div' component="div" sx={{ background: "var(--GreydARK, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))" }}>
                <div style={{ borderBottom: "1px solid white" }} className="mx-1 mx-md-3 d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4 pe-sm-3">
                    <div className="p-3 py-4" style={{ color: "white" }}>
                        PERSONAL INFO
                    </div>
                    <div className='d-flex my-4 my-sm-0'>
                        <Button sx={{
                            border: "1px solid white",
                            background: "rgba(255, 255, 255, 0.60)",
                            color: "black",
                            borderRadius: "50px",
                            height: "40px",
                            "&:hover": { opacity: "0.7", background: "rgba(255, 255, 255, 0.60)" }
                        }} className="me-3 py-1 px-3">
                            Cancel
                        </Button>
                        <Button sx={{
                            border: "1px solid white",
                            background: "black",
                            color: "white",
                            borderRadius: "50px",
                            height: "40px",
                            "&:hover": { opacity: "0.7", background: "black" }
                        }} className="py-2 px-4"> Save</Button>
                    </div>
                </div>
                <div className="p-3 mt-3">
                    <TextField 
                    className="me-2 my-2"
                    sx={{color: "White"}}

                        label="City"
                        id="outlined-size-small"

                        size="small"
                        color="warning"
                    />
                    <TextField
                    className="me-2 my-2"
                    sx={{color: "White"}}

                        label="Country"
                        id="outlined-size-small"

                        size="small"
                        color="warning"
                    />
                    <TextField
                    className="me-2 my-2"
                    sx={{color: "White"}}

                        label="Languages"
                        id="outlined-size-small"

                        size="small"
                        color="warning"
                    />
                    <TextField
                    className="me-2 my-2"
                    sx={{color: "White"}}

                        label="Website"
                        id="outlined-size-small"

                        size="small"
                        color="warning"
                    />
                    <TextField
                    className="me-2 my-2"
                    sx={{color: "White"}}

                        label="Gender"
                        id="outlined-size-small"

                        size="small"
                        color="warning"
                    />
                    <TextField
                    className="me-2 my-2"
                    sx={{color: "White"}}

                        label="Birth"
                        id="outlined-size-small"

                        size="small"
                        color="warning"
                    />
                </div>
            </Typography>

        </>
    )
}

export default CardsAdd
