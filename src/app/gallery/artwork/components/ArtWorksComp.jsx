import img1 from "../../../../images/all img/Frame 146.png"
import img2 from "../../../../images/all img/Frame 147.png"
import img3 from "../../../../images/all img/Frame 148.png"
import img4 from "../../../../images/all img/Frame 149.png"
import img5 from "../../../../images/all img/Frame 150.png"
import img6 from "../../../../images/all img/Frame 151.png"
import img7 from "../../../../images/all img/Frame 152.png"
import img8 from "../../../../images/all img/Frame 153.png"
import img9 from "../../../../images/all img/Frame 154.png"
import img10 from "../../../../images/all img/Frame 155.png"
import Left from "./left/Left"
import Right from "./right/Right"

function ArtWorksComp({ data }) {
    const data1 = [
        {
            id: 0,
            img: img1,
            title: "Queen. In the south",
            name: "Almat Adams",
            price: "$ 1000",
            sold: false
        },
        {
            id: 1,
            img: img5,
            title: "Self portrait",
            name: "Peter Gemy",
            price: "500",
            sold: false
        },
        {
            id: 2,
            img: img2,
            title: "Queen. of dakness",
            name: "MIna Fady",
            price: "1000",
            sold: false
        },
        {
            id: 3,
            img: img3,
            title: "Black party",
            name: "Almat Adams",
            price: "400",
            sold: true
        },
        {
            id: 4,
            img: img4,
            title: "Queen. In the south",
            name: "Emy Adams",
            price: "2000",
            sold: false
        },
        {
            id: 5,
            img: img6,
            title: "Queen. In the south",
            name: "Almat Adams",
            price: "$ 1000",
            sold: false
        },
        {
            id: 6,
            img: img7,
            title: "Self portrait",
            name: "Peter Gemy",
            price: "500",
            sold: false
        },
        {
            id: 7,
            img: img8,
            title: "Queen. of dakness",
            name: "MIna Fady",
            price: "1000",
            sold: false
        },
        {
            id: 8,
            img: img9,
            title: "Black party",
            name: "Almat Adams",
            price: "400",
            sold: false
        },
        {
            id: 9,
            img: img10,
            title: "Queen. In the south",
            name: "Emy Adams",
            price: "2000",
            sold: false
        },
        {
            id: 10,
            img: img1,
            title: "Queen. In the south",
            name: "Almat Adams",
            price: "$ 1000",
            sold: false
        },
        {
            id: 11,
            img: img5,
            title: "Self portrait",
            name: "Peter Gemy",
            price: "500",
            sold: false
        },
        {
            id: 12,
            img: img2,
            title: "Queen. of dakness",
            name: "MIna Fady",
            price: "1000",
            sold: false
        },
        {
            id: 13,
            img: img3,
            title: "Black party",
            name: "Almat Adams",
            price: "400",
            sold: true
        },
        {
            id: 14,
            img: img4,
            title: "Queen. In the south",
            name: "Emy Adams",
            price: "2000",
            sold: false
        },
        {
            id: 15,
            img: img6,
            title: "Queen. In the south",
            name: "Almat Adams",
            price: "$ 1000",
            sold: false
        },
        {
            id: 16,
            img: img7,
            title: "Self portrait",
            name: "Peter Gemy",
            price: "500",
            sold: false
        },
        {
            id: 17,
            img: img8,
            title: "Queen. of dakness",
            name: "MIna Fady",
            price: "1000",
            sold: false
        },
        {
            id: 18,
            img: img9,
            title: "Black party",
            name: "Almat Adams",
            price: "400",
            sold: false
        },
        {
            id: 19,
            img: img10,
            title: "Queen. In the south",
            name: "Emy Adams",
            price: "2000",
            sold: false
        },
    ]
    return (

        <div className='font container mx-auto px-0 text-white'>
            <div className='grid  lg:grid-cols-3 xl:grid-cols-4' >
                <Left />
                <Right data={data ? data : data1} />
            </div>
        </div>
    )
}

export default ArtWorksComp
