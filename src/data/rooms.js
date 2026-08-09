const executiveImages = import.meta.glob(
  "../assets/Executive/*",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const deluxeImages = import.meta.glob(
  "../assets/Deluxe/*",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const classicImages = import.meta.glob(
  "../assets/Classic/*",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const familyImages = import.meta.glob(
  "../assets/Family/*",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const premiumImages = import.meta.glob(
  "../assets/Premium/*",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const presidentialImages = import.meta.glob(
  "../assets/Presidential/*",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);

const rooms = [
  {
    id: 1,
    name: "Executive",
    image: Object.values(executiveImages)[0],
    images: Object.values(executiveImages),
     price: "₹8,000/night",
  },

  {
    id: 2,
    name: "Deluxe",
    image: Object.values(deluxeImages)[0],
    images: Object.values(deluxeImages),
     price:  "₹10,000/night",
  },

   {
    id: 3,
    name: "Classic",
    image: Object.values(classicImages)[0],
    images: Object.values(classicImages),
     price: "₹6,000/night",
  },

   {
    id: 4,
    name: "Family",
    image: Object.values(familyImages)[0],
    images: Object.values(familyImages),
     price: "₹12,000/night",
  },

   {
    id: 5,
    name: "Premium",
    image: Object.values(premiumImages)[0],
    images: Object.values(premiumImages),
     price: "₹15,000/night",
  },

   {
    id: 6,
    name: "Presidential",
    image: Object.values(presidentialImages)[0],
    images: Object.values(presidentialImages),
     price: "₹20,000/night",
  },
];
export default rooms;