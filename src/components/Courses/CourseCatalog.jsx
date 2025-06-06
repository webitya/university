"use client"
import { useState } from "react"
import {
  LocalHospital,
  Engineering,
  Computer,
  Business,
  Gavel,
  School,
  ExpandMore,
  ExpandLess,
  AccessTime,
  CheckCircle,
} from "@mui/icons-material"

export default function CourseCatalog() {
  const [expandedCourse, setExpandedCourse] = useState(null)

  const courseDetails = [
    {
      icon: <LocalHospital className="text-3xl text-red-600" />,
      title: "Medical",
      color: "bg-red-50 border-red-200",
      headerColor: "bg-red-500",
      courses: [
        {
          name: "MBBS",
          duration: "5.5 Years",
          mode: ["Regular"],
          eligibility: "12th with PCB (50%)",
          description: "Bachelor of Medicine and Bachelor of Surgery",
        },
        {
          name: "BDS",
          duration: "5 Years",
          mode: ["Regular"],
          eligibility: "12th with PCB (50%)",
          description: "Bachelor of Dental Surgery",
        },
        {
          name: "BAMS",
          duration: "5.5 Years",
          mode: ["Regular", "Distance"],
          eligibility: "12th with PCB (50%)",
          description: "Bachelor of Ayurvedic Medicine and Surgery",
        },
        {
          name: "BHMS",
          duration: "5.5 Years",
          mode: ["Regular", "Distance"],
          eligibility: "12th with PCB (50%)",
          description: "Bachelor of Homeopathic Medicine and Surgery",
        },
        {
          name: "MD/MS",
          duration: "3 Years",
          mode: ["Regular"],
          eligibility: "MBBS Degree",
          description: "Postgraduate Medical Degrees",
        },
      ],
    },
    {
      icon: <LocalHospital className="text-3xl text-blue-600" />,
      title: "Paramedical",
      color: "bg-blue-50 border-blue-200",
      headerColor: "bg-blue-500",
      courses: [
        {
          name: "DMLT",
          duration: "2 Years",
          mode: ["Regular", "Distance"],
          eligibility: "12th with Science",
          description: "Diploma in Medical Laboratory Technology",
        },
        {
          name: "Radiology",
          duration: "1-2 Years",
          mode: ["Regular", "Distance"],
          eligibility: "12th with Science",
          description: "Diploma/Certificate in Radiology",
        },
        {
          name: "OT Technology",
          duration: "2 Years",
          mode: ["Regular", "Distance"],
          eligibility: "12th with Science",
          description: "Operation Theatre Technology",
        },
        {
          name: "Physiotherapy",
          duration: "4.5 Years",
          mode: ["Regular"],
          eligibility: "12th with PCB (50%)",
          description: "Bachelor of Physiotherapy",
        },
      ],
    },
    {
      icon: <Engineering className="text-3xl text-blue-600" />,
      title: "Engineering",
      color: "bg-blue-50 border-blue-200",
      headerColor: "bg-blue-500",
      courses: [
        {
          name: "B.Tech",
          duration: "4 Years",
          mode: ["Regular", "Distance"],
          eligibility: "12th with PCM (50%)",
          description: "Bachelor of Technology - All Branches",
        },
        {
          name: "M.Tech",
          duration: "2 Years",
          mode: ["Regular", "Distance"],
          eligibility: "B.Tech/B.E Degree",
          description: "Master of Technology - All Specializations",
        },
        {
          name: "Diploma",
          duration: "3 Years",
          mode: ["Regular", "Distance"],
          eligibility: "10th Pass",
          description: "Diploma in Engineering - All Branches",
        },
      ],
    },
    {
      icon: <Computer className="text-3xl text-green-600" />,
      title: "Computer Application",
      color: "bg-green-50 border-green-200",
      headerColor: "bg-green-500",
      courses: [
        {
          name: "BCA",
          duration: "3 Years",
          mode: ["Regular", "Distance", "Online"],
          eligibility: "12th Pass (Any Stream)",
          description: "Bachelor of Computer Applications",
        },
        {
          name: "MCA",
          duration: "2 Years",
          mode: ["Regular", "Distance", "Online"],
          eligibility: "BCA/B.Sc/B.Tech",
          description: "Master of Computer Applications",
        },
        {
          name: "PGDCA",
          duration: "1 Year",
          mode: ["Regular", "Distance", "Online"],
          eligibility: "Graduation in Any Stream",
          description: "Post Graduate Diploma in Computer Applications",
        },
      ],
    },
    {
      icon: <Business className="text-3xl text-purple-600" />,
      title: "Management",
      color: "bg-purple-50 border-purple-200",
      headerColor: "bg-purple-500",
      courses: [
        {
          name: "BBA",
          duration: "3 Years",
          mode: ["Regular", "Distance", "Online"],
          eligibility: "12th Pass (Any Stream)",
          description: "Bachelor of Business Administration",
        },
        {
          name: "MBA",
          duration: "2 Years",
          mode: ["Regular", "Distance", "Online"],
          eligibility: "Graduation in Any Stream",
          description: "Master of Business Administration - All Specializations",
        },
      ],
    },
    {
      icon: <Gavel className="text-3xl text-indigo-600" />,
      title: "Law",
      color: "bg-indigo-50 border-indigo-200",
      headerColor: "bg-indigo-500",
      courses: [
        {
          name: "LLB",
          duration: "3 Years",
          mode: ["Regular", "Distance"],
          eligibility: "Graduation in Any Stream",
          description: "Bachelor of Laws",
        },
        {
          name: "BA LLB",
          duration: "5 Years",
          mode: ["Regular", "Distance"],
          eligibility: "12th Pass (Any Stream)",
          description: "Integrated BA + LLB",
        },
        {
          name: "LLM",
          duration: "2 Years",
          mode: ["Regular", "Distance"],
          eligibility: "LLB Degree",
          description: "Master of Laws",
        },
      ],
    },
  ]

  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Complete Course Catalog</h2>
          <p className="text-lg text-gray-600">
            Detailed information about all our courses with eligibility and duration
          </p>
        </div>

        <div className="space-y-6">
          {courseDetails.map((category, index) => (
            <div key={index} className={`border-2 rounded-lg overflow-hidden ${category.color}`}>
              <button
                onClick={() => toggleCourse(index)}
                className={`w-full px-6 py-4 text-white ${category.headerColor} flex items-center justify-between hover:opacity-90 transition-opacity`}
              >
                <div className="flex items-center space-x-3">
                  {category.icon}
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {category.courses.length} Courses
                  </span>
                </div>
                {expandedCourse === index ? <ExpandLess className="text-2xl" /> : <ExpandMore className="text-2xl" />}
              </button>

              {expandedCourse === index && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="bg-white p-6 rounded-lg shadow-md border">
                        <h4 className="text-xl font-bold text-gray-800 mb-3">{course.name}</h4>
                        <p className="text-gray-600 mb-4">{course.description}</p>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <AccessTime className="text-blue-500" />
                            <span className="text-sm text-gray-700">Duration: {course.duration}</span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <CheckCircle className="text-green-500" />
                            <span className="text-sm text-gray-700">Eligibility: {course.eligibility}</span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <School className="text-purple-500" />
                            <div className="flex flex-wrap gap-1">
                              {course.mode.map((mode, modeIndex) => (
                                <span key={modeIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                  {mode}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing the Right Course?</h3>
          <p className="text-blue-100 mb-6">
            Our expert counselors are here to guide you in selecting the perfect course for your career goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Free Counseling
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
