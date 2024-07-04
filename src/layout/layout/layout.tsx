import { FC, ReactNode } from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
