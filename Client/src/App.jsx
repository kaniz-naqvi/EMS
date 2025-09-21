import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { allowedRoutes } from "./utils/routes/routes";
import { LAYOUT_DASHBOARD } from "./utils/routes/route-paths";
import Loader from "./components/Atoms/Loader/Loader";

const LazyRouteWrapper = ({ component: Component, ...props }) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default function App() {
  const routes = allowedRoutes();
  const dashboardLinks = routes.filter((r) => r.layout === LAYOUT_DASHBOARD);
  const navLinks = routes.filter((r) => r.showInNavLinks);
  const [isAppLoading, setAppLoading] = useState(true);
  // Check window loading
  useEffect(() => {
    let loadTimeout;

    const handleLoad = () => {
      // Ensure loader shows for at least 1 second
      loadTimeout = setTimeout(() => {
        setAppLoading(false);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Listen for window load event
      window.addEventListener("load", handleLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", handleLoad);
      if (loadTimeout) clearTimeout(loadTimeout);
    };
  }, []);

  return (
    <>
      <Loader isLoading={isAppLoading} />
      {!isAppLoading && (
        <Routes>
          <Route path="/" element={<Dashboard navLinks={navLinks} />}>
            {dashboardLinks?.map((r) => {
              const Component = r.view;
              return (
                <Route
                  key={r.path}
                  path={r.path}
                  element={<LazyRouteWrapper component={Component} />}
                />
              );
            })}
          </Route>
        </Routes>
      )}
    </>
  );
}
