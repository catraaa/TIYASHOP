"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

  return (
    <main className="bg-white relative dark:bg-white flex min-h-screen flex-col items-center justify-between p-24">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-blue-900 tracking-tight leading-none md:text-5xl xl:text-6xl">Koleksi Busana Terbaik</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">Temukan Ragam Gaya yang Tidak Terbatas untuk Setiap Kesempatan dan Sejalan dengan Tren Terkini.</p>

            <button type="button" onClick={() => router.push("/product/listing/all-products")} className="mt-1.5 inline-block rounded-full bg-blue-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Jelajahi Koleksi Toko
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://img.freepik.com/free-photo/happy-two-women-with-colorful-shopping-bags-blue-wall_231208-11825.jpg?w=740&t=st=1699019491~exp=1699020091~hmac=1a3054f9468b8f975d74f30d5b62681cba7d2500e6b1b28853df013c4b79c5b3" alt="Explore Shop Collection" />
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div>
                  <h2 className="text-xl font-bold text-blue-900 sm:text-3xl">Koleksi Penjualan Sepanjang Musim</h2>
                </div>
                <button onClick={() => router.push("/product/listing/all-products")} className="mt-5 inline-block rounded-full bg-blue-900 px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Mulai Belanja
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {products && products.length
                  ? products
                      .filter((item) => item.onSale === "yes")
                      .splice(0, 2)
                      .map((productItem) => (
                        <li onClick={() => router.push(`/product/${productItem._id}`)} className="cursor-pointer" key={productItem._id}>
                          <div>
                            <img src={productItem.imageUrl} alt="Sale Product Item" className="object-cover w-full rounded aspect-square" />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-gray-900">{productItem.name}</h3>
                            <p className="mt-1 text-sm text-gray-800">
                              Rp{productItem.price.toLocaleString("id-ID")} <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                            </p>
                          </div>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-blue-900 sm:text-3xl">BELANJA BERDASARKAN KATEGORI</h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img src="https://img.freepik.com/premium-photo/girl-black-dress-with-paper-bags-go-shopping-discounts-blue-background_685173-341.jpg?w=360" className="object-cover w-full aspect-square" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">ANAK</h3>
                  <button onClick={() => router.push("/product/listing/kids")} className="mt-1.5 inline-block bg-blue-900 rounded-full px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Belanja Sekarang
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733329.jpg?w=740&t=st=1699019964~exp=1699020564~hmac=031c0a5848c35adddab69eea8c976dd6e9f99381e63dbc9d7f29c70d5f5ddd87" className="object-cover w-full aspect-square" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">WANITA</h3>
                  <button onClick={() => router.push("/product/listing/women")} className="mt-1.5 inline-block bg-blue-900 rounded-full px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Belanja Sekarang
                  </button>
                </div>
              </div>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img src="https://img.freepik.com/free-photo/concept-shopping-holidays-lifestyle-satisfied-smiling-man-holding-paper-bag-showing-thumb-up-recommending-store-standing-blue-background_1258-65695.jpg?w=740&t=st=1699020151~exp=1699020751~hmac=d73479d470270ddb12f158d7f0d3b5ec9131178e9c58e3f070338c085cc5506c" className="object-cover w-full aspect-square" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">PRIA</h3>
                  <button onClick={() => router.push("/product/listing/men")} className="mt-1.5 inline-block bg-blue-900 rounded-full px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Belanja Sekarang
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
