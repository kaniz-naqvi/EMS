import { Settings, User } from "lucide-react";
import { Folders, House } from "phosphor-react";

const iconList = {
  home: House,
  settings: Settings,
  user: User,
  folder: Folders,
};

export const getIcon = (icon) => {
  const IconFromList = iconList[icon];
  return icon ? IconFromList : null;
};
