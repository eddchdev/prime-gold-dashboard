import { Header } from "../components/layout/Header";
import { LeadsTable } from "../components/LeadsTable";
import { BlurFade } from "../components/ui/BlurFade";
import { Users, UserPlus, UserCheck, Clock } from "lucide-react";

const allLeads = [
  { id: "1", name: "João da Silva", car: "Jetta GLI 2022", status: "Qualificado", date: "5 min atrás" },
  { id: "2", name: "Maria Santos", car: "Civic EXL 2020", status: "Negociação", date: "1 hora atrás" },
  { id: "3", name: "Pedro Oliveira", car: "Corolla XEi 2021", status: "Novo", date: "3 horas atrás" },
  { id: "4", name: "Ana Costa", car: "BMW 320i 2021", status: "Qualificado", date: "5 horas atrás" },
  { id: "5", name: "Carlos Mendes", car: "Audi A3 2022", status: "Negociação", date: "1 dia atrás" },
  { id: "6", name: "Fernanda Lima", car: "Mercedes C200", status: "Fechado", date: "2 dias atrás" },
  { id: "7", name: "Ricardo Souza", car: "Golf GTI 2022", status: "Novo", date: "2 dias atrás" },
  { id: "8", name: "Juliana Alves", car: "Tiguan R-Line", status: "Qualificado", date: "3 dias atrás" },
];

const stats = [
  { title: "Total de Leads", value: "156", icon: Users },
  { title: "Novos Hoje", value: "8", icon: UserPlus },
  { title: "Qualificados", value: "42", icon: UserCheck },
  { title: "Aguardando", value: "28", icon: Clock },
];

export default function Leads() {
  return (
    <div className="flex-1 min-h-screen bg-background">
      <div className="p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto">
        <Header title="Leads" subtitle="Gerencie seus contatos e oportunidades" />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <BlurFade key={stat.title} delay={0.1 + index * 0.05}>
              <div className="glass-card p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.title}</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <LeadsTable leads={allLeads} />
      </div>
    </div>
  );
}
