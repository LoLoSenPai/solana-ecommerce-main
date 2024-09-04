"use client";

export const Banner = () => {
  return (
    <div className="relative flex justify-between items-center w-full bg-gradient-to-r from-black to-blue-900 rounded-xl p-8 my-8 h-64">
      <div className="text-white font-bold text-5xl">
        <h2>2024 COLLECTION</h2>
        <p className="text-xl mt-2">RORO</p>
      </div>
      <div className="relative">
        <img
          src="/banner-2024-col.png"
          alt="2024 Collection Banner"
          className="object-contain h-72"
          style={{ position: 'relative', bottom: '-40px', transform: 'translateY(-20%)' }}
        />
      </div>
    </div>
  );
};
