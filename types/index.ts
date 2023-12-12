import { IconType } from "react-icons";

export interface ButtonProps {
  text: string;
  buttonStyles?: string;
  icon: IconType;
}

export interface SearchProps {
  type: string;
  icon: IconType;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface BookProps {
  id: number;
  title: string;
  author: string;
  publication_year: string;
  genre: string[];
  description: string;
  cover_image: string;
}
