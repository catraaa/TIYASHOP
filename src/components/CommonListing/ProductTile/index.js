"use client";

import { useRouter } from "next/navigation";

export default function ProductTile({ item }) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/product/${item._id}`)}>
      <div className="overflow-hideen aspect-w-1 aspect-h-1 h-52">
        <img src={item.imageUrl} alt="Product image" className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" />
      </div>
      {item.onSale === "yes" ? (
        <div className="absolute top-0 m-2 rounded-full bg-red-700">
          <p className="rounded-full  p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Diskon</p>
        </div>
      ) : null}
      <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
        <div className="mb-2 flex">
          <h1 className={`text-[14px] font-bold mr-2 ${item.onSale === "yes" ? "line-through" : ""}`}>Rp{item && item.price.toLocaleString("id-ID")}</h1>
          {item.onSale === "yes" ? <p className="mr-1.5 text-[14px] font-semibold text-red-700">{`Rp ${(item.price - item.price * (item.priceDrop / 100)).toLocaleString("id-ID", { maximumFractionDigits: 0 })}`}
</p> : null}
          {item.onSale === "yes" ? <p className="mr-1 text-[10px] font-extrabold">{`-(${item.priceDrop}%)off`}</p> : null}
        </div>
        <h3 className="md-2 text-gray-400 text-sm">{item.name}</h3>
      </div>
    </div>
  );
}
