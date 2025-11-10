// import { useState } from 'react'
// import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     subject: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSubmitted(true)
//       setFormData({
//         name: '',
//         email: '',
//         company: '',
//         subject: '',
//         message: ''
//       })
//     }, 1000)
//   }

//   const contactInfo = [
//     {
//       icon: <Mail className="h-6 w-6" />,
//       title: "Email Us",
//       details: "info@cityweb.com",
//       subtext: "We'll respond within 24 hours"
//     },
//     {
//       icon: <Phone className="h-6 w-6" />,
//       title: "Call Us",
//       details: "018********",
//       subtext: "Mon-Fri 9AM-6PM"
//     },
//     {
//       icon: <MapPin className="h-6 w-6" />,
//       title: "Visit Us",
//       details: "123 CityWeb, Eco Valley",
//       subtext: "Tech Valley, CA 94105"
//     },
//     {
//       icon: <Clock className="h-6 w-6" />,
//       title: "Business Hours",
//       details: "9:00 AM - 6:00 PM",
//       subtext: "Monday through Friday"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
//             Get in <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Touch</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Ready to transform your city with environmental intelligence? 
//             We'd love to hear from you and discuss how CityWeb can help.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <div className="flex items-center mb-8">
//               <MessageCircle className="h-8 w-8 text-primary-600 mr-3" />
//               <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
//             </div>

//             {isSubmitted ? (
//               <div className="text-center py-12">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
//                   <Send className="h-8 w-8" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
//                 <p className="text-gray-600 mb-6">
//                   Thank you for reaching out. We'll get back to you within 24 hours.
//                 </p>
//                 <button
//                   onClick={() => setIsSubmitted(false)}
//                   className="text-primary-600 font-semibold hover:text-primary-700"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
//                       placeholder="Namira Benin"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
//                       placeholder="namirabenin@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
//                     Company/Organization
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
//                     placeholder="City Government, Company Name, etc."
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                     Subject *
//                   </label>
//                   <select
//                     id="subject"
//                     name="subject"
//                     required
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
//                   >
//                     <option value="">Select a subject</option>
//                     <option value="demo">Request a Demo</option>
//                     <option value="pricing">Pricing Information</option>
//                     <option value="partnership">Partnership Opportunities</option>
//                     <option value="support">Technical Support</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={6}
//                     required
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
//                     placeholder="Tell us about your city's environmental monitoring needs..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="h-5 w-5 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
//               <div className="grid grid-cols-1 gap-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                     <div className="flex items-start space-x-4">
//                       <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex-shrink-0">
//                         {info.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
//                         <p className="text-primary-600 font-medium mb-1">{info.details}</p>
//                         <p className="text-gray-600 text-sm">{info.subtext}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Response Promise */}
//             <div className="bg-primary-50 rounded-xl p-6">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Our Response Promise</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-primary-600 rounded-full" />
//                   <p className="text-gray-700">General inquiries: Within 24 hours</p>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-primary-600 rounded-full" />
//                   <p className="text-gray-700">Demo requests: Same business day</p>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-primary-600 rounded-full" />
//                   <p className="text-gray-700">Technical support: Within 4 hours</p>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <div className="w-2 h-2 bg-primary-600 rounded-full" />
//                   <p className="text-gray-700">Partnership inquiries: Within 48 hours</p>
//                 </div>
//               </div>
//             </div>

//             {/* Office Hours */}
//             <div className="bg-white rounded-xl p-6 shadow-lg">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Monday - Friday:</span>
//                   <span className="font-medium">9:00 AM - 6:00 PM EST</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Saturday:</span>
//                   <span className="font-medium">10:00 AM - 2:00 PM EST</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Sunday:</span>
//                   <span className="font-medium">Closed</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact



import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      title: "Email Us",
      details: "info@cityweb.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6 text-emerald-600" />,
      title: "Call Us",
      details: "018********",
      subtext: "Mon-Fri 9AM-6PM"
    },
    {
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
      title: "Visit Us",
      details: "123 CityWeb",
      subtext: "Eco Valley, CA 94105"
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-600" />,
      title: "Business Hours",
      details: "9:00 AM - 6:00 PM",
      subtext: "Monday through Friday"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-emerald-100 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-900 mb-6">
            Get in <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your city with environmental intelligence? We'd love to hear from you and discuss how CityWeb can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-200">
            <div className="flex items-center mb-8">
              <MessageCircle className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-bold text-emerald-900"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Send us a Message</span></h2>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Message Sent!</span></h3>
                <p className="text-emerald-700 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-emerald-700 font-semibold hover:text-emerald-800"
                >
                  <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Send another message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-emerald-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Namira Benin"
                      className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-emerald-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="namirabenin@example.com"
                      className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-emerald-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="City Government, Company Name, etc."
                    className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-emerald-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-emerald-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your city's environmental monitoring needs..."
                    className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 flex items-center justify-center transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-8"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Contact Information</span></h2>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-emerald-200">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-emerald-900 mb-1">{info.title}</h3>
                        <p className="text-emerald-700 font-medium mb-1">{info.details}</p>
                        <p className="text-emerald-600 text-sm">{info.subtext}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RESPONSE PROMISE */}
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-900 mb-4"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Our Response Promise</span></h3>
              <div className="space-y-3">
                {[
                  "General inquiries: Within 24 hours",
                  "Demo requests: Same business day",
                  "Technical support: Within 4 hours",
                  "Partnership inquiries: Within 48 hours"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                    <p className="text-emerald-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* OFFICE HOURS */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-200">
              <h3 className="text-xl font-bold text-emerald-900 mb-4"><span className="bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent">Office Hours</span></h3>
              <div className="space-y-2 text-emerald-700">
                <div className="flex justify-between"><span>Monday - Friday:</span><span className="font-medium">9:00 AM - 6:00 PM EST</span></div>
                <div className="flex justify-between"><span>Saturday:</span><span className="font-medium">10:00 AM - 2:00 PM EST</span></div>
                <div className="flex justify-between"><span>Sunday:</span><span className="font-medium">Closed</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
