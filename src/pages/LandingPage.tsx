import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Phone, 
  Shield, 
  FileCheck, 
  Users, 
  CheckCircle2, 
  Clock, 
  Car, 
  MapPin,
  Mail,
  ChevronDown,
  MessageCircle,
  Star,
  ArrowRight,
  Search,
  Coffee,
  Truck,
  HeadphonesIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

// ============================================
// ANIMATION WRAPPER
// ============================================
function FadeInView({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// HEADER
// ============================================
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Estoque", href: "#estoque" },
    { label: "Destaques", href: "#processo" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PC</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-foreground">PRIME</span>
              <span className="text-lg font-semibold text-primary ml-1">CARROS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/5551995101900"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/50 text-foreground text-sm font-medium hover:bg-primary/10 transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            Contato
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground"
          >
            <div className="space-y-1.5">
              <span className={cn("block w-6 h-0.5 bg-current transition-transform", mobileMenuOpen && "rotate-45 translate-y-2")} />
              <span className={cn("block w-6 h-0.5 bg-current transition-opacity", mobileMenuOpen && "opacity-0")} />
              <span className={cn("block w-6 h-0.5 bg-current transition-transform", mobileMenuOpen && "-rotate-45 -translate-y-2")} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-4 border-t border-border/30"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5551995101900"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium"
              >
                <Phone className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <FadeInView>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              Transparência em cada detalhe.
              <br />
              <span className="text-primary">Confiança em cada carro.</span>
            </h1>
          </FadeInView>

          <FadeInView delay={0.1}>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Encontre o carro dos seus sonhos com segurança, qualidade e confiança.
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#estoque"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Fale Conosco
              </a>
              <a
                href="#estoque"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-card/80 transition-colors"
              >
                Ver Estoque
              </a>
            </div>
          </FadeInView>

          {/* Trust Badges */}
          <FadeInView delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { icon: Shield, text: "Seminovos rigorosamente selecionados" },
                { icon: FileCheck, text: "Garantia Real" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

// ============================================
// ABOUT SECTION
// ============================================
function AboutSection() {
  const features = [
    {
      icon: Search,
      title: "Seleção Rigorosa",
      description: "Cada carro passa por inspeção completa para garantir qualidade total.",
    },
    {
      icon: Shield,
      title: "Garantia Real",
      description: "Cautelar completa e garantia pós-venda para sua segurança.",
    },
    {
      icon: Users,
      title: "Relacionamento Próximo",
      description: "Consultoria dedicada antes, durante e depois da compra.",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <FadeInView>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
                Seminovos rigorosamente selecionados
                <br />
                <span className="text-primary">Garantia Real</span>
              </h2>
            </FadeInView>

            <FadeInView delay={0.1}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Transformando a compra do seu carro em uma experiência incrível, segura e transparente.
              </p>
            </FadeInView>

            <FadeInView delay={0.15}>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                A PRIME CARROS nasceu de uma missão simples: devolver a confiança ao mercado de carros. Temos oficina própria e criamos um processo rigoroso de pré e pós venda para a satisfação e fidelização total de nossos clientes. Cada carro é rigorosamente revisado e inspecionado antes da venda. Nosso relacionamento com o nosso cliente não acaba na entrega do carro, oferecemos toda a garantia e suporte pós venda, e cuidamos de toda documentação para garantir todo nosso compromisso, transparência e tranquilidade para nosso cliente.
              </p>
            </FadeInView>

            {/* Feature Cards */}
            <div className="mt-10 space-y-4">
              {features.map((feature, i) => (
                <FadeInView key={feature.title} delay={0.2 + i * 0.05}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 gold-border">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>

          {/* Image */}
          <FadeInView delay={0.1}>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-card border border-border/50">
                <img
                  src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop"
                  alt="Interior da Prime Carros em Tramandaí"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Logo Overlay */}
              <div className="absolute bottom-6 right-6 w-24 h-24 rounded-2xl bg-card/90 border border-border/50 flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl font-bold text-primary">PC</span>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROCESS SECTION
// ============================================
function ProcessSection() {
  const slides = [
    {
      title: "Seleção Rigorosa",
      description: "Apenas carros aprovados em nossa inspeção ficam disponíveis para venda na PRIME CARROS. Antes de serem disponibilizados para venda, todos nossos carros passam por uma inspeção rigorosa de mecânica, estética e documental.",
      items: ["Histórico completo verificado", "Revisão técnica antes da entrega"],
    },
    {
      title: "Transparência Total",
      description: "Histórico, Documentação, Inspeção e Cautelar. Tudo em detalhes para a sua compra segura e tranquila.",
      items: ["Nosso administrativo cuida de tudo para você", "Tudo em documentos físicos e digitais"],
    },
    {
      title: "Atendimento Dedicado",
      description: "Consultoria personalizada para cada cliente, pré venda, pós venda e também a recompra com pagamento de até 90% da tabela Fipe.",
      items: ["Entrega com cuidado especial", "Prioridade na recompra"],
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="processo" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
              Como funciona o processo?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Desde o primeiro contato até a entrega na loja cuidamos de tudo para sua segurança: financiamentos bancários, documentação, laudo cautelar e toda organização de transferência para o seu nome.
            </p>
          </div>
        </FadeInView>

        {/* Dots */}
        <div className="flex justify-center gap-3 mb-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={cn(
                "w-3 h-3 rounded-full border-2 transition-colors",
                activeSlide === i ? "border-primary bg-primary" : "border-muted-foreground/50"
              )}
            />
          ))}
        </div>

        {/* Slide Content */}
        <FadeInView>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl border border-border/50 p-8 lg:p-12">
              <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                {slides[activeSlide].title}
              </h3>
              <p className="text-muted-foreground mb-8">
                {slides[activeSlide].description}
              </p>
              <div className="space-y-3">
                {slides[activeSlide].items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-4 rounded-xl bg-background/50 border border-border/30">
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

// ============================================
// STEPS SECTION
// ============================================
function StepsSection() {
  const steps = [
    {
      num: "01",
      label: "ATENDIMENTO",
      title: "Conversa e seleção",
      description: "Conversamos, entendemos e escolhemos juntos o carro ideal para você.",
    },
    {
      num: "02",
      label: "VISITA",
      title: "Visita na loja",
      description: "Recebemos você em Tramandaí com aquele café, para ver o carro de perto, fazer um test-drive e tirar qualquer dúvida.",
    },
    {
      num: "03",
      label: "ENTREGA",
      title: "Entrega especial",
      description: "Carro pronto e preparado para a entrega, com toda documentação e acompanhamento.",
    },
    {
      num: "04",
      label: "SUPORTE",
      title: "Programa de cuidado",
      description: "Seguimos juntos: suporte para seguro, transferência, revisões e recompra com prioridade.",
    },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <FadeInView key={step.num} delay={i * 0.1}>
              <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-2xl text-primary">{step.num}</span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border border-border text-muted-foreground">
                    {step.label}
                  </span>
                </div>
                <h3 className="font-display text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// BENEFITS SECTION
// ============================================
function BenefitsSection() {
  const benefits = [
    {
      icon: CheckCircle2,
      text: "Transparência total: explicamos tudo, com laudo cautelar e documentação",
    },
    {
      icon: CheckCircle2,
      text: "Suporte pós venda no que for necessário, e temos oficina própria",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground text-center mb-12">
            O que você recebe junto com o carro
          </h2>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <FadeInView key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 gold-border">
                <benefit.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{benefit.text}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// LOCATION SECTION
// ============================================
function LocationSection() {
  return (
    <section id="contato" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">Onde estamos</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Venha nos visitar em Tramandaí! Nossa loja física de carros fica na Av. Fernandes Bastos, com fácil acesso e estacionamento. Aqui você pode conhecer os veículos pessoalmente, tirar dúvidas e contar com atendimento exclusivo.
            </p>
          </div>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Av. Fernandes Bastos, 1900 - Tirolesa, Tramandaí - RS, 95590-000</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href="#estoque"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
              >
                Ver Estoque Completo
              </a>
              <a
                href="https://wa.me/5551995101900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Consultor no WhatsApp
              </a>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

// ============================================
// FAQ SECTION
// ============================================
function FAQSection() {
  const faqs = [
    {
      question: "Vocês fazem financiamento?",
      answer: "Sim! Trabalhamos com os melhores bancos do mercado para oferecer as melhores taxas e condições de financiamento para você.",
    },
    {
      question: "Aceitam carro na troca?",
      answer: "Sim! Avaliamos seu carro usado e damos o melhor valor do mercado para facilitar a troca.",
    },
    {
      question: "Como verificam a procedência?",
      answer: "Todos os veículos passam por cautelar completa, verificação de histórico, documentação e inspeção mecânica rigorosa.",
    },
    {
      question: "Qual a documentação necessária?",
      answer: "RG, CPF, comprovante de residência e renda. Cuidamos de toda a transferência e documentação para você.",
    },
    {
      question: "Oferecem garantia?",
      answer: "Sim! Oferecemos garantia real em todos os veículos, além de suporte pós-venda e oficina própria.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">Perguntas Frequentes</h2>
            <p className="mt-4 text-muted-foreground">Tire suas dúvidas sobre nossos serviços</p>
          </div>
        </FadeInView>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeInView key={i} delay={i * 0.05}>
              <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">PC</span>
              </div>
              <div>
                <span className="text-lg font-semibold text-foreground">PRIME</span>
                <span className="text-lg font-semibold text-primary ml-1">CARROS</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Transparência em cada detalhe.
              <br />
              Confiança em cada carro.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(51) 99510-1900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>Primecarrosrs@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Tramandaí - RS</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Horário de Atendimento</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Segunda a Sexta: 08:00 - 18:30</p>
              <p>Sábado: 08:00 - 12:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© 2025 PRIME CARROS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// MAIN LANDING PAGE
// ============================================
export default function LandingPage() {
  return (
    <div data-app="site" className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <StepsSection />
        <BenefitsSection />
        <LocationSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}