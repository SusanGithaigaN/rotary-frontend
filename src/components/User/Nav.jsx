import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (menuRef.current && isMenuOpen) {
            const rect = menuRef.current.getBoundingClientRect();
            const rightOverflow = rect.right - window.innerWidth;
            if (rightOverflow > 0) {
                menuRef.current.style.right = `0`;
            }
        }
    }, [isMenuOpen]);
    const handleLogout = () => {
        // Send a DELETE request to the logout URL
        // Include cookies for authentication
        fetch('http://localhost:3000/logout', {
            method: 'DELETE',
            credentials: 'include' 
        })
        .then(response => {
            if (response.ok) {
                // Redirect the user to homepage after successful logout
                navigate('/');
            } else {
                // Handle error response
                throw new Error('Logout failed');
            }
        })
        .catch(error => {
            console.error('Logout failed:', error);
        });
    };
    

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            {/* MODIFY THIS PATH!!!!!!!!!!!!!!!!!!!!! */}
                            <a href="/user" className="flex ms-2 md:me-24">
                                <img
                                    src="https://res.cloudinary.com/dfczhaomn/image/upload/v1707953595/logo_l4i7ev.svg"
                                    className="h-12 me-3"
                                    alt="FlowBite Logo"
                                />
                                {/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    Rotary
                                </span> */}
                            </a>
                        </div>

                        {/* Avatar */}
                        <div className="relative flex items-center">
                            <div className="flex items-center ms-3 relative h-full">
                                <div>
                                    <button
                                        type="button"
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-orange-200"
                                        aria-expanded={isMenuOpen}
                                        onClick={toggleMenu}
                                    >
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="w-8 h-8 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="user photo"
                                        />
                                    </button>
                                </div>

                                {/* User menu */}
                                <div
                                    ref={menuRef}
                                    className={`absolute z-50 ${isMenuOpen ? 'block' : 'hidden'} mt-2 text-base list-none bg-white divide-y rounded shadow divide-gray-200`}
                                    id="dropdown-user"
                                    style={{ right: 0 }}
                                >
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm" role="none">
                                            Neil Sims
                                        </p>
                                        <p className="text-sm font-medium truncate" role="none">
                                            neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-100" role="menuitem">My Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-100" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-100" role="menuitem">Payments</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-100" role="menuitem" onClick={handleLogout}>Log out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </nav>
            {/* sidebar */}
            <Sidebar />
        </>
    );
}
