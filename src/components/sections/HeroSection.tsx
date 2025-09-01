import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hello, I'm{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Andnet DeBoer
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-accent font-medium mb-6">
              Incoming Robotics M.S. student @ Northwestern University
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I'm passionate about innovation at the intersection of hardware and software, 
              with particular interest in robotics. My background spans electrical engineering 
              and computer science, driving breakthrough solutions in autonomous systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToPortfolio}
                className="bg-gradient-primary hover:opacity-90 transition-opacity font-medium px-8"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8"
              >
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-20 animate-float" />
              <img
                src={profilePhoto}
                alt="Andnet DeBoer - Robotics Student at Northwestern University"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-card shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;