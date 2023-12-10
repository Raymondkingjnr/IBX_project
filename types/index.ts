import { IconType } from "react-icons";

export interface ButtonProps {
  text: string;
  buttonStyles?: string;
  icon: IconType;
}

export interface SearchProps {
  type: string;
  icon: IconType;
}
