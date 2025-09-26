import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Mic, 
  Heart, 
  Brain, 
  Code, 
  Wrench, 
  Star,
  MapPin,
  Clock,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";

const SearchCoach = () => {
  const trendingCategories = [
    {
      name: "Amor",
      icon: Heart,
      color: "border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-950",
      count: "234 coaches"
    },
    {
      name: "Autoayuda", 
      icon: Brain,
      color: "border-purple-500 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950",
      count: "186 coaches"
    },
    {
      name: "Programación",
      icon: Code,
      color: "border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-950",
      count: "142 coaches"
    },
    {
      name: "Mecánica",
      icon: Wrench,
      color: "border-gray-500 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-950",
      count: "98 coaches"
    }
  ];

  const featuredCoaches = [
    {
      name: "Lic. María González",
      title: "Psicóloga Clínica",
      specialties: ["Ansiedad", "Depresión"],
      rating: 4.9,
      sessions: 456,
      location: "San Jose",
      available: true,
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Carlos Ruiz",
      title: "Médico General",
      specialties: ["Consulta General", "Nutrición"],
      rating: 4.8,
      sessions: 623,
      location: "Bogotá",
      available: false,
      image: "/placeholder.svg"
    },
    {
      name: "Lic. Ana Sofía Torres",
      title: "Coach de Vida",
      specialties: ["Desarrollo Personal", "Metas"],
      rating: 5.0,
      sessions: 289,
      location: "Cali",
      available: true,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Buscar un Coach
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra el experto perfecto para tus necesidades en minutos
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">¿Qué necesitas hoy?</h2>
            
            <div className="relative max-w-2xl mx-auto mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Describe tu necesidad o busca por especialidad..."
                className="pl-10 pr-12 h-12 text-lg"
              />
              <Button 
                size="sm" 
                variant="ghost" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              >
                <Mic className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filtros Avanzados
              </Button>
              <Button variant="outline" size="sm">
                Solo Disponibles
              </Button>
              <Button variant="outline" size="sm">
                Mejor Valorados
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trending Categories */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tendencias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trendingCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={`h-24 flex-col gap-2 transition-all ${category.color}`}
                  >
                    <IconComponent className="w-6 h-6" />
                    <div className="text-center">
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs opacity-70">{category.count}</div>
                    </div>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Featured Coaches */}
        <Card>
          <CardHeader>
            <CardTitle>Nuestros Profesionales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCoaches.map((coach, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-muted overflow-hidden flex-shrink-0">
                        <img 
                          src={coach.image}
                          alt={coach.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate">{coach.name}</h3>
                        <p className="text-muted-foreground text-sm">{coach.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{coach.rating}</span>
                          </div>
                          <span className="text-muted-foreground text-sm">
                            ({coach.sessions} sesiones)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {coach.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {coach.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className={`text-xs font-medium ${
                          coach.available 
                            ? 'text-success' 
                            : 'text-muted-foreground'
                        }`}>
                          {coach.available ? 'Disponible' : 'Ocupado'}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link to="/perfil-coach" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          Ver Perfil
                        </Button>
                      </Link>
                      <Button 
                        size="sm" 
                        className="flex-1"
                        disabled={!coach.available}
                      >
                        {coach.available ? 'Conectar' : 'No Disponible'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Ver Todos los Coaches
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SearchCoach;