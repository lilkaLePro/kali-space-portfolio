import Image from 'next/image';
import { ArrowUpRightIcon, 
  GithubIcon, LinkedinIcon,  
  TwitterIcon } from 'lucide-react';

const PresentationText = "Salut , je suis Klay Diallo. Developpeur Web front-end et Ui/Ux designer freelance. Passionné du code et du graphisme. Dans le code je suis plus sur du next , je travail maintenant avec next.js et Figma pour le Ui"
// const petit historique
const lienReseau = [
  {name: 'Github' , icone: <GithubIcon />, href: "https://github.com/lilkaLePro" },
  {name: 'Linkedin' , icone: <LinkedinIcon />, href:''},
  {name: 'X' , icone: <TwitterIcon />, href:''}
]

export default async function Home() {
  // const awail = screen.availWidth; console.log(awail);

  return (
  <div className='w-full p-4 flex flex-col gap-10 font-medium'> 
      <div className='gap-5'>
        <h1 className='text-3xl font-bold py-4'>
          <span className='text-3xl'>K</span>
          <span>aly Diallo</span>
        </h1>
        <p className='text-secondary-foreground'>{PresentationText} </p>
      </div>
      
      <div className='flex flex-col md:flex-row items-center gap-10'>

        <Image alt='photo de profile' width={150} height={150}
          src='/photo-profile.jpg '
          className='border rounded-full'
        />

        <div>
        <div className='flex flex-col justify-center gap-4 font-semibold'>
         {lienReseau.map(lien => (
          <a href={lien.href} target='blank'
           key={lien.name} className='flex gap-3 cursor-pointer border-b-2 hover:border-transparent border-primary hover:text-secondary'>
            {lien.icone} {lien.name} <ArrowUpRightIcon /> </a>
         ))}
        </div>
        </div>
      </div>

      <div className='text-md'>
          <div className='pb-1'>
          Ce site est faite en full code et est inspiré du site portfolio de Lee (fuction et ma source d information et d inspiration dans le devellopement Next.js).
          Dans le projet jai utilisé d autres librairies :
          </div>
        <ul className='list-disc cursor-pointer' >
          <li>Tailwindcss</li>
          <li>Shadcn ui</li>
          <li>Lucide-react </li>

          <li className='py-1'>
           <a className="pointer-events-none lg:pointer-events-auto "
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="blank"
              rel="noopener noreferrer" > 
            <Image src='/vercel.svg'
            width={50} height={30} alt='vercel logo'/></a>  
          </li>

          <li className='py-1'>
            <Image  src='/next.svg' alt='next.js logo' 
            width={50} height={30} />
          </li>

        </ul>
      </div>     

  </div>)
}
