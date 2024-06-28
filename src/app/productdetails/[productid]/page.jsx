import img from "../../../images/all img/Frame 148.png"
import img2 from "../../../images/all img/Frame 147.png"
import CardMore from "../components/CardMore/CardMore"
import Nav from "../components/Nav/Nav"
import Suggest from "../components/Suggest/Suggest"
import Details from "../components/Details/Details"

function Page() {

  const data =
  {
    id: 1,
    img: img,
    title: "A inflori papadie",
    userName: "Mariana Oros",
    userImg: img2,
    country: "Germany",
    year: "2023",
    material: "acrylic on canvas",
    size: "75 cm x 115 cm",
    price: "650",
    describe1: "The canvas is stretched on wooden chassis and ready to hang it on the wall. Does not require a frame because the edges of the painting are painted in the same color tones, but you can opt for an extr",
    describe2: "The canvas is stretched on wooden chassis and ready to hang it on the wall. Does not require a frame because the edges of the painting are painted in the same color tones, but you can opt for",
    describe3: "The canvas is stretched on wooden chassis and ready to hang it on the wall. Does not requirtr ",
    DomesticShipping: "150",
    InternationalShipping: "400",
    details: "Lorem ipsum dolor sit amet consectetur. Ultricies viverra diam malesuada erat lectus non felis. Cursus tellus sem nibh viverra proin. Quam sapien pretium sit purus velit eu. Nisl tellus fermentum sagittis suspendisse. Amet id scelerisque fermentum ipsum duis et sed. Bibendum sit odio dui egestas proin nec lacus ullamcorper. Porttitor sed in gravida massa et. Egestas morbi lacus ut amet nunc. Fermentum integer nunc vitae ullamcorper diam nisl sed pretium. Lectus feugiat tincidunt imperdiet et. Sapien quis posuere amet venenatis. Consectetur quam faucibus leo egestas augue malesuada. In lectus nam elit congue dignissim ut accumsan scelerisque integer. Leo sed sollicitudin commodo nibh netus maecenas sed faucibus lorem. Sapien sit cum aliquam integer purus odio. Ac quis tincidunt tincidunt sagittis. Diam volutpat arcu blandit convallis convallis mauris fringilla viverra a. Nunc id consequat sit facilisis neque venenatis orci quis. Leo habitasse mattis amet gravida iaculis consequat purus adipiscing dictumst. Duis et posuere facilisi ornare quam dictum. Elit ac felis eu nisi quis enim ut. Lacinia id egestas vestibulum in at magna lacus est. Felis scelerisque pulvinar senectus quis et ultricies semper. Tempor ultrices id urna duis neque. Viverra ultrices at maecenas donec nisi. Felis non risus massa libero tempus. Est malesuada egestas velit velit duis. Diam diam sit odio faucibus ridiculus in eget volutpat. Fringilla tellus sed aliquam molestie et. Facilisis vitae consequat faucibus nibh faucibus feugiat cursus. A dui metus turpis commodo. Sagittis egestas eget malesuada a ornare nisl non natoque volutpat. Malesuada sociis volutpat adipiscing sit consectetur enim lorem duis. In adipiscing nulla venenatis venenatis enim rhoncus sed vitae. Scelerisque ultrices sollicitudin luctus integer velit. Mauris mollis ac risus elit cras scelerisque. Facilisis cras massa ipsum varius id. Suspendisse ipsum turpis in consectetur ac cursus porttitor"
  }

  return (

    <>
      <div className='container mx-auto px-3 md:px-10 font text-white'>
        <Details data={data} />
        <CardMore data={data} />
        <Nav />
        <Suggest />
      </div>
    </>
  )
}

export default Page
