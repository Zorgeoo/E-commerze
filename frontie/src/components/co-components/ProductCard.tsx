"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface MyComponentProps {
  img: string;
  title: string;
  price: number;
  customHeight: string;
  id: string;
}
export const ProductCard: React.FC<MyComponentProps> = ({
  img,
  title,
  price,
  customHeight,
  id,
}) => {
  const [heartFill, setHeartFill] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden flex flex-col gap-2 h-fit">
      <div
        className={`relative rounded-xl w-full overflow-hidden`}
        style={{ height: customHeight }}
      >
        <Link href={`${id}`}>
          <Image
            className="object-cover rounded-xl hover:scale-150 duration-1000"
            src={img}
            fill
            quality={100}
            alt="henlo"
          />
        </Link>
        <FaHeart
          onClick={() => {
            setHeartFill(!heartFill);
          }}
          className={`absolute right-4 cursor-pointer top-4 w-6 h-6 ${
            heartFill ? "text-red-700" : ""
          }`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div>{title}</div>
        <div className="font-bold">{price.toLocaleString()}₮</div>
      </div>
    </div>
  );
};
