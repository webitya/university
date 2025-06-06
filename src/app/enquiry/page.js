import { HelpOutline, School, Support, MonetizationOn } from "@mui/icons-material"

export default function EnquiryPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Student Enquiry</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our courses, admission process, or career guidance? We're here to help you make the
            right educational choices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enquiry Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Submit Your Enquiry</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Father's Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course of Interest *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Course Category</option>
                    <option value="medical">Medical</option>
                    <option value="engineering">Engineering</option>
                    <option value="nursing">Nursing</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="management">Management</option>
                    <option value="computer">Computer Application</option>
                    <option value="law">Law</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Mode</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Mode</option>
                    <option value="regular">Regular</option>
                    <option value="distance">Distance</option>
                    <option value="online">Online</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Educational Qualification</label>
                <input
                  type="text"
                  placeholder="e.g., 12th Pass, Graduate, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Query/Message *</label>
                <textarea
                  rows="5"
                  required
                  placeholder="Please describe your query, questions about courses, fees, admission process, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                <p className="text-yellow-800 font-semibold">💰 Scholarship & Loan की भी व्यवस्था उपलब्ध है</p>
                <p className="text-yellow-700 text-sm mt-1">
                  Ask about financial assistance options during your enquiry
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Information Panel */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <p className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">📞 Phone:</span>
                  7766057754, 8252530876, 7857905134
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">📧 Email:</span>
                  unitedgroup.education@gmail.com
                </p>
                <p className="flex items-start text-gray-700">
                  <span className="font-semibold mr-2">📍 Address:</span>
                  Near Shiv Mandir, Daladali Chowk, Ring Road, Ranchi – 835222
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <School className="text-blue-600" />
                  <span className="text-gray-700">Free Career Counseling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Support className="text-green-600" />
                  <span className="text-gray-700">Admission Guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MonetizationOn className="text-orange-600" />
                  <span className="text-gray-700">Financial Aid Assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HelpOutline className="text-purple-600" />
                  <span className="text-gray-700">Course Selection Help</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What documents are required for admission?</h4>
                  <p className="text-gray-600 text-sm">
                    10th & 12th certificates, graduation certificate (if applicable), Aadhar card, photographs, and
                    category certificate if applicable.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Are scholarships available?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we provide scholarship and loan assistance for deserving students based on merit and financial
                    need.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What are the different learning modes?</h4>
                  <p className="text-gray-600 text-sm">
                    We offer Regular, Distance, and Online learning modes to suit different student needs and
                    preferences.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3">Need Immediate Assistance?</h3>
              <p className="text-blue-100 mb-4">Our counselors are available to help you with your queries</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Call Now: 7766057754
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
