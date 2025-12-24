import { Header } from "../components/layout/Header";
import { BlurFade } from "../components/ui/BlurFade";
import { Button } from "@/components/ui/button";
import { Bell, Shield, Palette, Database, Globe, Key } from "lucide-react";

const settings = [
  {
    icon: Bell,
    title: "Notificações",
    description: "Configure alertas de novos leads e vendas",
    action: "Configurar",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Autenticação e controle de acesso",
    action: "Gerenciar",
  },
  {
    icon: Palette,
    title: "Aparência",
    description: "Personalização visual do painel",
    action: "Personalizar",
  },
  {
    icon: Database,
    title: "Backup",
    description: "Backup automático dos dados",
    action: "Configurar",
  },
  {
    icon: Globe,
    title: "Integrações",
    description: "WhatsApp, Instagram e outras APIs",
    action: "Conectar",
  },
  {
    icon: Key,
    title: "API Keys",
    description: "Gerenciar chaves de acesso",
    action: "Gerenciar",
  },
];

export default function Configuracoes() {
  return (
    <div className="flex-1 min-h-screen bg-background">
      <div className="p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto">
        <Header title="Configurações" subtitle="Personalize seu painel" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {settings.map((setting, index) => (
            <BlurFade key={setting.title} delay={0.1 + index * 0.05}>
              <div className="glass-card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <setting.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{setting.title}</h3>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {setting.action}
                  </Button>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
