import { Phone, Email, LocationOn, Facebook, Twitter, Instagram } from "@mui/icons-material"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <LocationOn className="text-blue-400 mt-1" />
                <p>Near Shiv Mandir, Daladali Chowk, Ring Road, Ranchi – 835222</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="text-blue-400" />
                <div>
                  <p>7766057754</p>
                  <p>8252530876</p>
                  <p>7857905134</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Email className="text-blue-400" />
                <p>unitedgroup.education@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/admission" className="hover:text-blue-400 transition-colors">
                  Admission
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-blue-400 transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 mb-4">
              "शिक्षित भारत, विकसित भारत" – निःशुल्क करियर परामर्श, गुणवत्तापूर्ण शिक्षा एवं कौशल युक्त प्रशिक्षण।
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Twitter className="text-blue-400 hover:text-blue-300 cursor-pointer" />
              <Instagram className="text-blue-400 hover:text-blue-300 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 United Group of Education. All rights reserved. | ISO Certified Institution</p>
        </div>
      </div>
    </footer>
  )
}
