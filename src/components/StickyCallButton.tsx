export default function StickyCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-950/10 bg-white p-2 shadow-[0_-8px_24px_rgba(16,24,32,0.10)] lg:hidden">
      <a
        href="tel:+15186458811"
        className="btn-primary mx-auto flex w-full max-w-md py-3.5 text-sm"
      >
        Call or Text 518-645-8811
      </a>
    </div>
  )
}