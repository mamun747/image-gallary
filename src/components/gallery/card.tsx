import React from 'react'
import Image from 'next/image';

const Card = () => {
  return (
    <figure>
        <Image alt='Gallery Image' src='https://www.freepik.com/free-ai-image/surreal-dream-scenario-concept_393923644.htm#fromView=subhome&position=45&from_element=home_verticals&new_detail=true' width={400} height={400} className='w-full h-auto'/>
        <figcaption className='w-full p-3 bg-slate-900 text-white'>
            102 likes | 50 share
        </figcaption>
    </figure>
  )
}

export default Card;