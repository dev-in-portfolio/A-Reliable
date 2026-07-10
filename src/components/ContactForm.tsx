"use client"

import { FormEvent, useMemo, useState } from "react"

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const minPickupDate = useMemo(() => new Date().toISOString().split("T")[0], [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("submitting")

    const form = event.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch("https://formsubmit.co/ajax/areliabletrucking@proton.me", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (!response.ok) throw new Error("Form submission failed")

      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "mt-2 block w-full rounded border border-navy-950/20 bg-white px-4 py-3 text-base text-navy-950 shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
  const labelClass = "block text-sm font-extrabold text-navy-900"

  if (status === "success") {
    return (
      <div className="border-l-4 border-brand-500 bg-brand-50 p-6" role="status">
        <h3 className="font-heading text-2xl font-extrabold text-navy-950">Your request was sent</h3>
        <p className="mt-3 leading-7 text-navy-700">
          Thank you. For the fastest response, call or text{" "}
          <a href="tel:+15186458811" className="font-extrabold text-brand-700 underline">
            518-645-8811
          </a>.
        </p>
        <p className="mt-3 text-sm leading-6 text-navy-600">
          Submission does not guarantee availability, pricing, equipment assignment, route availability, or acceptance of a load.
        </p>
        <button type="button" className="btn-secondary mt-5" onClick={() => setStatus("idle")}>
          Send Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-describedby="form-disclaimer">
      <input type="hidden" name="_subject" value="New Transportation Request - A Reliable Trucking" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>Name <span className="text-brand-700">*</span></label>
          <input type="text" name="name" id="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone number <span className="text-brand-700">*</span></label>
          <input type="tel" name="phone" id="phone" required autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>Email address</label>
          <input type="email" name="email" id="email" autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company name</label>
          <input type="text" name="company_name" id="company" autoComplete="organization" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="pickup" className={labelClass}>Pickup location <span className="text-brand-700">*</span></label>
          <input type="text" name="pickup_location" id="pickup" required placeholder="City, State" className={inputClass} />
        </div>
        <div>
          <label htmlFor="delivery" className={labelClass}>Delivery location <span className="text-brand-700">*</span></label>
          <input type="text" name="delivery_location" id="delivery" required placeholder="City, State" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>What needs to be moved? <span className="text-brand-700">*</span></label>
        <textarea name="description" id="description" required rows={4} className={inputClass} placeholder="Describe the freight, cargo, goods, supplies, or equipment." />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label htmlFor="weight" className={labelClass}>Estimated weight</label>
          <input type="text" name="estimated_weight" id="weight" className={inputClass} placeholder="Example: 2,000 lbs" />
        </div>
        <div>
          <label htmlFor="dimensions" className={labelClass}>Dimensions</label>
          <input type="text" name="dimensions" id="dimensions" className={inputClass} placeholder="Length × width × height" />
        </div>
        <div>
          <label htmlFor="pickup-date" className={labelClass}>Preferred pickup date</label>
          <input type="date" name="pickup_date" id="pickup-date" min={minPickupDate} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="delivery-date" className={labelClass}>Preferred delivery date</label>
          <input type="date" name="delivery_date" id="delivery-date" min={minPickupDate} className={inputClass} />
        </div>
        <div>
          <label htmlFor="liftgate" className={labelClass}>Liftgate needed?</label>
          <select name="liftgate_needed" id="liftgate" className={inputClass} defaultValue="unsure">
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Unsure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className={labelClass}>Additional details</label>
        <textarea
          name="additional_details"
          id="details"
          rows={4}
          className={inputClass}
          placeholder="Loading access, dock information, special handling needs, timing, or other useful details."
        />
      </div>

      <div>
        <label htmlFor="contact-method" className={labelClass}>Preferred contact method</label>
        <select name="preferred_contact_method" id="contact-method" className={inputClass} defaultValue="phone">
          <option value="phone">Phone call</option>
          <option value="text">Text message</option>
          <option value="email">Email</option>
        </select>
      </div>

      <p id="form-disclaimer" className="border-t border-navy-950/10 pt-5 text-sm leading-6 text-navy-600">
        The information submitted will be used to respond to this transportation inquiry. Submission does not
        guarantee availability, pricing, equipment assignment, route availability, or acceptance of a load.
      </p>

      {status === "error" && (
        <div className="border-l-4 border-red-600 bg-red-50 p-4 text-sm leading-6 text-red-900" role="alert">
          The request could not be sent. Please try again or call or text 518-645-8811.
        </div>
      )}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending Request…" : "Send Transportation Request"}
      </button>
    </form>
  )
}