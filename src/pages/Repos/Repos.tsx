import { Outlet } from "react-router-dom";

export const Repos: React.FC = () => {
  return (
    <div>
      <h2>Repos</h2>
      <Outlet />
    </div>
  );
};
