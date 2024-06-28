"use client"
import logo from "../../images/logo.png"
import artWorksIcon from "../../images/artworks.png"
import moreIcon from "../../images/more.png"
import arrowIcon from "../../images/arrow.png"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useContext } from 'react'
import galaryImage from "../../images/all img/Frame 149.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { usePathname } from 'next/navigation'
import { Context } from '../../store/Context'
function Header() {
    const { deleteFromCart, cartsData } = useContext(Context)
    const pathName = usePathname()
    const [expandedItem, setExpandedItem] = useState(null);
    const [showNav, setShowNav] = useState(false);
    const handleItemClick = (itemId) => {
        setExpandedItem((prevExpandedItem) => (prevExpandedItem === itemId ? null : itemId));
    };

    useEffect(() => {
        if (showNav) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (typeof window !== 'undefined' && window.document && window.document.body) {
                window.document.body.style.overflowY = 'hidden';
            }
        } else {
            if (typeof window !== 'undefined' && window.document && window.document.body) {
                window.document.body.style.overflowY = 'auto';
            }
        }
    }, [showNav])

    const carts = [
        {
            id: 1,
            artist: "Aya Alaa.",
            name: "Work well this is a unique painting",
            price: 650,
            img: galaryImage
        },
        {
            id: 2,
            artist: "Aya Alaa.",
            name: "Work well this is a unique painting",
            price: 650,
            img: galaryImage
        },
        {
            id: 3,
            artist: "Aya Alaa.",
            name: "Work well this is a unique painting",
            price: 650,
            img: galaryImage
        },
        {
            id: 4,
            artist: "Aya Alaa.",
            name: "Work well this is a unique painting",
            price: 650,
            img: galaryImage
        },
    ]

    const navItems = [
        {
            id: "home",
            name: "home",
            path: "/",
        },
        {
            id: "gallery",
            name: "gallery",
            path: "/gallery",
            icon: artWorksIcon,
        },
        {
            id: "artworks",
            name: "artworks",
            path: "/artworks",
            icon: artWorksIcon,
        },
        {
            id: "cart",
            name: "carts",
            cart: carts,
        },
        {
            id: "more",
            name:
                <div className='flex items-center'>
                    more
                    <span className='ms-2'>
                        <Image src={arrowIcon} alt='logo' />
                    </span>
                </div>,
            icon: moreIcon,
            more: [
                {
                    id: "about",
                    name: "about",
                    path: "/about",
                },
                {
                    id: "signin",
                    name: "sign Up",
                    path: "/sign-up",
                },
                {
                    id: "login",
                    name: "log In",
                    path: "/login",
                },
            ]
        },
    ]

    return (
        <nav className='container px-3 md:px-10 mx-auto select-none'>
            <div className='flex justify-between items-center flex-wrap'>
                <Link href="/">
                    <div className='h-28 sm:h-40'>
                        <Image className='w-full h-full' src={logo} priority alt="logo" />
                    </div>
                </Link>
                <div className='md:border-b md:h-[105px] md:self-start'>
                    <ul className={`w-full z-40 md:h-[105px] duration-500 transition-all flex flex-col md:flex-row items-center p-0 absolute md:relative bottom-0 top-0 right-0 ${showNav ? "left-0" : "left-full md:left-0"} bg-[#1f1913] md:bg-transparent md:border-b-2`}>
                        <button className='flex md:hidden me-auto mt-7 hover:opacity-80 p-2 text-white text-xl ms-2' onClick={() => setShowNav(false)}>X</button>
                        {navItems.map(item =>
                            item.path ? (
                                <li key={item.id} className='md:me-8'>
                                    <Link onClick={() => setShowNav(false)} href={item.path} className={`${item.path === pathName && "active"} navlink flex mx-2`}>
                                        <span className='p-0 flex flex-col items-center mb-10 md:mb-0' onClick={() => handleItemClick(item.id)}>
                                            {item.icon && <Image src={item.icon} alt="icon" />}
                                            <span className={`linkText font ${item.icon ? "" : "mt-4"}`}>
                                                {item.name}
                                            </span>
                                        </span>
                                    </Link>
                                </li>
                            ) : (
                                item.more ? (
                                    <React.Fragment key={item.id}>
                                        <li className='hidden md:block relative'>
                                            <div onClick={() => handleItemClick(item.id)} className='navlink flex flex-col items-center cursor-pointer'>
                                                <Image src={item.icon} alt="icon" />
                                                <span className='linkText font'>
                                                    {item.name}
                                                </span>
                                            </div>
                                            <div className={`absolute bg-cartColor right-0 w-40 flex flex-col items-center top-20 rounded-lg shadow-lg ${expandedItem === item.id ? 'block' : 'hidden'}`}>
                                                {item.more.map(subItem => (
                                                    <Link key={subItem.id} href={subItem.path} className="block text-xl capitalize mt-2 px-4 py-2 text-white">
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </li>
                                        {item.more.map(subItem => (
                                            <li className='mt-5 capitalize md:hidden' key={subItem.id}>
                                                <Link onClick={() => setShowNav(false)} href={subItem.path} className={`block text-xl px-4 py-2  ${subItem.path === pathName ? "active" : "text-white"}`}>
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </React.Fragment>
                                ) : (
                                    <li key={item.id} className='relative cursor-pointer md:me-8'>
                                        <div onClick={() => handleItemClick(item.id)} >
                                            <div className='navlink flex flex-col items-center'>
                                                <div>
                                                    {item.id === "cart" && (
                                                        <div className="relative">
                                                            <div className="absolute left-4 -top-2 right-0 w-6 h-6 bg-red-500 text-white text-sm flex items-center justify-center rounded-full">
                                                                {carts.length}
                                                            </div>
                                                            <ShoppingCartIcon className="w-6 h-6" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='linkText font flex items-center'>
                                                    <span className='me-2'>{item.name}</span>
                                                    <Image height={15} width={15} src={arrowIcon} alt='logo' />
                                                </div>
                                            </div>
                                        </div>
                                        {expandedItem === item.id && (
                                            <div className={`absolute ${carts.length > 0 ? 'flex' : 'hidden'} flex-col items-center w-[320px] -translate-x-1/2 top-20 md:right-10 md:left-0 left-1/2 right-1/2 bg-cartColor rounded-lg shadow-lg`}>
                                                <div className="overflow-auto max-h-64 w-full bg-cartColor rounded-lg">
                                                    {item.cart.map((cartItem) => (
                                                        <div className="flex justify-between p-2" key={cartItem.id}>
                                                            <div className="flex items-center">
                                                                <div className="rounded-full border border-yellow-500">
                                                                    <Image className="rounded-full" src={cartItem.img} width={50} height={60} alt='' />
                                                                </div>
                                                                <div className="flex flex-col text-white ml-2">
                                                                    <span>{cartItem.artist}</span>
                                                                    <span className="text-sm">“{cartItem.name}”</span>
                                                                    <span>price: {cartItem.price}$</span>
                                                                </div>
                                                            </div>
                                                            <div onClick={() => deleteFromCart(cartItem)} className="ml-4 cursor-pointer">
                                                                <svg className="w-6 h-6 text-red-600 hover:text-red-800">
                                                                    <path fill="currentColor" d="M3 6h18v2H3V6zm2 4h14v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V10zm6 2v6h2v-6h-2zm-4 0v6h2v-6H7zm8 0v6h2v-6h-2z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                )
                            )
                        )}
                    </ul>
                    <button className='block md:hidden text-2xl border py-1 px-2 text-white' onClick={() => setShowNav(true)}>☰</button>
                </div>
            </div>
        </nav>
    )
    
}

export default Header;















































