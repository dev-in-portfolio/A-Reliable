"use client"

import { useState, FormEvent } from "react"

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const response = await fetch("https://formsubmit.co/ajax/areliabletrucking@proton.me", {
      method: "POST",
      body: data,
    })

    if (response.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-8 text-center space-y-4">
        <h3 className="text-xl font-bold text-green-400 font-heading">
          Thank You for Contacting Us
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed max-w-lg mx-auto">
          Your message has been received. For the fastest response, call or text{" "}
          <a href="tel:+15186458811" className="font-extrabold text-brand-400 underline underline-offset-2">
            518-645-8811
          </a>{" "}
          to discuss route, timing, load details, and availability.
        </p>
        <p className="text-xs text-gray-500 max-w-lg mx-auto border-t border-white/5 pt-4">
          Submitting a request does not guarantee availability or acceptance of a load.
          All transportation requests are reviewed based on route, timing, equipment fit,
          load details, and availability.
        </p>
      </div>
    )
  }

  const inputClass = "mt-1.5 block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 shadow-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/25 focus:outline-none transition-all duration-200"
  const labelClass = "block text-xs font-bold uppercase tracking-wider text-gray-400 font-heading"

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="_subject" value="New Contact Form Submission - A Reliable Trucking" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className={inputClass}
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pickup" className={labelClass}>
            Pickup Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="pickup_location"
            id="pickup"
            required
            className={inputClass}
            placeholder="City, State"
          />
        </div>
        <div>
          <label htmlFor="delivery" className={labelClass}>
            Delivery Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="delivery_location"
            id="delivery"
            required
            className={inputClass}
            placeholder="City, State"
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          What needs to be moved? <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          id="description"
          required
          rows={3}
          className={inputClass}
          placeholder="Describe the load (type, estimated weight, etc.)"
        />
      </div>

      <div>
        <label htmlFor="pickup-date" className={labelClass}>
          When do you need it picked up?
        </label>
        <input
          type="date"
          name="pickup_date"
          id="pickup-date"
          className={`${inputClass} text-gray-400`}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="weight" className={labelClass}>
            Estimated Weight
          </label>
          <input
            type="text"
            name="estimated_weight"
            id="weight"
            className={inputClass}
            placeholder="e.g., 2,000 lbs"
          />
        </div>
        <div>
          <label htmlFor="liftgate" className={labelClass}>
            Liftgate Needed?
          </label>
          <select
            name="liftgate_needed"
            id="liftgate"
            className={inputClass}
          >
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Unsure</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name
          </label>
          <input
            type="text"
            name="company_name"
            id="company"
            className={inputClass}
            placeholder="Your company (optional)"
          />
        </div>
        <div>
          <label htmlFor="contact-method" className={labelClass}>
            Preferred Contact Method
          </label>
          <select
            name="preferred_contact_method"
            id="contact-method"
            className={inputClass}
          >
            <option value="phone">Phone Call</option>
            <option value="text">Text Message</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className={labelClass}>
          Additional Details
        </label>
        <textarea
          name="additional_details"
          id="details"
          rows={3}
          className={inputClass}
          placeholder="Special handling needs, liftgate required, timing preferences, etc."
        />
      </div>

      <div className="text-[10px] text-gray-500 leading-normal border-t border-white/5 pt-4">
        Submitting this form does not guarantee availability or acceptance of a load.
        All transportation requests are reviewed based on route, timing, equipment fit,
        load details, and availability.
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-premium-primary w-full sm:w-auto uppercase tracking-wider font-bold text-sm py-4">
          Send Message
        </button>
      </div>
    </form>
  )
}
