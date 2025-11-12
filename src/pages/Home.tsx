import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cake, Heart, Star, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Doçura em cada mordida
              </h1>
              <p className="mb-8 text-lg text-muted-foreground">
                Bolos e doces artesanais feitos com amor e ingredientes selecionados
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/encomendas">
                    <Cake className="h-5 w-5" />
                    Fazer Encomenda
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/galeria">Ver Galeria</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">Por que escolher a Daniele?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Feito com Amor</h3>
                  <p className="text-muted-foreground">
                    Cada produto é preparado com carinho e atenção aos detalhes
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Qualidade Premium</h3>
                  <p className="text-muted-foreground">
                    Ingredientes selecionados e receitas exclusivas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 transition-shadow hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Retirar as encomendas no local</h3>
                  <p className="text-muted-foreground">
                    Garantimos no prazo combinado
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Pronto para adoçar seu dia?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Entre em contato e faça sua encomenda especial
            </p>
            <Button asChild size="lg">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
