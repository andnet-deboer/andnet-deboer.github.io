import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CareerSection = () => {
  const experiences = [
    {
      role: "Robotics Co-op",
      company: "Gentex",
      period: "Jan 2025 - May 2025",
      description: "Robotics Simulation, CI/CD",
      achievements: [
        "Built application to convert ABB rapid code to FANUC Karel code",
        "Commissioned control software developed in simulation onto production robots",
      
      ],
      technologies: ["FANUC", "Python", "RoboGuide", "VB.NET"]
    },
    {
      role: "Robotics Intern",
      company: "Gentex", // Replace with actual
      period: "Summer 2023",
      description: "Robotics Simulation, Path Optimization, Created Work Object & Tooling in CAD",
      achievements: [
        "Achieved 40% cycle time improvment on cart unloading application.",
        "Full simulation of mechanical assembly, sensors, and robotics in Robot Studio",
        "Trained in Kata continous improvement methodology"
      ],
      technologies: ["RAPID", "RobotStudio", "Solidworks"]
    },
    {
      role: "R&D Electrical Engineering Intern",
      company: "Stryker",
      period: "Summer 2023",
      description: "Worked at in the Autmation lab designing , building, wiring and programming novel automated testing solutions for OR medical device validation and verification.",
      achievements: [
        "Designed automated testing fixture for 5,000 cycle video interface validation",
        "Implemented PID control systems for precise medical device testing",
        "Developed serial communication protocols for test automation"
      ],
      technologies: ["PID Controllers", "Serial Communications", "3D Printing", "CAD", "Linear Actuators"]
    }
  ];

  return (
    <section id="career" className="py-12 md:py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Career
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-4 md:p-6 border border-border bg-card rounded-none">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-foreground font-medium">
                      {exp.company === "Gentex" ? (
                        <a 
                          href="https://www.gentex.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : exp.company === "Stryker" ? (
                        <a 
                          href="https://www.stryker.com/us/en/index.html" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
                    <span className="text-muted-foreground text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;