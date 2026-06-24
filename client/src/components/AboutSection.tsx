'use client';
import {
  Code2,
  Braces,
  Palette,
  Smartphone,
  Bot,
  RefreshCw,
} from 'lucide-react';

const competencies = [
  { icon: Code2,     label: 'React.js & Next.js Development' },
  { icon: Braces,    label: 'JavaScript (ES6+) & TypeScript' },
  { icon: Palette,   label: 'Tailwind CSS, Material UI & Bootstrap' },
  { icon: RefreshCw, label: 'Redux State Management' },
  { icon: Smartphone,label: 'Responsive & Scalable Web Design' },
  { icon: Bot,       label: 'AI-Powered Dev (Antigravity, Copilot)' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-20 px-4 lg:px-8 bg-[rgb(40,40,40)] light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">
            About Me
          </h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold text-[yellow]">Front End Developer</h3>
            <p className="text-gray-300 leading-relaxed light:text-gray-600">
              I'm a Front End Developer with a BS in Computer Science from the University of
              Karachi – UBIT. I specialize in building high-performance, responsive web
              applications using modern technologies like Next.js, React.js, Tailwind CSS,
              and Material UI.
            </p>
            <p className="text-gray-300 leading-relaxed light:text-gray-600">
              My experience spans enterprise ERP/CRM systems, fintech platforms, and
              e-commerce solutions. I'm passionate about clean code, scalable UI architecture,
              and leveraging AI-powered dev tools like Google Antigravity, GitHub Copilot, and
              Claude to ship faster and smarter.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: '10+', label: 'Projects' },
                { value: '3+',  label: 'Companies' },
                { value: '1+',  label: 'Years Exp' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[yellow]">{stat.value}</div>
                  <div className="text-sm text-gray-400 light:text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="bg-[rgb(30,30,30)] p-8 rounded-xl light:bg-white light:border light:border-gray-200">
            <h4 className="text-xl font-semibold mb-6 text-white light:text-gray-900">
              Core Competencies
            </h4>
            <div className="space-y-4">
              {competencies.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-[yellow] shrink-0" />
                  <span className="text-white light:text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

