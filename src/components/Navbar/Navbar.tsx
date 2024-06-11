import Image from 'next/image';
import Link from 'next/link';
import { IoMdSearch, IoMdCart } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="flex bg-white w-[100%] shadow-md">
      <div className="container mx-auto flex items-center justify-between w-[80%] gap-16">
        <div className='flex w-[50%] justify-between'>
          <Link href="/">
            <span className='flex w-16 lg:w-24'><img src='../../logos/5.svg' alt="logos" className='w-full h-full'/></span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products">
              <p className="hover:underline">Products</p>
            </Link>
            <Link href="/sell">
              <p className="hover:underline">Sell</p>
            </Link>
            <Link href="/about">
              <p className="hover:underline">About Us</p>
            </Link>
          </div>
        </div>

        <div className='flex w-[50%] justify-end items-center gap-4 '>
            <div className="hidden w-full lg:flex items-center border border-gray-300 px-4 py-1 bg-[#f0f0f0] rounded-full">
              <div className="flex text-xl text-[#323232] opacity-50">
                <IoMdSearch />
              </div>
              <input
                type="text"
                placeholder="Search for products..."
                className="flex items-center w-full px-3 py-2 bg-[#f0f0f0] rounded-full border-0 outline-none"
              />
            </div>
            <div className="flex justify-end items-center gap-2">
              <button className="lg:hidden flex p-2 text-[#323232] text-d-h4">
                <IoMdSearch/>
              </button>
              <button className="flex p-2 text-[#323232] text-d-h4">
                <IoMdCart/>
              </button>
              <button className="flex p-2 text-[#323232] text-d-h4">
                <IoPersonCircleSharp/>
              </button>
            </div>
        </div>
      </div>
    </nav>
  );
}
