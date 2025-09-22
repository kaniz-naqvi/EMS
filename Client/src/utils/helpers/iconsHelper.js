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
import { Folders, House } from "phosphor-react";

const iconList = {
  home: House,
  settings: Settings,
  user: User,
  folder: Folders,
  edit: Pencil,
  delete: Trash,
  title: FileText,
  description: FileText,
  date: Calendar,
  duration: Clock,
  plus: Plus,
};

export const getIcon = (icon) => {
  const IconFromList = iconList[icon];
  return icon ? IconFromList : null;
};
