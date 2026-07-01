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
      <div className="rounded-lg bg-green-50 border border-green-200 p-8 text-center">
        <h3 className="text-xl font-semibold text-green-800">
          Thank You for Contacting Us
        </h3>
        <p className="mt-4 text-green-700">
          Your message has been received. For the fastest response, call or text{" "}
          <a href="tel:+15186458811" className="font-bold underline">
            518-645-8811
          </a>{" "}
          to discuss route, timing, load details, and availability.
        </p>
        <p className="mt-4 text-sm text-green-600">
          Submitting a request does not guarantee availability or acceptance of a load.
          All transportation requests are reviewed based on route, timing, equipment fit,
          load details, and availability.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="_subject" value="New Contact Form Submission - A Reliable Trucking" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-500 focus:ring-brand-500"
          placeholder="your@email.com"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">
            Pickup Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="pickup_location"
            id="pickup"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            placeholder="City, State"
          />
        </div>
        <div>
          <label htmlFor="delivery" className="block text-sm font-medium text-gray-700">
            Delivery Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="delivery_location"
            id="delivery"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            placeholder="City, State"
          />
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          What needs to be moved? <span className="text-red-500">*</span>
        </label>
        <textarea
          name="description"
          id="description"
          required
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-500 focus:ring-brand-500"
          placeholder="Describe the load (type, estimated weight, etc.)"
        />
      </div>

      <div>
        <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700">
          When do you need it picked up?
        </label>
        <input
          type="date"
          name="pickup_date"
          id="pickup-date"
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-500 focus:ring-brand-500"
        />
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-gray-700">
          Additional Details
        </label>
        <textarea
          name="additional_details"
          id="details"
          rows={3}
          className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-brand-500 focus:ring-brand-500"
          placeholder="Special handling needs, liftgate required, timing preferences, etc."
        />
      </div>

      <div className="text-xs text-gray-500">
        Submitting this form does not guarantee availability or acceptance of a load.
        All transportation requests are reviewed based on route, timing, equipment fit,
        load details, and availability.
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send Message
      </button>
    </form>
  )
}
