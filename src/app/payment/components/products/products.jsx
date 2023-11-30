import React from 'react'
import img from "../../../../images/all img/Frame 150.png"
import { Typography } from '@mui/material';
import Image from 'next/image';

function Products() {

  const data = [
    {
      id: 1,
      img: img,
      name: "Mariana Oros",
      country: "Germany",
      title: "Work well this is a unique painting",
      date: "2020 ,Arto Gallery.",
      price: "650",
      tax: "0",
      shipping: "60",
      total: "710",
      description: "The canvas is stretched on wooden chassis and ready to hang it on the wall. Does not require a frame because the edges of the painting are painted in the same color tones."
    }
  ]

  return (
    <div className="mt-5">
      {data.map((item) => (
        <div style={{ borderRadius: "40px" }} key={item.id} className='cart-payment p-3 pt-5 mb-5 text-white'>
          <div style={{borderBottom: "1px solid white"}}>
            <div>
              <Image height={56} width={48} src={item.img} />
            </div>
            <div className="mt-3 d-flex flex-wrap">
              <div className="me-5">
                {item.name}
              </div>
              <div>
                • {item.country}
              </div>
            </div>
            <div className="my-3">
              {item.title}
            </div>
            <div className="my-3">
              {item.date}
            </div>
            <div className="my-3">
              Price: {item.price} $
            </div>
          </div>
          <div style={{borderBottom: "1px solid white"}}>
           
            <div className="mt-3 d-flex flex-wrap justify-content-between pe-3">
              <div className="me-5">
                Price
              </div>
              <div>
                 {item.price} $
              </div>
            </div>
            <div className="mt-3 d-flex flex-wrap justify-content-between pe-3">
              <div className="me-5">
              Tax* 
              </div>
              <div>
                 {item.tax} $
              </div>
            </div>
            <div className="mt-3 d-flex flex-wrap justify-content-between pe-3">
              <div className="me-5">
              Shipping 
              </div>
              <div>
                 {item.shipping} $
              </div>
            </div>
            <div className="mt-3 d-flex flex-wrap justify-content-between pe-3 pb-3">
              <div className="me-5">
              Total 
              </div>
              <div>
                 {item.total} $
              </div>
            </div>
           
            
    
          </div>
          <div className="py-3">
            {item.description}
          </div>
        </div>
      ))}


    </div>
  )
}

export default Products
