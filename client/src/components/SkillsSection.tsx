import { useEffect, useRef, useState } from 'react';

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const frontendSkills = [
    { name: 'React.js', level: 95, icon: '⚛️' },
    { name: 'JavaScript (ES6+)', level: 90, icon: '🟨' },
    { name: 'TypeScript', level: 85, icon: '📘' },
    { name: 'Tailwind CSS', level: 88, icon: '🎨' },
  ];

  const toolsSkills = [
    { name: 'Next.js', level: 80, icon: '🚀' },
    { name: 'Redux Toolkit', level: 78, icon: '🏪' },
    { name: 'Material-UI', level: 92, icon: '🔧' },
    { name: 'Git & GitHub', level: 87, icon: '📝' },
  ];

  const skillIcons = [
    { name: 'React', icon: '⚛️' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'GitHub', icon: '📝' },
  ];

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number; icon: string }; index: number }) => (
    <div className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium flex items-center light:text-gray-700">
          <span className="text-[yellow] mr-3">{skill.icon}</span>
          {skill.name}
        </span>
        <span className="text-gray-400 light:text-gray-500">{skill.level}%</span>
      </div>
      <div className="bg-[rgb(40,40,40)] rounded-full h-2 overflow-hidden light:bg-gray-200">
        <div
          className="bg-[yellow] h-2 rounded-full transition-all duration-2000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${0.5 + index * 0.1}s`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">Technical Skills</h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[yellow]">Frontend Technologies</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Tools & Frameworks */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[yellow]">Tools & Frameworks</h3>
            <div className="space-y-6">
              {toolsSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Skill Icons Grid */}
        {/* <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-8">
          {skillIcons.map((skill, index) => (
            <div key={skill.name} className="text-center group">
              <div className="w-16 h-16 bg-[rgb(40,40,40)] rounded-full flex items-center justify-center group-hover:bg-[yellow] group-hover:text-[rgb(30,30,30)] transition-all duration-300 mx-auto mb-3 light:bg-gray-200 light:group-hover:bg-[yellow]">
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <p className="text-sm text-gray-400 light:text-gray-600">{skill.name}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
