import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLogger } from '../hooks/useLogger';
import { Star, MapPin, Clock, Award, Heart, Phone } from "lucide-react";

const CoachProfile = () => {
  const portfolio = [
    "/placeholder.svg",
    "/placeholder.svg", 
    "/placeholder.svg"
  ];

  const reviews = [
    {
      name: "María Rodríguez",
      rating: 5,
      comment: "¡Excelente servicio! El coach me ayudó muchísimo con mis problemas de pareja."
    },
    {
      name: "Carlos Mendoza", 
      rating: 5,
      comment: "Muy profesional y empático. Definitivamente lo recomiendo."
    },
    {
      name: "Ana Lucía Vega",
      rating: 4,
      comment: "Buena experiencia, me dio consejos muy útiles para mi crecimiento personal."
    }
  ];
  const logger = useLogger('SearchCoach');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-muted overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Coach Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                      Lic. Juan Pérez
                    </h1>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Bogotá, Colombia</span>
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">(127 reseñas)</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="gap-2"
                  onClick={() => {
                  logger.info('sentry', {message: 'Voice call requested'} );
                  }}
                  >
                    <Phone className="w-4 h-4" />
                    Conectar Ahora
                  </Button>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Áreas de Especialidad</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-1">
                      <Heart className="w-3 h-3" />
                      Amor y Relaciones
                    </Badge>
                    <Badge variant="secondary">Autoayuda</Badge>
                    <Badge variant="secondary">Desarrollo Personal</Badge>
                    <Badge variant="secondary">Terapia de Pareja</Badge>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-success" />
                    <span className="text-success font-medium">Disponible Ahora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">5 años de experiencia</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Background */}
            <Card>
              <CardHeader>
                <CardTitle>Sobre Mí</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Soy un psicólogo licenciado con más de 5 años de experiencia ayudando a personas 
                  a mejorar sus relaciones amorosas y su crecimiento personal. Me especializo en 
                  terapia de pareja, autoestima y desarrollo de habilidades emocionales.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Mi enfoque se basa en la psicología positiva y técnicas de mindfulness para 
                  ayudar a mis clientes a encontrar claridad y soluciones prácticas a sus desafíos 
                  emocionales y relacionales.
                </p>
              </CardContent>
            </Card>

            {/* Portfolio */}
            <Card>
              <CardHeader>
                <CardTitle>Portafolio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {portfolio.map((image, index) => (
                    <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={image}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            <Card>
              <CardHeader>
                <CardTitle>Tarifas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">20 minutos</span>
                    <span className="font-semibold">$25.000 COP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sesión grupal</span>
                    <span className="font-semibold">$15.000 COP</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Estadísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total sesiones</span>
                  <span className="font-medium">847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tiempo respuesta</span>
                  <span className="font-medium">&lt; 2 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tasa de éxito</span>
                  <span className="font-medium">96%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Reseñas de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {review.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{review.name}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default CoachProfile;