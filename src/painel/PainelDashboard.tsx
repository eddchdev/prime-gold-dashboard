import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  LayoutDashboard, 
  Car, 
  Users, 
  UserCog, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  LogOut,
  Plus,
  Database,
  DollarSign,
  TrendingUp,
  UserPlus,
  FileBarChart,
  Download,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// ============================================
// BLUR FADE ANIMATION COMPONENT
// ============================================
function BlurFade({
  children,
  delay = 0,
  duration = 0.4,
  className,
  yOffset = 12,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SIDEBAR COMPONENT
// ============================================
const menuItems = [
  { title: "Dashboard", url: "/painel", icon: LayoutDashboard },
  { title: "Estoque", url: "/painel/estoque", icon: Car },
  { title: "Leads", url: "/painel/leads", icon: Users },
  { title: "Colaboradores", url: "/painel/colaboradores", icon: UserCog },
  { title: "Configurações", url: "/painel/configuracoes", icon: Settings },
];

function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-[hsl(220,20%,6%)] sticky top-0 transition-all duration-300",
        "border-r border-[hsl(220,30%,20%)]",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-6">
        <div className="w-9 h-9 rounded-xl bg-[hsl(217,91%,60%)] flex items-center justify-center flex-shrink-0">
          <Car className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="font-semibold text-foreground text-[15px]">Prime Gold</h1>
            <p className="text-[11px] text-muted-foreground">Dashboard</p>
          </div>
        )}
      </div>

      {/* Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-[hsl(220,20%,14%)] border border-[hsl(220,30%,20%)] rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <NavLink
                key={item.title}
                to={item.url}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors",
                  isActive 
                    ? "bg-[hsl(217,91%,60%)]/15 text-[hsl(217,91%,60%)]" 
                    : "text-muted-foreground hover:text-foreground hover:bg-[hsl(220,20%,12%)]"
                )}
              >
                <item.icon className={cn(
                  "w-[18px] h-[18px] flex-shrink-0",
                  isActive ? "text-[hsl(217,91%,60%)]" : ""
                )} />
                {!collapsed && (
                  <span className="text-[13px] font-medium">{item.title}</span>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* User */}
      <div className={cn(
        "px-4 py-4 border-t border-[hsl(220,30%,20%)]",
        collapsed && "flex justify-center"
      )}>
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[hsl(217,91%,60%)]/15 flex items-center justify-center">
              <span className="text-xs font-semibold text-[hsl(217,91%,60%)]">AC</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-foreground truncate">Admin</p>
              <p className="text-[11px] text-muted-foreground truncate">admin@primegold.com</p>
            </div>
            <button className="text-muted-foreground hover:text-destructive transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-[hsl(217,91%,60%)]/15 flex items-center justify-center">
            <span className="text-[10px] font-semibold text-[hsl(217,91%,60%)]">AC</span>
          </div>
        )}
      </div>
    </aside>
  );
}

// ============================================
// HEADER COMPONENT
// ============================================
function Header() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <h1 className="text-2xl font-semibold text-foreground">Prime Gold Dashboard</h1>
      <div className="flex items-center gap-2.5">
        <Button variant="outline" size="sm" className="h-9 text-[13px] border-[hsl(220,30%,20%)]">
          <Database className="w-4 h-4" />
          <span className="hidden sm:inline ml-1.5">Seed Dados</span>
        </Button>
        <Button size="sm" className="h-9 text-[13px] bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,55%)] text-white">
          <Plus className="w-4 h-4" />
          <span className="ml-1.5">Novo Veículo</span>
        </Button>
      </div>
    </header>
  );
}

// ============================================
// METRIC CARD COMPONENT
// ============================================
interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ElementType;
  delay?: number;
}

