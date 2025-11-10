import { Server, Cloud, Database, Code2 } from 'lucide-react';

const skills = [
  {
    category: 'Backend & Framework',
    icon: Code2,
    items: ['Laravel', 'Node.js', 'Golang', 'Vue + Inertia'],
  },
  {
    category: 'Database',
    icon: Database,
    items: ['MySQL', 'SQL Server'],
  },
  {
    category: 'Server & DevOps',
    icon: Server,
    items: ['Linux Server', 'Nginx', 'Apache'],
  },
  {
    category: 'Cloud (AWS)',
    icon: Cloud,
    items: ['EC2', 'ALB/NLB', 'S3'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Skillset Utama
        </h2>
        <p className="mt-2 text-gray-600">
          Keterampilan yang sering saya gunakan untuk membangun produk siap
          produksi dari sisi backend, frontend, hingga deployment.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ category, icon: Icon, items }) => (
            <div
              key={category}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                  <Icon size={20} />
                </span>
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
