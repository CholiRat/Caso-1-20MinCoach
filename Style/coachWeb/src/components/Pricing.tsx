import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Clock, Users } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19.99",
      period: "mes",
      sessions: "2 sesiones",
      description: "Perfecto para necesidades ocasionales",
      features: [
        "2 sesiones de 20 minutos",
        "Acceso a todos los expertos",
        "Soporte por chat",
        "Grabación de sesiones"
      ],
      popular: false,
      cta: "Comenzar Starter"
    },
    {
      name: "Pro",
      price: "$59.99",
      period: "mes",
      sessions: "8 sesiones",
      description: "Ideal para uso regular y aprendizaje continuo",
      features: [
        "8 sesiones de 20 minutos",
        "Acceso prioritario a expertos",
        "Soporte telefónico 24/7",
        "Grabación de sesiones",
        "Resúmenes personalizados",
        "Agenda flexible"
      ],
      popular: true,
      cta: "Comenzar Pro"
    },
    {
      name: "Enterprise",
      price: "Personalizado",
      period: "",
      sessions: "Ilimitado",
      description: "Para equipos y organizaciones",
      features: [
        "Sesiones ilimitadas",
        "Expertos dedicados",
        "Integraciones personalizadas",
        "Dashboard de analytics",
        "Soporte dedicado",
        "Facturación empresarial"
      ],
      popular: false,
      cta: "Contactar Ventas"
    }
  ];

  return (
    <section id="pricing" className="section-spacing">
      <div className="container mx-auto section-padding">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Planes y precios
          </div>
          <h2 className="text-feature text-foreground">
            Comienza con Colombia y Brasil
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Planes flexibles y accesibles para conectar con expertos. 
            Lanzamiento inicial en Colombia y Brasil durante 2024.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 card-elevated bg-card border-border animate-fade-in ${
                plan.popular ? 'border-primary shadow-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-card-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                {/* Price */}
                <div className="text-center space-y-1">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">/{plan.period}</span>
                    )}
                  </div>
                  <div className="text-primary font-medium">{plan.sessions}</div>
                </div>
                
                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Sesiones de exactamente 20 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span>Más de 500 expertos verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-warning" />
              <span>Garantía de satisfacción</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            * Precios en USD. Disponible inicialmente en Colombia y Brasil. 
            Todos los planes incluyen acceso completo a la plataforma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;