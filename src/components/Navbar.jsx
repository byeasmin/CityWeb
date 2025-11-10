// import { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Menu, X, Leaf } from 'lucide-react'
// import { useAuth } from '../context/AuthContext'
// import logo from '../assets/logo.png'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const location = useLocation()
//   const { user, logout } = useAuth()

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'Features', href: '/features' },
//     { name: 'About', href: '/about' },
//     { name: 'Team', href: '/team' },
//     { name: 'Contact', href: '/contact' },
//   ]

//   const isActive = (path) => location.pathname === path

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}

//           {/* <Link to="/" className="flex items-center space-x-2">
//             <Leaf className="h-8 w-8 text-primary-600" />
//             <span className="text-2xl font-bold text-gray-900">CityWeb</span>
//           </Link> */}

//         <Link to="/" className="flex items-center space-x-2">
//           <img src={logo} alt="logo.png" className="h-10 w-auto" />
//           <span className="text-2xl font-bold text-gray-900">CityWeb</span>
//         </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`${
//                   isActive(item.href)
//                     ? 'text-primary-600 border-b-2 border-primary-600'
//                     : 'text-gray-700 hover:text-primary-600'
//                 } px-3 py-2 text-sm font-medium transition-colors duration-200`}
//               >
//                 {item.name}
//               </Link>
//             ))}

//             {user ? (
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm text-gray-700">Welcome, {user.name}</span>
//                 <button
//                   onClick={logout}
//                   className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-200"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 <Link
//                   to="/login"
//                   className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/signup"
//                   className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-primary-600 p-2"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`${
//                     isActive(item.href)
//                       ? 'text-primary-600 bg-primary-50'
//                       : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
//                   } block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               {user ? (
//                 <div className="border-t border-gray-200 pt-4">
//                   <div className="px-3 py-2 text-sm text-gray-700">Welcome, {user.name}</div>
//                   <button
//                     onClick={() => {
//                       logout()
//                       setIsOpen(false)
//                     }}
//                     className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               ) : (
//                 <div className="border-t border-gray-200 pt-4 space-y-1">
//                   <Link
//                     to="/login"
//                     onClick={() => setIsOpen(false)}
//                     className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/signup"
//                     onClick={() => setIsOpen(false)}
//                     className="block px-3 py-2 text-base font-medium bg-primary-600 text-white hover:bg-primary-700 rounded-md transition-colors duration-200"
//                   >
//                     Sign Up
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-green-100 shadow-[0_2px_20px_-2px_rgba(16,185,129,0.15)] transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 group transition-all duration-300"
            >
              <div className="p-[2px] rounded-full bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500">
                <img
                  src={logo}
                  alt="logo.png"
                  className="h-10 w-auto rounded-full bg-white p-1"
                />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent tracking-tight group-hover:scale-[1.02] transition-transform">
                CityWeb
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-green-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-green-600 after:via-emerald-500 after:to-lime-400"
                      : "text-gray-700 hover:text-green-700 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-green-500 hover:via-emerald-400 hover:to-lime-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">
                    Welcome,{" "}
                    <span className="font-semibold text-green-700">
                      {user.name}
                    </span>
                  </span>
                  <button
                    onClick={logout}
                    className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-all duration-300 shadow-md"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-all duration-300 shadow-md"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-green-700 p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden animate-slide-down">
              <div className="px-4 pt-2 pb-3 space-y-1 bg-gradient-to-b from-white/90 to-green-50/80 rounded-b-2xl shadow-lg backdrop-blur-xl border-t border-green-100">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-green-700 bg-green-100"
                        : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {user ? (
                  <div className="border-t border-green-100 pt-4">
                    <div className="px-3 py-2 text-sm text-gray-700">
                      Welcome, {user.name}
                    </div>
                    <button
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="border-t border-green-100 pt-4 space-y-1">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-base font-medium bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 text-white hover:opacity-90 rounded-md transition-all duration-300 shadow-md"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer so content is not hidden behind fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}

export default Navbar
