import { Linkedin, Github, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
              <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
              Tersedia untuk peluang baru
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Software Engineer dengan 3+ tahun pengalaman
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Spesialis membangun aplikasi web end-to-end, mengelola server, dan
              mengintegrasikan layanan pihak ketiga pada skala produksi.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:youremail@example.com"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 text-white shadow hover:bg-gray-800"
              >
                <Mail size={18} /> Hubungi Saya
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-gray-200 hover:bg-gray-50"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-gray-200 hover:bg-gray-50"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={16} />
              <span>Indonesia • Remote-friendly</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 -z-0 rounded-3xl bg-gradient-to-br from-emerald-100 to-cyan-100 blur-2xl" />
            <div className="relative z-10 rounded-3xl border border-gray-200 bg-white/80 p-6 shadow backdrop-blur">
              <div className="grid grid-cols-3 gap-3 text-sm text-gray-700">
                {[
                  { label: 'Laravel', level: 'Expert' },
                  { label: 'Vue + Inertia', level: 'Advanced' },
                  { label: 'Node.js', level: 'Intermediate' },
                  { label: 'Golang', level: 'Intermediate' },
                  { label: 'Nginx/Apache', level: 'Prod-ready' },
                  { label: 'MySQL/SQL Server', level: 'Advanced' },
                  { label: 'Linux Server', level: 'Advanced' },
                  { label: 'AWS (EC2, ALB/NLB, S3)', level: 'Working' },
                  { label: 'Integrasi API', level: 'Expert' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-gray-200 bg-white p-3 text-center shadow-sm"
                  >
                    <div className="font-semibold">{s.label}</div>
                    <div className="text-xs text-gray-500">{s.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
