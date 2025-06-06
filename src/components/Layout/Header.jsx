"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, Close, School, Phone, WhatsApp, Email } from "@mui/icons-material"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Admission", href: "/admission" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
    { name: "Enquiry", href: "/enquiry" },
  ]

  const handleCallClick = (number) => {
    window.open(`tel:+91${number}`, "_self")
  }

  const handleWhatsAppClick = () => {
    const message = "Hello! I would like to know more about your courses and admission process."
    window.open(`https://wa.me/917766057754?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleEmailClick = () => {
    window.open("mailto:unitedgroup.education@gmail.com", "_self")
  }

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <School className="text-3xl" />
            <div>
              <h1 className="text-xl font-bold">United Group of Education</h1>
              <p className="text-xs text-blue-200">ISO Certified Institution</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-blue-200 transition-colors font-medium">
                {item.name}
              </Link>
            ))}

            {/* Desktop Call Button */}
            <button
              onClick={() => handleCallClick("7766057754")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Phone className="text-lg" />
              <span className="hidden xl:inline">7766057754</span>
              <span className="xl:hidden">Call</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Call Button */}
            <button
              onClick={() => handleCallClick("7766057754")}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-all duration-300 shadow-lg"
            >
              <Phone className="text-lg" />
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <Close /> : <Menu />}</button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <nav className="pb-6 border-t border-blue-800 pt-4">
              {/* Navigation Links */}
              <div className="space-y-1 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 hover:bg-blue-800 hover:text-blue-200 transition-colors rounded-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mb-6 px-4">
                <div className="grid grid-cols-2 gap-3">
                  <Link href="/enquiry">
                    <button
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Enquire Now
                    </button>
                  </Link>
                  <Link href="/admission">
                    <button
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>

   
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
