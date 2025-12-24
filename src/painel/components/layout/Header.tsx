import { Plus, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="default">
          <Database className="w-4 h-4" />
          <span className="hidden sm:inline">Seed Dados</span>
        </Button>
        <Button variant="gold" size="default">
          <Plus className="w-4 h-4" />
          <span>Novo Veículo</span>
        </Button>
      </div>
    </header>
  );
}
