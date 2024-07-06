import { HOW_IT_WORKS_IMAGES } from "../../utils/constants";
import { IconButton } from "../ui/icon-button";

export const HowItWorks = () => {
  return (
    <div className="container flex flex-col items-center gap-10">
      <h2 className="text-primary-dark mt-[180px] text-center font-roboto-condensed text-6xl font-bold italic">
        How it works
      </h2>

      <div className="flex gap-6">
        {HOW_IT_WORKS_IMAGES.map((card) => (
          <section key={card.id} className="flex w-[300px] flex-col gap-6">
            <img className="h-[440px]" src={card.url} alt={card.title} />

            <article className="flex flex-col gap-3.5">
              <h3 className="font-roboto-condensed text-2xl font-bold">
                {card.title}
              </h3>
              <p className="leading-5">{card.description}</p>
            </article>
          </section>
        ))}
      </div>

      <IconButton icon="/icons/arrow.svg">See more</IconButton>
    </div>
  );
};
