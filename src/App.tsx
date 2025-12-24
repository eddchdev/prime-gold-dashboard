import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PainelLayout } from "./painel/PainelLayout";
import Dashboard from "./painel/pages/Dashboard";
import Estoque from "./painel/pages/Estoque";
import Leads from "./painel/pages/Leads";
import Colaboradores from "./painel/pages/Colaboradores";
import Configuracoes from "./painel/pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to painel */}
          <Route path="/" element={<Navigate to="/painel" replace />} />
          
          {/* Painel routes */}
          <Route path="/painel" element={<PainelLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="estoque" element={<Estoque />} />
            <Route path="leads" element={<Leads />} />
            <Route path="colaboradores" element={<Colaboradores />} />
            <Route path="configuracoes" element={<Configuracoes />} />
          </Route>
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
