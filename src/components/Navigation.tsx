import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Users, Trophy, Settings } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Courses", href: "#courses", icon: BookOpen },
    { name: "Community", href: "#community", icon: Users },
    { name: "Progress", href: "#progress", icon: Trophy },
  ];

  return (
    <nav className="fixed top-0 w-full bg-primary-foreground/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-level p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              AI Seekho
            </span>
            <span className="text-sm text-muted-foreground hidden sm:block">
              (Learn AI)
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">
              Sign Up Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={toggleMenu}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            
            <div className="pt-4 space-y-2 border-t border-border">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Login
              </Button>
              <Button size="sm" className="w-full">
                Sign Up Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;