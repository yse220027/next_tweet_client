"use client"

import Link from "next/link";

interface NavbarLinkProps {
    href: string;
    label: string;
    onClick?: () => void;
}

const NavbarLink = ({href, label, onClick} : NavbarLinkProps) => {
    return (
        <Link
            href={href}
            className="hidden md:inline-block p-3 text-black"
            onClick={onClick}
            >
            {label}
        </Link>
    );
}

export default NavbarLink;