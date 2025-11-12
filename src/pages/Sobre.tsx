import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Sparkles } from "lucide-react";

const Sobre = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-4xl font-bold text-center">Sobre Nós</h1>
              
              <div className="mb-12 space-y-4 text-lg text-muted-foreground">
                <p>
                  Bem-vindo à <strong className="text-foreground">Daniele Bolos e Doces</strong>, 
                  onde a paixão pela confeitaria se transforma em momentos doces e inesquecíveis.
                </p>
                <p>
                  Nossa história começou com o amor pela arte de fazer bolos e doces artesanais. 
                  Cada receita é preparada com ingredientes cuidadosamente selecionados e muito carinho, 
                  garantindo não apenas sabor, mas também qualidade em cada mordida.
                </p>
                <p>
                  Acreditamos que cada celebração merece um toque especial, e é por isso que nos 
                  dedicamos a criar produtos únicos e personalizados que tornam seus momentos ainda 
                  mais especiais.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 mb-12">
                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Experiência</h3>
                    <p className="text-sm text-muted-foreground">
                      Anos de dedicação à arte da confeitaria
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Clientes Satisfeitos</h3>
                    <p className="text-sm text-muted-foreground">
                      Centenas de clientes felizes e fidelizados
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">Produtos Artesanais</h3>
                    <p className="text-sm text-muted-foreground">
                      Feitos à mão com ingredientes premium
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <h2 className="mb-4 text-2xl font-bold text-center">Nossa Missão</h2>
                  <p className="text-center text-muted-foreground">
                    Proporcionar momentos de felicidade através de bolos e doces artesanais, 
                    feitos com amor, qualidade e dedicação. Queremos fazer parte das suas 
                    celebrações mais especiais, criando memórias doces que durarão para sempre.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
