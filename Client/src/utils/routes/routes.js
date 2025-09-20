import Home from "@/Pages/Home/Home";
import { getIcon } from "../helpers/iconsHelper";
import { LAYOUT_DASHBOARD, urls } from "./route-paths";
import { URL_Name } from "./url-names";
import Projects from "@/Pages/Projects/Projects";

export const allRoutes = [
  {
    path: urls.Home,
    name: URL_Name.home,
    view: Home,
    layout: LAYOUT_DASHBOARD,
    icon: getIcon("home"),
    showInNavLinks: true,
    showInTopHeader: false,
  },
  {
    path: urls.Projects,
    name: URL_Name.projects,
    view: Projects,
    layout: LAYOUT_DASHBOARD,
    icon: getIcon("folder"),
    showInNavLinks: true,
    showInTopHeader: false,
  },
];
export const allowedRoutes = () => {
  return allRoutes;
};
