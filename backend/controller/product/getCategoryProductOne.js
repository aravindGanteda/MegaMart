const productModel = require("../../models/productModel");

const getCategoryProductController = async (req, res) => {
  try {
    const productByCategory = [
      {
        _id: "66f44e498c37f7b1dd709614",
        productName: "Airpodes 123",
        category: "airpodes",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727286772/invovkodb77ym3q5tyf5.webp",
        ],
      },
      {
        _id: "66f502933cfe8e232876d724",
        productName:
          "Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit ",
        brandName: "Canon",
        category: "camera",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727332789/dzqgs6opl9x4mosqdo31.jpg",
        ],
      },
      {
        _id: "66f5090e3cfe8e232876d75c",
        productName: "boAt Rockerz 103 Pro",
        brandName: "Boat RockerZ",
        category: "earphones",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727334611/donbj2dyp9wutcpjaruq.webp",
        ],
      },
      {
        _id: "66f51c01c51563c58a452531",
        productName: "realme 7 Pro (Mirror Silver, 128 GB) (6 GB RAM)",
        brandName: "RealMe",
        category: "mobile",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727339477/uflqaw30wrzbuilifar5.webp",
        ],
      },
      {
        _id: "66f5409bc51563c58a452599",
        productName:
          "ASUS Marshmallow - Silent, Adj. DPI, Multi-Mode, With Solar Cover Wireless Optical Mouse (2.4GHz Wireless, Bluetooth, Quiet Blue)",
        brandName: "ASUS",
        category: "mouse",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727348815/d7voupcmsjtagofpb8ue.webp",
        ],
      },
      {
        _id: "66f541dcc51563c58a4525a9",
        productName:
          "Canon MG2570S Multi-function Color Inkjet Printer (Black, Ink Cartridge)",
        brandName: "Canon",
        category: "printers",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727349164/rp0e2ennwrid8tq6b5vz.webp",
        ],
      },
      {
        _id: "66f542aec51563c58a4525b4",
        productName:
          "amd Ryzen 7 3700X with Wraith Prism & RGB LED Cooler (100-100000071BOX) 3.6 Ghz Upto 4.4 Ghz AM4 Socket 8 Cores 16 Threads 4 MB L2 32 MB L3 Desktop Processor (Silver)",
        brandName: "AMD",
        category: "processor",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727349363/sp2imwluicszpgfh1cug.webp",
        ],
      },
      {
        _id: "66f5674031ea2c79960e497f",
        productName:
          "Godrej 215 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer (Aqua Blue, RD UNO 2154 PTDI AQ BL)",
        brandName: "Godrej",
        category: "refrigerator",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727358680/u3a0ifp9b1zrzh810wq3.webp",
        ],
      },
      {
        _id: "66f56a0731ea2c79960e499b",
        productName: "BLITZ 2000",
        brandName: "BLITZ",
        category: "speakers",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727359430/pwwbsr6asbkstpdjzras.webp",
        ],
      },
      {
        _id: "66f5793b7ea1bb3cc8f59690",
        productName:
          "Ambrane AGK-11 Trimmer 60 min Runtime 18 Length Settings (Black)",
        brandName: "Ambrane",
        category: "trimmers",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727363332/ardcgame8kpfzy2kmn5j.webp",
        ],
      },
      {
        _id: "66f57c077ea1bb3cc8f596b0",
        productName:
          "acer I Series 127 cm (50 inch) Ultra HD (4K) LED Smart Android TV with Android 11, 30W Dolby Audio, MEMC (2022 Model) (AR50AR2851UDFL)",
        brandName: "ACER",
        category: "tv",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727364061/skbe7teunznmc2pb1oek.webp",
        ],
      },
      {
        _id: "66f57e317ea1bb3cc8f596cc",
        productName: "boAt Cosmos Pro",
        brandName: "Boat",
        category: "watches",
        productImage: [
          "http://res.cloudinary.com/dhmcyqyjt/image/upload/v1727364618/ttywwasywv2x2o0jznv5.webp",
        ],
      },
    ];

    res.status(200).json({
      message: "categorie Product ...😉",
      data: productByCategory,
      error: false,
      success: true,
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      success: false,
      message: err.message || err,
    });
  }
};
module.exports = getCategoryProductController;
