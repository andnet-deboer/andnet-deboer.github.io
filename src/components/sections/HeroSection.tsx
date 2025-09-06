import profilePhoto from '@/assets/profilephoto.jpg';

const HeroSection = () => {

  return (
    <section id="home" className="py-12 md:py-20 bg-background scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center max-w-4xl mx-auto">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hello, I'm Andnet DeBoer
            </h1>
            
            <h2 className="text-base md:text-lg text-muted-foreground mb-4">
              Robotics M.S. student @ Northwestern University
            </h2>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Passionate about robotics and autonomous systems. Background in electrical engineering 
              and computer science with particular interest in mobile manipulation.
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <img
              src={profilePhoto}
              alt="Andnet DeBoer - Robotics Student at Northwestern University"
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-2 border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;