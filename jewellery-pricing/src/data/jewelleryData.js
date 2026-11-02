export const jewelleryProduct = {
    id: "MH-RNG-001",
    name: "Classic Solitaire Ring",
    collection: "Atelier Solitaire Collection",
    category: "Diamond Rings",
    sku: "MH-SOL-001-DIA",
    rating: 4.9,
    reviewCount: 38,
    description:
        "A timeless solitaire featuring a brilliant-cut certified natural diamond poised in a delicate four-prong basket with a tapered solid gold comfort-fit band. Hand-finished by master artisans.",

    metalPurity: {
        "14KT": 0.585,
        "18KT": 0.75,
        "22KT": 0.916,
    },

    purityInfo: {
        "14KT": { label: "14KT Gold", purityText: "58.5% Pure", tag: "Durable & Everyday" },
        "18KT": { label: "18KT Gold", purityText: "75.0% Pure", tag: "Most Popular", recommended: true },
        "22KT": { label: "22KT Gold", purityText: "91.6% Pure", tag: "High-Karat Radiance" },
    },

    colours: ["Yellow", "Rose", "White"],

    colourInfo: {
        Yellow: { name: "Yellow Gold", tone: "Classic 18K Warm Sunbeam", hex: "#E4BE6B" },
        Rose: { name: "Rose Gold", tone: "Romantic Copper-Blush", hex: "#E59E87" },
        White: { name: "White Gold", tone: "Rhodium Mirror Sheen", hex: "#E8E8E8" },
    },

    ringSizes: {
        12: 2.1,
        13: 2.2,
        14: 2.3,
        15: 2.4,
        16: 2.5,
        17: 2.6,
        18: 2.7,
    },

    ringSizeDimensions: {
        12: { mm: 16.5, circ: 51.8 },
        13: { mm: 16.9, circ: 53.1 },
        14: { mm: 17.3, circ: 54.3 },
        15: { mm: 17.7, circ: 55.6 },
        16: { mm: 18.1, circ: 56.9 },
        17: { mm: 18.5, circ: 58.1 },
        18: { mm: 18.9, circ: 59.4 },
    },

    diamonds: [
        { label: "0.25 Ct", value: 0.25, mm: "4.1 mm", clarity: "VVS1 · E-F Color", tag: "Dainty & Subtle" },
        { label: "0.50 Ct", value: 0.5, mm: "5.1 mm", clarity: "VVS1 · E-F Color", tag: "Timeless Classic", recommended: true },
        { label: "1.00 Ct", value: 1, mm: "6.5 mm", clarity: "VVS1 · E-F Color", tag: "Grand Statement" },
    ],

    makingCharges: 1400,
    wastagePercentage: 5,
    diamondRate: 18000,
    gstPercentage: 3,


};
