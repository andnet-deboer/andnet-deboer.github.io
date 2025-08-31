import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import EducationSection from '@/components/sections/EducationSection';
import CareerSection from '@/components/sections/CareerSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EducationSection />
        <CareerSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-subtle/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Andnet DeBoer. Crafted with passion for robotics innovation.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                Built for the future of autonomous systems
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
