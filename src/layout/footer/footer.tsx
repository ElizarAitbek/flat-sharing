export const Footer = () => {
  return (
    <footer className="container mb-6 mt-8 flex h-[110px] items-center justify-between rounded-3xl bg-primary-light">
      <a href="#">
        <img src="/icons/main-icon.svg" alt="main logo" />
      </a>

      <nav className="flex gap-8 text-lg text-primary-dark">
        <a href="#">How it works</a>
        <a href="#">Browse apartments</a>
        <a href="#">Cost</a>
      </nav>

      <section className="flex items-center gap-8 text-lg text-primary-dark">
        <img src="/icons/facebook.svg" alt="facebook logo" />
        <img src="/icons/instagram.svg" alt="instagram logo" />
        <img src="/icons/telegram.svg" alt="telegram logo" />
      </section>
    </footer>
  );
};
