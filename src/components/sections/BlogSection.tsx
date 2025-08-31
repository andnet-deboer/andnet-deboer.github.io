import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: "Advances in Robot Learning: From Simulation to Reality",
      excerpt: "Exploring the latest developments in sim-to-real transfer learning and how we're bridging the gap between simulated training and real-world robot deployment.",
      date: "2024-03-15",
      category: "Research",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Building Autonomous Systems: Lessons from the Field",
      excerpt: "Key insights and challenges encountered while developing autonomous navigation systems for mobile robots in complex environments.",
      date: "2024-03-01",
      category: "Engineering",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "The Future of Human-Robot Interaction",
      excerpt: "Discussing emerging trends in HRI and how robotics will transform various industries in the coming decade.",
      date: "2024-02-20",
      category: "Insights",
      readTime: "5 min read",
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
                <div className="md:w-1/3 bg-gradient-primary p-8 text-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">FEATURED</div>
                    <div className="text-lg opacity-90">Latest Research</div>
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
                  
                  <Button className="bg-gradient-primary">
                    Read Full Article
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