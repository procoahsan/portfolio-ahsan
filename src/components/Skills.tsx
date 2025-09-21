import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./SectionHeader";
import Zustand from '@/assets/icons/zustand.png';
import Feather from '@/assets/icons/feather.png';

const Skills = () => {
  const technologies = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Frontend" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", category: "Frontend" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "Styling" },
    { name: "Nest.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", category: "Backend" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", category: "Backend", invertInDark: true },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", category: "Frontend" },
    { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg", category: "Styling" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "Language" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", category: "Language" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "Language" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", category: "Backend", invertInDark: true },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "Tools" },
    { name: "Redux Thunk", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", category: "State Management" },
    { name: "Pinia", icon: "https://pinia.vuejs.org/logo.svg", category: "State Management", iconStyle: { width: '64px', height: '72px' } },
    { name: "Zustand", icon: Zustand, category: "State Management", iconStyle: { width: '120px', height: '64px' } },
    { name: "Vitest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg", category: "Testing" },
    { name: "FeatherDS", icon: Feather, category: "UI Library" },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg", category: "UI Library" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg", category: "Library" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", category: "Database" },
  ];

  const categories = Array.from(new Set(technologies.map(tech => tech.category)));

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Skills"
          subtitle="My Skills"
          description="Empowering your next big project with expertise in full stack development, seamlessly integrating frontend innovation and backend scalability"
        />

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-border/50 hover:border-primary/20 animate-scale-in bg-gradient-to-br from-card to-card/50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    style={tech.iconStyle}
                    className={`object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 ${tech.invertInDark ? 'dark:invert' : ''} ${tech.iconStyle ? '' : 'w-16 h-16'}`}
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tech.category}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;