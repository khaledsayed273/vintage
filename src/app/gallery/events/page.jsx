import img1 from "../../../images//all img/Frame 152.png"
import img2 from "../../../images//all img/Frame 151.png"
import style from "./Events.module.css"
import Image from 'next/image'
import PastExhibition from "./PastExhibition"

function Events() {

    const data = [
        {
            id: 1,
            title: "Current Exhibition",
            titleCard: "Laguna Niguel - June 8th Art After Hours",
            date: "June 8 – 30, 2023",
            country: "Laguna Niguel",
            discreption: 'Join us at our monthly "2nd Thursday - Art After Hours" in our gallery at the Laguna Design Center on June 8th from 5:00pm–7:00pm! This month we will feature artworks by French artist duo Leo & Steph and American painter Tom Lieber.',
            img: img1
        },
        {
            id: 2,
            title: "Upcoming Exhibition",
            titleCard: "Laguna Niguel - June 8th Art After Hours",
            date: "June 8 – 30, 2023",
            country: "Laguna Niguel",
            discreption: 'Join us at our monthly "2nd Thursday - Art After Hours" in our gallery at the Laguna Design Center on June 8th from 5:00pm–7:00pm! This month we will feature artworks by French artist duo Leo & Steph and American painter Tom Lieber.',
            img: img2
        },
    ]


    return (
        <div className='font text-white mt-5'>

            {data.map((item) => (
                <div key={item.id} style={{
                    margin: "50px 0"
                }}>

                    <h3
                        className='ps-md-4 ms-md-4'
                        style={{
                            fontSize: "26px",
                            fontWeight: "400",
                        }}
                    >
                        {item.title}
                    </h3>

                    <div
                        className='p-4 md:p-5 '
                        style={{
                            background: "var(--greyd-ark, linear-gradient(0deg, rgba(58, 53, 0, 0.20) 0%, rgba(58, 53, 0, 0.20) 100%), linear-gradient(180deg, #242319 0%, #404040 100%))",
                            margin: "25px 0",
                        }}
                    >
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-10 px-5'>

                            <div className='lg:col-span-2'>

                                <div className='md:pe-5  my-5 md:my-0 '>
                                    <h3 className={style.text}>
                                        {item.titleCard}
                                    </h3>

                                    <div className='my-5 '>
                                        <h3
                                            className={style.text}
                                            style={{
                                                marginTop: "70px"
                                            }}>{item.date}
                                        </h3>
                                        <p
                                            className={style.text}
                                            style={{
                                                marginTop: "5px"
                                            }}
                                        >{item.country}
                                        </p>

                                    </div>

                                    <p className='md:text-lg my-8'>
                                        {item.discreption}
                                    </p>


                                    <div className='mt-5'>
                                        <button className='py-2.5 px-5 rounded-md hover:opacity-80 text-white text-sm'
                                            style={{
                                                border: '1px solid var(--solid-gold, #D69D66)',
                                            }}

                                        >View More ...
                                        </button>
                                    </div>
                                </div>
                            </div>
                                <div className='flex justify-center lg:justify-end '>
                                    <div className='relative overflow-hidden rounded-[131px]'
                                        style={{
                                            height: "398.571px",
                                            width: "298.678px",
                                            border: "2px solid var(--solid-gold, #D69D66)",
                                        }}
                                    >
                                        <Image sizes='100%' fill src={item.img} alt="" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            ))}

            <PastExhibition />

        </div>
    )
}

export default Events
