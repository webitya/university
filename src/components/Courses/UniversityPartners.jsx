import { School, Star, CheckCircle } from "@mui/icons-material"

export default function UniversityPartners() {
  const universities = [
    {
      name: "Durga Soren University",
      location: "Jharkhand",
      established: "2018",
      recognition: "UGC Recognized",
    },
    {
      name: "YBN University",
      location: "Ranchi",
      established: "2015",
      recognition: "UGC Recognized",
    },
    {
      name: "Usha Martin University",
      location: "Ranchi",
      established: "2012",
      recognition: "UGC Recognized",
    },
    {
      name: "Glocal University",
      location: "Uttar Pradesh",
      established: "2016",
      recognition: "UGC Recognized",
    },
    {
      name: "ISBM University",
      location: "Chhattisgarh",
      established: "2017",
      recognition: "UGC Recognized",
    },
    {
      name: "North East Christian University",
      location: "Nagaland",
      established: "2015",
      recognition: "UGC Recognized",
    },
    {
      name: "Asian University",
      location: "Haryana",
      established: "2014",
      recognition: "UGC Recognized",
    },
    {
      name: "Sikkim Skill University",
      location: "Sikkim",
      established: "2018",
      recognition: "UGC Recognized",
    },
    {
      name: "Dr. D.Y. Patil University",
      location: "Maharashtra",
      established: "2003",
      recognition: "UGC Recognized",
    },
    {
      name: "Sanskriti University",
      location: "Uttar Pradesh",
      established: "2016",
      recognition: "UGC Recognized",
    },
    {
      name: "Sharda University",
      location: "Uttar Pradesh",
      established: "2009",
      recognition: "UGC Recognized",
    },
    {
      name: "GLA University",
      location: "Uttar Pradesh",
      established: "2010",
      recognition: "UGC Recognized",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our University Partners</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with 20+ recognized universities to provide you with quality education and valid degrees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {universities.map((university, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <School className="text-3xl text-blue-600 mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{university.name}</h3>
                  <p className="text-sm text-gray-600">{university.location}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-500 text-sm" />
                  <span className="text-sm text-gray-700">Established: {university.established}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 text-sm" />
                  <span className="text-sm text-gray-700">{university.recognition}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* University Benefits */}
        <div className="bg-blue-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Why Our University Partners?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="text-4xl text-green-400 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">UGC Recognized</h4>
              <p className="text-blue-100">
                All our partner universities are recognized by UGC and other statutory bodies
              </p>
            </div>
            <div className="text-center">
              <Star className="text-4xl text-yellow-400 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Quality Education</h4>
              <p className="text-blue-100">Maintain high academic standards and provide quality education</p>
            </div>
            <div className="text-center">
              <School className="text-4xl text-purple-400 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Valid Degrees</h4>
              <p className="text-blue-100">
                Degrees are valid for government jobs, higher studies, and career advancement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
