import {
  LocalHospital,
  Engineering,
  Computer,
  Business,
  Science,
  Gavel,
  School,
  SelfImprovement,
  Security,
  Architecture,
  Nature,
  LocalLibrary,
  Agriculture,
  Brush,
  Article,
} from "@mui/icons-material"

export default function CoursesOffered() {
  const courseCategories = [
    {
      icon: <LocalHospital className="text-2xl text-red-600" />,
      title: "Medical",
      courses: ["MBBS", "MD", "MS", "BDS", "MDS", "BAMS", "BHMS", "BUMS"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <LocalHospital className="text-2xl text-red-600" />,
      title: "Paramedical",
      subtitle: "(Diploma, Bachelor & Master)",
      courses: ["DMLT", "Radiology", "OT", "ECG", "Optometry", "Physiotherapy"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <LocalHospital className="text-2xl text-red-600" />,
      title: "Nursing",
      courses: ["Certificates", "ANM", "GNM", "B.Sc Nursing", "Post Basic B.Sc Nursing", "M.Sc Nursing"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Engineering className="text-2xl text-blue-600" />,
      title: "Engineering",
      courses: ["Diploma", "B.Tech", "M.Tech"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Science className="text-2xl text-green-600" />,
      title: "Pharmacy",
      courses: ["D.Pharma", "B.Pharma", "M.Pharma"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Article className="text-2xl text-purple-600" />,
      title: "ART & Social Science",
      courses: ["BA", "MA in all Subjects"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Science className="text-2xl text-orange-600" />,
      title: "Science",
      courses: ["B.Sc", "M.Sc in all subjects"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Business className="text-2xl text-purple-600" />,
      title: "Management",
      courses: ["BBA", "MBA"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Computer className="text-2xl text-green-600" />,
      title: "Computer Application",
      courses: ["BCA", "MCA", "B.Sc", "M.Sc", "IT", "Diploma", "PGDCA"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <School className="text-2xl text-blue-600" />,
      title: "Education",
      courses: ["D.El.Ed", "B.ed", "M.ed", "BPED"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <SelfImprovement className="text-2xl text-indigo-600" />,
      title: "Yoga",
      courses: ["DNYS", "BNYS", "MNYS", "BA", "B.Sc", "M.Sc", "PG Diploma", "Diploma", "Certificates"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Security className="text-2xl text-red-600" />,
      title: "Fire & Safety",
      courses: ["Certificate", "Diploma", "B.Sc", "B.Tech Safety& Fire Engineering"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Gavel className="text-2xl text-indigo-600" />,
      title: "LAW",
      courses: ["Diploma", "LLB", "LLM", "BA LLB", "BA/B.SC/BBA LLB"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Architecture className="text-2xl text-gray-600" />,
      title: "Architecture",
      courses: ["C.Arch", "D.Arch", "B.Arch", "M.Arch"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Nature className="text-2xl text-green-600" />,
      title: "Environmental Science",
      courses: ["B.SC", "M.Sc"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <LocalLibrary className="text-2xl text-purple-600" />,
      title: "Library & Information Science",
      courses: ["D.Lib", "B.Lib", "M.Lib", "Certificates", "Diploma"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Agriculture className="text-2xl text-green-600" />,
      title: "Agriculture",
      courses: ["B.SC", "M.SC", "Diploma", "Certificates"],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Brush className="text-2xl text-pink-600" />,
      title: "Fashion & Interior Designing",
      courses: [],
      color: "bg-teal-400 text-white",
    },
    {
      icon: <Article className="text-2xl text-blue-600" />,
      title: "Journalism & Mass Communication",
      courses: [],
      color: "bg-teal-400 text-white",
    },
  ]

  const universities = [
    "Durga Soren University",
    "Asian International University",
    "Maharaja Grasim Himalayan Garhwal University",
    "Sikkim Skill University",
    "Shridhar University",
    "Dr.Preeti Global University",
    "North East Christian University",
    "Glocal University",
    "ISBM University",
    "YBN University",
    "Usha Martin University",
    "North East Christian University",
    "Sikkim Alpine University",
    "Dr. D.Y. Patil University",
    "Sanskriti University",
    "Rai University",
    "Sharda University",
    "GLA University",
    "Sri Satya Sai University",
    "Monad University",
    "NIMS University",
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-red-500 text-white py-3 px-6 rounded-lg inline-block mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Course Offered: Regular/Distance/Online Mode</h2>
          </div>
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 inline-block">
            <p className="text-yellow-800 font-semibold">📚 Scholarship & Loan की भी व्यवस्था उपलब्ध है</p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {courseCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-lg p-4 min-h-[140px] flex flex-col justify-center border-2 border-gray-300`}
            >
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1 text-red-600">{category.title}</h3>
                {category.subtitle && <p className="text-sm mb-2 text-red-500">({category.subtitle})</p>}
                <div className="text-sm space-y-1">
                  {category.courses.length > 0 ? (
                    category.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="text-black">
                        {course}
                        {courseIndex < category.courses.length - 1 && courseIndex % 2 === 1 ? (
                          <br />
                        ) : courseIndex < category.courses.length - 1 ? (
                          ", "
                        ) : (
                          ""
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-black">{category.title}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Universities and PhD Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Our Collaboration Universities */}
          <div className="lg:col-span-2">
            <div className="bg-red-400 text-white p-1 rounded-t-lg">
              <h3 className="text-lg font-bold text-center">Our Collaboration Universities</h3>
            </div>
            <div className="bg-red-300 p-4 rounded-b-lg">
              <ul className="space-y-1 text-sm text-black">
                {universities.map((university, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-red-600 mr-2">▶</span>
                    {university}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PhD Section */}
          <div>
            <div className="bg-orange-500 text-white p-8 rounded-lg text-center h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Ph.D</h3>
              <p className="text-lg">All Running Faculties in the University</p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-blue-900 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Complete Your Education Journey With Us</h3>
          <p className="text-lg text-blue-100 mb-6">
            From Certificate courses to Ph.D programs - We offer comprehensive educational solutions across all
            disciplines
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">📚 Multiple Learning Modes</h4>
              <p className="text-blue-200 text-sm">Regular • Distance • Online</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">🎓 20+ Partner Universities</h4>
              <p className="text-blue-200 text-sm">Recognized & Accredited Institutions</p>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">💰 Financial Support</h4>
              <p className="text-blue-200 text-sm">Scholarships & Loan Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
