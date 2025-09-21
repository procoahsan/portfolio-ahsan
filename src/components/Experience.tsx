import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  const experiences = [
    {
      period: "Mar 2025 – Present",
      title: "Full Stack Engineer II",
      company: "AIO App Pvt. Ltd",
      location: "Islamabad, Pakistan",
      responsibilities: [
        "Engineered and optimized core Inventory and Accounting modules, ensuring scalability and smooth integration across business workflows.",
        "Integrated AI-powered OCR engine into invoice submodule, transforming raw extracted data into structured, user-friendly information for seamless application display.",
        "Developed smart invoice editing tool with auto-detection and perspective cropping, streamlining invoice management and minimizing manual effort.",
        "Contributed to Inventory submodules including Invoices, Storage Areas, Recipes, Ingredients, and Orders, improving usability and operational efficiency.",
        "Worked on Accounting submodules: Chart of Accounts, Journal Entry, Reconciliation, and Sales Controller, enabling precise financial tracking and reporting.",
        "Collaborated with cross-functional teams to deliver production-ready features, ensuring adherence to performance, security, and business requirements.",
      ],
      current: true,
    },
    {
      period: "Nov 2024 – Mar 2025",
      title: "Software Engineer",
      company: "DataQ Health",
      location: "Islamabad, Pakistan",
      responsibilities: [
        "Collaborated with OpenNMS community to enhance 'Network Monitoring Portal,' leveraging Vue.js, Pinia, and Feather.js for responsive frontend development.",
        "Integrated OpenNMS REST API to fetch and visualize device status, performance metrics, and alerts, ensuring seamless data connectivity and user interaction.",
        "Participated in agile sprints with daily standups, driving iterative improvements and delivering biweekly sprint demos to stakeholders.",
        "Contributed to scalable architecture by optimizing state management with Pinia and ensuring code reliability through vitest unit tests.",
      ],
    },
    {
      period: "July 2023 – Oct 2024",
      title: "Full Stack Developer",
      company: "Tekrowe Digital",
      location: "Islamabad, Pakistan",
      responsibilities: [
        "Developed and maintained frontend applications using React.js, Vue.js, and Tailwind CSS, delivering responsive and seamless user experiences.",
        "Built robust backend services using Nest.js and MongoDB to create scalable API services for various applications.",
        "Integrated Slack, Jira, and GitHub into Perf AI, an automated performance testing platform identifying performance issues, test cases, design flaws, and privacy concerns in APIs.",
        "Automated issue reporting directly to Slack, Jira, and GitHub, enhancing team communication and bug tracking efficiency.",
      ],
    },
    {
      period: "June 2022 – Sept 2022",
      title: "Full Stack Intern",
      company: "Texinity Technologies",
      location: "Islamabad, Pakistan",
      responsibilities: [
        "Collaborated on V-Football project, building frontend with React.js and Ant Design for responsive user interface.",
        "Implemented backend services using Express and MongoDB for data management and seamless front-end server interaction.",
        "Gained hands-on experience in web scraping using Python and Selenium for automated data extraction from dynamic websites.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Experience"
          subtitle="Professional Journey"
          description="A comprehensive overview of my professional experience in full stack development, from internships to senior engineering roles."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} ml-16 md:ml-0`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge variant={exp.current ? "default" : "secondary"} className="mb-2">
                              <Calendar className="mr-1 h-3 w-3" />
                              {exp.period}
                            </Badge>
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                            <div className="flex items-center text-muted-foreground text-sm mt-1">
                              <MapPin className="mr-1 h-3 w-3" />
                              {exp.location}
                            </div>
                          </div>
                          <Briefcase className="h-6 w-6 text-primary/60" />
                        </div>

                        <ul className="space-y-2 text-muted-foreground">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;