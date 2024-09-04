import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

interface FailureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FailureModal: React.FC<FailureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-75 flex justify-center items-center z-50">
      <div className=" p-6 rounded-lg max-w-lg w-full relative border-2 border-white">
        <motion.button
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.8 }}
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-sol-green"
        >
          <FaTimes size={20} />
        </motion.button>
        <h2 className="text-2xl font-bold mb-4 text-black">
          Transaction Failed
        </h2>
        <p className="text-black">
          Your transaction could not be completed. Please try again.
        </p>
      </div>
    </div>
  );
};

export default FailureModal;
