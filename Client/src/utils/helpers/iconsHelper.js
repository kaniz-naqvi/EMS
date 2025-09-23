import {
  Settings,
  User,
  Pencil,
  Trash,
  Clock,
  FileText,
  Calendar,
  Plus,
} from "lucide-react";
import {
  FoldersIcon,
  HouseIcon,
  DiamondsFourIcon,
  SmileySadIcon,
  ImageBrokenIcon,
} from "@phosphor-icons/react";

const iconList = {
  home: HouseIcon,
  settings: Settings,
  user: User,
  folder: FoldersIcon,
  edit: Pencil,
  delete: Trash,
  title: FileText,
  description: FileText,
  date: Calendar,
  duration: Clock,
  plus: Plus,
  grid: DiamondsFourIcon,
  sadEmoji: SmileySadIcon,
  broken: ImageBrokenIcon,
};

export const getIcon = (icon) => {
  const IconFromList = iconList[icon];
  if (!IconFromList) return iconList["broken"];
  return icon ? IconFromList : null;
};
