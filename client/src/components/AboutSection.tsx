export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 lg:px-8 bg-[rgb(40,40,40)] light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold text-[yellow]">Aspiring Software Engineer</h3>
            <p className="text-gray-300 leading-relaxed light:text-gray-600">
              I have completed my Bachelor of Science in Computer Science (BSCS) from the University of Karachi - UBIT, where I built a strong foundation in software engineering principles and modern web technologies.
            </p>
            <p className="text-gray-300 leading-relaxed light:text-gray-600">
              My expertise lies in ReactJS, Tailwind CSS, and Material UI, with a passion for creating responsive, user centric web applications. I believe in writing clean, maintainable code and staying updated with the latest industry trends
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[yellow]">15+</div>
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

          {/* Skills Quick Overview */}
          <div className="bg-[rgb(30,30,30)] p-8 rounded-xl light:bg-white light:border light:border-gray-200">
            <h4 className="text-xl font-semibold mb-6 text-white light:text-gray-900">Core Competencies</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[yellow] text-xl">⚛️</span>
                <span className="text-white light:text-gray-700">ReactJS & Next.js Development</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-[yellow] text-xl">🟨</span>
                <span className="text-white light:text-gray-700">JavaScript & TypeScript</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[yellow] text-xl">🎨</span>
                <span className="text-white light:text-gray-700">Tailwind CSS & Material UI</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[yellow] text-xl">📱</span>
                <span className="text-white light:text-gray-700">Responsive Web Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[yellow] text-xl">📝</span>
                <span className="text-white light:text-gray-700">Version Control & Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
