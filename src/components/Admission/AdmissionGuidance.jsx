import { School, MonetizationOn, Support, CheckCircle } from "@mui/icons-material"

export default function AdmissionGuidance() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admission Guidance</h1>
          <p className="text-xl text-blue-100 mb-8">Your Gateway to Quality Education and Successful Career</p>

          <div className="bg-yellow-400 text-blue-900 p-4 rounded-lg inline-block mb-8">
            <p className="font-bold text-lg">🎓 Admissions Open for 2024-25 Academic Session</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Comprehensive Career Counseling</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" />
                <span className="text-lg">Free Career Guidance Sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" />
                <span className="text-lg">Personalized Course Selection</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" />
                <span className="text-lg">University Selection Assistance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" />
                <span className="text-lg">Document Preparation Support</span>
              </div>
            </div>

            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              <p className="font-semibold text-lg">💰 Scholarship & Loan की भी व्यवस्था उपलब्ध है</p>
              <p className="text-sm mt-2">Financial assistance available for deserving students</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white text-blue-900 p-6 rounded-lg text-center">
              <School className="text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Multiple Modes</h3>
              <p className="text-sm">Regular, Distance & Online Learning Options</p>
            </div>

            <div className="bg-white text-blue-900 p-6 rounded-lg text-center">
              <MonetizationOn className="text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Affordable Fees</h3>
              <p className="text-sm">Competitive fee structure with payment flexibility</p>
            </div>

            <div className="bg-white text-blue-900 p-6 rounded-lg text-center">
              <Support className="text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-sm">Continuous guidance throughout your academic journey</p>
            </div>

            <div className="bg-white text-blue-900 p-6 rounded-lg text-center">
              <CheckCircle className="text-4xl mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Guaranteed Admission</h3>
              <p className="text-sm">Assured admission in partner universities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
