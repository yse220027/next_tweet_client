"use client"

import Link from 'next/link';
import { SiLoopback } from 'react-icons/si';
import NavbarLink from './NavbarLink';

const Navbar = () => {
    console.log('Navbar!!!')
    return (
        <nav>
            <div className="flex px-5 py-3 border-b">
                <div className="flex items-center mr-6">
                    <SiLoopback className="me-3" size="2em" />
                    <Link href="/" className="ms-3 me-3">
                        <span className="self-center text-black text-2xl font-semibold">Next Tweet</span>
                    </Link>
                </div>

                <div>
                    <NavbarLink
                        href="/user/profile"
                        label="Profile"
                    />
                    <NavbarLink
                        href="/auth/regist"
                        label="Register"
                    />
                    <NavbarLink
                        href="/auth/login"
                        label="Sign in"
                    />
                    <NavbarLink
                        href="#"
                        label="Sign out"
                        onClick={() => { alert('Sign out!!!!') }}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;