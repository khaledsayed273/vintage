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
        <div className='font text-white'>
            <div>
                <h3 className='lg:px-5 pt-9 pb-6 text-2xl' >
                    About
                </h3>

                <div className='py-10 px-11'
                    style={{
                        background: "linear-gradient(0deg, rgba(58, 53, 0, 0.2), rgba(58, 53, 0, 0.2)),linear-gradient(180deg, #242319 0%, #404040 100%)",
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

            <div className='mt-10 lg:px-5 '>
                <div className='flex justify-between  items-center'>

                    <h3 className='text-2xl uppercase'>
                        Articles
                    </h3>

                    <Link className='text-white uppercase' href="/" >
                        View all ...
                    </Link>

                </div>


                <div className='mt-10'>

                    <div className='grid md:grid-cols-3 gap-5 md:gap-10'>
                        {data.map((item) => (

                            <Link href={"/"} key={item.id} className='mt-7 mb-16 flex justify-center hover:scale-110 transition-all duration-300'>
                                <div className='flex items-center flex-col justify-center'>

                                    <div className='overflow-hidden rounded-[80px] h-[200px] relative w-[300px] md:w-[200px] lg:w-[300px]'>
                                        <Image sizes='(max-width:992px) 100vw' fill src={item.img} alt="img" />
                                    </div>
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

                            </Link>

                        ))}
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Page
