import { LucideIcon } from "lucide-react";
import { BlurFade } from "./ui/BlurFade";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  delay?: number;
}

export function MetricCard({ title, value, subtitle, icon: Icon, delay = 0 }: MetricCardProps) {
  return (
    <BlurFade delay={delay}>
      <div className="metric-card group">
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            {title}
          </span>
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {value}
          </p>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
    </BlurFade>
  );
}
