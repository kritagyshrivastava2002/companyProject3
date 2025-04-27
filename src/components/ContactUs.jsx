import React from 'react'

function ContactUs() {
  return (
    <section className="text-center">
    <h2 className="text-4xl font-bold text-blue-600 mb-12">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <form className="space-y-4 text-left">
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name *" className="border p-2 rounded" required />
          <input type="text" placeholder="Last Name *" className="border p-2 rounded" required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="tel" placeholder="Contact Number *" className="border p-2 rounded" required />
          <input type="email" placeholder="Email *" className="border p-2 rounded" required />
        </div>
        <textarea placeholder="Message" className="border p-2 rounded w-full h-24"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
      </form>
      <img src="https://tse1.mm.bing.net/th?id=OIP.jEzPKIUcRD2LQGrNF-WxHgHaHa&pid=Api&P=0&h=180" alt="Contact Illustration" className="w-full max-w-md mx-auto" />
    </div>
  </section>
  )
}

export default ContactUs