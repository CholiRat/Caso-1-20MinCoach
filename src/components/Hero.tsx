import { Button } from "@/components/ui/button";
import { Play, Clock, Users, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-background via-secondary/20 to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                Expertos disponibles ahora
              </div>
              
              <h1 className="text-hero text-foreground leading-tight">
                Conecta con expertos en{" "}
                <span className="text-gradient-primary">20 minutos</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Desde mecánica hasta psicología, programación o arte. Obtén ayuda profesional 
                al instante con videollamadas de 20 minutos.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Expertos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">20min</div>
                <div className="text-sm text-muted-foreground">Por sesión</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.8★</div>
                <div className="text-sm text-muted-foreground">Rating promedio</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Encuentra un Expert@
              </Button>
              <Button variant="outline" size="xl" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Ver cómo funciona
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Respuesta inmediata</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-warning" />
                <span>Expertos verificados</span>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative animate-slide-up">
            <div className="relative">
              {/* Main coaching interface mockup */}
              <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">María García</div>
                      <div className="text-sm text-muted-foreground">Psicóloga Clínica</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-warning">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-2">Especialidad:</div>
                  <div className="text-card-foreground">Manejo de ansiedad y estrés laboral</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-success">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Disponible ahora</span>
                  </div>
                  <Button variant="success" size="sm">
                    Conectar (20min)
                  </Button>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                20min - $19.99
              </div>
              <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Inmediato
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;