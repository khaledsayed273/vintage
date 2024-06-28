import React, { Suspense } from 'react'
import Head from "./components/Head/Head"
import Nav from "./components/Head/Nav"
import Loading from "./loading"

export const metadata = {
    title: "gallery",
    description: "gallery description",
    keywords: "gallery keywords"

}
export default function layout({ children }) {
    
    return (
        <div className='container px-3 md:px-10 mx-auto'>
            <Head />
            <Nav />
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>

        </div>
    )
}





