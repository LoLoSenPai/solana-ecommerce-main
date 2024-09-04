"use client";

export const Hero = () => {
  return (
    <>
      {/* Desktop */}
      <div className="relative h-screen w-full flex justify-center items-center overflow-hidden max-md:hidden">
        <img
          src="/dripp.png"
          alt="Hero Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold">RORO MERCH</h1>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden mt-28">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold px-10 text-center">RORO</h1>
          <p className="text-black text-3xl font-bold px-10 text-center">merch</p>
        </div>
        <img
          src="/mobile/dripp-mobile.png"
          alt="Hero Image"
          className="flex justify-center items-center w-full h-full"
        />
      </div>
    </>
  );
};
