import "./globals.css"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import EnquiryModal from "@/components/Common/EnquiryModal"
import WhatsAppButton from "@/components/Common/WhatsAppButton"

export const metadata = {
  title: "United Group of Education - Quality Education & Career Guidance",
  description:
    "Professional education services with career counseling, admission guidance, and quality training programs.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <EnquiryModal />
        <WhatsAppButton />
      </body>
    </html>
  )
}
