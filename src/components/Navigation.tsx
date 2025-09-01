import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const sectionRatios = useRef<Record<string, number>>({});

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'career', label: 'Career' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  // Update underline position - discrete positioning centered under label text
  const updateUnderlinePosition = useCallback(() => {
    if (navRef.current) {
      const activeLabel = navRef.current.querySelector(`[data-label="${activeSection}"]`) as HTMLElement;
      if (activeLabel) {
        const navContainer = navRef.current;
        const containerRect = navContainer.getBoundingClientRect();
        const labelRect = activeLabel.getBoundingClientRect();
        
        setUnderlineStyle({
          left: labelRect.left - containerRect.left,
          width: labelRect.width
        });
      }
    }
  }, [activeSection]);

  // 50% rule: only switch active section when >= 50% visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.current[entry.target.id] = entry.intersectionRatio;
        });

        // Find section with highest intersection ratio >= 0.5
        let bestSection = activeSection;
        let bestRatio = sectionRatios.current[activeSection] || 0;

        Object.entries(sectionRatios.current).forEach(([sectionId, ratio]) => {
          if (ratio >= 0.5 && ratio > bestRatio) {
            bestSection = sectionId;
            bestRatio = ratio;
          }
        });

        if (bestSection !== activeSection && bestRatio >= 0.5) {
          setActiveSection(bestSection);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  // Update underline position when active section changes or window resizes
  useEffect(() => {
    updateUnderlinePosition();
    
    const handleResize = () => updateUnderlinePosition();
    const handleFontLoad = () => updateUnderlinePosition();
    
    window.addEventListener('resize', handleResize);
    document.fonts.addEventListener('loadingdone', handleFontLoad);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.fonts.removeEventListener('loadingdone', handleFontLoad);
    };
  }, [updateUnderlinePosition]);

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
            <div ref={navRef} className="hidden md:flex space-x-8 relative">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  data-section={id}
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "relative py-2 px-4 text-sm font-medium transition-colors duration-200",
                    "hover:text-primary",
                    activeSection === id
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  aria-current={activeSection === id ? "page" : undefined}
                >
                  <span data-label={id}>{label}</span>
                </button>
              ))}
              {/* Discrete underscore - Northwestern purple */}
              <span 
                className="absolute bottom-0 h-[3px] rounded-full opacity-100"
                style={{
                  left: `${underlineStyle.left}px`,
                  width: `${underlineStyle.width}px`,
                  backgroundColor: '#4E2A84', // Northwestern purple
                  transform: 'translateY(2px)',
                  transition: 'none' // No animation - discrete jump
                }}
              />
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