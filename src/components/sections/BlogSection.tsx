import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Play, Instagram } from 'lucide-react';
import bassBotFeatureVideo from '@/assets/BassBotFeature.mp4';
import { openVideoFullscreen } from '@/lib/video-utils';

const BlogSection = () => {
  const handleVideoClick = async () => {
    // Use the utility function to open video in fullscreen
    await openVideoFullscreen(bassBotFeatureVideo);
  };

  const handleInstagramClick = () => {
    // Open Instagram post in new tab
    window.open('https://www.instagram.com/hopecollege/reel/DKKydQzKDWy/', '_blank');
  };

  const posts = [
    {
      title: "BassBot Featured by Hope College",
      excerpt: "My autonomous bass guitar project was officially featured by Hope College on their social media, showcasing innovative robotics and music technology.",
      date: "2025-05-27",
      category: "Featured",
      readTime: "2 min read",
      featured: true,
      isVideo: true
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Latest Updates
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured post */}
          <div className="mb-12">
            <Card className="overflow-hidden border border-border bg-card">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 relative overflow-hidden">
                  <div className="aspect-video md:aspect-square relative">
                    <video
                      src={bassBotFeatureVideo}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={handleVideoClick}
                      preload="metadata"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-black/50 rounded-full p-4 backdrop-blur-sm">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="default" className="bg-primary text-primary-foreground text-xs">
                        <Instagram className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 p-4 md:p-8">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
                    <Badge variant="default">
                      {posts[0].category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(posts[0].date)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {posts[0].title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    {posts[0].excerpt}
                  </p>
                  
                  <Button 
                    onClick={handleInstagramClick}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    View on Instagram
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>

    </section>
  );
};

export default BlogSection;