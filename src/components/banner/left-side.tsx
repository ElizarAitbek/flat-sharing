import { IconButton } from "../ui/icon-button";

export const LeftSide = () => {
  return (
    <div className="w-[668px] rounded-3xl bg-primary-light text-primary-dark">
      <section className="flex flex-col gap-5 px-8 py-44">
        <h1 className="font-roboto-condensed text-7xl font-bold italic">
          Travel 2–3 times cheaper
        </h1>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <aside>
          <IconButton icon="/icons/arrow.svg">Join the community</IconButton>
          <aside className="mt-2 w-[284px] text-center text-sm text-[#898787]">
            takes only 5 minutes
          </aside>
        </aside>
      </section>
    </div>
  );
};
