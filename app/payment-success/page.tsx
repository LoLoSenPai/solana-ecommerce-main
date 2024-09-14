import Image from 'next/image';
import Link from 'next/link';
import { MdDone } from "react-icons/md";

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col justify-end items-center text-center">
      <div className='mt-24 mb-10'>
        <div className="flex justify-center mb-4">
          <MdDone className="text-6xl text-white bg-green-400 rounded-full p-1" />
        </div>
        <h1 className="text-4xl font-bold mb-2">We received your order successfully!</h1>
        <p className="text-2xl mb-4">An email has been sent to you</p>
        <Link href="/">
          <button className="text-lg text-white bg-black rounded-full p-2">Get another piece</button>
        </Link>
      </div>
      <div className="mb-1">
        <Image
          src="/success-order.png"
          alt="Success Order"
          width={954}
          height={594}
        />
      </div>
    </div>
  );
}
