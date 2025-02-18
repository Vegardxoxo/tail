'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import ChecklistIcon from '@mui/icons-material/Checklist';
import HomeIcon from '@mui/icons-material/Home';

const links = [
    {name: 'Home', href: '/dashboard', icon: HomeIcon},
    {
        name: 'Todos',
        href: '/dashboard/todos',
        icon: ChecklistIcon,
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                            , pathname === link.href ? "bg-sky-100 text-blue-600" : "")}
                    >
                        <LinkIcon className="w-6"/>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}