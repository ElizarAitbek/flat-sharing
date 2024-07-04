import { FC, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border-2 border-primary-dark px-6 py-4 text-lg transition duration-300 hover:border-primary-dark hover:bg-black hover:text-white"
    >
      {children}
    </button>
  );
};
