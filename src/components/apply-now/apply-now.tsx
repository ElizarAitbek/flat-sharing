import { IconButton } from "../ui/icon-button";

export const ApplyNow = () => {
  return (
    <div className="container my-[180px] flex flex-col items-center rounded-3xl bg-primary-light py-[100px] text-center">
      <h1 className="mb-6 font-roboto-condensed text-6xl font-bold italic">
        TRAVEL <br /> WITH FLATSHARING
      </h1>

      <p className="mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>

      <IconButton icon="/icons/arrow.svg">Apply now</IconButton>
    </div>
  );
};
