import { FC, MouseEventHandler, ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  onClick,
  children,
  icon
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 rounded-full border border-primary-dark bg-black py-2 pl-7 pr-2 font-roboto-condensed text-2xl text-white transition duration-300 hover:border-primary-dark hover:bg-white hover:text-black"
    >
      {children}
      <img src={icon} alt="button icon" />
    </button>
  );
};
