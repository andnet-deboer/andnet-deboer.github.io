import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import bassGuitarImage from '@/assets/bass-guitar-robot.jpg';
import autonomousRobotImage from '@/assets/MultiAgentResearch.gif';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Self-Playing Bass Guitar Robot",
      description: "An innovative robotic bass guitar that reads sheet music and plays recognizable bass lines using precision servos and solenoids. This project demonstrates advanced mechanical engineering, computer vision for music reading, and real-time control systems.",
      image: bassGuitarImage,
      technologies: ["Arduino", "Computer Vision", "Mechanical Design", "Real-time Control", "Music Theory"],
      category: "Robotics",
      status: "Completed",
      links: {
        github: "#",
        demo: "#",
        paper: "#"
      },
      highlights: [
        "Custom mechanical finger actuators",
        "Real-time sheet music recognition",
        "Precise timing and rhythm control",
        "Multi-string simultaneous playing capability"
      ]
    },
    {
      title: "Multi-agent Robotics Project",
      description: "Low cost general purpose multi-robot system to serve as controls system test platform",
      image: autonomousRobotImage,
      technologies: ["ROS", "Python", "LIDAR", "Computer Vision"],
      links: {
        github: "#",
        paper: "#"
      },
    },
    {
      title: "Multi-robot collaboration",
      description: "Mobile robot platform utilzing SLAM in collboartion with 6DOF manipulator for warheouuse part restocking application",
      image: null,
      technologies: ["Mobile Industrial Robot", "FANUC 200iD"],
      links: {
        paper: "#"
      },
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-subtle/30 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Portfolio & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my robotics projects, research contributions, and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group animate-fade-in">
              {project.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="default" className="text-xs">
                    {project.category}
                  </Badge>
                  <Badge 
                    variant={project.status === "Completed" ? "secondary" : "outline"}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-foreground text-sm mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {project.links.github && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button size="sm" className="flex-1 bg-gradient-primary">
                      Paper
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
