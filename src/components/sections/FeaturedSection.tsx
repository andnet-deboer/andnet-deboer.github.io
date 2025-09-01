import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Instagram } from 'lucide-react';
import { useState } from 'react';
import bassBotFeatureVideo from '@/assets/BassBotFeature.mp4';

const FeaturedSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    // Open Instagram post in new tab
    window.open('https://www.instagram.com/hopecollege/reel/DKKydQzKDWy/', '_blank');
  };

  return (
    <section className="py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4 text-sm">
            Featured Project
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            BassBot Featured by Hope College
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My autonomous bass guitar project was officially featured by Hope College on their social media
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group">
                         <div className="relative">
               {/* Actual Video */}
               <div className="aspect-video relative overflow-hidden">
                 <video
                   src={bassBotFeatureVideo}
                   className="w-full h-full object-cover cursor-pointer"
                   onClick={handleVideoClick}
                   poster=""
                   preload="metadata"
                 />
                 
                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="bg-black/50 rounded-full p-4 backdrop-blur-sm">
                     <Play className="w-12 h-12 text-white" />
                   </div>
                 </div>
                 
                 {/* Featured Badge */}
                 <div className="absolute top-4 left-4">
                   <Badge variant="default" className="bg-primary text-primary-foreground">
                     <Instagram className="w-3 h-3 mr-1" />
                     Featured by Hope College
                   </Badge>
                 </div>
                 
                 {/* Click to View Badge */}
                 <div className="absolute bottom-4 right-4">
                   <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm">
                     Click to view on Instagram
                   </Badge>
                 </div>
               </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                BassBot: Self-Playing Bass Guitar
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                This autonomous robotic bass guitar project combines mechanical engineering, computer vision, 
                and computational musicology to perform complex musical pieces with human-like precision. 
                The project was recognized and featured by Hope College for its innovative approach to 
                robotics and music technology.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="text-xs">Robotics</Badge>
                <Badge variant="outline" className="text-xs">Mechanical Engineering</Badge>
                <Badge variant="outline" className="text-xs">Computer Vision</Badge>
                <Badge variant="outline" className="text-xs">Music Technology</Badge>
              </div>
              
              <Button 
                onClick={handleVideoClick}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4 mr-2" />
                View on Instagram
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
