import { LOGOS } from "../../utils/constants";

export const CommunityList = () => {
  return (
    <div className="mt-[175px] flex flex-col gap-10">
      <h2 className="container font-roboto-condensed text-6xl font-bold italic">
        COMMUNITY OF
      </h2>

      <div className="flex h-[200px] justify-center gap-20 bg-primary-light">
        {LOGOS.map((logo) => (
          <img key={logo.id} src={logo.url} alt={logo.name} />
        ))}
      </div>
    </div>
  );
};
