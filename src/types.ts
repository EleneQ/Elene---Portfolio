export enum SelectedPage {
  Home = "home",
  About = "about",
  Projects = "projects",
  Contact = "contact",
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
