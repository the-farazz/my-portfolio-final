export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 lg:px-8 bg-[rgb(40,40,40)] light:bg-gray-50">
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
            <h3 className="text-4xl font-semibold text-[yellow]">
              Front End Developer
            </h3>
            <p className="text-gray-300 leading-relaxed light:text-gray-600">
              I'm a Front End Developer with a BS in Computer Science from the University of Karachi – UBIT.
              I specialize in building high-performance, responsive web applications using modern technologies
              like Next.js, React.js, Tailwind CSS, and Material UI.
            </p>
            <p className="text-gray-300 leading-relaxed light:text-gray-600">
              My experience spans enterprise ERP/CRM systems, fintech platforms, and e-commerce solutions.
              I'm passionate about clean code, scalable UI architecture, and leveraging AI-powered dev tools
              like Google Antigravity, GitHub Copilot, and Claude to ship faster and smarter.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[yellow]">10+</div>
                <div className="text-sm text-gray-400 light:text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[yellow]">3+</div>
                <div className="text-sm text-gray-400 light:text-gray-500">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[yellow]">1+</div>
                <div className="text-sm text-gray-400 light:text-gray-500">Years Exp</div>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="bg-[rgb(30,30,30)] p-8 rounded-xl light:bg-white light:border light:border-gray-200">
            <h4 className="text-xl font-semibold mb-6 text-white light:text-gray-900">
              Core Competencies
            </h4>
            <div className="space-y-4">
              {[
                { icon: '⚛️', label: 'React.js & Next.js Development' },
                { icon: '🟨', label: 'JavaScript (ES6+) & TypeScript' },
                { icon: '🎨', label: 'Tailwind CSS, Material UI & Bootstrap' },
                { icon: '🔄', label: 'Redux State Management' },
                { icon: '📱', label: 'Responsive & Scalable Web Design' },
                { icon: '🤖', label: 'AI-Powered Development (Antigravity, Copilot)' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <span className="text-[yellow] text-xl">{item.icon}</span>
                  <span className="text-white light:text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
