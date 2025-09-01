import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Volume2, VolumeX } from 'lucide-react';
import bassGuitarImage from '@/assets/Bass-Guitar.gif';
import autonomousRobotImage from '@/assets/MultiAgentResearch.gif';
import pelotonRobotVideo from '@/assets/PelotonRobotVideo.gif';
import { useState, useRef } from 'react';

const PortfolioSection = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play();
        setIsAudioPlaying(true);
      }
    }
  };

  const projects = [
    {
      title: "BassBot: Self-Playing Bass Guitar",
      description: "A fully autonomous robotic bass guitar that combines mechanical engineering, computer vision, and computational musicology to perform complex musical pieces with human-like precision.",
      image: bassGuitarImage,
      technologies: ["Raspberry Pi", "Mechanical Design", "Computational Musicology"],
      links: {
        github: "#",
        demo: "#",
        paper: "#"
      },
      isBassGuitar: true // Special flag for bass guitar project
    },
    {
      title: "Multi-Agent Robotics Project",
      description: "Low cost general purpose multi-robot system to serve as controls system test platform",
      image: autonomousRobotImage,
      technologies: ["ROS", "Python", "LIDAR", "Computer Vision"],
      links: {
        github: "#",
        paper: "#"
      }
    },
    {
      title: "Multi-robot collaboration",
      description: "Mobile robot platform utilzing SLAM in collboartion with 6DOF manipulator for warheouuse part restocking application",
      image: pelotonRobotVideo,
      technologies: ["Mobile Industrial Robot", "FANUC 200iD", "Allen Bradley PLC",],
      links: {
        paper: "#"
      },
      isMultiRobot: true // Special flag for multi-robot project
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-subtle/30 scroll-mt-16">
      {/* Hidden audio element */}
      <audio 
        ref={audioRef}
        src="/src/assets/bassbotaudio.mp3"
        onEnded={() => setIsAudioPlaying(false)}
        onError={() => setIsAudioPlaying(false)}
      />
      
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
                                     {project.isBassGuitar ? (
                     // Special split view for bass guitar with audio control
                     <div className="relative">
                       <div className="grid grid-cols-2 gap-1 h-full">
                         <div className="relative overflow-hidden">
                                                    <img
                              src={project.image}
                              alt={`${project.title} - Fretboard View`}
                              className="w-full h-full object-cover object-top scale-125 group-hover:scale-130 transition-transform duration-500"
                              loading="lazy"
                            />
                           <div className="absolute top-2 left-2">
                             <span className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">
                               Fretting Subsystem
                             </span>
                           </div>
                         </div>
                                                                                                                                                                                                               <div className="relative overflow-hidden">
                                                       <img
                                 src={project.image}
                                 alt={`${project.title} - Body View`}
                                 className="w-full h-full object-cover scale-200 group-hover:scale-210 transition-transform duration-500"
                                 style={{ objectPosition: 'center 125%' }}
                                 loading="lazy"
                               />
                             <div className="absolute top-2 left-2">
                               <span className="text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">
                                 Pick/Damp Subsystem
                               </span>
                             </div>
                           </div>
                       </div>
                       {/* Audio control button */}
                                               <button
                          onClick={toggleAudio}
                          className="absolute top-2 right-2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200 backdrop-blur-sm"
                          title={isAudioPlaying ? "Mute Audio" : "Play Audio"}
                        >
                          {isAudioPlaying ? (
                            <Volume2 className="w-4 h-4" />
                          ) : (
                            <VolumeX className="w-4 h-4" />
                          )}
                        </button>
                     </div>
                                       ) : project.isMultiRobot ? (
                      // Special tall view for multi-robot project
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                   ) : (
                     // Standard view for other projects
                     <img
                       src={project.image}
                       alt={project.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                       loading="lazy"
                     />
                   )}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
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
