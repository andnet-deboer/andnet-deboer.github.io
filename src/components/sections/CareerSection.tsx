import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CareerSection = () => {
  const experiences = [
    {
      role: "Research Assistant",
      company: "Northwestern University Robotics Lab",
      period: "2024 - Present",
      type: "Research",
      description: "Conducting cutting-edge research in robot learning and autonomous systems, contributing to breakthrough developments in the field.",
      achievements: [
        "Developing novel algorithms for robot policy learning",
        "Contributing to research publications",
        "Collaborating with interdisciplinary research teams"
      ],
      technologies: ["Python", "ROS", "PyTorch", "Computer Vision", "Control Theory"]
    },
    {
      role: "Robotics Engineer Intern",
      company: "Technology Company", // Replace with actual
      period: "Summer 2023",
      type: "Industry",
      description: "Applied theoretical knowledge to real-world robotics challenges, developing practical solutions for autonomous systems.",
      achievements: [
        "Implemented control algorithms for robotic systems",
        "Optimized sensor integration and data processing",
        "Contributed to product development lifecycle"
      ],
      technologies: ["C++", "MATLAB", "Embedded Systems", "Sensors", "Real-time Systems"]
    },
    {
      role: "Undergraduate Researcher",
      company: "University Robotics Laboratory",
      period: "2022 - 2024",
      type: "Research",
      description: "Gained hands-on experience with robotic systems, contributing to multiple research projects and publications.",
      achievements: [
        "Co-authored research papers",
        "Designed and built experimental setups",
        "Mentored incoming students"
      ],
      technologies: ["Python", "Arduino", "3D Printing", "CAD", "Data Analysis"]
    }
  ];

  return (
    <section id="career" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Career & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in robotics research and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md" />
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'}`}>
                  <Card className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0">
                        <Badge 
                          variant={exp.type === "Research" ? "default" : "secondary"}
                          className="mb-1"
                        >
                          {exp.type}
                        </Badge>
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
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;