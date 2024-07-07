import { HOW_IT_WORKS_IMAGES } from "../../utils/constants";
import { IconButton } from "../ui/icon-button";

import { useGetImages } from "@/hooks/getImages";

interface ImagesProps {
  id: string;
  alt_description: string;
  links: { self: string };
  urls: { regular: string; small: string };
}

export const HowItWorks = () => {
  const { data } = useGetImages();

  return (
    <div className="container flex flex-col items-center gap-10">
      <h2 className="text-primary-dark mt-[180px] text-center font-roboto-condensed text-6xl font-bold italic">
        How it works
      </h2>

      <div>
        <section className="mb-6 flex w-[302px] gap-6">
          {data?.map((item: ImagesProps) => (
            <img
              className="h-[440px] rounded-3xl"
              key={item.id}
              src={item.urls.small}
              alt={item.alt_description}
            />
          ))}
        </section>
        <section className="flex gap-6">
          {HOW_IT_WORKS_IMAGES.map((card) => (
            <article key={card.id} className="w-[302px]">
              <h3 className="font-roboto-condensed text-2xl font-bold">
                {card.title}
              </h3>
              <p className="leading-5">{card.description}</p>
            </article>
          ))}
        </section>
      </div>

      <IconButton icon="/icons/arrow.svg">See more</IconButton>
    </div>
  );
};
