import { Clock, Video, Shield, Star, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "20 Minutos Exactos",
      description: "Sesiones enfocadas y eficientes. Sin pérdida de tiempo, máximo valor.",
      color: "text-primary"
    },
    {
      icon: Video,
      title: "Conexión Inmediata",
      description: "Videollamadas en tiempo real. Ve el problema, muestra la situación.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Expertos Verificados",
      description: "Profesionales certificados con experiencia comprobada en sus campos.",
      color: "text-success"
    },
    {
      icon: Star,
      title: "Sistema de Ratings",
      description: "Calificaciones transparentes que garantizan calidad en cada sesión.",
      color: "text-warning"
    },
    {
      icon: Zap,
      title: "Disponibilidad 24/7",
      description: "Expertos disponibles cuando los necesites, día y noche.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Múltiples Especialidades",
      description: "Desde mecánica hasta psicología, programación, arte y mucho más.",
      color: "text-accent"
    }
  ];

  return (
    <section id="how-it-works" className="section-spacing bg-muted/30">
      <div className="container mx-auto section-padding">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            Características principales
          </div>
          <h2 className="text-feature text-foreground">
            Por qué elegir 20minCoach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una plataforma diseñada para conectar personas con expertos de manera rápida, 
            eficiente y accesible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 card-elevated bg-card hover:bg-card-hover border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg bg-current/10 flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;