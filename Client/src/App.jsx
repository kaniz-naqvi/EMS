import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { allowedRoutes } from "./utils/routes/routes";
import { LAYOUT_DASHBOARD } from "./utils/routes/route-paths";
import Loader from "./components/Atoms/Loader/Loader";

export default function App() {
  const routes = allowedRoutes();
  const dashboardLinks = routes.filter((r) => r.layout === LAYOUT_DASHBOARD);
  const navLinks = routes.filter((r) => r.showInNavLinks);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setAppLoading(false);
    };
    if (document.readyState === "complete") {
      setAppLoading(false);
    } else {
      // Wait for window to load
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (appLoading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<Dashboard navLinks={navLinks} />}>
        {dashboardLinks?.map((r) => {
          const Component = r.view;
          return (
            <Route
              key={r.path}
              path={r.path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}
