import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Linkedin, Github, Award } from "lucide-react";
import SectionHeader from "./SectionHeader";

const About = () => {
  const personalInfo = [
    { icon: User, label: "Name", value: "Muhammad Ahsan Nadeem" },
    { icon: Mail, label: "Email", value: "muhammadahsannadeem14@gmail.com" },
    { icon: Phone, label: "Phone", value: "+92 344 5121118" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "muhammad-ahsan-nadeem",
      link: "https://www.linkedin.com/in/muhammad-ahsan-nadeem-069387184/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "procoahsan",
      link: "https://github.com/procoahsan",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="About"
          subtitle="About Me"
          description="Passionate Full Stack Engineer with expertise in modern web technologies, AI integration, and scalable application development."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary">
                Software Engineer
              </Badge>
              <h3 className="text-2xl font-semibold">
                Crafting Digital Solutions with Precision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Engineer with a strong foundation in modern web technologies. 
                My journey began at COMSATS University Islamabad, where I earned my Bachelor's degree in 
                Software Engineering, and has evolved through diverse professional experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From building AI-powered OCR engines to developing comprehensive inventory management systems, 
                I specialize in creating scalable, user-friendly applications that solve real-world problems.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">40+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Personal Info Cards */}
          <div className="space-y-4 animate-slide-in-right">
            {personalInfo.map((info, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient mb-4">Education</h3>
          </div>
          
          <Card className="max-w-4xl mx-auto group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <Badge variant="outline" className="mb-4">2019 - 2023</Badge>
                  <h4 className="text-xl font-semibold mb-2">Bachelor of Science in Software Engineering</h4>
                  <p className="text-primary font-medium mb-4">COMSATS University Islamabad</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Graduated with a strong foundation in software engineering principles, specializing in 
                    full stack development, cloud computing, and AI technologies. Engaged in multiple projects 
                    that honed problem-solving and collaboration skills, preparing for dynamic roles in the tech industry.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;