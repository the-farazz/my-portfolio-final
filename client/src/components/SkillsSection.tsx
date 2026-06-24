import { useEffect, useRef, useState } from 'react';
import {
  Code2, Braces, FileCode, Palette, Globe, Layout,
  RefreshCw, Server, Database, GitBranch, ClipboardList,
  Bot, Coffee, Target, Smartphone, Layers,
  type LucideIcon,
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  Icon: LucideIcon;
}

const frontendSkills: Skill[] = [
  { name: 'React.js & Next.js', level: 93, Icon: Code2 },
  { name: 'JavaScript (ES6+)',  level: 90, Icon: Braces },
  { name: 'TypeScript',         level: 85, Icon: FileCode },
  { name: 'Tailwind CSS & MUI', level: 90, Icon: Palette },
  { name: 'HTML / CSS',         level: 95, Icon: Globe },
  { name: 'Bootstrap',          level: 78, Icon: Layout },
];

const toolsSkills: Skill[] = [
  { name: 'Redux Toolkit', level: 82, Icon: RefreshCw },
  { name: 'Node.js',       level: 70, Icon: Server },
  { name: 'MySQL',         level: 72, Icon: Database },
  { name: 'Git & GitHub',  level: 88, Icon: GitBranch },
  { name: 'Jira',          level: 75, Icon: ClipboardList },
  { name: 'AI & Dev Tools',level: 92, Icon: Bot },
];

const exploringSkills = [
  { name: 'OOP',                Icon: Layers },
  { name: 'Java',               Icon: Coffee },
  { name: 'Kotlin',             Icon: Target },
  { name: 'Android Development',Icon: Smartphone },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium flex items-center light:text-gray-700 text-sm">
          <skill.Icon className="w-4 h-4 text-[yellow] mr-3 shrink-0" />
          {skill.name}
        </span>
        <span className="text-gray-400 light:text-gray-500 text-sm">{skill.level}%</span>
      </div>
      <div className="bg-[rgb(40,40,40)] rounded-full h-2 overflow-hidden light:bg-gray-200">
        <div
          className="bg-[yellow] h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${0.3 + index * 0.1}s`,
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white light:text-gray-900">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-[yellow] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[yellow]">Frontend Technologies</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill, i) => <SkillBar key={skill.name} skill={skill} index={i} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[yellow]">Backend & Tools</h3>
            <div className="space-y-5">
              {toolsSkills.map((skill, i) => <SkillBar key={skill.name} skill={skill} index={i} />)}
            </div>
          </div>
        </div>

        {/* Currently Exploring */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-6 text-[yellow] text-center">Currently Exploring</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {exploringSkills.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-5 py-3 bg-[rgb(40,40,40)] rounded-full border border-dashed border-[yellow]/50 text-white text-sm hover:border-[yellow] hover:bg-[rgb(50,50,50)] transition-all duration-300 light:bg-gray-100 light:text-gray-700"
              >
                <Icon className="w-4 h-4 text-[yellow]" />
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* AI & Dev Tools callout */}
        <div className="mt-10 bg-[rgb(40,40,40)] p-6 rounded-xl flex items-center justify-center gap-3 light:bg-white light:border light:border-gray-200">
          <Bot className="w-5 h-5 text-[yellow] shrink-0" />
          <p className="text-gray-400 text-sm light:text-gray-600">
            <span className="text-[yellow] font-semibold">AI & Dev Tools: </span>
            Google Antigravity, GitHub Copilot, ChatGPT, Claude, MCP
          </p>
        </div>
      </div>
    </section>
  );
}
