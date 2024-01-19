"use client"
import Image from "next/image"

const projets = [
    {title : "clone boutique de coque d'Iphone" , src: "/IMG-aple-site-shop-clown.png", 
    description : "J ai assayer de cloner le site de vente de coque d iphone entirement en html et css. J ai fait de mon mieux pour m aprovher le plus possible site original"}
]

export default function ProjetsCard() {
    return (<>
        {
            projets.map((p) => (
                <div key={p.title} className="border flex flex-col md:flex-row gap-3">
                    <Image src={p.src} width={280} height={100}
                    alt="image capture boutique de coque d'Iphone" />
                    <p>{p.description} </p>
                </div>
            ))
        }
        
    </>)
            
            
}