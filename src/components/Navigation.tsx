import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'career', label: 'Career' },
    { id: 'education', label: 'Education' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  // Navbar visibility logic
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let mouseTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const isAtTop = window.scrollY <= 16;
        setShowNav(isAtTop || isMobileMenuOpen);
      }, 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        const isNearTop = e.clientY <= 72;
        const isAtTop = window.scrollY <= 16;
        setShowNav(isAtTop || isNearTop || isMobileMenuOpen);
      }, 50);
    };

    // On mobile/touch devices, only show at top
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(mouseTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm",
        "transition-all duration-200 ease-out",
        (showNav || isMobileMenuOpen) 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0 pointer-events-none"
      )}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-foreground">
              Andnet DeBoer
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "relative py-2 px-4 text-sm font-medium transition-colors duration-200",
                    "hover:text-primary",
                    activeSection === id
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  )}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <nav className="fixed top-16 left-0 right-0 bg-card border-b border-border shadow-elegant">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={cn(
                      "text-left py-3 px-4 rounded-lg text-base font-medium transition-all duration-200",
                      "hover:bg-subtle hover:text-primary",
                      activeSection === id
                        ? "text-primary bg-subtle border-l-[3px]"
                        : "text-muted-foreground"
                    )}
                    style={activeSection === id ? { borderLeftColor: '#4E2A84' } : {}}
                    aria-current={activeSection === id ? "page" : undefined}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;