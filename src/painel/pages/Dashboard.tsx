import { Car, Users, DollarSign, TrendingUp } from "lucide-react";
import { Header } from "../components/layout/Header";
import { HeroBanner } from "../components/HeroBanner";
import { MetricCard } from "../components/MetricCard";
import { LeadsTable } from "../components/LeadsTable";
import { QuickActions } from "../components/QuickActions";

// Mock Data
const metrics = [
  { 
    title: "Estoque Ativo", 
    value: "12", 
    subtitle: "veículos disponíveis",
    icon: Car 
  },
  { 
    title: "Novos Leads", 
    value: "28", 
    subtitle: "interessados este mês",
    icon: Users 
  },
  { 
    title: "Vendas", 
    value: "R$ 245K", 
    subtitle: "volume total",
    icon: DollarSign 
  },
  { 
    title: "Conversão", 
    value: "24%", 
    subtitle: "eficiência de vendas",
    icon: TrendingUp 
  },
];

const recentLeads = [
  { id: "1", name: "João da Silva", car: "Jetta GLI 2022", status: "Qualificado", date: "5 min atrás" },
  { id: "2", name: "Maria Santos", car: "Civic EXL 2020", status: "Negociação", date: "1 hora atrás" },
  { id: "3", name: "Pedro Oliveira", car: "Corolla XEi 2021", status: "Novo", date: "3 horas atrás" },
  { id: "4", name: "Ana Costa", car: "BMW 320i 2021", status: "Qualificado", date: "5 horas atrás" },
  { id: "5", name: "Carlos Mendes", car: "Audi A3 2022", status: "Negociação", date: "1 dia atrás" },
];

export default function Dashboard() {
  return (
    <div className="flex-1 min-h-screen bg-background">
      <div className="p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto">
        <Header title="Dashboard" />
        
        <HeroBanner />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.title}
              title={metric.title}
              value={metric.value}
              subtitle={metric.subtitle}
              icon={metric.icon}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>

        {/* Leads Table */}
        <div className="mb-8">
          <LeadsTable leads={recentLeads} />
        </div>

        {/* Quick Actions */}
        <QuickActions />
      </div>
    </div>
  );
}
