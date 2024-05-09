import Link from 'next/link'
import React from 'react'
import "./style.css"

const nav = () => {
  return (
    <nav className='flex  h-16 text-2xl font-bold 
     '>
        <div className='logo'>
            <span>
                logo
            </span>

        </div>
        <div className='list'>
            <div className='anchortags flex justify-start gap-2'>
                <Link href={"/"}>Home</Link>
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/about"}>About</Link>
            </div>
            <div className='subscribe'>
                <button className="bg-white subcribbutton">
                    subscribe
                </button>
            </div>

        </div>
    </nav>
  )
}

export default nav