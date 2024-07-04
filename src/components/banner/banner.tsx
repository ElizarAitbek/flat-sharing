import { LeftSide } from "./left-side";
import { RightSide } from "./right-side";

export const Banner = () => {
  return (
    <div className="container flex flex-wrap gap-6">
      <LeftSide />
      <RightSide />
    </div>
  );
};
