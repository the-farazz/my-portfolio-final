export default function FutureGoalsSection() {
  const goals = [
    {
      title: ".NET Development",
      description: "Expanding my skillset to include .NET framework and C# for full-stack development capabilities.",
      icon: "🎓"
    },
    {
      title: "SQL & Java Spring Boot",
      description: "Learning SQL database management and Java Spring Boot for backend development and enterprise applications.",
      icon: "☕"
    },
    {
      title: "Open Source Contributions", 
      description: "Contributing to open-source projects and building tools that help the developer community.",
      icon: "📝"
    },
    // {
    //   title: "Team Leadership",
    //   description: "Leading front-end development teams and mentoring junior developers in modern web technologies.",
    //   icon: "👥"
    // }
  ];

  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">Future Goals</h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-[yellow] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[rgb(30,30,30)] text-3xl">{goal.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white light:text-gray-900">{goal.title}</h3>
              <p className="text-gray-400 light:text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
