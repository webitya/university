import { TrendingUp, Psychology, School, WorkOutline } from "@mui/icons-material"

export default function CareerPage() {
  const careerServices = [
    {
      icon: <Psychology className="text-4xl text-blue-600" />,
      title: "Career Counseling",
      description:
        "Personalized guidance to help you choose the right career path based on your interests and aptitude.",
      features: ["One-on-one counseling sessions", "Aptitude testing", "Career roadmap planning", "Industry insights"],
    },
    {
      icon: <School className="text-4xl text-green-600" />,
      title: "Course Selection",
      description: "Expert advice on selecting the most suitable courses and universities for your career goals.",
      features: ["Course comparison", "University selection", "Eligibility guidance", "Future prospects analysis"],
    },
    {
      icon: <TrendingUp className="text-4xl text-purple-600" />,
      title: "Skill Development",
      description: "Identify and develop the skills needed to excel in your chosen field and stay competitive.",
      features: ["Skill gap analysis", "Training recommendations", "Certification guidance", "Industry connections"],
    },
    {
      icon: <WorkOutline className="text-4xl text-orange-600" />,
      title: "Placement Support",
      description: "Assistance with job placement and career advancement opportunities after course completion.",
      features: ["Resume building", "Interview preparation", "Job placement assistance", "Career advancement tips"],
    },
  ]

  const popularCareers = [
    { field: "Medical", opportunities: "Doctor, Surgeon, Medical Researcher, Healthcare Administrator" },
    { field: "Engineering", opportunities: "Software Engineer, Civil Engineer, Mechanical Engineer, Data Scientist" },
    { field: "Management", opportunities: "Business Analyst, Project Manager, Marketing Manager, HR Manager" },
    { field: "Education", opportunities: "Teacher, Principal, Education Consultant, Curriculum Designer" },
    { field: "Law", opportunities: "Lawyer, Judge, Legal Advisor, Corporate Counsel" },
    { field: "Pharmacy", opportunities: "Pharmacist, Drug Inspector, Medical Representative, Research Scientist" },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Career Guidance & Counseling</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            "शिक्षित भारत, विकसित भारत" - निःशुल्क करियर परामर्श, गुणवत्तापूर्ण शिक्षा एवं कौशल युक्त प्रशिक्षण।
          </p>
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 inline-block">
            <p className="text-green-800 font-semibold text-lg">🆓 FREE Career Counseling Sessions Available</p>
          </div>
        </div>

        {/* Career Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Career Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Popular Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCareers.map((career, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-3">{career.field}</h3>
                <p className="text-blue-800 text-sm">{career.opportunities}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Career Counseling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Evaluate your interests, skills, and aptitude</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Analysis</h3>
              <p className="text-gray-600 text-sm">Analyze career options matching your profile</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Create a detailed career roadmap</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">Ongoing guidance and support</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-900 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shape Your Future?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your free career counseling session today and take the first step towards your dream career
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">📞 Call Us</h3>
              <p className="text-blue-200 text-sm">7766057754, 8252530876, 7857905134</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">📧 Email Us</h3>
              <p className="text-blue-200 text-sm">unitedgroup.education@gmail.com</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">📍 Visit Us</h3>
              <p className="text-blue-200 text-sm">Near Shiv Mandir, Daladali Chowk, Ranchi</p>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-lg">
            Book Free Counseling Session
          </button>
        </div>
      </div>
    </div>
  )
}
