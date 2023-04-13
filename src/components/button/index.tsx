import { ButtonHTMLAttributes } from "react";
import "./styles.css";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant?: "primary" | "secondary" | "disabled";
};

export function Button({ label, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={`btn-${variant}`} {...props}>
      {label}
    </button>
  );
}
