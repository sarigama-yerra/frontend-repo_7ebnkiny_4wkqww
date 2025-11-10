import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Supplier Portal untuk Perusahaan Retail',
    description:
      'Portal terpusat bagi supplier untuk mengelola katalog, PO, dan pengiriman. Meningkatkan visibilitas rantai pasok dan mengurangi lead-time.',
    stack: ['Laravel', 'Vue', 'MySQL', 'Nginx', 'EC2'],
  },
  {
    title: 'Integrasi API GrabMart & GrabFood',
    description:
      'Membangun integrasi end-to-end untuk sinkronisasi produk, pesanan, dan status pengiriman antara sistem internal dan platform Grab.',
    stack: ['Node.js', 'AWS S3', 'API Integration', 'Monitoring'],
  },
  {
    title: 'Sistem Booking Event + Payment Gateway DOKU',
    description:
      'Platform pemesanan event dengan pembayaran online terintegrasi DOKU, dukungan notifikasi real-time dan rekonsiliasi pembayaran.',
    stack: ['Laravel', 'Inertia', 'SQL Server', 'DOKU API'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Proyek Pilihan
          </h2>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            Diskusikan proyek Anda
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-600 ring-1 ring-gray-200">
                  <ExternalLink size={14} />
                  Case Study
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-700 ring-1 ring-emerald-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
