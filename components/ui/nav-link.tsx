"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { ActivitySquare, 
    Contact, Home} from 'lucide-react'


const links = [
    {name: "accueil" , href: '/', icone: <Home /> },
    {name: "a propos" , href: "/a-propos", icone: <ActivitySquare /> },
    {name: "contact", href: "/contact", icone: <Contact /> }
]
export default function NavLinks (){
    const pathname = usePathname();
   return (
   
   <div className="md:h-screen h-10">
    <div className="w-full flex flex-row md:flex-col gap-4 md:mt-10">
    {links.map((link)=> {
        const linkIcon = link.icone;
        return (
            <Link 
            key={link.name} 
            href={link.href}
            className={clsx(
                "flex h-[44px] w-full  grow p-1 items-center justify-center gap-1 rounded-sm font-medium md:p-2 md:py-2 px-3 ",                
                {"bg-foreground text-secondary" : pathname === link.href,}
            )}>
            {linkIcon}
            <p>{link.name} </p>
            </Link>
        )
    })}
    </div>
   </div>)
}