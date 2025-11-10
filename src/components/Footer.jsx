// import { Link } from 'react-router-dom'
// import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <Link to="/" className="flex items-center space-x-2">
//               <Leaf className="h-8 w-8 text-primary-400" />
//               <span className="text-2xl font-bold">CityWeb</span>
//             </Link>
//             <p className="text-gray-300 text-sm">
//               Empowering smart cities with AI-driven environmental intelligence and sustainable solutions.
//             </p>
//             <div className="flex space-x-4">
//               <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
//               <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
//               <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
//               <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">Home</Link></li>
//               <li><Link to="/features" className="text-gray-300 hover:text-primary-400 transition-colors">Features</Link></li>
//               <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">About</Link></li>
//               <li><Link to="/team" className="text-gray-300 hover:text-primary-400 transition-colors">Team</Link></li>
//               <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contact</Link></li>
//             </ul>
//           </div>

//           {/* Features */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Features</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/features/co2-emissions" className="text-gray-300 hover:text-primary-400 transition-colors">CO₂ Emissions</Link></li>
//               <li><Link to="/ai-intelligence" className="text-gray-300 hover:text-primary-400 transition-colors">AI Intelligence</Link></li>
//               <li><Link to="/features/air-quality" className="text-gray-300 hover:text-primary-400 transition-colors">Air Quality</Link></li>
//               <li><Link to="/features/livability-score" className="text-gray-300 hover:text-primary-400 transition-colors">Livability Score</Link></li>
//               <li><Link to="/features/smart-drainage" className="text-gray-300 hover:text-primary-400 transition-colors">Smart Drainage</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4 text-primary-400" />
//                 <span className="text-gray-300">info@cityweb.com</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4 text-primary-400" />
//                 <span className="text-gray-300">018********</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <MapPin className="h-4 w-4 text-primary-400" />
//                 <span className="text-gray-300">123 Smart City, Eco Valley</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               © 2025 CityWeb. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer



import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white border-t border-green-700/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Strong gradient border like navbar */}
              <div className="p-[2px] rounded-full bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500">
                <img
                  src={logo}
                  alt="CityWeb Logo"
                  className="h-10 w-10 rounded-full bg-white p-1 object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400 bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">
                CityWeb
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering smart cities with AI-driven environmental intelligence and sustainable urban solutions.
            </p>

            <div className="flex space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-green-600/30 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 text-green-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-green-600/30 transition-all duration-300"
              >
                <Github className="h-5 w-5 text-green-400" />
              </a>
              <a
                href="mailto:info@cityweb.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-green-600/30 transition-all duration-300"
              >
                <Mail className="h-5 w-5 text-green-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400 bg-clip-text">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-green-400 transition-colors">Features</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-green-400 transition-colors">Team</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Features</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features/co2-emissions" className="text-gray-300 hover:text-green-400 transition-colors">CO₂ Emissions</Link></li>
              <li><Link to="/ai-intelligence" className="text-gray-300 hover:text-green-400 transition-colors">AI Intelligence</Link></li>
              <li><Link to="/features/air-quality" className="text-gray-300 hover:text-green-400 transition-colors">Air Quality</Link></li>
              <li><Link to="/features/livability-score" className="text-gray-300 hover:text-green-400 transition-colors">Livability Score</Link></li>
              <li><Link to="/features/smart-drainage" className="text-gray-300 hover:text-green-400 transition-colors">Smart Drainage</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">info@cityweb.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">018********</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">123 Smart City, Eco Valley</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 CityWeb. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
