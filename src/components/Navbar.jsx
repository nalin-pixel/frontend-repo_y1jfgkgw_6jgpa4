import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-blue-600" />
            <span className="font-semibold text-gray-900">Winnergy Marketplace</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Product</a>
            <a href="#solutions" className="hover:text-gray-900">Solutions</a>
            <a href="#customers" className="hover:text-gray-900">Customers</a>
            <a href="#resources" className="hover:text-gray-900">Resources</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-md text-gray-700 hover:text-gray-900">Log in</button>
            <button className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black">Book a demo</button>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100">
            {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-700">Product</a>
            <a href="#solutions" className="block text-gray-700">Solutions</a>
            <a href="#customers" className="block text-gray-700">Customers</a>
            <a href="#resources" className="block text-gray-700">Resources</a>
            <div className="pt-3 flex gap-2">
              <button className="flex-1 px-4 py-2 rounded-md text-gray-700 border">Log in</button>
              <button className="flex-1 px-4 py-2 rounded-md bg-gray-900 text-white">Book a demo</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
