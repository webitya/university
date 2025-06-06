import { Assignment, VerifiedUser, Payment, ConfirmationNumber } from "@mui/icons-material"

export default function AdmissionProcess() {
  const steps = [
    {
      icon: <Assignment className="text-4xl text-blue-600" />,
      title: "Form Submission",
      description: "Submit your application form online or visit our office for offline submission",
      details: [
        "Online application available 24/7",
        "Offline forms at our center",
        "Required documents checklist provided",
      ],
    },
    {
      icon: <VerifiedUser className="text-4xl text-green-600" />,
      title: "Document Verification",
      description: "Our team will verify all your submitted documents and academic credentials",
      details: ["Academic certificates verification", "Identity proof validation", "Eligibility criteria check"],
    },
    {
      icon: <Payment className="text-4xl text-orange-600" />,
      title: "Fee Submission",
      description: "Pay the admission fee through multiple convenient payment options",
      details: ["Online payment gateway", "Bank transfer options", "Installment facilities available"],
    },
    {
      icon: <ConfirmationNumber className="text-4xl text-purple-600" />,
      title: "Registration Number",
      description: "Receive your unique registration number and admission confirmation",
      details: ["Instant registration number", "Admission confirmation letter", "Course commencement details"],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Step-by-Step Admission Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined admission process ensures a smooth and hassle-free experience for all students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="text-center mb-4">{step.icon}</div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{step.title}</h3>

              <p className="text-gray-600 mb-4 text-center">{step.description}</p>

              <ul className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-gray-500 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Information */}
        <div className="bg-blue-900 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Important Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Required Documents</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• 10th & 12th Mark Sheets</li>
                <li>• Graduation Certificate (if applicable)</li>
                <li>• Aadhar Card & PAN Card</li>
                <li>• Passport Size Photographs</li>
                <li>• Category Certificate (if applicable)</li>
                <li>• Migration Certificate</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Contact for Assistance</h4>
              <div className="space-y-2 text-blue-100">
                <p>📞 7766057754, 8252530876, 7857905134</p>
                <p>📧 unitedgroup.education@gmail.com</p>
                <p>📍 Near Shiv Mandir, Daladali Chowk, Ring Road, Ranchi – 835222</p>
              </div>

              <div className="mt-4 bg-yellow-400 text-blue-900 p-3 rounded">
                <p className="font-semibold">💡 Free Career Counseling Available!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
