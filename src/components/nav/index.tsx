import Link from 'next/link'
import React from 'react'
import Item from './item';

const Navbar = () => {
  return (
    <nav className='flex items-end justify-between w-full mb-20 pb-8 border-b-2 border-slate-200 gap-4'>
        <Link className='text-5xl px-4 py-2 mr-auto text-slate-700 font-serif uppercase tracking-widest border-4 border-slate-700 shadow-lg active:translate-y-0.5 transition-all duration-150 rounded' href="/">Gallery</Link>
        {
          navItems.map((item, index) => (
            <Item key={index} {...item}/>
          ))
        }
    </nav>
  )
}

export default Navbar;

const navItems = [
  {
    label: 'Photo',
    url: "/?category=photo"
  },
  {
    label: 'Vector',
    url: "/?category=vector"
  },
];