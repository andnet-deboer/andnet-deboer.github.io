import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Robotics",
      institution: "Northwestern University",
      period: "2024 - Present",
      status: "Incoming",
      description: "Focusing on advanced robotics, machine learning, and autonomous systems research.",
      highlights: ["Robot Learning", "Computer Vision", "Control Systems", "AI/ML"]
    },
    {
      degree: "Bachelor of Science in Electrical Engineering",
      institution: "University Name", // Replace with actual
      period: "2020 - 2024",
      status: "Completed",
      description: "Strong foundation in electrical engineering with computer science emphasis.",
      highlights: ["Embedded Systems", "Signal Processing", "Software Engineering", "Hardware Design"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-subtle/30 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in robotics, electrical engineering, and computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-l-primary">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-xl text-primary font-medium">
                    {item.institution}
                  </p>
                </div>
                <div className="flex flex-col items-start lg:items-end mt-4 lg:mt-0">
                  <Badge 
                    variant={item.status === "Incoming" ? "default" : "secondary"}
                    className="mb-2"
                  >
                    {item.status}
                  </Badge>
                  <span className="text-muted-foreground font-medium">
                    {item.period}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight, idx) => (
                  <Badge key={idx} variant="outline" className="text-sm">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;