import { School, Star, CheckCircle } from "@mui/icons-material"

export default function HomeHero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <School className="text-4xl text-yellow-400" />
              <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                ISO Certified
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to United Group of Education</h1>

            <p className="text-xl mb-6 text-blue-100">"शिक्षित भारत, विकसित भारत"</p>

            <p className="text-lg mb-8 text-blue-100">निःशुल्क करियर परामर्श, गुणवत्तापूर्ण शिक्षा एवं कौशल युक्त प्रशिक्षण।</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" />
                <span>Career Counseling</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" />
                <span>Quality Education</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" />
                <span>Skill Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-400" />
                <span>Admission Guidance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Courses
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white text-blue-900 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Admissions Open!</h3>
              <p className="text-lg mb-4">2024-25 Academic Session</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center justify-center space-x-2">
                  <Star className="text-yellow-500" />
                  <span>Regular/Distance/Online Mode</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <Star className="text-yellow-500" />
                  <span>Scholarship & Loan Available</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <Star className="text-yellow-500" />
                  <span>19+ Partner Universities</span>
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-4 font-semibold transition-colors">
                Get Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
