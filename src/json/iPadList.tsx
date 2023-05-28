import iPadPro from "../assets/ipad/iPadPro.png";
import iPad10 from "../assets/ipad/iPad10.png";
import iPad9 from "../assets/ipad/iPad9.png";
import iPadAir from "../assets/ipad/iPadAir.png";
import iPadMini from "../assets/ipad/iPadMini.png";

export const iPadList = [
  {
    _id: 1,
    name: "iPad Pro",
    price: 55000,
    color: ["gray"],
    display:
      "12.9-inch (diagonal) mini-LED backlit Liquid Retina XDR display, Multi‑Touch display with IPS technology",
    picture: iPadPro,
    chip: [
      "Apple M2 chip",
      "8-core CPU with 4 performance cores and 4 efficiency cores",
      "10-core GPU",
    ],
    batteryAndPower: ["Up to 15 hours wireless web", "30W USB-C Power Adapter"],
    memory: "128GB",
    storage: " 128GB",
    touchID: "Enabled by TrueDepth camera for facial recognition",
    camera: "Ultra Wide: 10MP, ƒ/2.4 aperture, and 125° field of view",
    audio: [
      "FaceTime audio",
      "iPad to any FaceTime-enabled device over Wi-Fi or cellular",
    ],
    operatingSystem: "iPadOS 16",
    inTheBox: [
      "iPad Pro",
      "USB-C Charge Cable (1 meter)",
      "20W USB-C Power Adapter",
    ],
  },
  {
    _id: 2,
    name: "iPad Air",
    price: 40000,
    color: ["gray", "pink", "blue", "purple"],
    display:
      "10.9-inch (diagonal) Liquid Retina display, LED‑backlit Multi‑Touch display with IPS technology",
    picture: iPadAir,
    chip: [
      "Apple M1  chip",
      "8-core CPU with 4 performance cores and 4 efficiency cores",
      "8-core GPU",
    ],
    batteryAndPower: [
      "Built‐in 28.6‐watt‐hour rechargeable lithium‑polymer battery",
      "Charging via power adapter or USB‑C to computer system",
    ],
    memory: "8GB RAM",
    storage: "256GB SSD",
    touchID: "Unlock iPad",
    camera: "12MP Wide camera, ƒ/1.8 aperture",
    audio: [
      "FaceTime audio",
      "iPad to any FaceTime‑enabled device over Wi-Fi or cellular",
    ],
    operatingSystem: "iPadOS 16",
    inTheBox: [
      "iPad Air",
      "USB‑C Charge Cable (1m)",
      "20W USB‑C Power Adapter",
    ],
  },
];
