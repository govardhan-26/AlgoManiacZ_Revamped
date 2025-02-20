import { useState } from 'react'
import logo from '../../assets/logo.jpeg'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="h-28 bg-gray-900 w-full sticky  z-10 top-0 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={logo}
          alt=""
          className="w-20  rounded-3xl"
        />

        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
              assNam{' '}
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex">
            <li className="mb-2 lg:mb-0 lg:ml-6">
              <a
                href="#"
                className="block text-white hover:text-blue-200 font-thin"
              >
                Home
              </a>
            </li>
            <li className="mb-2 lg:mb-0 lg:ml-6">
              <a
                href="#"
                className="block text-white hover:text-blue-200 font-thin"
              >
                About
              </a>
            </li>
            <li className="mb-2 lg:mb-0 lg:ml-6">
              <a
                href="#"
                className="block text-white hover:text-blue-200 font-thin"
              >
                Services
              </a>
            </li>
            <li className="mb-2 lg:mb-0 lg:ml-6">
              <a
                href="#"
                className="block text-white hover:text-blue-200 font-thin"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
