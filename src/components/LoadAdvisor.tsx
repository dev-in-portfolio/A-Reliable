"use client"

import { useState } from "react"

export default function LoadAdvisor() {
  const [weight, setWeight] = useState<string>("medium") // light, medium, heavy
  const [loadType, setLoadType] = useState<string>("boxed") // boxed, palletized, equipment, cargo
  const [liftgate, setLiftgate] = useState<string>("yes") // yes, no, unsure

  // Advice logic
  let vehicle = "26-Foot Box Truck"
  let vehicleDesc = "Recommended for enclosed transport of boxed/palletized cargo under 10,000 lbs."
  let liftgateAdvice = "Highly recommended. Our 26-foot box trucks are equipped with hydraulic liftgates."
  let routeStatus = "Fully Compatible. Local, regional, or nationwide routes available."

  if (weight === "heavy" || loadType === "equipment") {
    vehicle = "Heavy-Duty Rig"
    vehicleDesc = "Recommended for large, heavy-haul cargo and specialized commercial freight over 10,000 lbs."
    liftgateAdvice = "Standard dock loading required (Rigs do not utilize box-truck liftgates)."
    routeStatus = "Nationwide Only. Direct routes from Charlotte, NC to all 50 states."
  } else if (liftgate === "no") {
    liftgateAdvice = "Standard loading dock or ground forklift loading will be utilized."
  } else if (liftgate === "unsure") {
    liftgateAdvice = "We will review your pickup and delivery locations to determine if a liftgate is necessary."
  }

  const handlePreFill = () => {
    // Scroll to contact form if it exists on the page
    const formElement = document.getElementById("name")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
      formElement.focus()
    }
  }

  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      
      <div className="relative z-10 space-y-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400">
            Interactive Helper
          </span>
          <h3 className="text-xl font-bold text-white font-heading tracking-wide mt-1">
            Load & Equipment Advisor
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Select your freight parameters to check fleet compatibility.
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/5 py-5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-heading">
              Estimated Weight
            </label>
            <select
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-navy-950 px-3.5 py-2.5 text-xs text-white focus:border-brand-500 focus:outline-none"
            >
              <option value="light">Light (Under 3,000 lbs)</option>
              <option value="medium">Medium (3,000 - 10,000 lbs)</option>
              <option value="heavy">Heavy (Over 10,000 lbs)</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-heading">
              Load Cargo Type
            </label>
            <select
              value={loadType}
              onChange={(e) => setLoadType(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-navy-950 px-3.5 py-2.5 text-xs text-white focus:border-brand-500 focus:outline-none"
            >
              <option value="boxed">Boxed Goods / Supplies</option>
              <option value="palletized">Palletized Cargo</option>
              <option value="equipment">Heavy Machinery / Equip</option>
              <option value="cargo">General Bulk Cargo</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-heading">
              Liftgate Support
            </label>
            <select
              value={liftgate}
              onChange={(e) => setLiftgate(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-navy-950 px-3.5 py-2.5 text-xs text-white focus:border-brand-500 focus:outline-none"
            >
              <option value="yes">Required</option>
              <option value="no">Not Needed</option>
              <option value="unsure">Unsure / Need Advice</option>
            </select>
          </div>
        </div>

        {/* Advice Panel Output */}
        <div className="bg-navy-950/60 rounded-2xl border border-white/5 p-5 space-y-4">
          <div className="flex items-start gap-3.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 mt-0.5 flex-shrink-0">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
            </span>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Recommended Vehicle</p>
              <p className="text-sm font-bold text-white font-heading mt-0.5">{vehicle}</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">{vehicleDesc}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs">
            <div className="space-y-0.5">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Liftgate Assessment</p>
              <p className="text-gray-300 font-semibold">{liftgateAdvice}</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Routing Scope</p>
              <p className="text-gray-300 font-semibold">{routeStatus}</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={handlePreFill}
            className="w-full btn-premium-primary text-xs uppercase tracking-wider font-bold py-3.5"
          >
            Apply Details to Form & Send Request
          </button>
        </div>
      </div>
    </div>
  )
}
