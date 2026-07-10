"use client"

import { useState } from "react"

export default function LoadAdvisor() {
  const [weight, setWeight] = useState("medium")
  const [loadType, setLoadType] = useState("boxed")
  const [liftgate, setLiftgate] = useState("unsure")

  const commercialRigReview = weight === "heavy" || loadType === "equipment"
  const equipmentLabel = commercialRigReview
    ? "Commercial rig review may be appropriate"
    : "Box truck review may be appropriate"

  const equipmentDescription = commercialRigReview
    ? "The selected information may require review for commercial rig transportation. Final equipment selection depends on the complete load details and available equipment."
    : "Based on the limited information selected, a box truck may be worth discussing. Final equipment selection depends on the complete load details, dimensions, weight, route, access, timing, and availability."

  const liftgateInformation =
    liftgate === "yes"
      ? "Liftgate support may be relevant. Confirm loading conditions, cargo dimensions, weight, and access requirements with the company."
      : liftgate === "no"
        ? "Standard dock or forklift loading may be possible, depending on the pickup and delivery locations."
        : "The company can review the pickup and delivery conditions to help determine whether liftgate support may be appropriate."

  const continueToForm = () => {
    const formElement = document.getElementById("transportation-request-form")
    if (formElement) formElement.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="border border-navy-950/10 bg-warm-50 p-6 sm:p-8" aria-labelledby="load-helper-title">
      <span className="eyebrow">Request preparation tool</span>
      <h2 id="load-helper-title" className="mt-3 font-heading text-2xl font-extrabold text-navy-950">
        Load Information Helper
      </h2>
      <p id="load-helper-description" className="mt-3 max-w-3xl leading-7 text-navy-600">
        Select the available details to prepare information for your transportation request. This does not confirm equipment assignment or load acceptance.
      </p>

      <div className="mt-7 grid gap-5 md:grid-cols-3" aria-describedby="load-helper-description">
        <div>
          <label htmlFor="advisor-weight" className="text-sm font-extrabold text-navy-900">Estimated weight</label>
          <select id="advisor-weight" value={weight} onChange={(event) => setWeight(event.target.value)} className="mt-2 w-full rounded border border-navy-950/20 bg-white px-4 py-3 text-navy-950">
            <option value="light">Under 3,000 lbs</option>
            <option value="medium">3,000–10,000 lbs</option>
            <option value="heavy">Over 10,000 lbs</option>
          </select>
        </div>
        <div>
          <label htmlFor="advisor-cargo-type" className="text-sm font-extrabold text-navy-900">Cargo type</label>
          <select id="advisor-cargo-type" value={loadType} onChange={(event) => setLoadType(event.target.value)} className="mt-2 w-full rounded border border-navy-950/20 bg-white px-4 py-3 text-navy-950">
            <option value="boxed">Boxed goods or supplies</option>
            <option value="palletized">Palletized cargo</option>
            <option value="equipment">Equipment or machinery</option>
            <option value="cargo">General cargo</option>
          </select>
        </div>
        <div>
          <label htmlFor="advisor-liftgate" className="text-sm font-extrabold text-navy-900">Liftgate support</label>
          <select id="advisor-liftgate" value={liftgate} onChange={(event) => setLiftgate(event.target.value)} className="mt-2 w-full rounded border border-navy-950/20 bg-white px-4 py-3 text-navy-950">
            <option value="yes">May be required</option>
            <option value="no">Not expected</option>
            <option value="unsure">Unsure</option>
          </select>
        </div>
      </div>

      <div className="mt-7 border-l-4 border-brand-500 bg-white p-5" aria-live="polite">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">Possible equipment category</p>
        <h3 className="mt-2 font-heading text-xl font-extrabold text-navy-950">{equipmentLabel}</h3>
        <p className="mt-3 leading-7 text-navy-600">{equipmentDescription}</p>
        <div className="mt-5 grid gap-5 border-t border-navy-950/10 pt-5 md:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold text-navy-950">Liftgate information</p>
            <p className="mt-2 text-sm leading-6 text-navy-600">{liftgateInformation}</p>
          </div>
          <div>
            <p className="text-sm font-extrabold text-navy-950">Route review</p>
            <p className="mt-2 text-sm leading-6 text-navy-600">
              Route availability depends on pickup location, delivery location, timing, equipment fit, and the company’s current schedule.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-navy-600">
        This tool provides general request-preparation guidance only. It does not confirm equipment availability,
        load acceptance, pricing, route availability, regulatory requirements, or transportation eligibility.
      </p>

      <button type="button" onClick={continueToForm} className="btn-secondary mt-6">
        Continue to Request Form
      </button>
    </section>
  )
}