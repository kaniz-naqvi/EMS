import React from "react";
import { useTheme } from "@/styles/theme";
import TabComponent from "@/components/Atoms/Tabs/TabComponent";
import OverviewTab from "@/components/Molecules/UserHome/OverviewTab";

const SectionsComponent = () => (
  <div>
    <h2 className="text-xl font-bold mb-4 bg-primary">Other Sections</h2>
    <p>This is where other sections will be displayed.</p>
  </div>
);

const Home = () => {
  const theme = useTheme();

  const tabs = [
    { name: "Overview", component: <OverviewTab /> },
    { name: "Sections", component: <SectionsComponent /> },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <TabComponent
        tabs={tabs}
        primaryColor={theme.primary}
        variant="default"
      />
    </div>
  );
};

export default Home;
