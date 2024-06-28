import React from 'react'
import Checkout from './components/checkout/Checkout'

function page() {
    return (
        <div className='container mx-auto px-3 md:px-10'>
            <div className="row">
                <Checkout />
            </div>
        </div>
    )
}

export default page
