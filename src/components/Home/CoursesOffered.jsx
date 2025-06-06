"use client"
import { useState } from "react"
import Link from "next/link"
import {
  LocalHospital,
  Engineering,
  Computer,
  Business,
  Science,
  Gavel,
  School,
  ArrowForward,
  Star,
  TrendingUp,
  Groups,
} from "@mui/icons-material"

export default function CoursesOffered() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [activeTab, setActiveTab] = useState("popular")

  const courseCategories = [
    {
      icon: <LocalHospital className="text-3xl" />,
      title: "Medical",
      courses: ["MBBS", "MD", "MS", "BDS", "MDS", "BAMS", "BHMS", "BUMS"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      popularity: "high",
      students: "500+",
      description: "Comprehensive medical education programs",
    },
    {
      icon: <LocalHospital className="text-3xl" />,
      title: "Paramedical",
      subtitle: "(Diploma, Bachelor & Master)",
      courses: ["DMLT", "Radiology", "OT", "ECG", "Optometry", "Physiotherapy"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      popularity: "high",
      students: "300+",
      description: "Healthcare support and diagnostic programs",
    },
    {
      icon: <LocalHospital className="text-3xl" />,
      title: "Nursing",
      courses: ["Certificates", "ANM", "GNM", "B.Sc Nursing", "Post Basic B.Sc Nursing", "M.Sc Nursing"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      popularity: "high",
      students: "400+",
      description: "Professional nursing and healthcare programs",
    },
    {
      icon: <Engineering className="text-3xl" />,
      title: "Engineering",
      courses: ["Diploma", "B.Tech", "M.Tech"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      popularity: "high",
      students: "600+",
      description: "Technical and engineering education",
    },
    {
      icon: <Science className="text-3xl" />,
      title: "Pharmacy",
      courses: ["D.Pharma", "B.Pharma", "M.Pharma"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      popularity: "medium",
      students: "250+",
      description: "Pharmaceutical sciences and drug development",
    },
    {
      icon: <Business className="text-3xl" />,
      title: "Management",
      courses: ["BBA", "MBA"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      popularity: "high",
      students: "450+",
      description: "Business administration and management",
    },
    {
      icon: <Computer className="text-3xl" />,
      title: "Computer Application",
      courses: ["BCA", "MCA", "B.Sc", "M.Sc", "IT", "Diploma", "PGDCA"],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      popularity: "high",
      students: "550+",
      description: "IT and computer science programs",
    },
    {
      icon: <Gavel className="text-3xl" />,
      title: "Law",
      courses: ["Diploma", "LLB", "LLM", "BA LLB", "BA/B.SC/BBA LLB"],
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      popularity: "medium",
      students: "200+",
      description: "Legal studies and jurisprudence",
    },
    {
      icon: <School className="text-3xl" />,
      title: "Education",
      courses: ["D.El.Ed", "B.ed", "M.ed", "BPED"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      popularity: "medium",
      students: "180+",
      description: "Teaching and educational programs",
    },
  ]

  const popularCourses = courseCategories.filter((course) => course.popularity === "high")
  const allCourses = courseCategories

  const displayCourses = activeTab === "popular" ? popularCourses : allCourses

  const stats = [
    { icon: <Groups className="text-2xl" />, value: "3000+", label: "Students Enrolled" },
    { icon: <School className="text-2xl" />, value: "50+", label: "Course Programs" },
    { icon: <Star className="text-2xl" />, value: "20+", label: "Partner Universities" },
    { icon: <TrendingUp className="text-2xl" />, value: "95%", label: "Success Rate" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-8 rounded-2xl shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-3xl md:text-4xl font-bold">Course Offered</h2>
              <p className="text-red-100 mt-2">Regular • Distance • Online Mode</p>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose from our comprehensive range of courses designed to shape your future and accelerate your career
            growth
          </p>

          {/* Scholarship Banner */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-xl inline-block shadow-lg mb-8 animate-pulse">
            <p className="font-bold text-lg flex items-center justify-center space-x-2">
              <Star className="text-2xl" />
              <span>📚 Scholarship & Loan की भी व्यवस्था उपलब्ध है</span>
              <Star className="text-2xl" />
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <button
                onClick={() => setActiveTab("popular")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "popular" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Popular Courses
              </button>
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "all" ? "bg-blue-600 text-white shadow-md" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                All Courses
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayCourses.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${category.bgColor} ${category.borderColor} border-2`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Popularity Badge */}
              {category.popularity === "high" && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                  <Star className="text-sm" />
                  <span>Popular</span>
                </div>
              )}

              <div className="relative p-8">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {category.title}
                    </h3>
                    {category.subtitle && <p className="text-sm text-gray-600">{category.subtitle}</p>}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>

                {/* Student Count */}
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <Groups className="text-lg mr-2" />
                  <span>{category.students} students enrolled</span>
                </div>

                {/* Courses List */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.courses.slice(0, 4).map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm border"
                      >
                        {course}
                      </span>
                    ))}
                    {category.courses.length > 4 && (
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                        +{category.courses.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    className={`flex-1 bg-gradient-to-r ${category.color} text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                  >
                    <span>Explore</span>
                    <ArrowForward className="text-sm" />
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                    <School className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} transition-all duration-500 ${
                  hoveredCard === index ? "w-full" : "w-0"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Universities Section - Enhanced */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Universities List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
                <h3 className="text-2xl font-bold text-center flex items-center justify-center space-x-3">
                  <School className="text-3xl" />
                  <span>Our Collaboration Universities</span>
                </h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
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
                    "Sikkim Alpine University",
                  ].map((university, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-200"></div>
                      <span className="text-gray-700 group-hover:text-red-600 transition-colors duration-200">
                        {university}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PhD Section - Enhanced */}
          <div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-xl h-full flex flex-col justify-center text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 text-6xl">🎓</div>
                <div className="absolute bottom-4 left-4 text-4xl">📚</div>
              </div>

              <div className="relative z-10">
                <div className="bg-white bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <School className="text-4xl" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Ph.D Programs</h3>
                <p className="text-xl text-orange-100 mb-6">All Running Faculties in the University</p>
                <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-colors duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Enhanced */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 text-6xl">🎯</div>
            <div className="absolute top-8 right-8 text-6xl">🚀</div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-8xl">✨</div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6">Ready to Start Your Educational Journey?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who have transformed their careers with our quality education
              programs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-blue-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold text-lg mb-2">📚 Multiple Learning Modes</h4>
                <p className="text-blue-200 text-sm">Regular • Distance • Online</p>
              </div>
              <div className="bg-blue-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold text-lg mb-2">🎓 20+ Partner Universities</h4>
                <p className="text-blue-200 text-sm">Recognized & Accredited</p>
              </div>
              <div className="bg-blue-800 bg-opacity-50 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold text-lg mb-2">💰 Financial Support</h4>
                <p className="text-blue-200 text-sm">Scholarships & Loans</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <span>View All Courses</span>
                  <ArrowForward />
                </button>
              </Link>
              <Link href="/enquiry">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  Get Free Counseling
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
