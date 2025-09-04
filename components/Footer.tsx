import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="mx-auto container mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-xl">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="MyEstore" width={36} height={36} />
          <p className="hidden md:block text-2xl art-text">NovaTrend</p>
        </Link>
        <p className="text-sm text-gray-400">
          &copy;{new Date().getFullYear()} IssacZhou.
        </p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
    </div>
  );
};
