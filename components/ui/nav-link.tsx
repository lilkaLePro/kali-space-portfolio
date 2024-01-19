"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { ActivitySquare, 
     Home} from 'lucide-react'


const links = [
    {name: "accueil" , href: '/', icone: <Home /> },
    {name: "a propos" , href: "/a-propos", icone: <ActivitySquare /> },
]
export default function NavLinks (){
    const pathname = usePathname();
   return (
   
   <div className="md:h-screen h-3 flex flex-col">
    <div className=" w-full flex md:flex-col gap-5 md:gap-4">
    {links.map((link)=> {
        const linkIcon = link.icone;
        return (
        <Link 
            key={link.name} 
            href={link.href}
            className={clsx(
                "font-semibold md:text-lg flex md:flex-row flex-col hover:bg-muted h-[44px] grow p-1 justify-around md:gap-4 rounded-sm md:p-2 md:py-2 md:px-5" ,                
                {"bg-none text-secondary" : pathname === link.href,}
            )}>
            <div className="hidden md:block">{linkIcon}</div>
            <p className="">{link.name} </p>
            </Link>
        )
    })}
    </div>
   </div>)
}