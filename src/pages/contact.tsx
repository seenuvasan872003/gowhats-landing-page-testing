"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })

  const whatsappNumber = "919342238388" // With country code
  // const contactEmail = "seenuifo.2003@gmail.com"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const messageText = `New Contact Submission:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`

    // WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(messageText)}`
    window.open(whatsappUrl, "_blank")

    // // Mailto link
    // const mailtoUrl = `mailto:${contactEmail}?subject=New Contact Form Submission&body=${encodeURIComponent(messageText)}`
    // window.open(mailtoUrl, "_blank")

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-10"
      >
        <motion.div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Let’s Talk!
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Have a question or idea? Drop us a message and we’ll get back to you!
            </p>
          </motion.div>

          <div className="space-y-4">
            <ContactInfo icon={Phone} title="+91 85240 89733" subtitle="Call or WhatsApp" />
            <ContactInfo icon={Mail} title="techvaseegrah@gmail.com" subtitle="Email Anytime" />
            <ContactInfo icon={MapPin} title="Thanjavur, Tamil Nadu" subtitle="Our HQ" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-8 shadow-2xl rounded-2xl bg-white dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We’re happy to hear from you.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputBlock label="First Name" id="firstName" value={formData.firstName} onChange={handleChange} />
                <InputBlock label="Last Name" id="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
              <InputBlock label="Email" id="email" value={formData.email} onChange={handleChange} type="email" />
              <InputBlock label="Phone" id="phone" value={formData.phone} onChange={handleChange} type="tel" />
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#1eb749] text-white text-lg"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

function ContactInfo({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-4 bg-[#25D366]/10 p-4 rounded-xl"
    >
      <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#25D366]" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  )
}

function InputBlock({ label, id, value, onChange, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  )
}
