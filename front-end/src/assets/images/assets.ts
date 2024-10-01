
import p_img1 from './p_img1.png'
import p_img2 from './p_img2.png'

import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'
import p_img20 from './p_img20.png'
import p_img21 from './p_img21.png'
import p_img22 from './p_img22.png'
import p_img23 from './p_img23.png'


// export const assets = {
//   logo,
//   hero_img,
//   cart_icon,
//   dropdown_icon,
//   exchange_icon,
//   profile_icon,
//   quality_icon,
//   search_icon,
//   star_dull_icon,
//   star_icon,
//   bin_icon,
//   support_img,
//   menu_icon,
//   about_img,
//   contact_img,
//   razorpay_logo,
//   stripe_logo,
//   cross_icon
// }

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  color: string[];
  date: number;
  bestseller: boolean;
}
export const products: Product[] = [
  {
      _id: "aaaaa",
      name: "iPhone XR",
      description: "iPhone XR features the most advanced LCD in a smartphone - a 6.1-inch Liquid Retina display with industry-leading color accuracy. Available in six stunning colors. Advanced Face ID lets you securely unlock your iPhone, log in to apps, and pay with just a glance",
      price: 300,
      image: [p_img1],
      category: "Phone",
      subCategory: "Apple",
      color: ["Black", "White", "Pink"],
      date: 1716634345448,
      bestseller: true
  },
  {
      _id: "aaaab",
      name: " MacBook Air",
      description: "16-core Neural Engine13.6-inch Liquid Retina display with True Tone²1080p FaceTime HD cameraMagSafe 3 charging portTwo Thunderbolt / USB 4 portsSupport for up to two external displays (with laptop lid closed)",
      price: 800,
      image: [p_img2],
      category: "Laptop",
      subCategory: "Apple",
      color: ["Black", "White", "Pink"],
      date: 1716621345448,
      bestseller: true
  },
  {
      _id: "aaaac",
      name: "iPad Pro 12.9",
      description: "TineeOwl Mocha iPad Pro 12.9 case 2020 & 2018 (4th & 3rd Generation) Ultra-Slim Clear Case with Pencil Holder + Tri-fold Stand Cover, Absorbs Shock, Lightweight (Pink)",
      price: 520,
      image: [p_img3],
      category: "iPad",
      subCategory: "Apple",
      color: ["Black", "White", "Pink"],
      date: 1716234545448,
      bestseller: true
  },
  {
      _id: "aaaad",
      name: "iPad Pro 11",
      description: "iPad Pro 11 (2020, Gen 2) Skins The NEW iPad Pro 11 (2020, Gen 2) has taken tablets to a whole new level, packing more power than most PC laptops ",
      price: 610,
      image: [p_img4],
      category: "ipad",
      subCategory: "Apple",
      color: ["Black", "White", "Pink"],
      date: 1716621345448,
      bestseller: true
  },
  {
    _id: "aaaae",
    name: "iPhone 15Pro",
    description: "iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever. Color: White",
    price: 450,
    image: [p_img5],
    category: "phone",
    subCategory: "Apple",
    color: ["Black", "White", "Pink"],
    date: 1716621345448,
    bestseller: true
},
{
  _id: "aaaaf",
  name: "Apple Airpods Pro",
  description: "Opened Apple AirPods Pro Case With White Logo PNG Image with transparent background for FREE & Unlimited Download, in HD quality! With one click use it easily",
  price: 140,
  image: [p_img6],
  category: "Earphone",
  subCategory: "Apple",
  color: ["Black", "White", "Pink"],
  date: 1716623423448,
  bestseller: true
},
{
  _id: "aaaag",
  name: "Apple Macbook ",
  description: "Apple Macbook Retina Display Laptop (12 Inch Full-HD LED Backlit IPS Display, Intel Core M-5Y31 1.1GHz up to 2.4GHz, 8GB RAM, 256GB SSD, Wi-Fi, Bluetooth 4.0) Gold (Renewed)",
  price: 190,
  image: [p_img7],
  category: "Laptop",
  subCategory: "Apple",
  color: ["Black", "White", "Pink"],
  date: 1716621542448,
  bestseller: false
},
{
  _id: "aaaah",
  name: "iPhone 15",
  description: "iPhone 15. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever",
  price: 140,
  image: [p_img8],
  category: "Phone",
  subCategory: "Apple",
  color: ["Black", "White", "Pink"],
  date: 1716622345448,
  bestseller: false
},
{
  _id: "aaaai",
  name: "iPhone XS",
  description: "Get the best deals on phones from Apple, Samsung, LG & more when you shop eBay. Browse top brands - Affordable prices",
  price: 200,
  image: [p_img9],
  category: "Phone",
  subCategory: "Apple",
  color: ["Black", "White", "Pink"],
  date: 1716621235448,
  bestseller: false
},
{
  _id: "aaaaj",
  name: "iPhone 8",
  description: "most advanced LCD in a smartphone - a 6.1-inch Liquid Retina display with industry-leading color accuracy",
  price: 110,
  image: [p_img10],
  category: "Phone",
  subCategory: "Apple",
  color: ["Black", "White", "Pink"],
  date: 1716622235448,
  bestseller: false
},
{
  _id: "aaaak",
  name: "iPhone 11",
  description: "most advanced LCD in a smartphone - a 6.1-inch Liquid Retina display with industry-leading color accuracy.",
  price: 320,
  image: [p_img11],
  category: "Phone",
  subCategory: "Apple",
  color: ["Black", "White", "Pink"],
  date: 1716623345448,
  bestseller: false
},
{
  _id: "aaaal",
  name: "iPhone 13",
  description: "Most advanced LCD in a smartphone - a 6.1-inch Liquid Retina display with industry-leading color accuracy",
  price: 150,
  image: [p_img12],
  category: "Phone",
  subCategory: "Topwear",
  color: ["Black", "White", "Pink"],
  date: 1716624445448,
  bestseller: false
},
{
  _id: "aaaam",
  name: "AirPods 3",
  description: "Check out this listing I just found on Poshmark: AirPods 3rd Gen.",
  price: 130,
  image: [p_img13],
  category: "Earphone",
  subCategory: "Apple",
  color: ["Black", "White", "Pink"],
  date: 1716625545448,
  bestseller: false
},
{
  _id: "aaaan",
  name: "AirPods Pro",
  description: "Check out this listing I just found on Poshmark: AirPods 3rd",
  price: 160,
  image: [p_img14],
  category: "Earphone",
  subCategory: "Apple",
  color: ["Black", "White", "Pink"],
  date: 1716626645448,
  bestseller: false
},
{
  _id: "aaaao",
  name: "Xiaomi RedmiBook Pro",
  description: "Xiaomi RedmiBook Pro 15 2021 Laptop 15.6 inch 3.2K High-Resolution 100%sRGB 90Hz Refresh Rate AMD Ryzen R5",
  price: 140,
  image: [p_img15],
  category: "Laptop",
  subCategory: "Xiaomi",
  color: ["Black", "White", "Pink"],
  date: 1716627745448,
  bestseller: false
},
{
  _id: "aaaap",
  name: "Xiaomi Mi Laptop Pro i7",
  description: "Xiaomi Mi Laptop Pro (i7-10510U) - $1,239.99 (24% OFF) 📉 Laptop / 15.6-inch IPS / Win 10 / Intel Core i7-10510U Quad Core / NVIDIA GeForce MX350 / 2GB GDDR5 16GB ",
  price: 170,
  image: [p_img16],
  category: "Laptop",
  subCategory: "Xiaomi",
  color: ["Black", "White", "Pink"],
  date: 1716628845448,
  bestseller: false
},
{
  _id: "aaaaq",
  name: "Samsung Galaxy Book 3",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 450,
  image: [p_img17],
  category: "Laptop",
  subCategory: "Samsung",
  color: ["Black", "White", "Pink"],
  date: 1716629945448,
  bestseller: false
},
{
  _id: "aaaar",
  name: "SAMSUNG 14 ",
  description: "SAMSUNG 14  Galaxy Book4 Pro Business Laptop, Wi-Fi PC Computer, Windows 11 PRO, Intel Core 7 Ultra",
  price: 580,
  image: [p_img18],
  category: "Laptop",
  subCategory: "Samsung",
  color: ["Black", "White", "Pink"],
  date: 1716631045448,
  bestseller: false
},
{
  _id: "aaaas",
  name: "SAMSUNG Galaxy S24",
  description: "SAMSUNG Galaxy S24 Ultra Cell Phone, 256GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras, Long Battery Life, S Pen, US Version, 2024, Titanium Black",
  price: 260,
  image: [p_img19],
  category: "Phone",
  subCategory: "Samsung",
  color: ["Black", "White", "Pink"],
  date: 1716632145448,
  bestseller: false
},
{
  _id: "aaaat",
  name: "Samsung Galaxy S24",
  description: "PSD shows of Samsung Galaxy S24 Ultra Mockup. The PSD file is easy and fully editable with smart objects. The PSD file measures 4500 x 3000 px at 72 dpi",
  price: 190,
  image: [p_img20],
  category: "Phone",
  subCategory: "Samsung",
  color: ["Black", "White", "Pink"],
  date: 1716633245448,
  bestseller: false
},
{
  _id: "aaaau",
  name: "Samsung Galaxy 3",
  description: "Samsung Galaxy Buds 3 AI True Wireless Earbuds The Samsung Galaxy Buds 3 AI True Wireless Bluetooth Earbuds feature high-resolution audio",
  price: 100,
  image: [p_img21],
  category: "Earphone",
  subCategory: "Samsung",
  color: ["Black", "White", "Pink"],
  date: 1716634345448,
  bestseller: false
},
{
  _id: "aaaav",
  name: "Samsung Galaxy 4",
  description: "Samsung Galaxy Buds Live True Wireless Earbud Headphones with Active Noise Cancellation- Black",
  price: 110,
  image: [p_img22],
  category: "Earphone",
  subCategory: "Samsung",
  color: ["Black", "White", "Pink"],
  date: 1716635445448,
  bestseller: false
},
{
  _id: "aaaaw",
  name: "Samsung Galaxy 2",
  description: "Samsung Galaxy Buds Pro 2 Wireless Earbuds TWS Noice Cancelling Bluetooth IPX7 Water Resistant - International Model - Manufacturer Refurbished",
  price: 90,
  image: [p_img23],
  category: "Earphone",
  subCategory: "Samsung",
  color: ["Black", "White", "Pink"],
  date: 1716636545448,
  bestseller: false
},
]