import React from 'react'
import HeadExhibitions from './components/HeadExhibitions'
import Exhibitions from './components/Exhibitions'
import SearchExhibitions from './components/SearchExhibitions';

function page() {
    return (
        <>
            {/* <HeadExhibitions /> */}
            <SearchExhibitions/>
            <Exhibitions/>
        </>
    )
}

export default page
