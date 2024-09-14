import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col justify-end items-center text-center">
            <div className='mt-24'>
                <h1 className="text-9xl font-bold mb-2">404</h1>
                <p className="text-2xl mb-4">Something went wrong...</p>
                <Link href="/">
                    <p className=" text-lg text-black underline">Return Home</p>
                </Link>
            </div>
            <div className="mb-1">
                <Image
                    src="/404.png"
                    alt="404 Error"
                    width={1114}
                    height={552}
                />
            </div>
        </div>
    );
}
