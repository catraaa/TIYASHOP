export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listing",
    label: "Semua produk",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Pria",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Wanita",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "Anak",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Kelola Semua Produk",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Tambahkan Produk Baru",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Masukkan nama",
    label: "Nama",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Masukkan email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Masukkan kata sandi",
    label: "Kata Sandi",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Pengguna",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "Pembeli",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Masukkan email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Masukkan kata sandi",
    label: "Kata Sandi",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Masukkan nama",
    label: "Nama",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Masukkan harga",
    label: "Harga",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Masukkan deskripsi produk",
    label: "Deskripsi",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Kategori",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Pria",
      },
      {
        id: "women",
        label: "Wanita",
      },
      {
        id: "kids",
        label: "Anak",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Masukkan informasi pengiriman",
    label: "Informasi Pengiriman",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "string",
    placeholder: "",
    label: "Diskon",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Ya",
      },
      {
        id: "no",
        label: "Tidak",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Masukkan berapa persen",
    label: "Penurunan Harga (Persen)",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCq3b-3nwA1bdyjwQ1nuC5VRe8b_UIUYZE",
  authDomain: "tiyas-shop.firebaseapp.com",
  projectId: "tiyas-shop",
  storageBucket: "tiyas-shop.appspot.com",
  messagingSenderId: "590890072582",
  appId: "1:590890072582:web:5f8ef82c5fee005bcda187",
  measurementId: "G-ZZKLCFST8Q",
};

export const firebaseStroageURL = "gs://tiyas-shop.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Masukkan nama lengkap",
    label: "Nama Lengkap",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Masukkan alamat",
    label: "Alamat",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Masukkan kota",
    label: "Kota",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Masukkan negara",
    label: "Negara",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Masukkan kode pos",
    label: "Kode Pos",
    componentType: "input",
  },
];
