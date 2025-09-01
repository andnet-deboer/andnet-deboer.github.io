import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Science in Robotics",
      institution: "Northwestern University",
      period: "2025 - 2026",
      status: "Current Student",
      description: "Focusing on mobile manipulation, machine learning, and autonomous systems research.",
      highlights: ["ROS2", "C++", "Control Systems", "AI/ML"]
    },
    {
      degree: "B.S. Electrical Engineering, B.A. Computer Science, Mathematics Minor",
      institution: "Hope College",
      period: "2021 - 2025",
      status: "Completed",
      description: "Completed three degrees simultaneously, demonstrating strong interdisciplinary foundation in engineering, computer science, and mathematics.",
      highlights: ["Electrical Engineering", "Computer Science", "Mathematics", "Control Systems", "Software Engineering", "Algorithms"]
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