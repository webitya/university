import { Groups, School, WorkspacePremium, Support } from "@mui/icons-material"

export default function InstituteDetails() {
  const features = [
    {
      icon: <School className="text-4xl text-blue-600" />,
      title: "Quality Education",
      description: "Comprehensive courses with experienced faculty and modern teaching methods.",
    },
    {
      icon: <Groups className="text-4xl text-green-600" />,
      title: "Career Counseling",
      description: "Free career guidance to help students choose the right path for their future.",
    },
    {
      icon: <WorkspacePremium className="text-4xl text-purple-600" />,
      title: "ISO Certified",
      description: "Recognized institution maintaining international quality standards.",
    },
    {
      icon: <Support className="text-4xl text-orange-600" />,
      title: "Student Support",
      description: "24/7 support for admission guidance and academic assistance.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose United Group of Education?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to providing quality education and comprehensive career guidance to help students achieve
            their academic and professional goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">19+</h3>
              <p className="text-blue-200">Partner Universities</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-blue-200">Course Programs</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-blue-200">Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
