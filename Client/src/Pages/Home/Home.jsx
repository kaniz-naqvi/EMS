import React from "react";
import { useTheme } from "@/styles/theme";
import TabComponent from "@/components/Atoms/Tabs/TabComponent";
import OverviewTab from "@/components/Molecules/UserHome/OverviewTab";

const SectionsComponent = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Other Sections</h2>
    <p>This is where other sections will be displayed.</p>
  </div>
);

const Home = () => {
  const theme = useTheme();
  const user = userConfig; // will replace with API calls
  const userSections = user?.sections;
  // const otherSections = userSections
  //   ? Object.fromEntries(
  //       Object.entries(userSections).filter(
  //         ([key]) => !["education", "experience"].includes(key)
  //       )
  //     )
  //   : {};
  const tabs = [
    { name: "Overview", component: <OverviewTab theme={theme} /> },
    {
      name: "Sections",
      component: <SectionsTab theme={theme} otherSections={userSections} />,
    },
  ];

  return (
    <div className="lg:p-6 p-1">
      <H1>Dashboard</H1>
      <TabComponent tabs={tabs} variant="default" grayBg={theme?.grayBg} />
    </div>
  );
};

export default Home;
