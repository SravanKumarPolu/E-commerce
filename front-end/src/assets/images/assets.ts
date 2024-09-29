
import p_img1 from './p_img1.png'
import p_img2 from './p_img2_1.png'

import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
import p_img7 from './p_img7.png'
import p_img8 from './p_img8.png'
import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'


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
      description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
      price: 300,
      image: [p_img1],
      category: "Women",
      subCategory: "Topwear",
      color: ["Black", "White", "Pink"],
      date: 1716634345448,
      bestseller: true
  },
  {
      _id: "aaaab",
      name: "Buy MacBook Air",
      description: "16-core Neural Engine13.6-inch Liquid Retina display with True Tone²1080p FaceTime HD cameraMagSafe 3 charging portTwo Thunderbolt / USB 4 portsSupport for up to two external displays (with laptop lid closed)",
      price: 800,
      image: [p_img2,],
      category: "Men",
      subCategory: "Topwear",
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
      category: "Kids",
      subCategory: "Topwear",
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
      category: "Men",
      subCategory: "Topwear",
      color: ["Black", "White", "Pink"],
      date: 1716621345448,
      bestseller: true
  },
  {
    _id: "aaaae",
    name: "iPhone 15Pro",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 450,
    image: [p_img5],
    category: "Men",
    subCategory: "Topwear",
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
  category: "Kids",
  subCategory: "Topwear",
  color: ["Black", "White", "Pink"],
  date: 1716623423448,
  bestseller: true
},
{
  _id: "aaaag",
  name: "Apple Macbook Retina Display Laptop ",
  description: "Apple Macbook Retina Display Laptop (12 Inch Full-HD LED Backlit IPS Display, Intel Core M-5Y31 1.1GHz up to 2.4GHz, 8GB RAM, 256GB SSD, Wi-Fi, Bluetooth 4.0) Gold (Renewed)",
  price: 190,
  image: [p_img7],
  category: "Men",
  subCategory: "Bottomwear",
  color: ["Black", "White", "Pink"],
  date: 1716621542448,
  bestseller: false
},
{
  _id: "aaaah",
  name: "iPhone 15",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 140,
  image: [p_img8],
  category: "Men",
  subCategory: "Topwear",
  color: ["Black", "White", "Pink"],
  date: 1716622345448,
  bestseller: false
},
{
  _id: "aaaai",
  name: "iPhone Xs",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 100,
  image: [p_img9],
  category: "Kids",
  subCategory: "Topwear",
  color: ["Black", "White", "Pink"],
  date: 1716621235448,
  bestseller: false
},
{
  _id: "aaaaj",
  name: "iPhone 8",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 110,
  image: [p_img10],
  category: "Men",
  subCategory: "Bottomwear",
  color: ["Black", "White", "Pink"],
  date: 1716622235448,
  bestseller: false
},
{
  _id: "aaaak",
  name: "iPhone 11",
  description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
  price: 120,
  image: [p_img11],
  category: "Men",
  subCategory: "Topwear",
  color: ["Black", "White", "Pink"],
  date: 1716623345448,
  bestseller: false
},
]