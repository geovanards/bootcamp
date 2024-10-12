"use client";

import Link from 'next/link';

import { useEffect, useState } from 'react';

export default function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        console.log(menuVisible)
    };

    return (
        <header className="h-16 w-full absolute top-0 z-50 bg-opacity-50 sm:h-16">
            <nav className="h-full flex justify-between items-center px-0 pt-0 sm:px-6">
                <Link
                    href="/"
                    className="bg-eclipse_logo_black bg-center bg-contain bg-no-repeat w-20 h-20 mx-auto sm:mx-0 mt-4" // Coloca a logo sempre à esquerda, mas centraliza quando a tela é sm
                ></Link>
                
                <button onClick={toggleMenu} className='absolute bg-menu-button right-0 bg-contain bg-no-repeat w-10 h-10 mr-3 top-1/2 -translate-y-1/2 inline z-50 min-[200px]:mr-10 sm:hidden'></button>

                <div className='clear-both'></div>

                <div className={`h-screen w-full backdrop-blur-2xl fixed top-0 before:absolute before:h-full before:w-full before:bg-secundary sm:absolute before:opacity-80 sm:before:opacity-0 sm:backdrop-blur-none ${menuVisible ? 'block' : 'hidden'} duration-300 transition-all sm:block sm:right-0 sm:duration-0 flex items-center justify-center`}>
                    <ul className='flex flex-col sm:flex-row justify-center items-center space-x-0 gap-6 sm:mr-8 md:text-base lg:mr-16'>
                        <li className='group relative flex flex-col items-center'>
                            <div className='h-16 w-full flex items-center md:h-20'>
                                <Link href="/" className="text-2xl font-bold text-white text-center group-hover:text-primary-orange group-hover:duration-200">Home</Link>
                            </div>
                            <div className="w-0 h-1 bg-white mx-auto rounded-t-lg group-hover:bg-primary-orange group-hover:w-full group-hover:duration-200 group-hover:transition-all"></div>
                        </li>

                        <li className='group relative flex flex-col items-center'>
                            <div className='h-16 w-full flex items-center md:h-20 hover:text-main-blue hover:duration-200'>
                                <Link href="/" className="text-2xl font-bold text-white text-center group-hover:text-primary-orange group-hover:duration-200">Tickets</Link>
                            </div>
                            <div className="w-0 h-1 bg-white mx-auto rounded-t-lg group-hover:bg-primary-orange group-hover:w-full group-hover:duration-200 group-hover:transition-all"></div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
}
