import { BlurFade } from "./ui/BlurFade";

interface Lead {
  id: string;
  name: string;
  car: string;
  status: string;
  date: string;
}

const statusColors: Record<string, string> = {
  "Qualificado": "bg-green-500/20 text-green-400 border-green-500/30",
  "Negociação": "bg-primary/20 text-primary border-primary/30",
  "Novo": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Fechado": "bg-muted text-muted-foreground border-border",
};

interface LeadsTableProps {
  leads: Lead[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
  return (
    <BlurFade delay={0.4}>
      <div className="glass-card overflow-hidden">
        <div className="p-6 border-b border-border/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Pipeline de Leads</h2>
              <p className="text-sm text-muted-foreground mt-1">Últimos leads recebidos</p>
            </div>
            <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
              Ver todos →
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-card/30">
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Veículo de Interesse
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Data
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/10">
              {leads.map((lead) => (
                <tr key={lead.id} className="table-row-hover">
                  <td className="px-6 py-4">
                    <span className="font-medium text-foreground">{lead.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-muted-foreground">{lead.car}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[lead.status] || statusColors["Novo"]}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-muted-foreground text-sm">{lead.date}</span>
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
