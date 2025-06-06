import { School, Groups, WorkspacePremium, Timeline } from "@mui/icons-material"

export default function AboutPage() {
  const universities = [
    "Durga Soren University",
    "YBN University",
    "Usha Martin University",
    "Glocal University",
    "ISBM University",
    "North East Christian University",
    "Asian University",
    "Sikkim Skill University",
    "Dr. D.Y. Patil University",
    "Sanskriti University",
    "Dr. Preeti Global University",
    "Rai University",
    "Sharda University",
    "GLA University",
    "Sikkim Alpine University",
    "Sri Satya Sai University",
    "Monad University",
    "Shridhar University",
    "NIMS University",
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About United Group of Education</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students with quality education and comprehensive career guidance for a brighter future in
            India's educational landscape.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <School className="text-3xl text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 mb-4">
              "शिक्षित भारत, विकसित भारत" - We are committed to providing free career counseling, quality education, and
              skill-based training to build a developed India through education.
            </p>
            <p className="text-gray-700">निःशुल्क करियर परामर्श, गुणवत्तापूर्ण शिक्षा एवं कौशल युक्त प्रशिक्षण।</p>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Groups className="text-3xl text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-700">
              To become the leading educational institution that bridges the gap between traditional education and
              modern career requirements, ensuring every student receives personalized guidance and quality education to
              achieve their dreams.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <WorkspacePremium className="text-5xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ISO Certified</h3>
              <p className="text-gray-600">Maintaining international quality standards in education and services.</p>
            </div>
            <div className="text-center">
              <Timeline className="text-5xl text-orange-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">Years of experience in guiding students towards successful careers.</p>
            </div>
            <div className="text-center">
              <Groups className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Faculty</h3>
              <p className="text-gray-600">Experienced professionals dedicated to student success and growth.</p>
            </div>
          </div>
        </div>

        {/* Partner Universities */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Partner Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {universities.map((university, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="text-gray-700 font-medium text-center">{university}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              <strong>19+ Partner Universities</strong> offering diverse programs across multiple disciplines
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
