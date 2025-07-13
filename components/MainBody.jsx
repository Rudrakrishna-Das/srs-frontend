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
import EnquiryDetails from "./EnquiryDetails";

const MainBody = () => {
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
                        <img
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          src={img.url}
                          alt={`${car.name} - Image ${img.id}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition duration-300">
                    {car.name}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Available 24/7</span>
                  </div>

                  <div className="bg-gray-800/40 backdrop-blur-md rounded-xl p-4 border border-gray-700 space-y-2">
                    <div className="text-lg text-gray-300">
                      <span className="font-bold text-green-400">
                        ₹{car.perKm}
                      </span>{" "}
                      / KM
                    </div>
                    <div className="text-lg text-gray-300">
                      <span className="font-bold text-green-400">
                        ₹{car.perHour}
                      </span>{" "}
                      / Hour
                    </div>
                    <p className="text-sm text-gray-400 pt-2">
                      <span className="text-blue-400 font-medium">Note:</span>{" "}
                      After 100 hours, per KM rate applies. <br />
                      <span className="text-purple-400">Call:</span> +91 91632
                      17163 / +91 86976 58950
                    </p>
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
