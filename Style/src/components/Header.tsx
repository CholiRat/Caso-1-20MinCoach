import { Button } from "@/components/ui/button";
import { Video, Clock, Users, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto section-padding">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Clock className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">20minCoach</span>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#coaches" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Para Coaches
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Precios
            </a>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" className="hidden sm:inline-flex">
              Iniciar Sesión
            </Button>
            <Button variant="hero" size="lg">
              Comenzar Ahora
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;