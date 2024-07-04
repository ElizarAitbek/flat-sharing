export const RightSide = () => {
  return (
    <div className="w-[668px] rounded-[1.625rem] bg-[url('/images/right-side-bg.png')] bg-cover bg-center bg-no-repeat text-primary-dark">
      <section className="flex h-full flex-col justify-between p-5">
        <aside className="flex w-[182px] flex-col gap-1 rounded-3xl bg-white bg-opacity-85 px-5 py-4">
          <p className="text-lg font-bold">Centeral London</p>
          <p className="line-through">130$+/night Airbnb</p>
          <p className="line-through">60$/night</p>
        </aside>
        <aside className="flex h-[110px] w-full items-center gap-12 rounded-3xl bg-[#282828] bg-opacity-80">
          <section className="flex h-[110px] w-[400px] items-center gap-3.5 rounded-3xl bg-white px-5">
            <img
              className="h-[70px] w-[70px]"
              src="/images/profile-picture.png"
              alt="profile picture"
            />
            <article>
              <p className="font-bold">Ivan</p>
              <span className="text-sm">
                Founder Ozma.io, AI & Data consultant
              </span>
            </article>
          </section>
          <p className="ml-0 font-bold text-white">Live at Ivan&apos;s flat</p>
        </aside>
      </section>
    </div>
  );
};
