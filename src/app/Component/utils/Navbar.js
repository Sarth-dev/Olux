"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // `lucide-react` icons

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-600 px-6 py-4 text-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold"><a href="/">OLUX</a></div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex  space-x-8 text-lg">
            <Link href="/">Home</Link>
            <Link href="/mileage">Mileage Bikes</Link>
            <Link href="/sports">Sports</Link>
            <Link href="/electric">Electric</Link>
            <Link href="/about">About</Link>
          </div>
          <div className="flex space-x-8 text-lg">
            <button className="border-1 px-5 rounded-md py-1 hover:bg-amber-300"><Link href="/login">Login</Link></button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col  space-y-2 text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/mileage" onClick={() => setIsOpen(false)}>
            Mileage Bikes
          </Link>
          <Link href="/sports" onClick={() => setIsOpen(false)}>
            Sports
          </Link>
          <Link href="/electric" onClick={() => setIsOpen(false)}>
            Electric
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <hr className="border-purple-100" />
          <Link href="/login" onClick={() => setIsOpen(false)}>
          Login
          </Link>
        </div>
      )}
    </nav>
  );
}
