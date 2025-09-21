import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe,
  Send,
  Download,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import SectionHeader from "./SectionHeader";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init({
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      });
    }
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+92 344 5121118", "+92 314 5295554"],
      links: ["tel:+923445121118", "tel:+923145295554"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["muhammadahsannadeem14@gmail.com"],
      links: ["mailto:muhammadahsannadeem14@gmail.com"],
    },
    {
      icon: Globe,
      title: "Website",
      details: ["dev-ahsan.vercel.app"],
      links: ["https://dev-ahsan.vercel.app/"],
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      details: ["muhammad-ahsan-nadeem"],
      links: ["https://linkedin.com/in/muhammad-ahsan-nadeem-069387184/"],
    },
    {
      icon: Github,
      title: "GitHub",
      details: ["procoahsan"],
      links: ["https://github.com/procoahsan"],
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Islamabad, Pakistan"],
      links: [],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Error",
        description: "Configuration error. Please contact the site owner.",
        variant: "destructive",
      });
      return;
    }
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon!",
          });
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send message:", error);
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Contact"
          subtitle="Get In Touch"
          description="Ready to discuss your next project? I'd love to hear from you. Let's create something amazing together."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="text-xs text-muted-foreground truncate">
                              {info.links[detailIndex] ? (
                                <a
                                  href={info.links[detailIndex]}
                                  target={info.links[detailIndex].startsWith('http') ? '_blank' : undefined}
                                  rel={info.links[detailIndex].startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className="hover:text-primary transition-colors duration-200"
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-semibold mb-3">Ready to Work Together?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Download my resume to learn more about my experience and skills.
                </p>
                <a href="/Ahsan_Nadeem_Resume.pdf" download="Ahsan_Nadeem_Resume.pdf">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project discussion, job opportunity, etc."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or what you'd like to discuss..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 group"
                  >
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Hire Me Section */}
        <div className="mt-20 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-12">
              <Badge variant="secondary" className="mb-4">
                Available for Projects
              </Badge>
              <h3 className="text-3xl font-bold mb-4">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's collaborate to create exceptional digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:muhammadahsannadeem14@gmail.com">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Mail className="mr-2 h-5 w-5" />
                    Start a Project
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/20 hover:border-primary/40"
                  onClick={() => setIsResumeOpen(true)}
                >
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Custom Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setIsResumeOpen(false)}
          />
          <div className="relative flex items-center justify-center min-h-screen p-4">
            <div className="bg-background rounded-lg shadow-xl max-w-4xl w-full h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-lg font-semibold">Ahsan Nadeem Resume</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsResumeOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto">
                <iframe
                  src="/Ahsan_Nadeem_Resume.pdf#toolbar=0"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  title="Resume"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;