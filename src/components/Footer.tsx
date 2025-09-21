import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              Muhammad Ahsan Nadeem
            </h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Engineer crafting digital solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:muhammadahsannadeem14@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ahsan-nadeem-069387184/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/procoahsan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="tel:+923445121118"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              Developed by Ahsan
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;