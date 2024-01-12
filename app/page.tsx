import Image from 'next/image'
import { Avatar } from '@radix-ui/react-avatar'

const PresentationText = `salut , je suis Klay Diallo. Developpeur Web front-end et Ui/Ux designer freelance. Passionné du code et du graphisme. `
// const petit historique
export default async function Home() {
  return (
  <div className='w-full p-4 flex flex-col gap-10 '> 
      <div className='gap-5'>
        <h1 className='text-3xl font-bold '>
          <span className='text-4xl'>K</span>
          <span>aly diallo</span>
        </h1>
        <p>{PresentationText} </p>
      </div>
      
      <div className='flex border'>
        <div className='flex flex-col gap-2 '>
          <span>linkedin</span>
          <span>instagrame</span>
          <span>github</span>
        </div>
      <p> </p>
      
      <div>description du site</div>
      </div>

  </div>)
}
