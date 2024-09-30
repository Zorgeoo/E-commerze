"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProductContext } from "@/components/utils/context";
import axios from "axios";

export const Cart = () => {
  const { user, getMe } = useProductContext();
  const [carts, setCarts] = useState();
  const getCarts = async (userId: string) => {
    try {
      const res = await axios.get(`http://localhost:3004/cart/?${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },

        // params: { userId },
      });
      setCarts(res.data.carts);
      console.log(res.data.carts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user?.id) {
      getCarts(user.id);
      console.log("ajillav");
    }
    getMe();
  }, []);
  return (
    <div>
      <div className="w-[1280px] m-auto pt-7 pb-[137px]">
        <div className="flex items-center w-fit m-auto">
          <div className="py-1 px-3 text-white bg-black border border-black rounded-full">
            1
          </div>
          <div className="w-20 h-[1px] bg-black"></div>
          <div className="py-1 px-3 border border-black rounded-full">2</div>
          <div className="w-20 h-[1px] bg-black"></div>
          <div className="py-1 px-3 border border-black rounded-full">3</div>
        </div>
        <div className="p-8 bg-gray-100 rounded-xl">
          <div className="flex gap-1 pb-6">
            <div>1. Сагс </div>
            <div>(4)</div>
          </div>
          <div className="flex flex-col gap-6">
            {/* {data.map((item, index) => {
              return (
                <div>
                  <DeliveryCard key={index} item={item} />
                </div>
              );
            })} */}
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex justify-between pt-6">
              <div>Үнийн дүн:</div>
              <div className="font-bold text-[20px]">total price</div>
            </div>
            <Link href={`/buysteps/address`} className="self-end">
              <button className="px-9 py-2 rounded-full text-white bg-[#2563EB]">
                Худалдан авах
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
