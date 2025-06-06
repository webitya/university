"use client"

import { useState } from "react"
import { ExpandMore, ExpandLess } from "@mui/icons-material"

export default function DetailedCourseGrid() {
  const [expandedCategory, setExpandedCategory] = useState(null)

  const detailedCourses = {
    Medical: {
      undergraduate: ["MBBS", "BDS", "BAMS", "BHMS", "BUMS"],
      postgraduate: ["MD", "MS", "MDS"],
      description: "Comprehensive medical education programs",
    },
    Engineering: {
      diploma: ["Diploma in Engineering"],
      undergraduate: ["B.Tech (All Branches)"],
      postgraduate: ["M.Tech (All Specializations)"],
      description: "Technical education for future engineers",
    },
    "Computer Application": {
      diploma: ["PGDCA", "Diploma in Computer Applications"],
      undergraduate: ["BCA", "B.Sc IT", "B.Sc Computer Science"],
      postgraduate: ["MCA", "M.Sc IT", "M.Sc Computer Science"],
      description: "IT and computer science programs",
    },
    Management: {
      undergraduate: ["BBA"],
      postgraduate: ["MBA (All Specializations)"],
      description: "Business and management education",
    },
    Nursing: {
      certificate: ["ANM"],
      diploma: ["GNM"],
      undergraduate: ["B.Sc Nursing", "Post Basic B.Sc Nursing"],
      postgraduate: ["M.Sc Nursing"],
      description: "Healthcare and nursing programs",
    },
    Pharmacy: {
      diploma: ["D.Pharma"],
      undergraduate: ["B.Pharma"],
      postgraduate: ["M.Pharma"],
      description: "Pharmaceutical sciences education",
    },
  }

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Detailed Course Information</h2>
          <p className="text-lg text-gray-600">Click on any category to view detailed course structure</p>
        </div>

        <div className="space-y-4">
          {Object.entries(detailedCourses).map(([category, details]) => (
            <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                  <p className="text-blue-100 text-sm">{details.description}</p>
                </div>
                {expandedCategory === category ? <ExpandLess /> : <ExpandMore />}
              </button>

              {expandedCategory === category && (
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(details).map(([level, courses]) => {
                      if (level === "description") return null
                      return (
                        <div key={level} className="bg-white p-4 rounded-lg border">
                          <h4 className="font-semibold text-gray-800 mb-3 capitalize">{level}</h4>
                          <ul className="space-y-2">
                            {courses.map((course, index) => (
                              <li key={index} className="text-gray-600 text-sm flex items-center">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-green-100 border border-green-300 rounded-lg p-6 inline-block">
            <h3 className="text-xl font-bold text-green-800 mb-2">💡 Need Course Guidance?</h3>
            <p className="text-green-700 mb-4">
              Our expert counselors will help you choose the right course for your career goals
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Free Counseling
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
