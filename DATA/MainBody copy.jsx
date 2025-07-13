import { allCarsWithDetails } from "@/DATA/data";
import { useState } from "react";
import { Star, Clock, MapPin, Phone, Zap, Shield, Award } from "lucide-react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import EnquiryDetails from "../components/EnquiryDetails";

const MINIMUMHOUR = 10;
const MINIMUMKM = 10;
const HOURLYRATE = 200;
const KMRATE = 300;

const MainBody = () => {
  const [selectedTypes, setSelectedTypes] = useState({});
  const [selectHour, setSelectHour] = useState({});
  const [selectKm, setSelectKm] = useState({});

  const getSelectedType = (carId) => selectedTypes[carId] || "hourly";

  const getButtonStyle = (type, carId) => {
    const isSelected = getSelectedType(carId) === type;
    return isSelected
      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105 shadow-lg shadow-blue-500/50"
      : "bg-gray-800/50 border border-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:border-blue-500/50";
  };

  const handleTypeChange = (type, carId) => {
    setSelectedTypes((prev) => ({ ...prev, [carId]: type }));

    if (type === "hourly") {
      setSelectKm((prev) => ({ ...prev, [carId]: "" }));
    } else if (type === "km") {
      setSelectHour((prev) => ({ ...prev, [carId]: "" }));
    }
  };

  const calculateExtraCost = (carId) => {
    const selectedType = getSelectedType(carId);
    const hourValue = parseFloat(selectHour[carId]) || 0;
    const kmValue = parseFloat(selectKm[carId]) || 0;

    if (selectedType === "hourly" && hourValue > MINIMUMHOUR) {
      return (hourValue - MINIMUMHOUR) * HOURLYRATE;
    } else if (selectedType === "km" && kmValue > MINIMUMKM) {
      return (kmValue - MINIMUMKM) * KMRATE;
    }
    return 0;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl animate-spin duration-[20s]"></div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="relative mt-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=600&fit=crop"
          alt="Luxury Cars Collection"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-purple-900/30"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Premium Rentals
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Experience luxury on every journey
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Instant Booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Cars Grid Section */}
      <section className="relative px-6 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Fleet
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our collection of premium vehicles, each maintained to
            the highest standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCarsWithDetails.map((car) => {
            const selectedType = getSelectedType(car.id);
            const extraCost = calculateExtraCost(car.id);

            return (
              <div
                key={car.id}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105"
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

                {/* Enhanced Card Content */}
                <div className="p-6 space-y-6">
                  {/* Car Title and Features */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {car.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Available 24/7</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Free Pickup</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Type Selection */}
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleTypeChange("hourly", car.id)}
                        className={`flex-1 ${getButtonStyle(
                          "hourly",
                          car.id
                        )} cursor-pointer font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}
                      >
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>Hourly</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleTypeChange("km", car.id)}
                        className={`flex-1 ${getButtonStyle(
                          "km",
                          car.id
                        )} cursor-pointer font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden`}
                      >
                        <div className="relative z-10 flex items-center justify-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>Per KM</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Enhanced Price and Input Section */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="space-y-1">
                        <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                          ₹{parseFloat(car.price) + extraCost}
                        </div>
                        <div className="text-sm text-gray-400">
                          {selectedType === "hourly" ? "per hour" : "per km"}
                        </div>
                      </div>

                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          className="w-24 p-3 bg-gray-700/50 backdrop-blur-sm text-white rounded-xl border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-center"
                          placeholder={
                            selectedType === "hourly" ? "Hours" : "KM"
                          }
                          value={
                            selectedType === "hourly"
                              ? selectHour[car.id] || ""
                              : selectKm[car.id] || ""
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            if (selectedType === "hourly") {
                              setSelectHour((prev) => ({
                                ...prev,
                                [car.id]: value,
                              }));
                            } else {
                              setSelectKm((prev) => ({
                                ...prev,
                                [car.id]: value,
                              }));
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Enhanced Cost Breakdown */}
                    <div className="text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-3 rounded-xl border border-blue-500/20">
                      {selectedType === "hourly" ? (
                        <>
                          {selectHour[car.id] > MINIMUMHOUR ? (
                            <div className="text-blue-300">
                              <span className="font-semibold">Extra cost:</span>{" "}
                              {selectHour[car.id] - MINIMUMHOUR} hour(s) × ₹
                              {HOURLYRATE} = ₹
                              {(selectHour[car.id] - MINIMUMHOUR) * HOURLYRATE}
                            </div>
                          ) : (
                            <div className="text-green-300">
                              <span className="font-semibold">Included:</span>{" "}
                              Minimum {MINIMUMHOUR} hours booking
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          {selectKm[car.id] > MINIMUMKM ? (
                            <div className="text-blue-300">
                              <span className="font-semibold">Extra cost:</span>{" "}
                              {selectKm[car.id] - MINIMUMKM} KM × ₹{KMRATE} = ₹
                              {(selectKm[car.id] - MINIMUMKM) * KMRATE}
                            </div>
                          ) : (
                            <div className="text-green-300">
                              <span className="font-semibold">Included:</span>{" "}
                              Up to {MINIMUMKM} KM covered
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Description */}
                  <p className="text-gray-300 text-sm leading-relaxed bg-gray-800/30 p-4 rounded-xl border border-gray-700">
                    {car.description}
                  </p>

                  {/* Enhanced Action Button */}
                  <div className="pt-2">
                    <EnquiryDetails phone={car.phone} />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-700 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Enhanced Footer Section */}
      <section className="relative border-t border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Experience Luxury?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Book your premium vehicle today and enjoy our world-class service
              with 24/7 support
            </p>
            <div className="flex justify-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">₹0</div>
                <div className="text-sm text-gray-400">Hidden Fees</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainBody;
