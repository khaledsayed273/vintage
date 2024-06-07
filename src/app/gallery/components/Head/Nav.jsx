"use client"
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Typography from '@mui/material/Typography'
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
            id: "artworks",
            name: "artworks",
            path: "/gallery/artworks",
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
        <div className='container'>
            <div className='px-lg-4'>
                <List className='px-lg-5' sx={{
                    display: "flex",
                    padding: "0",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid white",
                    flexDirection: { xs: "column", md: "row" }

                }}>
                    {navItems.map((item) => {

                        const isActive = pathName === item.path

                        return (
                            <li key={item.id}>
                                <Link href={item.path} className={`navlink  mx-2 ${isActive && "active"}`}>
                                    <ListItemButton className='font linkTextGallery' sx={{
                                        padding: "0",
                                        fontSize: { md: "20px" },
                                        "&:hover": {
                                            background: "none"
                                        }
                                    }}>
                                        {item.name}
                                    </ListItemButton>
                                </Link>
                            </li>
                        )
                    })}
                </List>
            </div>


        </div>
    )
}

export default Nav
