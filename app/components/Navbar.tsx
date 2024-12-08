import React from 'react'
import "../styles/layout.css"
import Image from 'next/image'
import Link from 'next/link'

// type Props = {}

const Navbar = () => {
  return (
    <div className='nav-component'>
      <div className=' nav h-[62px] bg-[#ACABA4] flex items-center justify-evenly'>
        <div className='flex justify-start items-center w-[20%]'>
          <div className="logo p-3">
            <Image
              src={"/assests/logo.png"}
              width={40}
              height={40}
              alt='logo'
            />
          </div>
          <div className="name text-3xl">Bookeez</div>
        </div>
        <div className="nav-2 flex items-center bg-[#366977] h-[47px] w-[50%] ml-16 justify-around rounded-[1.5rem] mr-40">
          <div className='p-4 text-[#F1FBFB] hover:underline'><Link href={"/"}>Home</Link></div>
          <div className='p-4 text-[#F1FBFB] hover:underline'><Link href={"/sell"}>Sell</Link></div>
          <div className='p-4 text-[#F1FBFB] hover:underline'><Link href={"/about"}>About</Link></div>
          <div className='p-4 text-[#F1FBFB] hover:underline'><Link href={"/books"}>Books</Link></div>
        </div>
        <div className='flex justify-end'>
          <div className="buy">
            <button className='bg-[#D80032] rounded-md p-2 w-[7rem] hover:bg-[rgb(210,4,4)] text-[#F1FBFB] '><Link href={"/buy"}>Buy</Link></button>
          </div>
          <div className="login">
            <button className='bg-[#366977] rounded-md p-2 w-[7rem] hover:bg-[#153943] text-[#F1FBFB] ml-8 mr-10' ><Link href={"/auth/login"}>Login</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar