import { BlurFade } from "./ui/BlurFade";

export function HeroBanner() {
  return (
    <BlurFade delay={0}>
      <div className="relative overflow-hidden rounded-2xl mb-8">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-transparent z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-20 px-8 py-12 sm:py-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Elite Performance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Prime<span className="text-primary">Carros</span> Painel
            </h2>
            <p className="text-muted-foreground max-w-md">
              Gerencie seu estoque, acompanhe leads e maximize suas vendas em uma única plataforma.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-4 right-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl z-0" />
      </div>
    </BlurFade>
  );
}
