import { UserPlus, Car, FileBarChart, Download, LucideIcon } from "lucide-react";
import { BlurFade } from "./ui/BlurFade";

interface QuickAction {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
}

const actions: QuickAction[] = [
  {
    title: "Novo Lead",
    description: "Cadastrar novo interessado",
    icon: UserPlus,
  },
  {
    title: "Novo Carro",
    description: "Adicionar ao estoque",
    icon: Car,
  },
  {
    title: "Ver Relatório",
    description: "Análise de performance",
    icon: FileBarChart,
  },
  {
    title: "Exportar Dados",
    description: "Download em CSV",
    icon: Download,
  },
];

export function QuickActions() {
  return (
    <BlurFade delay={0.5}>
      <div className="glass-card p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground">Ações Rápidas</h2>
          <p className="text-sm text-muted-foreground mt-1">Acesse as funções mais utilizadas</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action) => (
            <button
              key={action.title}
              className="action-button text-left"
              onClick={action.onClick}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <action.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{action.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
            </button>
          ))}
        </div>
      </div>
    </BlurFade>
  );
}
