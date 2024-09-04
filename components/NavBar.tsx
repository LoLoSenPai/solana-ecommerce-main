"use client";
import React from "react";
import Link from "next/link";
import { SiSolana } from "react-icons/si";
import "@solana/wallet-adapter-react-ui/styles.css";
import { motion } from "framer-motion";
import { CustomWalletButton } from "./CustomWalletButton";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useShoppingCart } from "../context/shoppingCart";

export const NavBar: React.FC = () => {
  const { cartQuantity, isLoading } = useShoppingCart();

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 p-10 h-24 z-50"
      >
        <div className="mx-auto flex justify-between items-center h-full">
          <Link href="/">
            <motion.button
              className="flex items-center text-black font-bold text-[32px]"
            >
              <img
                src="/logo.jpeg"
                alt="Logo"
                className="h-120 w-20 rounded-full"
              />
              <p className="ml-4 text-5xl">RORO</p>
            </motion.button>
          </Link>

          <div className="flex flex-row gap-4">
            <motion.div
            >
              <CustomWalletButton />
            </motion.div>
            <Link href={"/checkout"}>
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.8 }}
                className="flex items-center justify-center bg-gray-200 h-[40px] md:h-[60px] px-4 rounded-xl text-black border-2 border-white hover:border-2 hover:border-sol-green font-medium"
              >
                <MdOutlineShoppingBag className="text-[24px] items-center" />
                {!isLoading && cartQuantity > 0 && (
                  <span className="ml-2 text-[22px] items-center mt-0.5">
                    {cartQuantity}
                  </span>
                )}
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
