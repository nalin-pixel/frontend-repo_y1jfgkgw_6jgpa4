import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-gray-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500"/>
              Convert videos into revenue in minutes
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Winnergy Marketplace turns your videos into sales
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Launch shoppable live streams, short video carousels, and embedded storefronts that plug straight into your commerce stack.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black">Book a demo</button>
              <button className="px-5 py-3 rounded-md border border-black/10 text-gray-900 hover:bg-gray-50">Explore product</button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=1"/>
                <img className="h-8 w-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=2"/>
                <img className="h-8 w-8 rounded-full border border-white" src="https://i.pravatar.cc/40?img=3"/>
              </div>
              <span>Trusted by retailers worldwide</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gray-100 border border-black/10 overflow-hidden shadow-[0_10px_60px_-15px_rgba(0,0,0,0.2)]">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1569060368681-889a62a8f416?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZW1vfGVufDB8MHx8fDE3NjMzOTMwNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Demo"/>
              <button className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md hover:scale-105 transition">
                <Play className="h-6 w-6"/>
              </button>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl border border-black/10 p-3 shadow-sm">
              <p className="text-sm font-medium">Avg order value</p>
              <p className="text-2xl font-semibold">+28%</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl border border-black/10 p-3 shadow-sm">
              <p className="text-sm font-medium">Conversion rate</p>
              <p className="text-2xl font-semibold">3.2x</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -z-10 inset-0 bg-gradient-to-b from-fuchsia-100/50 to-transparent" />
    </section>
  );
}
