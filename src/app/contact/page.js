import { Phone, Email, LocationOn, AccessTime, WhatsApp } from "@mui/icons-material"

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admission guidance, career counseling, and any queries about our courses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
                <LocationOn className="text-3xl text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Address</h3>
                  <p className="text-gray-600">
                    Near Shiv Mandir, Daladali Chowk,
                    <br />
                    Ring Road, Ranchi – 835222
                    <br />
                    Jharkhand, India
                  </p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
                <Phone className="text-3xl text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone Numbers</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>📞 7766057754</p>
                    <p>📞 8252530876</p>
                    <p>📞 7857905134</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-lg">
                <Email className="text-3xl text-purple-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Address</h3>
                  <p className="text-gray-600">unitedgroup.education@gmail.com</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4 p-6 bg-orange-50 rounded-lg">
                <AccessTime className="text-3xl text-orange-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact */}
            <div className="mt-8 bg-green-600 text-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <WhatsApp className="text-3xl" />
                <h3 className="text-xl font-semibold">Chat on WhatsApp</h3>
              </div>
              <p className="mb-4">Get instant support and quick responses to your queries through WhatsApp</p>
              <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select a subject</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="career">Career Counseling</option>
                  <option value="courses">Course Information</option>
                  <option value="fees">Fee Structure</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please describe your query in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Visit Our Campus</h3>
          <p className="text-blue-100 mb-6">
            Come and visit our campus to get a feel of our learning environment and meet our expert faculty
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Free Career Counseling</h4>
              <p className="text-blue-200 text-sm">Walk-in consultations available</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Campus Tour</h4>
              <p className="text-blue-200 text-sm">Explore our facilities and infrastructure</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Meet Faculty</h4>
              <p className="text-blue-200 text-sm">Interact with our experienced educators</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
