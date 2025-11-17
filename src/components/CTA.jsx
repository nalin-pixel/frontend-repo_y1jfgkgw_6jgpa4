export default function CTA(){
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 bg-gray-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to grow with video commerce?</h3>
            <p className="mt-2 text-gray-300">Book a demo and see how Winnergy Marketplace can boost your sales in weeks.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-md bg-white text-gray-900 hover:bg-gray-100">Book a demo</button>
            <button className="px-5 py-3 rounded-md border border-white/30 text-white hover:bg-white/10">Contact sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
