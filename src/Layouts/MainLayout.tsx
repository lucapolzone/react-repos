import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <div>
      <h1>Mainlayout</h1>
      {/* Outlet gestisce il render delle rotte in App.tsx */}
      <Outlet />
    </div>
  );
};
