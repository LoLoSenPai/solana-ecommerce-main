export const Banner = () => {
  return (
    <div className="relative flex flex-col sm:flex-row justify-between items-center w-full bg-gradient-to-r from-black to-blue-900 rounded-xl my-8 sm:h-40 lg:h-60">
      <div className="text-white font-bold sm:ml-8">
        <h2 className='text-2xl lg:text-3xl'>2024 COLLECTION</h2>
        <p className="text-xl mt-2">RORO</p>
      </div>
      <div className="">
        <img
          src="/banner-2024-col.png"
          alt="2024 Collection Banner"
          className="sm:absolute bottom-0.5 right-0 min-w-auto h-1/2 sm:h-[220px] md:h-[281px]"
        />
      </div>
    </div>
  );
};
