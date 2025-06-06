"use client"

import { WhatsApp } from "@mui/icons-material"

export default function WhatsAppButton() {
  const whatsappNumber = "917766057754"
  const message = "Hello! I would like to know more about your courses and admission process."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40 transition-colors"
      title="Chat on WhatsApp"
    >
      <WhatsApp className="text-2xl" />
    </button>
  )
}
