export const houses = [
  {
    name: "1202 W Villaret Blvd",
    address: "1202 W Villaret Blvd, San Antonio, TX 78224",
    slug: "1202-w-villaret-blvd",
    folder: "1202-w-villaret-blvd",
    type: "Custom Home Build",
    location: "San Antonio, TX",
    description:
      "Custom-built residential home featuring detailed framing, clean finishes, and full structural execution from foundation to final touches.",
    cover: "1202-2.jpg",
    images: Array.from({ length: 19 }, (_, i) => `1202-${i + 1}.jpg`),
  },

  {
    name: "615 W Mally Blvd",
    address: "615 W Mally Blvd, San Antonio, TX 78221",
    slug: "615-w-mally-blvd",
    folder: "615-w-mally-blvd",
    type: "Custom Home Build",
    location: "San Antonio, TX",
    description:
      "Ground-up home build focused on durability, structural integrity, and efficient layout execution throughout all phases.",
    cover: "mally-41.jpg",
    images: Array.from({ length: 46 }, (_, i) => `mally-${i + 1}.jpg`),
  },

  {
    name: "206 McCauley Blvd",
    address: "206 McCauley Blvd, San Antonio, TX 78221",
    slug: "206-mccauley-blvd",
    folder: "206-mccauley-blvd",
    type: "Custom Home Build",
    location: "San Antonio, TX",
    description:
      "Residential framing and build project showcasing clean lines, precision layout, and attention to construction detail.",
    cover: "mccauley-1.jpg",
    images: Array.from({ length: 17 }, (_, i) => `mccauley-${i + 1}.jpg`),
  },

  {
    name: "1234 Gillette Blvd",
    address: "1234 Gillette Blvd, San Antonio, TX 78224",
    slug: "1234-gillette-blvd",
    folder: "1234-gillette-blvd",
    type: "Custom Home Build",
    location: "San Antonio, TX",
    description:
      "Custom residential project prepared for a full photo gallery once project images are added.",
    cover: "gillette-1.png",
    images: ["gillette-1.png"],
    morePhotosComingSoon: true,
  },
];
