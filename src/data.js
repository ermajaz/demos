import seat from "./img/parts/seat.webp";
import cyclecover from "./img/parts/cycle-cover.webp";
import freewheel from "./img/parts/freewheel.webp";
import gearchain from "./img/parts/gearchain.webp";
import handle from "./img/parts/handle.webp";
import mudguard from "./img/parts/mudguard.webp";
import speedometer from "./img/parts/speedometer.webp";
import wheeldisk from "./img/parts/wheeldisk.webp";
import brakeset from "../src/icons/parts/Brakeset.png";
import cockpit from "../src/icons/parts/Cockpit.png";
import drivetrain from "../src/icons/parts/Drivetrain.png";
import frameset from "../src/icons/parts/Frameset.png";
import suspension from "../src/icons/parts/Suspension.png";
import wheelset from "../src/icons/parts/Wheelset.png";
import lock from "../src/icons/accessories/Lock & safety.png"
import lights from "../src/icons/accessories/Lights.png"
import racks from "../src/icons/accessories/Racks.png"
import storage from "../src/icons/accessories/Storage.png"
import electronics from "../src/icons/accessories/electronics.png"
import others from "../src/icons/accessories/others.png"
import cyclelogo from "../src/icons/clothing/cyclelogo.png"
import cyclistlogo from "../src/icons/clothing/cyclistlogo.png"

export const parts = [
  {
    id: 1,
    img: frameset,
    name: "Frameset",
  },
  {
    id: 2,
    img: suspension,
    name: "Suspension",
  },
  {
    id: 3,
    img: drivetrain,
    name: "Drivetrain",
  },
  {
    id: 4,
    img: wheelset,
    name: "Wheel Set",
  },
  {
    id: 5,
    img: cockpit,
    name: "Cock Pit",
  },
  {
    id: 6,
    img: brakeset,
    name: "Brakeset",
  },
  {
    id: 7,
    img: frameset,
    name: "Others",
  },
];


export const accessories = [
  {
    id: 1,
    cat: "cycle",
    img: lock,
    name: "Locks & Safety",
  },
  {
    id: 2,
    cat: "cycle",
    img: racks,
    name: "Racks & transport",
  },
  {
    id: 3,
    cat: "cycle",
    img: storage,
    name: "Storage Compts",
  },
  {
    id: 4,
    cat: "cycle",
    img: lights,
    name: "Lights",
  },
  {
    id: 5,
    cat: "cyclist",
    img: lights,
    name: "Lights",
  },
  {
    id: 6,
    cat: "cyclist",
    img: electronics,
    name: "Electronics",
  },
  {
    id: 7,
    cat: "cyclist",
    img: others,
    name: "Others",
  },
];

export const clothing = [
  {
    id: 1,
    img: cyclelogo,
    name: "For the Cycle",
  },
  {
    id: 2,
    img: cyclistlogo,
    name: "For the Cyclist",
  },
];

export const hotDeals = [
  {
    id: 1,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",

  },
  {
    id: 2,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",

  },
  {
    id: 3,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",

  },
  {
    id: 4,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",

  },
  {
    id: 5,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",

  },
  {
    id: 6,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",

  },
  {
    id: 7,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",

  },
  {
    id: 1,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",

  },
  {
    id: 1,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",

  },
  {
    id: 1,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",

  }
]