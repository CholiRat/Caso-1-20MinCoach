import { Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Plataforma",
      links: [
        { name: "Cómo funciona", href: "#how-it-works" },
        { name: "Para usuarios", href: "#" },
        { name: "Para coaches", href: "#coaches" },
        { name: "Precios", href: "#pricing" }
      ]
    },
    {
      title: "Especialidades",
      links: [
        { name: "Psicología", href: "#" },
        { name: "Mecánica", href: "#" },
        { name: "Programación", href: "#" },
        { name: "Arte y Diseño", href: "#" },
        { name: "Ver todas", href: "#" }
      ]
    },
    {
      title: "Soporte",
      links: [
        { name: "Centro de ayuda", href: "#" },
        { name: "Contacto", href: "#" },
        { name: "Estado del servicio", href: "#" },
        { name: "Reportar problema", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Términos de servicio", href: "#" },
        { name: "Política de privacidad", href: "#" },
        { name: "Política de cookies", href: "#" },
        { name: "Aviso legal", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto section-padding">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 py-16">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">20minCoach</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Conectamos personas con expertos a través de sesiones de video de 20 minutos. 
              Ayuda profesional, accesible e inmediata.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-border pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © 2024 20minCoach. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center gap-6">
              <span>Disponible en:</span>
              <div className="flex gap-4 text-xs">
                <span className="px-2 py-1 bg-success/10 text-success rounded">🇨🇴 Colombia</span>
                <span className="px-2 py-1 bg-success/10 text-success rounded">🇧🇷 Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;