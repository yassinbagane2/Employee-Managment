import { ReactNode } from "react";

export default interface buttonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  type?: "submit" | "button";
  className?: string;
}

type btn = {
  children: ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
