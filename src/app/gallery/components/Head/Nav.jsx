"use client"
import ListItemButton from '@mui/material/ListItemButton'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

function Nav() {

    const pathName = usePathname()

    const navItems = [
        {
            id: "overview",
            name: "overview",
            path: "/gallery",
        },
        {
            id: "events",
            name: "events",
            path: "/gallery/events",
        },
        {
            id: "artwork",
            name: "artwork",
            path: "/gallery/artwork",
        },
        {
            id: "artists",
            name: "artists",
            path: "/gallery/artists",
        },
        {
            id: "contact",
            name: "contact",
            path: "/gallery/contact",
        },
    ];


    return (
            <div className='lg:px-8 '>
                <ul className='lg:px-5  flex justify-between items-center flex-col md:flex-row border-b py-8'>
                    {navItems.map((item) => {
                        const isActive = pathName === item.path
                        return (
                            <li className='py-7 md:py-0' key={item.id}>
                                <Link href={item.path} className={`navlink  mx-2 ${isActive && "active"}`}>
                                    <span className='font linkTextGallery md:text-xl' >
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>


    )
}

export default Nav
