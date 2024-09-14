"use client";

export const Hero = () => {
  const handleScroll = () => {
    const itemsSection = document.getElementById('items-section');
    if (itemsSection) {
      const topOffset = itemsSection.getBoundingClientRect().top + window.scrollY; // Calcul de la position absolue
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Desktop */}
      <div className="relative h-screen w-full flex justify-center items-center overflow-hidden max-md:hidden">
        <img
          src="/dripp.png"
          alt="Hero Image"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col justify-center items-center glassmorphism rounded-lg">
          <h1 className="text-white text-9xl font-bold">RORO</h1>
          <p className="text-white text-6xl font-bold">merch</p>
        </div>
        <button
          id="scroll-button"
          className="absolute bottom-16 bg-white text-black font-bold py-2 px-4 rounded-full z-20 flex items-center"
          onClick={handleScroll}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          Get dripped
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden mt-28 relative">
        <div className="flex flex-col justify-center items-center z-10">
          <h1 className="text-white text-5xl font-bold px-10 text-center">RORO</h1>
          <p className="text-black text-3xl font-bold px-10 text-center">merch</p>
        </div>
        <img
          src="/mobile/dripp-mobile.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
        <button
          id="scroll-button"
          className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold py-2 px-4 rounded-full z-20"
          onClick={handleScroll}
        >
          Get dripped
        </button>
      </div>
    </>
  );
};
