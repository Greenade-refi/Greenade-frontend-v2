import React, { FC, ReactNode } from "react";

type DefaultButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = {
  children: ReactNode;
  fullWidth?: boolean;
  dark?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
} & DefaultButtonProps;

const Button: FC<ButtonProps> = ({
  dark = true,
  fullWidth = false,
  children,
  className,
  variant = "primary",
  ...buttonProps
}) => {
  const fullWidthStyle = fullWidth ? "w-full" : "";

  const darkStyle = dark
    ? "active:text-brand-700 hover:text-brand-700/80 text-brand-700 active:border-brand-700 hover:border-brand-700/80 border-brand-700"
    : " border-brand-200 hover:border-brand-200/90 active:border-brand-200 text-brand-200 hover:text-brand-200/90 active:text-brand-200";

  const getVariant = () => {
    switch (variant) {
      case "primary": {
        return "bg-transparent hover:bg-brand-200/20 active:bg-brand-200/30";
      }
      case "secondary": {
        return " bg-transparent text-black hover:bg-grey-100 active:bg-transparent border border-brand-200";
      }
      case "tertiary": {
        return "text-black bg-grey-300 hover:bg-grey-400 active:bg-grey-500";
      }
      default: {
        return " bg-brand-600 hover:bg-brand-500 active:bg-brand-600 ";
      }
    }
  };

  return (
    <div
      className={`group hover:px-0 transition-all hover:py-0 px-2 py-1 border ${
        dark ? "border-brand-700/30" : "border-white/30"
      } rounded-xl inline-block  ${fullWidthStyle}`}>
      <button
        {...buttonProps}
        className={`font-raleway transition-all font-bold py-2 md:py-3 px-6 group-hover:px-8 group-hover:py-4 select-none focus:outline-none text-sm  rounded-lg ${fullWidthStyle} border  disabled:bg-grey-300 ${getVariant()} ${darkStyle} ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