function MetricCard({ title, value, subtitle, icon: Icon, delay = 0 }: MetricCardProps) {
  return (
    <BlurFade delay={delay}>
      <div className="relative bg-[hsl(220,20%,10%)] rounded-2xl p-6 border border-[hsl(220,30%,18%)] overflow-hidden">
        {/* Left accent border - Blue */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[hsl(217,91%,60%)] rounded-l-2xl" />
        
        <div className="flex items-start justify-between mb-4">
          <span className="text-[13px] font-normal text-muted-foreground">
            {title}
          </span>
          <Icon className="w-5 h-5 text-muted-foreground/50" />
        </div>
        <p className="text-4xl font-semibold text-foreground tracking-tight">{value}</p>
        {subtitle && (
          <p className="text-[12px] text-muted-foreground mt-1.5">{subtitle}</p>
        )}
      </div>
    </BlurFade>
  );
}

// ============================================
// LEADS TABLE COMPONENT
// ============================================
interface Lead {
  id: string;
  name: string;
  car: string;
  status: string;
  date: string;
}

const statusColors: Record<string, string> = {
  "Qualificado": "bg-emerald-500/15 text-emerald-400",
  "Negociação": "bg-[hsl(217,91%,60%)]/15 text-[hsl(217,91%,60%)]",
  "Novo": "bg-sky-500/15 text-sky-400",
  "Fechado": "bg-muted text-muted-foreground",
};

function LeadsTable({ leads }: { leads: Lead[] }) {
  return (
    <BlurFade delay={0.3}>
      <div className="bg-[hsl(220,20%,10%)] rounded-2xl border border-[hsl(220,30%,18%)] overflow-hidden">
        <div className="px-6 py-5 border-b border-[hsl(220,30%,15%)]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[15px] font-semibold text-foreground">Pipeline de Leads</h2>
              <p className="text-[12px] text-muted-foreground mt-0.5">Últimos leads recebidos</p>
            </div>
            <button className="flex items-center gap-1 text-[12px] text-[hsl(217,91%,60%)] font-medium hover:opacity-80 transition-opacity">
              Ver todos <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[hsl(220,20%,8%)]">
                <th className="px-6 py-3 text-left text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Nome</th>
                <th className="px-6 py-3 text-left text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Veículo de Interesse</th>
                <th className="px-6 py-3 text-left text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Status</th>
                <th className="px-6 py-3 text-left text-[11px] font-medium text-muted-foreground uppercase tracking-wide">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[hsl(220,30%,12%)]">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-[hsl(220,20%,9%)] transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-[13px] font-medium text-foreground">{lead.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[13px] text-muted-foreground">{lead.car}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-medium",
                      statusColors[lead.status] || statusColors["Novo"]
                    )}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[12px] text-muted-foreground">{lead.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BlurFade>
  );
}

// ============================================
// QUICK ACTIONS COMPONENT
// ============================================
const actions = [
  { title: "Novo Lead", description: "Cadastrar interessado", icon: UserPlus },
  { title: "Novo Carro", description: "Adicionar ao estoque", icon: Car },
  { title: "Ver Relatório", description: "Análise de performance", icon: FileBarChart },
  { title: "Exportar Dados", description: "Download em CSV", icon: Download },
];

function QuickActions() {
  return (
    <BlurFade delay={0.4}>
      <div className="bg-[hsl(220,20%,10%)] rounded-2xl border border-[hsl(220,30%,18%)] p-6">
        <div className="mb-5">
          <h2 className="text-[15px] font-semibold text-foreground">Ações Rápidas</h2>
          <p className="text-[12px] text-muted-foreground mt-0.5">Acesse as funções mais utilizadas</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {actions.map((action) => (
            <button
              key={action.title}
              className="flex flex-col items-start p-4 rounded-xl bg-[hsl(220,20%,8%)] border border-[hsl(220,30%,15%)] hover:border-[hsl(217,91%,60%)]/30 transition-colors text-left"
            >
              <div className="w-9 h-9 rounded-lg bg-[hsl(217,91%,60%)]/10 flex items-center justify-center mb-3">
                <action.icon className="w-4 h-4 text-[hsl(217,91%,60%)]" />
              </div>
              <h3 className="text-[13px] font-medium text-foreground">{action.title}</h3>
              <p className="text-[11px] text-muted-foreground mt-0.5">{action.description}</p>
            </button>
          ))}
        </div>
      </div>
    </BlurFade>
  );
}

// ============================================
// MOCK DATA
// ============================================
const metrics = [
  { title: "Estoque Ativo", value: "12", subtitle: "veículos disponíveis", icon: Car },
  { title: "Novos Leads", value: "28", subtitle: "interessados este mês", icon: Users },
  { title: "Vendas", value: "R$ 245K", subtitle: "volume total", icon: DollarSign },
  { title: "Conversão", value: "24%", subtitle: "eficiência de vendas", icon: TrendingUp },
];

const recentLeads = [
  { id: "1", name: "João da Silva", car: "Jetta GLI 2022", status: "Qualificado", date: "5 min atrás" },
  { id: "2", name: "Maria Santos", car: "Civic EXL 2020", status: "Negociação", date: "1 hora atrás" },
  { id: "3", name: "Pedro Oliveira", car: "Corolla XEi 2021", status: "Novo", date: "3 horas atrás" },
  { id: "4", name: "Ana Costa", car: "BMW 320i 2021", status: "Qualificado", date: "5 horas atrás" },
  { id: "5", name: "Carlos Mendes", car: "Audi A3 2022", status: "Negociação", date: "1 dia atrás" },
];

// ============================================
// MAIN DASHBOARD PAGE
// ============================================
export default function PainelDashboard() {
  return (
    <div data-app="painel" className="flex min-h-screen w-full bg-[hsl(220,20%,7%)]">
      <AppSidebar />
      
      <main className="flex-1 min-h-screen">
        <div className="p-6 lg:p-8 max-w-[1400px]">
          <Header />
          
          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <MetricCard
                key={metric.title}
                title={metric.title}
                value={metric.value}
                subtitle={metric.subtitle}
                icon={metric.icon}
                delay={0.1 + index * 0.05}
              />
            ))}
          </div>

          {/* Table */}
          <div className="mb-6">
            <LeadsTable leads={recentLeads} />
          </div>

          {/* Quick Actions */}
          <QuickActions />
        </div>
      </main>
    </div>
  );
}