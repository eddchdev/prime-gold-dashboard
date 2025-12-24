import { Outlet } from "react-router-dom";
import { AppSidebar } from "./components/layout/AppSidebar";

export function PainelLayout() {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <Outlet />
    </div>
  );
}
