"use client"
import { useState } from "react"
import { Search, FilterList, School } from "@mui/icons-material"

export default function CourseSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMode, setSelectedMode] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const categories = [
    "All Categories",
    "Medical",
    "Engineering",
    "Management",
    "Computer Application",
    "Nursing",
    "Pharmacy",
    "Law",
    "Education",
    "Science",
    "Arts & Social Science",
  ]

  const modes = ["All Modes", "Regular", "Distance", "Online"]

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <School className="text-4xl text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Our Courses</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Explore our comprehensive range of courses available in Regular, Distance, and Online modes
          </p>
          <div className="bg-yellow-400 text-blue-900 p-3 rounded-lg inline-block">
            <p className="font-semibold">📚 Scholarship & Loan की भी व्यवस्था उपलब्ध है</p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Mode Filter */}
            <div>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {modes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <FilterList />
              <span>Filter Courses</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
