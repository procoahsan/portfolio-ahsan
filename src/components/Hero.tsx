import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, Phone } from "lucide-react";
import InteractiveProfilePhoto from "./InteractiveProfilePhoto";
import AnimatedArrows from "./AnimatedArrows";
import heroBackground from "@/assets/hero-background.jpg";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [trail, setTrail] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    let lastUpdate = 0;
    const throttleDelay = 50; // Throttle to improve performance

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastUpdate < throttleDelay) return;
      lastUpdate = now;

      const { clientX, clientY } = e;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      setTrail((prev) => {
        const newTrail = [...prev, { x, y, id: now }];
        if (newTrail.length > 20) {
          newTrail.shift();
        }
        return newTrail;
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/90" />

      {/* Mouse Trail */}
      {trail.map((pos, index) => (
        <div
          key={pos.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: "8px",
            height: "8px",
            backgroundColor: "#0ff", // Cyan for neon
            boxShadow: "0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #0ff",
            opacity: (trail.length - index) / trail.length,
            transform: `scale(${(trail.length - index) / trail.length})`,
            transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
            filter: "blur(1px)",
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary border-primary/20">
                Full Stack Engineer
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient">
                  Muhammad Ahsan Nadeem
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering your next big project with expertise in full stack development,
                seamlessly integrating frontend innovation and backend scalability.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
              >
                View My Work
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group border-primary/20 hover:border-primary/40 hover:bg-primary/10"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:muhammadahsannadeem14@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-ahsan-nadeem-069387184/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/procoahsan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="tel:+923445121118"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Interactive 3D Profile Photo */}
          <div className="relative animate-float">
            <InteractiveProfilePhoto />
          </div>
        </div>
      </div>
      {/* Animated Arrows */}
      <AnimatedArrows />
    </section>
  );
};

export default Hero;