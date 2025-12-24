import { Header } from "../components/layout/Header";
import { BlurFade } from "../components/ui/BlurFade";
import { Car, Calendar, Gauge, Fuel } from "lucide-react";

const vehicles = [
  { id: "1", model: "Volkswagen Jetta GLI", year: 2022, km: "25.000", fuel: "Gasolina", price: "R$ 185.000" },
  { id: "2", model: "Honda Civic EXL", year: 2020, km: "42.000", fuel: "Flex", price: "R$ 125.000" },
  { id: "3", model: "Toyota Corolla XEi", year: 2021, km: "35.000", fuel: "Flex", price: "R$ 135.000" },
  { id: "4", model: "BMW 320i M Sport", year: 2021, km: "18.000", fuel: "Gasolina", price: "R$ 245.000" },
  { id: "5", model: "Audi A3 Sedan", year: 2022, km: "12.000", fuel: "Gasolina", price: "R$ 215.000" },
  { id: "6", model: "Mercedes C200", year: 2020, km: "38.000", fuel: "Gasolina", price: "R$ 275.000" },
];

export default function Estoque() {
  return (
    <div className="flex-1 min-h-screen bg-background">
      <div className="p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto">
        <Header title="Estoque" subtitle="Gerencie os veículos disponíveis" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, index) => (
            <BlurFade key={vehicle.id} delay={0.1 + index * 0.05}>
              <div className="glass-card-hover p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-lg font-bold text-primary">{vehicle.price}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-3">{vehicle.model}</h3>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Gauge className="w-4 h-4" />
                    <span>{vehicle.km}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Fuel className="w-4 h-4" />
                    <span>{vehicle.fuel}</span>
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
