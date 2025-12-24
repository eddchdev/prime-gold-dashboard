import { Header } from "../components/layout/Header";
import { BlurFade } from "../components/ui/BlurFade";
import { Phone, Mail, Award } from "lucide-react";

const team = [
  { id: "1", name: "Ricardo Almeida", role: "Gerente de Vendas", sales: 45, phone: "(11) 99999-1234", email: "ricardo@primecarros.com", avatar: "RA" },
  { id: "2", name: "Camila Torres", role: "Consultora Senior", sales: 38, phone: "(11) 99999-5678", email: "camila@primecarros.com", avatar: "CT" },
  { id: "3", name: "Bruno Silva", role: "Consultor", sales: 32, phone: "(11) 99999-9012", email: "bruno@primecarros.com", avatar: "BS" },
  { id: "4", name: "Amanda Costa", role: "Consultora", sales: 28, phone: "(11) 99999-3456", email: "amanda@primecarros.com", avatar: "AC" },
  { id: "5", name: "Felipe Mendes", role: "Consultor Junior", sales: 15, phone: "(11) 99999-7890", email: "felipe@primecarros.com", avatar: "FM" },
  { id: "6", name: "Juliana Rocha", role: "Atendimento", sales: 0, phone: "(11) 99999-2345", email: "juliana@primecarros.com", avatar: "JR" },
];

export default function Colaboradores() {
  return (
    <div className="flex-1 min-h-screen bg-background">
      <div className="p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto">
        <Header title="Colaboradores" subtitle="Equipe de vendas e atendimento" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <BlurFade key={member.id} delay={0.1 + index * 0.05}>
              <div className="glass-card-hover p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">{member.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                
                {member.sales > 0 && (
                  <div className="flex items-center gap-2 mb-4 p-2 bg-primary/10 rounded-lg">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{member.sales} vendas este ano</span>
                  </div>
                )}

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}
