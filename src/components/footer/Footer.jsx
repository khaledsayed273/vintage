import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer
            className='font'
            style={{
                background: "#222222",
                minHeight: "400px"
            }}
        >
            <div className="container  p-3">
                <Grid container>

                    <Grid item xs={12} sm={6} md={3} lg={2} className='d-flex justify-content-md-center justify-content-lg-start'>
                        <Typography component="div" variant='div'>
                            <ul className='d-flex flex-column  text-white align-items-start align-items-md-center my-3'>
                                <h3 style={{
                                    color: "#FFFCF7",
                                    fontSize: "36px",
                                    fontWeight: "400",
                                    margin: "20px 0"
                                }}>Vintage</h3>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="galleries">Galleries</Link>
                                </li>
                                <li>
                                    <Link href="artworks">artworks</Link>
                                </li>
                                <li>
                                    <Link href="exhibitions">exhibitions</Link>
                                </li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} lg={4} className='d-flex justify-content-md-center'>
                        <Typography component="div" variant='div'>
                            <ul className='d-flex flex-column  text-white align-items-start align-items-md-center my-3'>
                                <h3 style={{
                                    color: "#FFFCF7",
                                    fontSize: "36px",
                                    fontWeight: "400",
                                    margin: "20px 0"
                                }}>about</h3>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="galleries">Galleries</Link>
                                </li>
                                <li>
                                    <Link href="artworks">artworks</Link>
                                </li>
                                <li>
                                    <Link href="exhibitions">exhibitions</Link>
                                </li>
                            </ul>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} lg={3} className='d-flex justify-content-md-center'>
                        <Typography component="div" variant='div'>
                            <ul className='d-flex flex-column  text-white align-items-start align-items-md-center my-3'>
                                <h3 style={{
                                    color: "#FFFCF7",
                                    fontSize: "36px",
                                    fontWeight: "400",
                                    margin: "20px 0"
                                }}>
                                    contact</h3>
                                <li>
                                    <Link href="mail">mail</Link>
                                </li>
                                <li>
                                    <Link href="mail">whatsapp</Link>
                                </li>

                            </ul>
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} lg={3} className='d-flex justify-content-md-center justify-content-lg-end'>
                        <Typography variant='div'>
                            <ul className='d-flex flex-column  text-white align-items-start align-items-md-center my-3'>
                                <h3 style={{
                                    color: "#FFFCF7",
                                    fontSize: "36px",
                                    fontWeight: "400",
                                    margin: "20px 0"
                                }}>
                                    Social</h3>
                                <li>
                                    <Link href="instgram">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="facebook">Facebook</Link>
                                </li>
                            </ul>
                        </Typography>
                    </Grid>

                </Grid>
            </div>
        </footer>
    )
}

export default Footer
