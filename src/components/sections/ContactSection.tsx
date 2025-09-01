import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "deboerandnet@gmail.com",
      href: "mailto:deboerandnet@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/andnet-deboer",
      href: "https://linkedin.com/in/andnet-deboer"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/andnet-deboer",
      href: "https://github.com/andnet-deboer"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Evanston, IL",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss robotics research, collaboration opportunities, or innovative projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in discussing cutting-edge robotics research, 
                potential collaborations, or innovative project ideas. Whether you're 
                a fellow researcher, industry professional, or someone passionate about 
                robotics, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow My Work
              </h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg" className="group">
                  <Linkedin className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Github className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-xl animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input placeholder="What would you like to discuss?" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me more about your project, research, or collaboration idea..."
                  rows={6}
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity font-medium"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;