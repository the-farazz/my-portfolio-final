export default function HobbiesSection() {
  const hobbies = [
    {
      title: "Teaching",
      description: "Sharing knowledge and helping others learn programming concepts and web development skills.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Fitness",
      description: "Maintaining physical health through regular gym workouts and strength training for better focus and productivity.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Photography",
      description: "Capturing moments and exploring creative composition through digital photography and visual storytelling.",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-8 bg-[rgb(40,40,40)] light:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">Interests & Hobbies</h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-[rgb(30,30,30)] p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 light:bg-white light:border light:border-gray-200"
            >
              <img 
                src={hobby.image}
                alt={hobby.title}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-[yellow] mb-4">{hobby.title}</h3>
              <p className="text-gray-400 light:text-gray-600">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
