import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Galeria = () => {
  const categories = [
    {
      title: "Bolos de Aniversário",
      items: [
        { id: 1, description: "Bolo de chocolate com morangos" },
        { id: 2, description: "Bolo de baunilha decorado" },
        { id: 3, description: "Bolo de frutas vermelhas" },
      ]
    },
    {
      title: "Bolos de Casamento",
      items: [
        { id: 4, description: "Bolo de casamento clássico" },
        { id: 5, description: "Bolo naked cake" },
        { id: 6, description: "Bolo elegante com flores" },
      ]
    },
    {
      title: "Doces Finos",
      items: [
        { id: 7, description: "Brigadeiros gourmet" },
        { id: 8, description: "Trufas sortidas" },
        { id: 9, description: "Beijinhos especiais" },
      ]
    },
    {
      title: "Bolos Especiais",
      items: [
        { id: 10, description: "Bolo red velvet" },
        { id: 11, description: "Bolo de limão" },
        { id: 12, description: "Bolo de cenoura com chocolate" },
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h1 className="mb-4 text-4xl font-bold">Galeria</h1>
              <p className="text-lg text-muted-foreground">
                Conheça alguns dos nossos trabalhos artesanais
              </p>
            </div>

            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category.title}>
                  <h2 className="mb-6 text-2xl font-bold text-primary">{category.title}</h2>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item) => (
                      <Card key={item.id} className="overflow-hidden transition-transform hover:scale-105">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <div className="text-center p-6">
                            <p className="text-lg font-semibold text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block bg-primary/5 border-primary/20 p-6">
                <p className="text-muted-foreground">
                  Esta é uma prévia do nosso trabalho. Entre em contato para ver mais fotos 
                  e fazer sua encomenda personalizada!
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Galeria;
