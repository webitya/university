import { LocalHospital, Engineering, Computer, Business, Science, Gavel } from "@mui/icons-material"

export default function CoursesOffered() {
  const courseCategories = [
    {
      icon: <LocalHospital className="text-4xl text-red-600" />,
      title: "Medical",
      courses: ["MBBS", "MD", "MS", "BDS", "MDS", "BAMS", "BHMS", "BUMS"],
      color: "bg-red-50 border-red-200",
    },
    {
      icon: <Engineering className="text-4xl text-blue-600" />,
      title: "Engineering",
      courses: ["Diploma", "B.Tech", "M.Tech"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: <Computer className="text-4xl text-green-600" />,
      title: "Computer Application",
      courses: ["BCA", "MCA", "B.Sc IT", "M.Sc IT", "PGDCA"],
      color: "bg-green-50 border-green-200",
    },
    {
      icon: <Business className="text-4xl text-purple-600" />,
      title: "Management",
      courses: ["BBA", "MBA"],
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: <Science className="text-4xl text-orange-600" />,
      title: "Science",
      courses: ["B.Sc", "M.Sc (All Subjects)"],
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: <Gavel className="text-4xl text-indigo-600" />,
      title: "Law",
      courses: ["Diploma", "LLB", "LLM", "BA LLB", "BBA/BCOM/B.Sc LLB"],
      color: "bg-indigo-50 border-indigo-200",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Courses Offered</h2>
          <p className="text-lg text-gray-600 mb-6">
            Choose from our wide range of courses available in Regular, Distance, and Online modes
          </p>
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 inline-block">
            <p className="text-yellow-800 font-semibold">📚 Scholarship & Loan की भी व्यवस्था उपलब्ध है</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courseCategories.map((category, index) => (
            <div key={index} className={`border-2 rounded-lg p-6 ${category.color} hover:shadow-lg transition-shadow`}>
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800 ml-3">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.courses.map((course, courseIndex) => (
                  <span
                    key={courseIndex}
                    className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 mr-2 mb-2"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Paramedical</h4>
              <p className="text-sm text-gray-600">DMLT, Radiology, OT, ECG, Optometry, Physiotherapy</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Nursing</h4>
              <p className="text-sm text-gray-600">ANM, GNM, B.Sc Nursing, Post Basic B.Sc Nursing, M.Sc Nursing</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Pharmacy</h4>
              <p className="text-sm text-gray-600">D.Pharma, B.Pharma, M.Pharma</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
              <p className="text-sm text-gray-600">D.El.Ed, B.Ed, M.Ed, BPED</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Yoga</h4>
              <p className="text-sm text-gray-600">DNYS, BNYS, MNYS, BA, B.Sc, M.Sc, PG Diploma</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fire & Safety</h4>
              <p className="text-sm text-gray-600">Certificate, Diploma, B.Sc, B.Tech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
