import React from 'react'
import HeadExhibitions from './components/HeadExhibitions'
import Exhibitions from './components/Exhibitions'
import SearchExhibitions from './components/SearchExhibitions';

function page() {
    return (
        <div className='container mx-auto px-3 md:px-10'>
            <HeadExhibitions />
            <SearchExhibitions/>
            <Exhibitions/>
        </div>
    )
}

export default page
