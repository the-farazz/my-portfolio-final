export default function CertificationsSection() {
  const certifications = [
 
    {
      title: "Front-End Development",
      organization: "Jawan Pakistan", 
      description: "Complete front-end development course covering HTML, CSS, JavaScript, and modern frameworks.",
      icon: "💻"
    },
    {
      title: "Back-End Development",
      organization: "Decotech",
      description: "Complete bront-end development course covering JavaScript,NodeJS and modern frameworks.",
      icon: "🏆"
    },
       {
      title: "ReactJS Course",
      organization: "DevTown",
      description: "Comprehensive React.js training covering components, hooks, state management, and modern development practices.",
      icon: "⚛️"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-8 bg-[rgb(40,40,40)] light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">Certifications & Learning</h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[rgb(30,30,30)] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 light:bg-white light:border light:border-gray-200"
            >
             <div className="flex justify-center">
               <div className="w-16 h-16 bg-[yellow] rounded-full flex items-center justify-center mb-4">
                <span className="text-[rgb(30,30,30)] text-2xl">{cert.icon}</span>
              </div>
             </div>
              <h3 className="flex justify-center text-xl font-semibold text-[yellow] mb-3">{cert.title}</h3>
              <p className="flex justify-center text-white mb-3 light:text-gray-600">{cert.organization}</p>
              <p className=" text-gray-500 text-center  text-sm light:text-gray-500">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
