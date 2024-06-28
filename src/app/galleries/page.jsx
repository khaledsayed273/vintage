import HeadGalleries from "./components/HeadGalleries"
import Galleries from './components/Galleries';

const page = () => {
    return(
        <div className="container px-3 md:px-10 mx-auto">
        <HeadGalleries/>
        <Galleries/>
        </div>
    )

}


export default page