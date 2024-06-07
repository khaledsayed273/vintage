import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import img1 from "../../images/all img/Frame 153.png"
import img2 from "../../images/all img/Frame 151.png"
import img3 from "../../images/all img/Frame 152.png"
import Link from 'next/link'
import Image from 'next/image'

function Page() {

    const data = [
        {
            id: 1,
            img: img1,
            title: "8 Tastemaking Tokyo Galleries to Know"
        },
        {
            id: 2,
            img: img2,
            title: "8 Tastemaking Tokyo Galleries to Know"
        },
        {
            id: 3,
            img: img3,
            title: "8 Tastemaking Tokyo Galleries to Know"
        },
    ]

    return (
        <div className='container font text-white'>
            <div>
                <h3 className='px-lg-5' style={{
                    padding: "30px 0px 20px",
                    fontSize: "26px",
                    letterSpacing: "0.26px"

                }}>
                    About
                </h3>

                <div
                    style={{
                        background: "linear-gradient(0deg, rgba(58, 53, 0, 0.2), rgba(58, 53, 0, 0.2)),linear-gradient(180deg, #242319 0%, #404040 100%)",
                        padding: "40px 45px"


                    }}
                >
                    <p style={{ fontSize: "16px", lineHeight: "26px" }}>
                        After opening a rare contemporary gallery in Singapore in 1987, the owner, Akio
                        Tamura, moved to Tokyo in 1991 and started an art gallery. He has two galleries in Japan and has also proposed exhibitions to external galleries. The main
                        concept of his activities is to propose &apos; Art works that make you want to look at them with empathy again and again in your daily life.&apos; With empathy as a keyword,
                        we will continue our activities to find artists who are worth introducing to the world today from the perspective of Kyoto. After opening a rare contemporary gallery in Singapore in 1987, the owner,
                        Akio Tamura, moved to Tokyo in 1991 and started an art gallery. He has two galleries in Japan and has also
                    </p>
                    <span>https://arte-contemporary.gallery</span>

                </div>

            </div>

            <div className='mt-5 px-lg-5'>
                <div className='d-flex justify-content-between align-items-center'>

                    <h3 style={{
                        fontSize: "26px",
                        textTransform: "uppercase"
                    }}>
                        Articles
                    </h3>

                    <Link href="/" style={{
                        fontSize: "16px",
                        textTransform: "uppercase",
                        fontWeight: "500",
                        color: "white",
                        textDecoration: "none"
                    }}>
                        View all ...
                    </Link>

                </div>


                <div className='mt-5'>

                    <Grid container spacing={{ md: 5, lg: 10 }}>
                        {data.map((item) => (

                            <Grid key={item.id} item xs={12} md={4} className='my-3 d-flex justify-content-center'>
                                <div className='d-flex align-items-center flex-column justify-content-center' key={item.id} >

                                    <Typography variant='div' component="div" sx={{
                                        overflow: "hidden",
                                        borderRadius: "80px",
                                        height: "200px",
                                        width: { xs: "300px", md: "200px", lg: "300px" },
                                        position: "relative"
                                    }}>
                                        <Image sizes='(max-width:992px) 100vw' fill src={item.img} alt="img" />
                                    </Typography>
                                    <Typography variant='h3' component="h3" className='my-4' sx={{
                                        fontSize: {xs:"16px", lg:"18px"},
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        textAlign: "center",
                                        lineHeight: "30px"
                                    }}>
                                        {item.title}
                                    </Typography>
                                </div>

                            </Grid>

                        ))}
                    </Grid>

                </div>

            </div>


        </div>
    )
}

export default Page
