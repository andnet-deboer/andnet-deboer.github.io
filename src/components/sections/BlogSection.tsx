import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Play, Instagram } from 'lucide-react';
import bassBotFeatureVideo from '@/assets/BassBotFeature.mp4';

const BlogSection = () => {
  const handleVideoClick = () => {
    // Open Instagram post in new tab
    window.open('https://www.instagram.com/hopecollege/reel/DKKydQzKDWy/', '_blank');
  };

  const posts = [
    {
      title: "BassBot Featured by Hope College",
      excerpt: "My autonomous bass guitar project was officially featured by Hope College on their social media, showcasing innovative robotics and music technology.",
      date: "2025-01-15",
      category: "Featured",
      readTime: "2 min read",
      featured: true,
      isVideo: true
    },
    {
      title: "Advances in Robot Learning: From Simulation to Reality",
      excerpt: "Exploring the latest developments in sim-to-real transfer learning and how we're bridging the gap between simulated training and real-world robot deployment.",
      date: "2025-03-15",
      category: "Research",
      readTime: "8 min read",
      featured: false
    },
    {
      title: "Building Autonomous Systems: Lessons from the Field",
      excerpt: "Key insights and challenges encountered while developing autonomous navigation systems for mobile robots in complex environments.",
      date: "2025-03-01",
      category: "Engineering",
      readTime: "6 min read",
      featured: false
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Latest Updates & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing my research findings, project updates, and thoughts on the future of robotics
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured post */}
          <div className="mb-12">
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <div className="aspect-square relative">
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
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="default">
                      {posts[0].category}
                    </Badge>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(posts[0].date)}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {posts[0].readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {posts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {posts[0].excerpt}
                  </p>
                  
                  <Button 
                    onClick={handleVideoClick}
                    className="bg-gradient-primary"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    View on Instagram
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent posts grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    {post.readTime}
                  </span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;