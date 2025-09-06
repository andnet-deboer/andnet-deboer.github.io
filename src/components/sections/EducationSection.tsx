import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Robotics",
      institution: "Northwestern University",
      period: "2025 - 2026",
      status: "Current Student",
      description: "Focus on mobile manipulation for autonomous robots.",
      highlights: ["ROS2", "Python", "Control Systems"]
    },
    {
      degree: "Dual degree in EE/CS with a minor in math",
      institution: "Hope College",
      period: "2021 - 2025",
      status: "Completed",
      description: "Completed three degrees simultaneously, demonstrating strong interdisciplinary foundation in engineering, computer science, and mathematics.",
      highlights: ["Embedded Systems", "CS", "EE"]
    },
          {
        degree: "Semester Abroad",
        institution: "Singapore Management University",
        period: "2023",
        status: "Completed",
        description: "Studied AI and Data Strucures/Algorithm along with cross cultural courses on south east asian politics and history.",
        highlights: ["AI", "Data Structures", "Cross-Cultural Communication"]
      },
      {
        degree: "Summer Term",
        institution: "Technische Universität Berlin",
        period: "Summer 2022",
        status: "Completed",
        description: "International study experience focusing on engineering mechanics and German language.",
        highlights: ["Statics", "German Language", "Cross-Cultural Communication", ]
      }
  ];

  return (
    <section id="education" className="py-12 bg-subtle/30 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Education
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {education.map((item, index) => (
            <Card key={index} className="p-3 md:p-4 border border-border bg-card border-l-4 border-l-primary rounded-none">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground">
                    {item.degree}
                  </h3>
                  <p className="text-primary font-medium text-xs md:text-sm">
                    {item.institution === "Northwestern University" ? (
                      <a 
                        href="https://www.northwestern.edu/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary/80 transition-colors"
                      >
                        {item.institution}
                      </a>
                    ) : item.institution === "Hope College" ? (
                      <a 
                        href="https://hope.edu/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary/80 transition-colors"
                      >
                        {item.institution}
                      </a>
                    ) : item.institution === "Singapore Management University" ? (
                      <a 
                        href="https://www.smu.edu.sg/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary/80 transition-colors"
                      >
                        {item.institution}
                      </a>
                    ) : item.institution === "Technische Universität Berlin" ? (
                      <a 
                        href="https://www.tu.berlin/en/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary/80 transition-colors"
                      >
                        {item.institution}
                      </a>
                    ) : (
                      item.institution
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <Badge 
                    variant={item.status === "Current Student" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {item.status}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    {item.period}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-3">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-1">
                {item.highlights.slice(0, 4).map((highlight, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {highlight}
                  </Badge>
                ))}
                {item.highlights.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{item.highlights.length - 4}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;