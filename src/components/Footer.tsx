import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/50 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span>por Daniele Bolos e Doces</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
