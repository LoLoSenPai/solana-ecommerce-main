"use client";
import { useShoppingCart } from "../context/shoppingCart";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SiSolana } from "react-icons/si";
import { useEffect, useState } from "react";
import { assets } from "@/constants/images";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { getSolPrice } from "../utils/solPrice";
import { ImEnlarge } from "react-icons/im";

export default function ShoppingItemDetail() {
  const [solPrice, setSolPrice] = useState<number | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPrice = async () => {
      const price = await getSolPrice();
      setSolPrice(price);
    };
    fetchPrice();
  }, []);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const { id } = useParams();
  const item = Number(id);
  const matchingAsset = assets.find((asset) => asset.id === item);

  if (!matchingAsset) return <div>Item not found!</div>;

  const quantity = getItemQuantity(matchingAsset.id);

  const solEquivalent =
    solPrice !== null
      ? (matchingAsset.price / solPrice).toFixed(2)
      : "Loading...";

  const handleEnlargeImage = (image: string) => {
    setEnlargedImage(image);
  };

  const handleCloseEnlarge = () => {
    setEnlargedImage(null);
  };

  return (
    <>
      <div className="flex max-sm:flex-col max-sm:gap-8 justify-center mt-20 py-10">
        <motion.div className="flex justify-center items-center sm:w-1/2">
          <div className="relative">
            <Image
              width={500}
              height={500}
              src={matchingAsset.image}
              alt={matchingAsset.name}
              className="relative rounded-xl"
            />
            <motion.button
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleEnlargeImage(matchingAsset.image)}
              className="absolute bottom-10 right-10 text-black"
            >
              <ImEnlarge size={24} />
            </motion.button>
          </div>
        </motion.div>

        <div className="flex justify-center flex-col ml-12 space-y-5 text-black sm:w-1/2 pr-10">
          <motion.p className="text-[36px] font-semibold">
            {matchingAsset.name}
          </motion.p>

          <motion.p className="flex text-[24px] font-medium items-center">
            <span className="mr-1">
              <SiSolana />
            </span>
            {solEquivalent} SOL{" "}
            <span className="ml-1 text-gray-400">(${matchingAsset.price})</span>
          </motion.p>
          <motion.hr className="w-full border-t-2 border-sol-green my-2" />

          <motion.p className="text-[18px] font-medium flex items-center">
            {matchingAsset.description}
          </motion.p>

          <motion.div className="flex gap-2 pt-4">
            {quantity === 0 ? (
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.8 }}
                className="bg-purple-600 text-black font-medium text-[18px] w-[200px] border-2 border-white hover:border-2 hover:border-sol-green p-3 rounded-xl flex justify-center items-center"
                onClick={() => increaseCartQuantity(matchingAsset.id)}
              >
                <MdOutlineShoppingBag className="mr-4 w-auto h-[24px]" /> Add To
                Cart
              </motion.button>
            ) : (
              <div className="flex items-center flex-col gap-2 bg-gray-400 text-black rounded-xl">
                <div className="flex justify-center gap-2 border-2 border-white hover:border-2 hover:border-sol-green rounded-xl py-2">
                  <motion.button
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.8 }}
                    className="bg-gray-400 text-black px-4 rounded-xl"
                    onClick={() => decreaseCartQuantity(matchingAsset.id)}
                  >
                    <FaMinus />
                  </motion.button>
                  <div className="bg-gray-400 text-black font-medium py-1 text-[18px] w-[100px] flex justify-center items-center rounded-xl ">
                    <span>{quantity} in cart</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.8 }}
                    className="bg-gray-400 text-black px-4 rounded-xl"
                    onClick={() => increaseCartQuantity(matchingAsset.id)}
                  >
                    <FaPlus />
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      {/* <Footer /> */}

      {enlargedImage && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-75 z-50">
          <div className="relative">
            <Image
              src={enlargedImage}
              width={800}
              height={800}
              alt="Enlarged Product"
              className="object-cover rounded-xl text-black"
            />
            <motion.button
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.8 }}
              onClick={handleCloseEnlarge}
              className="absolute top-2 right-2 text-black"
            >
              <FaTimes size={24} />
            </motion.button>
          </div>
        </div>
      )}
    </>
  );
}
