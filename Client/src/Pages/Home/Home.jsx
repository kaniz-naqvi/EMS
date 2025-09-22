import React from "react";
import { useTheme } from "@/styles/theme";
import TabComponent from "@/components/Atoms/Tabs/TabComponent";
import OverviewTab from "@/components/Molecules/UserHome/OverviewTab";
import SectionsTab from "@/components/Molecules/UserHome/SectionsTab";
import userConfig from "@/hooks/userConfig";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <TabComponent tabs={tabs} variant="default" grayBg={theme?.grayBg} />
    </div>
  );
};

export default Home;
