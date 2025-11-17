import { Sparkles, ShoppingBag, Gauge, Video } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live & short video commerce",
    desc: "Host live shows and publish short shoppable clips across your storefront.",
  },
  {
    icon: ShoppingBag,
    title: "Seamless checkout",
    desc: "Built-in carts, payments, and inventory sync with your existing stack.",
  },
  {
    icon: Gauge,
    title: "Analytics that drive ROI",
    desc: "Track conversions, average order value and retention in real time.",
  },
  {
    icon: Sparkles,
    title: "Creator & affiliate tools",
    desc: "Invite creators, manage campaigns, and pay out commissions with ease.",
  },
];

export default function Features(){
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-gray-900">
            Turn views into revenue
          </h2>
          <p className="mt-2 text-gray-600">
            Everything you need to monetize video—from production to checkout.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon className="h-5 w-5"/>
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
