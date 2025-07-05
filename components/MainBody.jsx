import { allCarsWithDetails } from "@/DATA/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
const MINIMUMHOUR = 10;
const MINIMUMKM = 10;
const HOURLYRATE = 10;
const KMRATE = 10;

const MainBody = () => {
  const [selectedType, setSelectedType] = useState("hourly");
  const [selectHour, setSelectHour] = useState(0);
  const [selectKm, setSelectKm] = useState(0);
  return (
    <main className="min-h-screen  text-white">
      {/* Hero Section with Overlay */}
      <div className="relative mt-16">
        <img
          src="/cars.png"
          alt="Hero Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>
      </div>

      {/* Cars Grid Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCarsWithDetails.map((car) => (
            <div
              key={car.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105"
            >
              {/* Image Carousel */}
              <div className="relative overflow-hidden">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="w-full h-64 rounded-t-2xl"
                >
                  {car.images.map((img) => (
                    <SwiperSlide key={img.id}>
                      <div className="relative h-full">
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          src={img.url}
                          alt={`${car.name} - Image ${img.id}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {car.name}
                  </h2>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedType("hourly")}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-1 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    Hourly
                  </button>
                  <button
                    onClick={() => setSelectedType("km")}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-1 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    KM
                  </button>
                </div>

                <div className="flex items-center justify-around space-x-2">
                  <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    ₹
                    {+car.price +
                      (selectedType === "hourly" && selectHour > MINIMUMHOUR
                        ? selectHour * HOURLYRATE
                        : selectedType === "km" && selectKm > MINIMUMKM
                        ? selectKm * KMRATE
                        : 0)}
                  </span>

                  <input
                    type="number"
                    className="w-24 p-2 bg-gray-200 text-black"
                    onChange={(e) =>
                      selectedType === "hourly"
                        ? setSelectHour(e.target.value)
                        : setSelectKm(e.target.value)
                    }
                  />
                </div>
                <div>
                  {selectedType === "hourly" && selectHour <= MINIMUMHOUR && (
                    <p>This is the minimum car cost for {MINIMUMHOUR} hour</p>
                  )}
                  {selectedType === "km" && selectKm <= MINIMUMHOUR && (
                    <p>This is the minimum car cost for upto {MINIMUMKM} KM</p>
                  )}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {car.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button className="flex-1 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 c rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainBody;
