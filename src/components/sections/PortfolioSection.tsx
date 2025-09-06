import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github, Volume2, VolumeX } from 'lucide-react';
import bassGuitarImage from '@/assets/Bass-Guitar.gif';
import autonomousRobotImage from '@/assets/MultiAgentResearch.gif';
import pelotonRobotVideo from '@/assets/PelotonRobotVideo.gif';
import pelotonPdf from '@/assets/Peloton_Internship_Summary.pdf';
import bassBotPdf from '@/assets/Bass_Bot_Final_Presentation.pdf';
import { useState, useRef } from 'react';

const PortfolioSection = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isBassBotPdfOpen, setIsBassBotPdfOpen] = useState(false);
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
      description: "A fully autonomous robotic bass guitar that combines mechanical engineering and computational musicology to perform music.",
      image: bassGuitarImage,
      technologies: ["Raspberry Pi", "Mechanical Design", "Computational Musicology"],
      links: {
        github: "https://github.com/andnet-deboer/ENGS-451---Senior-Capstone-Project",
        demo: "https://drive.google.com/file/d/1XTVOsowfazB2RvkpoZpZAnLUGEhnzxQw/view",
        paper: bassBotPdf
      },
      isBassGuitar: true // Special flag for bass guitar project
    },
    {
      title: "Multi-Agent Robotics Project",
      description: "Low cost general purpose multi-robot system to serve as controls system test platform",
      image: autonomousRobotImage,
      technologies: ["ROS", "Python", "Raspberry Pi"],
      links: {
        github: "https://github.com/andnet-deboer/ROS-Kobuki-Research-2022",
        paper: "#"
      }
    },
    {
      title: "Multi-robot collaboration",
      description: "Mobile robot platform in collaboration with 6DOF manipulator for research project on warehouse part restocking application.",
      image: pelotonRobotVideo,
      technologies: ["Mobile Industrial Robot", "FANUC 200iD", "Allen Bradley PLC",],
      links: {
        paper: "/src/assets/Peloton_Internship_Summary.pdf"
      },
      isMultiRobot: true // Special flag for multi-robot project
    }
  ];

  return (
    <section id="portfolio" className="py-12 md:py-16 bg-subtle/30 scroll-mt-16">
      {/* Hidden audio element */}
      <audio 
        ref={audioRef}
        src="/src/assets/bassbotaudio.mp3"
        onEnded={() => setIsAudioPlaying(false)}
        onError={() => setIsAudioPlaying(false)}
      />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border bg-card rounded-none">
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
                              className="w-full h-full object-cover object-top"
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
                                 className="w-full h-full object-cover"
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
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                   ) : (
                     // Standard view for other projects
                     <img
                       src={project.image}
                       alt={project.title}
                       className="w-full h-full object-cover"
                       loading="lazy"
                     />
                   )}
                </div>
              )}
              
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
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
                
                <div className="flex flex-col sm:flex-row gap-2">
                  {project.links.github && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(project.links.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.open(project.links.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        if (project.isMultiRobot) {
                          setIsPdfOpen(true);
                        } else if (project.isBassGuitar) {
                          setIsBassBotPdfOpen(true);
                        } else {
                          window.open(project.links.paper, '_blank');
                        }
                      }}
                    >
                      {project.isBassGuitar ? "Presentation" : project.isMultiRobot ? "Internship Summary" : "Pending Publication"}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* PDF Viewer Dialog - Multi-robot */}
      <Dialog open={isPdfOpen} onOpenChange={setIsPdfOpen}>
        <DialogContent className="max-w-3xl w-full h-[90vh] p-0">
          <div className="h-full">
            <iframe
              src={`${pelotonPdf}#view=FitH&zoom=100&scrollbar=1&toolbar=1&navpanes=0&scroll=0,0.6`}
              className="w-full h-full border-0"
              title="Internship Summary PDF"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* PDF Viewer Dialog - BassBot */}
      <Dialog open={isBassBotPdfOpen} onOpenChange={setIsBassBotPdfOpen}>
        <DialogContent className="max-w-3xl w-full h-[90vh] p-0">
          <div className="h-full">
            <iframe
              src={bassBotPdf}
              className="w-full h-full border-0"
              title="BassBot Final Presentation PDF"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
