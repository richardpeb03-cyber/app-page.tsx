import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FabulousLogistics – Your Full-Service Travel Partner',
  description: 'Fabulous Logistics handles flight reservations, hotel bookings, visas, and car rentals across Nigeria and beyond.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e14] text-white selection:bg-[#C9A84C] selection:text-black">
      {/* Hero Section */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter">
          <span className="italic text-[#C9A84C]">Fabulous</span> LOGISTICS
        </div>
        <div className="space-x-6 text-sm uppercase tracking-widest hidden md:block">
          <a href="#services" className="hover:text-[#C9A84C] transition">Services</a>
          <a href="#contact" className="hover:text-[#C9A84C] transition">Contact</a>
        </div>
      </nav>

      <section className="px-6 py-20 text-center relative overflow-hidden">
        {/* The "Gold Orb" effect from your video */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A84C] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        
        <h2 className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-4">Nigeria's Premier Travel Agency</h2>
        <h1 className="text-6xl md:text-8xl font-black italic mb-6 leading-tight">
          FABULOUS <br /> <span className="text-[#C9A84C]">Logistics</span>
        </h1>
        <p className="text-xl italic text-gray-400 mb-10">"Every trip is a special emotion"</p>
        
        <a href="https://wa.me/2348036414646" className="inline-block bg-[#C9A84C] text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition transform">
          BOOK A TRIP NOW
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-[#C9A84C] uppercase tracking-widest text-sm mb-2">What we offer</h3>
        <h2 className="text-4xl font-bold mb-12">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Flight Reservations', 'Hotel Bookings', 'Visa Assistance', 'Tour Packages', 'Airport Transfers', 'Car Rentals'].map((service) => (
            <div key={service} className="p-8 border border-gray-800 bg-[#11161d] rounded-2xl hover:border-[#C9A84C] transition group">
              <h4 className="text-xl font-bold mb-3 group-hover:text-[#C9A84C]">{service}</h4>
              <p className="text-gray-400 text-sm">Professional handling of all your {service.toLowerCase()} needs with best-in-class support.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-24 px-6 text-center">
        <h2 className="text-5xl font-bold italic mb-12">LET'S <span className="text-[#C9A84C]">travel</span></h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <a href="https://wa.me/2348036414646" className="flex-1 bg-[#25D366] p-4 rounded-xl font-bold flex items-center justify-center gap-2">
            WhatsApp 1
          </a>
          <a href="https://wa.me/2348107215325" className="flex-1 bg-[#25D366] p-4 rounded-xl font-bold flex items-center justify-center gap-2">
            WhatsApp 2
          </a>
        </div>
        <div className="mt-12 text-gray-500 text-sm tracking-widest uppercase">
          Follow us: @ricobo_ | @theslickchef
        </div>
      </section>
    </main>
  )
}
