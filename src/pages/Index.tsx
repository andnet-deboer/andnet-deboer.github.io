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
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <PortfolioSection />
        <CareerSection />
        <EducationSection />
        <BlogSection />
         <HeroSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-subtle/50 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © Andnet DeBoer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
