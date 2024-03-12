const router = require("express").Router();
router.get("/", async (req, res) => {
  const products = [
    {
      _id: "as5jlka64sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/red/white",
      ],
      size: ["l", "xl", "2xl", "3xl"],
      colors: ["احمر", "اسود"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5a64assd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/red/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5a6xcz4sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/red/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/blue/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5a6eq4sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/red/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/black/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5;lvca64sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/red/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5a6mx4sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/red/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
  ];
  res.status(200).json({ success: true, data: products });
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const products = [
    {
      _id: "as5jlka64sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/red/white",
      ],
      size: ["l", "xl", "2xl", "3xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5a64assd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/red/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5a6xcz4sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/red/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/blue/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5a6eq4sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/red/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/black/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5;lvca64sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/red/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
    {
      _id: "as5a6mx4sd",
      name: "تيشيرت حوض",
      price: 12.5,
      images: [
        "https://placehold.co/500x500/violet/white",
        "https://placehold.co/500x500/yellow/black",
        "https://placehold.co/500x500/green/white",
        "https://placehold.co/500x500/blue/white",
        "https://placehold.co/500x500/black/white",
        "https://placehold.co/500x500/red/white",
      ],
      size: ["l", "xl", "2xl"],
      colors: ["احمر", "اسود", "نبيتى"],
      description: "تيشيرت نص كوم خامه قطنيه ",
      discount: 13,
    },
  ];
  const product = products.find((prd) => prd._id == id);
  res.status(200).json({ product });
});
module.exports = router;