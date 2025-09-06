import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Copy, Check, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "deboerandnet@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-subtle/30 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Contact
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-6 md:p-8 border border-border bg-card">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Email Me
              </h3>
              
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={() => window.open(`mailto:${email}`, '_blank')}
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={copyEmail}
                  className="flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Email
                    </>
                  )}
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4 font-mono">
                {email}
              </p>
              
              {/* Social Media Links */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://github.com/andnet-deboer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200 group"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andnetdeboer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors duration-200 group"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;