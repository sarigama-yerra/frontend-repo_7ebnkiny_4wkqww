import { Mail, MessageSquare, Send, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Ayo berkolaborasi
              </h2>
              <p className="mt-2 max-w-xl text-gray-600">
                Tertarik membangun produk atau butuh bantuan integrasi sistem? Kirim
                pesan dan saya akan kembali dalam 24 jam.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:youremail@example.com"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700"
              >
                <Send size={18} /> Kirim Email
              </a>
              <a
                href="#" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
              >
                <MessageSquare size={18} /> WhatsApp
              </a>
              <a
                href="#" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
              >
                <FileText size={18} /> Unduh CV
              </a>
            </div>
          </div>
          <form className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Nama</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-emerald-200 focus:ring"
                placeholder="Nama anda"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-emerald-200 focus:ring"
                placeholder="email@domain.com"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Perihal</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-emerald-200 focus:ring"
                placeholder="Judul pesan"
              />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700">Pesan</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none ring-emerald-200 focus:ring"
                placeholder="Ceritakan kebutuhan anda secara singkat"
              />
            </div>
            <div className="md:col-span-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white hover:bg-gray-800"
              >
                <Mail size={18} /> Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
