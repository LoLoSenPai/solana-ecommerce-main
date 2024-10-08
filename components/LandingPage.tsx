"use client";
import { ShoppingItem } from "./ShoppingItem";
import { assets } from "../constants/images";
import Link from "next/link";
import "../css/hologramStyles.css";

export const LandingPage = () => {
  return (
    <div className="py-2 text-black">
      <h1 className="mb-8 text-[52px] font-semibold">Store</h1>
      <div className="flex justify-between mb-5 text-[20px]">
        <div>
          <h3 className="limitedDesignText font-light text-[18px]">
            Limited Designs
          </h3>
        </div>
        <div>
          <h3 className="font-light text-[18px]">
            Buy with Solana, USDC or Credit Card
          </h3>
        </div>
      </div>
      <div id="items-section" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-10 select-none mb-10">
        {assets.map((asset, index) => {
          return (
            <Link href={`/item-detail/${asset.id}`} key={asset.image}>
              <div className="p-4">
                <ShoppingItem {...asset} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
