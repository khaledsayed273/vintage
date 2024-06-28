import img from "../../../../images/all img/GalleryImg.png"
import img2 from "../../../../images/all img/Frame 148.png"
import Image from 'next/image'

function Head() {
    return (
        <div className='font' style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.25)"
        }}>
            <div className='relative rounded-[250px] overflow-hidden h-[250px] sm:h-[240px] md:h-[320px] lg:h-[400px] '
                style={{
                    border: "1px solid var(--solid-gold, #D69D66)",
                }}
            >
                <Image
                    fill
                    sizes='(max-width:992px) 100vw'
                    src={img} alt="img_gallery"
                    style={{ transform: "scale(1.01)" }}
                />
            </div>
            <div className='flex justify-between my-10 flex-wrap lg:px-5 '>
                <div className='flex items-center'>
                    <div className='rounded-[131px] h-[70px] w-[60px] overflow-hidden relative' style={{
                        border: "1px solid #D29F1B",
                    }}>
                        <Image priority sizes='(max-width:992px) 100vw' style={{ objectFit: "cover" }} fill src={img2} alt="logo" />
                    </div>
                    <div className='flex flex-col ms-3'>
                        <div className='mb-2 text-white text-xl sm:text-2xl md:text-4xl'>
                            Arte Contemporary
                        </div>
                        <span className='text-white'>
                            cairo
                        </span>
                    </div>
                </div>
                <div>
                    <button className='bg-white border py-1	md:py-2	px-8 md:px-12 rounded-xl font-medium capitalize mt-5 hover:opacity-80'>
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Head