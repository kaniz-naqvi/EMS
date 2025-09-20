import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { allowedRoutes } from "./utils/routes/routes";
import { LAYOUT_DASHBOARD } from "./utils/routes/route-paths";

export default function App() {
  const routes = allowedRoutes();
  const dashboardLinks = routes.filter((r) => r.layout === LAYOUT_DASHBOARD);
  const navLinks = routes.filter((r) => r.showInNavLinks);

  return (
    <Routes>
      <Route path="/" element={<Dashboard navLinks={navLinks} />}>
        {dashboardLinks?.map((r) => {
          const Component = r.view;
          return <Route key={r.path} path={r.path} element={<Component />} />;
        })}
      </Route>
    </Routes>
  );
}
