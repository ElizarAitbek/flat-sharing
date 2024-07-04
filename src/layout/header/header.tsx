import { FC } from "react";
import { Button } from "../../components/ui/button";

export const Header: FC = () => {
  return (
    <header className="container mb-9 mt-8 flex items-center justify-between">
      <a href="#">
        <img src="/icons/main-icon.svg" alt="main logo" />
      </a>

      <nav className="flex gap-8 text-lg text-primary-dark">
        <a href="#">How it works</a>
        <a href="#">Browse apartments</a>
        <a href="#">Cost</a>
      </nav>

      <section className="flex items-center gap-8 text-lg text-primary-dark">
        <a href="#">Sign In</a>
        <Button>Join Now</Button>
      </section>
    </header>
  );
};
