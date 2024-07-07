import { LeftSide } from "./left-side";
import { RightSide } from "./right-side";

export const Banner = () => {
  return (
    <div className="container flex justify-between gap-6">
      <LeftSide />
      <RightSide />
    </div>
  );
};
