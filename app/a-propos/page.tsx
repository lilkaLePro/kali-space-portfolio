import ProjetsCard from "@/components/ui/projectCard"
import { BookOpenCheckIcon, 
    Code2, Palette 
} from "lucide-react"

const skillsCardData = [
    {
        icone: <Palette className="w-full h-full" /> ,
        title: 'Front-End',
        skills:  ["html", "css", "javascript", "tailwindcss", "react.js", "next.js"]

    }, 
    {
        icone: <Code2 className="w-full h-full"/>,
        title: 'Back-End',
        skills: ["node", "next.js", "sql", "vercel-Postgres" ]
    },
    {
        icone: <BookOpenCheckIcon className="w-full h-full" /> ,
        title: "softskill",
        skills: ["github", "anglais", "figma"]
    }
]

export default function Aporpos(){

    return <div className="md:mt-20 mt-10">
        <div className="text-md font-semibold">
            En tant qu un develeppeur junior web, j ai des sklls très pointue en Front-End Web.
            j ai été contrain d utiliser le backend 
        </div>
        <p className="text-center text-secondary font-bold text-lg my-3">Mes competences</p>
        <div className="w-full grid gap-7 md:grid-cols-3 grid-cols-1 text-center">
            
            { skillsCardData.map(card => (

                <div key={card.title} className="flex flex-col gap-5 items-center mt-3">

                    <div className="w-10 h-10 border text-secondary">{card.icone} </div>
                   
                        <p className="text-lg font-semibold" >{card.title} </p>

                    <div className="">
                    {card.skills.map(skill => (
                        <p className=" text-lg font-medium"
                        key={skill[0]}> {skill}</p>
                    )) }
                    </div>
                    
                </div>
            )) }
           
        </div>
        <div> 
            <h1 className="my-9 text-center font-bold text-lg text-secondary">Projets</h1>
                        
            <ProjetsCard />
        </div> 
    </div>
}