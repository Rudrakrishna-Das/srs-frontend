export const allCarsWithDetails = [
  {
    id: 1,
    images: [
      { id: 1, url: "/cars/swift1.png" },
      { id: 2, url: "/cars/car_inside1.jpg" },
    ],
    name: "Swift Desire",
    price: 24000,
    description: "A reliable and fuel-efficient sedan.",
  },
  {
    id: 2,
    name: "Honda Accord",
    images: [
      { id: 1, url: "/cars/swift1.png" },
      { id: 2, url: "/cars/car_inside1.jpg" },
    ],
    price: 26000,
    description: "A stylish and powerful sedan.",
  },
];

// {car.images.map((img) => (
//               <img
//                 className="w-[40rem]"
//                 src={img.url}
//                 alt={`Car Image ${img.id}`}
//               />
//             ))}
