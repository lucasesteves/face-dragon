import { DragonsProps } from "../page/Panel";

export const formatDate = (date: string) => {
  return date.split("T")[0];
};

export const ordenation = (obj1: DragonsProps, obj2: DragonsProps) => {
  if (obj1.name < obj2.name) {
    return -1;
  }
  if (obj1.name > obj2.name) {
    return 1;
  }
  return 0;
};
