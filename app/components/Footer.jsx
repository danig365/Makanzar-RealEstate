// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

//         {/* Company Info */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-4">DreamHomes</h3>
//           <p className="text-sm">
//             Helping you find the perfect property with trusted agents and 
//             tailored real estate solutions.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-md font-semibold text-white mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             <li><a href="/buy" className="hover:text-white">Buy</a></li>
//             <li><a href="/rent" className="hover:text-white">Rent</a></li>
//             <li><a href="/sell" className="hover:text-white">Sell</a></li>
//             <li><a href="/agents" className="hover:text-white">Agents</a></li>
//             <li><a href="/contact" className="hover:text-white">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-md font-semibold text-white mb-4">Contact Us</h4>
//           <ul className="space-y-2 text-sm">
//             <li>📍 123 Main Street, Cityville</li>
//             <li>📞 (123) 456-7890</li>
//             <li>✉️ support@dreamhomes.com</li>
//           </ul>
//         </div>

//         {/* User Choice Section */}
//         <div>
//           <h4 className="text-md font-semibold text-white mb-4">Choose</h4>
//           <label htmlFor="footer-select" className="text-sm">Select Region</label>
//           <select
//             id="footer-select"
//             className="mt-2 w-full p-2 rounded-lg bg-gray-800 text-gray-300 text-sm"
//           >
//             <option>United States</option>
//             <option>Canada</option>
//             <option>Europe</option>
//             <option>Asia</option>
//           </select>

//           <label htmlFor="lang-select" className="block mt-4 text-sm">Language</label>
//           <select
//             id="lang-select"
//             className="mt-2 w-full p-2 rounded-lg bg-gray-800 text-gray-300 text-sm"
//           >
//             <option>English</option>
//             <option>Spanish</option>
//             <option>French</option>
//             <option>German</option>
//           </select>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
//         <p>© {new Date().getFullYear()} DreamHomes. All rights reserved.</p>
//         <div className="flex justify-center space-x-6 mt-4">
//           <a href="/privacy" className="hover:text-white">Privacy Policy</a>
//           <a href="/terms" className="hover:text-white">Terms of Service</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { MapPin, Phone, Mail, Home, Building2, Info, MessageSquare, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 sm:py-12 lg:py-16 xl:py-24 mt-10 sm:mt-12 lg:mt-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              BCMakanzar
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Your reliable partner in worldwide real estate.
              We help you find the perfect property for your needs.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-sm sm:text-base text-gray-400 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2 sm:gap-3 group"
                >
                  <Home className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="/properties" 
                  className="text-sm sm:text-base text-gray-400 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2 sm:gap-3 group"
                >
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span>Properties</span>
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-sm sm:text-base text-gray-400 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2 sm:gap-3 group"
                >
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-sm sm:text-base text-gray-400 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2 sm:gap-3 group"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 group-hover:scale-110 transition-transform duration-200 flex-shrink-0" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 sm:mb-6">Contact Info</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-400">
                    DHA Phase 5, Lahore, Pakistan
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <a 
                    href="tel:+923001234567" 
                    className="text-xs sm:text-sm font-medium text-gray-400 hover:text-blue-500 transition-colors duration-200 break-all"
                  >
                    +92 300 1234567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3 group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <a 
                    href="mailto:info@bcmakanzar.com" 
                    className="text-xs sm:text-sm font-medium text-gray-400 hover:text-blue-500 transition-colors duration-200 break-all"
                  >
                    info@bcmakanzar.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 mt-8 sm:mt-10 lg:mt-12 xl:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} BCMakanzar. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a 
                href="/privacy" 
                className="text-xs sm:text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-xs sm:text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}