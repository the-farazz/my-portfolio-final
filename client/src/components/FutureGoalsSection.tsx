export default function FutureGoalsSection() {
  const goals = [
    {
      title: "Android Development",
      description:
        "Diving into mobile development with Kotlin and Android Studio to build native Android applications.",
      icon: "📱",
    },
    {
      title: "Java & OOP",
      description:
        "Deepening knowledge of Java and Object-Oriented Programming to strengthen backend capabilities and enterprise app development.",
      icon: "☕",
    },
    {
      title: "Open Source Contributions",
      description:
        "Contributing to open-source projects and building tools that help the developer community grow.",
      icon: "📝",
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">
            Future Goals
          </h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
          <p className="text-gray-400 mt-4 light:text-gray-600">
            What I'm working towards next
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-[yellow] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[rgb(30,30,30)] text-3xl">{goal.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white light:text-gray-900">
                {goal.title}
              </h3>
              <p className="text-gray-400 light:text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
