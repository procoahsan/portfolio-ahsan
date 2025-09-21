import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "./SectionHeader";
import aioImage from "@/assets/project-aio.jpg";
import perfaiImage from "@/assets/project-perfai.jpg";
import aio from "@/assets/aio.png";
import perf from "@/assets/perf.png";
import onms from "@/assets/ONMS.png";

const Projects = () => {
  const projects = [
    {
      title: "AIO App",
      description:
        "Comprehensive business management platform with AI-powered OCR for invoice processing, inventory management, and accounting modules. Features smart invoice editing with auto-detection and perspective cropping.",
      technologies: [
        "React.js",
        "Nest.js",
        "PostgreSQL",
        "Material UI",
        "AI/OCR",
      ],
      image: aio,
      featured: true,
      link: "https://www.aioapp.com/",
    },
    {
      title: "Perf AI",
      description:
        "Automated performance testing platform that identifies performance issues, test cases, design flaws, and privacy concerns in APIs. Integrated with Slack, Jira, and GitHub for automated issue reporting.",
      technologies: [
        "Vue.js",
        "Nest.js",
        "MongoDB",
        "Google Cloud",
        "Tailwind CSS",
      ],
      image: perf,
      featured: true,
      link: "https://www.perfai.ai/",
    },
    {
      title: "Open Network Monitoring System",
      description:
        "Enhanced network monitoring portal built in collaboration with OpenNMS community. Features real-time device status visualization, performance metrics, and alert management.",
      technologies: ["Vue.js", "FeatherDS", "Pinia", "Vitest", "OpenNMS API"],
      image: onms,
    },
    {
      title: "Tube Lecture Buddy",
      description:
        "Educational platform that enhances YouTube learning experience with note-taking, bookmarking, and content organization features for better knowledge retention.",
      technologies: ["React.js", "Flask", "MongoDB", "YouTube API"],
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    },
    {
      title: "V-Football",
      description:
        "Sports analytics and management platform for football teams with player statistics, match analysis, and team performance tracking capabilities.",
      technologies: ["React.js", "Express.js", "MongoDB", "Ant Design"],
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    },
    {
      title: "Crypto Dashboard",
      description:
        "Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and market analysis tools for crypto enthusiasts and traders.",
      technologies: ["React.js", "Tailwind CSS", "Zustand", "CoinGecko API"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Projects"
          subtitle="Featured Work"
          description="A showcase of my recent projects demonstrating expertise in full stack development, AI integration, and modern web technologies."
        />

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="group/btn"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                          View Project
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" className="group/btn">
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <h4 className="font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub for additional
            projects and contributions.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group border-primary/20 hover:border-primary/40 hover:bg-primary/10"
          >
            <a
              href="https://github.com/procoahsan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
