"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Open_Sans } from "next/font/google";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Phone, Mail, MapPin } from "lucide-react";
import { Menu, X } from "lucide-react";

// Sample dynamic data for the card section and scrollable images
const cardData = [
  {
    id: 1,
    value: 16,
    imgSrc: "https://tridentrealty.co.in/home/images/16569323395775.webp",
  },
  {
    id: 2,
    value: 25,
    imgSrc: "https://tridentrealty.co.in/home/images/16569323395775.webp",
  },
  {
    id: 3,
    value: 40,
    imgSrc: "https://tridentrealty.co.in/home/images/16569323395775.webp",
  },
  {
    id: 4,
    value: 60,
    imgSrc: "https://tridentrealty.co.in/home/images/16569323395775.webp",
  },
];
const CounterCard = ({ value, imgSrc }) => {
  const count = useCounter(value, 2000);

  return (
    <div
      className="flex items-center justify-between w-full h-[160px] p-6 rounded-xl shadow-xl 
      border border-transparent hover:border-blue-500 transition duration-300 bg-white"
    >
      <span className="font-semibold text-blue-600 text-3xl sm:text-4xl md:text-5xl">
        {count}+
      </span>
      <Image
        src={imgSrc}
        alt="icon"
        width={100}
        height={60}
        className="w-[80px] h-[50px] sm:w-[80px] sm:h-[60px] object-contain"
      />
    </div>
  );
};
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

const scrollableImages = [
  "/assest/17087006552469.webp",
  "/assest/17087006907349.webp",
  "/assest/17087007654384.webp",
  "/assest/17087008185632.webp",
];
const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/*  Header */}
      <header className="fixed top-0 left-0 w-full md:py-4 z-10 bg-white">
        <div className="md:mx-50 px-4 py-2 flex justify-between items-center flex-wrap">
          <div className="flex-shrink-0">
            <Image
              src="/assest/logoestate.png"
              alt="logo"
              width={100}
              height={50}
              className="hover:cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 lg:hidden pb-2">
              <a href="#">
                <button className="bg-blue-600 text-white text-xl font-bold hover:cursor-pointer animate-pulse transition-all px-3 py-2">
                  Book Online
                </button>
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="hidden lg:flex flex-col items-end gap-2 md:py-2">
              <ul
                className="flex items-center gap-4"
                style={{
                  color: "#333333",
                  fontWeight: "600",
                  fontSize: "12px",
                  marginBottom: "1px",
                }}
              >
                <li>
                  <button className="bg-blue-600 text-white w-30 h-8 px-2 py-1 text-md animate-pulse transition-all hover:cursor-pointer">
                    Book Online
                  </button>
                </li>
                <div className="w-px h-7 bg-gray-400"></div>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-[12px] p-2 hover:text-blue-600 transition-colors"
                  >
                    ASSOCIATE ZONE
                  </a>
                </li>
                <div className="w-px h-7 bg-gray-400"></div>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-[12px] p-2 hover:text-blue-600 transition-colors"
                  >
                    CAREER ZONE
                  </a>
                </li>
                <div className="w-px h-7 bg-gray-400"></div>
                <li>
                  <a
                    href="#"
                    className="text-sm md:text-[12px] p-2 hover:text-blue-600 transition-colors"
                  >
                    EMPLOYEE LOGIN
                  </a>
                </li>
                <div className="w-px h-7 bg-gray-400"></div>
                <li className="flex items-center gap-4">
                  <a href="#">
                    <Phone size={18} className="text-gray-600" />
                  </a>
                  <a href="#">
                    <Mail size={18} className="text-gray-600" />
                  </a>
                </li>
              </ul>

              <ul className="flex justify-end items-center text-sm lg:gap-8 md:gap-4 pt-2">
                <li
                  style={{
                    color: "#333333",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  <a
                    href="#"
                    className="text-lg  hover:text-blue-600 transition-colors"
                  >
                    WHO WE ARE
                  </a>
                </li>
                <li
                  style={{
                    color: "#333333",
                    fontWeight: "600",
                    fontSize: "11px",
                  }}
                >
                  <a
                    href="#"
                    className="text-lg hover:text-blue-600 transition-colors"
                  >
                    PROJECTS
                  </a>
                </li>
                <li
                  style={{
                    color: "#333333",
                    fontWeight: "600",
                    fontSize: "11px",
                  }}
                >
                  <a
                    href="#"
                    className="text-lg hover:text-blue-600 transition-colors"
                  >
                    CUSTOMER ZONE
                  </a>
                </li>
                <li
                  style={{
                    color: "#333333",
                    fontWeight: "600",
                    fontSize: "11px",
                  }}
                >
                  <a
                    href="#"
                    className="text-lg hover:text-blue-600 transition-colors"
                  >
                    CONTACT US
                  </a>
                </li>
                <li className="text-green-600 font-semibold">
                  <a
                    href="#"
                    className="text-xl hover:text-green-800 transition-colors"
                  >
                    Privilege Passport
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-gray-100 py-4`}
        >
          <ul className="flex flex-col items-center gap-4 text-base font-medium">
            <li className="font-bold">
              <a href="#" className="block py-2">
                ASSOCIATE ZONE
              </a>
            </li>
            <li className="font-bold">
              <a href="#" className="block py-2">
                CAREER ZONE
              </a>
            </li>
            <li className="font-bold">
              <a href="#" className="block py-2">
                EMPLOYEE LOGIN
              </a>
            </li>
            <li className="font-bold">
              <a href="#" className="block py-2">
                Who We Are
              </a>
            </li>
            <li className="font-bold">
              <a href="#" className="block py-2">
                Projects
              </a>
            </li>
            <li className="font-bold">
              <a href="#" className="block py-2">
                Customer Zone
              </a>
            </li>
            <li className="font-bold">
              <a href="#" className="block py-2">
                Contact Us
              </a>
            </li>
            <li className="font-bold text-green-600">
              <a href="#" className="block py-2">
                Privilege Passport
              </a>
            </li>
          </ul>
        </div>
      </header>

      <section className=" md:py-22">
        <div className="w-full h-[50vh]  sm:h-[70vh] md:h-[90vh] lg:h-full md:py-10 overflow-hidden">
          <video
            src="/assest/17267429988474.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover md:h-[100vh]"
          ></video>
        </div>

        <div className="my-12 md:my-0 flex flex-col md:flex-row justify-center w-full items-center gap-6 px-4 max-w-[1200px]  mx-auto">
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto md:text-left text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-stretch-50% text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              Creating exceptional living spaces with robust engineering & an
              unparalleled delivery without compromising the ethos of Customer
              Centricity, Sustainability, and Well-being.
            </h2>
          </div>

          <div className="hidden md:block w-2 h-[200px] bg-gradient-to-b from-blue-500 to-green-500 bg-gray-400"></div>
          <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto md:text-left text-center md:py-12 py-6 sm:py-4 px-4 sm:px-6 lg:px-12">
            <h2 className="font-stretch-50% text-2xl sm:text-3xl md:text-5xl pl-0 md:pl-4 text-green-500">
              BUILDING THE NATION
            </h2>

            <div className="mt-4">
              <p className="my-6 text-start md:text-left text-base sm:text-lg md:text-xl leading-relaxed md:p-6 px-2 sm:px-6 lg:px-12 font-stretch-50%">
                Established in 2008, Trident Realty is an innovation-led,
                future-focused real estate developer. The company has been a
                pioneering force behind the rapidly changing skylines of NCR,
                MMR & Tri-City, setting benchmarks for quality, robust
                engineering, and in-house research.
              </p>

              <button className="px-6 sm:px-8 py-2 sm:py-3 mx-auto md:mx-8 rounded-md mt-4 border border-gray-400 hover:cursor-pointer hover:bg-blue-500 transition-all ease-in-out">
                <a
                  href="https://tridentrealty.co.in/careers"
                  className="text-black hover:text-white"
                >
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-20 px-40 
                bg-[url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')] 
                bg-cover bg-center"
        >
          {cardData.map((card) => (
            <CounterCard key={card.id} {...card} />
          ))}
        </div>

        {/* Card Section */}
        <div className="w-[98%] sm:w-[90%] lg:w-[85%] mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {scrollableImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[750px] overflow-hidden">
                  <Image
                    src={src}
                    alt={`image-${index}`}
                    fill
                    className="object-contain "
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Project Cards Section */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-12 lg:gap-16 items-start mt-20 px-4">
          {/* Card 1 */}
          <div className="w-full sm:w-[350px] md:w-[380px] lg:w-[400px] h-auto px-1">
            <div className="w-full h-[350px] md:h-[380px] lg:h-[400px] relative overflow-hidden ">
              <Image
                src="https://tridentrealty.co.in/uploads/project/16691186361300.webp"
                alt="trident-hills"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:cursor-pointer"
              />
            </div>
            <h3 className="pt-4 text-center font-semibold text-xl md:text-2xl">
              TRIDENT HILLS
            </h3>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[350px] md:w-[380px] lg:w-[400px] h-auto px-1">
            <div className="w-full h-[350px] md:h-[380px] lg:h-[400px] relative overflow-hidden ">
              <Image
                src="https://tridentrealty.co.in/uploads/project/16772212723436.webp"
                alt="wingsong-residences"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:cursor-pointer"
              />
            </div>
            <h3 className="pt-4 text-center font-semibold text-xl md:text-2xl">
              WINGSONG RESIDENCES
            </h3>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[350px] md:w-[380px] lg:w-[400px] h-auto px-1">
            <div className="w-full h-[350px] md:h-[380px] lg:h-[400px] relative overflow-hidden">
              <Image
                src="https://tridentrealty.co.in/uploads/project/17540349371037.webp"
                alt="the-westpark"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:cursor-pointer"
              />
            </div>
            <h3 className="pt-4 text-center font-semibold text-xl md:text-2xl">
              THE WESTPARK
            </h3>
          </div>
        </div>

        {/* Our Presence Section */}
        <div className="flex flex-col items-center justify-center pt-20 w-full  py-20 mt-12 px-35 bg-[url(https://tridentrealty.co.in/home/images/bg_happy_customer.webp)]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-center">
            OUR PRESENCE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 w-full  px-4">
            {/* Delhi NCR Card */}
            <div className="h-48 w-full flex items-center justify-center gap-6 px-6 shadow-xl hover:shadow-2xl bg-white border border-transparent hover:border-blue-500 transition-all duration-300 rounded-xl">
              <Image
                src="https://tridentrealty.co.in/home/images/delhilogo1.webp"
                alt="delhiLogo"
                width={70}
                height={70}
                className="object-contain"
              />
              <p className="font-light text-xl sm:text-2xl lg:text-3xl">
                DELHI NCR
              </p>
            </div>

            {/* Mumbai Card */}
            <div className="h-48 w-full flex items-center justify-center gap-6 px-6 shadow-xl hover:shadow-2xl bg-white border border-transparent hover:border-blue-500 transition-all duration-300 rounded-xl">
              <Image
                src="https://tridentrealty.co.in/home/images/delhilogo2.webp"
                alt="mumbaiLogo"
                width={70}
                height={70}
                className="object-contain"
              />
              <p className="font-light text-xl sm:text-2xl lg:text-3xl">
                MUMBAI
              </p>
            </div>

            {/* Chandigarh Card */}
            <div className="h-48 w-full flex items-center justify-center gap-6 px-6 shadow-xl hover:shadow-2xl bg-white border border-transparent hover:border-blue-500 transition-all duration-300 rounded-xl">
              <Image
                src="https://tridentrealty.co.in/home/images/delhilogo3.webp"
                alt="chandigarhLogo"
                width={70}
                height={70}
                className="object-contain"
              />
              <p className="font-light text-xl sm:text-2xl lg:text-3xl">
                CHANDIGARH
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Cards Section */}
        <div className="flex flex-wrap justify-center items-start mt-20 gap-15 pt-10 px-4">
          <div className="w-full sm:w-[300px] md:w-[400px] md:h-[500px]  bg-gray-200 shadow-gray-400 shadow-2xl h-auto border-b-2 border-gray-400  hover:border-green-500">
            <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden">
              <Image
                src="https://tridentrealty.co.in/home/images/banner_gallery1.webp"
                alt="gallery"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:cursor-pointer"
              />
            </div>
            <div className="md:px-10 md:py-4">
              <h3 className="pt-3 font-semibold text-xl md:text-2xl md:px-2 text-start">
                GALLERY
              </h3>
              <p className=" text-sm  mt-1 md:pt-8 text-start md:pb-6 text-gray-600">
                Go through our selection of images and videos to know more about
                Trident Realty
              </p>
              <button className="w-30 h-12 border-2 border-gray-400 bg-white mt-auto hover:cursor-pointer">
                Read More...
              </button>
            </div>
          </div>

          <div className="w-full sm:w-[300px] md:w-[400px] md:h-[500px]  bg-gray-200 shadow-gray-400 shadow-2xl h-auto border-b-2 border-gray-400  hover:border-green-500">
            <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden">
              <Image
                src="https://tridentrealty.co.in/home/images/image2.webp"
                alt="gallery"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:cursor-pointer"
              />
            </div>
            <div className="md:px-10 md:py-4">
              <h3 className="pt-3 font-semibold text-xl md:text-2xl md:px-2 text-start">
                SOCIAL MEDIA
              </h3>
              <p className=" text-sm  mt-1 md:pt-8 text-start md:pb-6 text-gray-600">
                Join the social media family of Trident Realty and get the
                updates on the latest developments and happenings.
              </p>
              <button className="w-30 h-12 border-2 border-gray-400 bg-white mt-auto hover:cursor-pointer">
                Read More...
              </button>
            </div>
          </div>

          <div className="w-full sm:w-[300px] md:w-[400px] md:h-[500px] bg-gray-200 shadow-gray-400 flex-wrap shadow-2xl h-auto border-b-2 border-gray-400 hover:border-green-500">
            <div className="w-full h-[250px] md:h-[300px] relative overflow-hidden   ">
              <Image
                src="https://tridentrealty.co.in/home/images/image4.webp"
                alt="gallery"
                fill
                className="object-cover  transition-transform duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:cursor-pointer"
              />
            </div>
            <div className="md:px-10 md:py-4">
              <h3 className="pt-3 font-semibold text-xl md:text-2xl md:px-2 text-start">
                MEDIA CENTRE
              </h3>
              <p className=" text-sm  mt-1 md:pt-8 text-start md:pb-6 text-gray-600">
                Take a look at what we&apos;ve been up to in the media and other
                coverages related to the brand.
              </p>

              <button className="w-30 h-12  transition-all bg-white border-2 border-gray-400 mt-auto hover:cursor-pointer">
                Read More...
              </button>
            </div>
          </div>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center justify-center py-10 pt-20 px-4">
          <h2 className="text-xl sm:text-2xl md:text-6xl font-normal tracking-wide mb-12">
            FOLLOW US
          </h2>
          <div className="flex gap-4 sm:gap-16 text-xl sm:text-2xl text-gray-800">
            <a
              href="#"
              className="hover:text-blue-600 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-pink-600 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-black hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="hover:text-red-600 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        {/* Get in Touch Section */}
        <div className="bg-gray-100 py-10 px-4">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-6">
              GET IN TOUCH
            </h2>
            <form className="flex gap-4 flex-wrap justify-center">
              <input
                type="text"
                placeholder="Your name"
                className="flex-1 min-w-[200px] px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-700"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 min-w-[200px] px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-700"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="flex-1 min-w-[200px] px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-700"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-800 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-15 md:md-10 md:mx-45 text-center md:text-left">
          <div>
            <h2 className="text-xl font-serif text-blue-500">WHO WE ARE</h2>
            <ul className="grid gap-2 pt-3 font-medium text-gray-700 ">
              <li>
                <a href="#brand-philosophy">Brand Philosophy</a>
              </li>
              <li>
                <a href="#logo-story">The Logo Story</a>
              </li>
              <li>
                <a href="#trident-approach">The Trident Approach</a>
              </li>
              <li>
                <a href="#vision-mission">Vision & Mission</a>
              </li>
              <li>
                <a href="#group-chairman">Group Chairman</a>
              </li>
              <li>
                <a href="#leadership-team">Leadership Team</a>
              </li>
            </ul>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div>
              <h2 className="text-xl font-serif text-blue-500">PROJECTS</h2>
              <ul className="grid gap-2 pt-3 font-medium text-gray-700">
                <li>
                  <a href="#">Residential</a>
                </li>
                <li>
                  <a href="#">Commercial</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-serif text-blue-500">NEW PROJECTS</h2>
              <ul className="grid gap-2 pt-3 font-medium text-gray-700">
                <li>
                  <a href="#">Windsong Residences</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-serif text-blue-500">LOCATIONS</h2>
            <ul className="grid gap-2 pt-3 font-medium text-gray-700">
              <li>
                <a href="#delhi-ncr">Delhi NCR</a>
              </li>
              <li>
                <a href="#mumbai">Mumbai</a>
              </li>
              <li>
                <a href="#chandigarh">Chandigarh</a>
              </li>
              <li>
                <button className="bg-blue-600 text-white py-1 px-4 rounded-md">
                  <a href="#">Coming Soon</a>
                </button>
              </li>
              <li>
                <a href="#">Gurugram & Panipat</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-serif text-blue-500">MEDIA CENTER</h2>
            <ul className="grid gap-2 pt-3 font-serif text-gray-700">
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Press Release</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">Media Centre</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-serif text-blue-500">OTHER LINKS</h2>
            <ul className="grid gap-2 pt-3 font-serif text-gray-700">
              <li>
                <a href="#">Construction Update</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Customer Zone</a>
              </li>
              <li>
                <a href="#">Associate Zone</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 py-6 border-t border-gray-200 mt-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-6 gap-6">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="text-blue-600 w-5 h-5" />
              <p>
                Tel:{" "}
                <a
                  href="tel:+917026035000"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  +91 702 603 5000
                </a>
              </p>
            </div>
            {/* Corporate Office */}
            <div className="flex items-start gap-2 text-center md:text-left">
              <MapPin className="text-blue-600 w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold">Corporate Office</p>
                <p className="text-gray-600 text-sm">
                  Office Suite 8 & 9, 3rd Floor,
                  <br />
                  Ninex City Mart, Sohna Road,
                  <br />
                  Near Radisson Hotel, Sector 49,
                  <br />
                  Gurugram, Haryana 122018
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-blue-600 w-5 h-5" />
              <a
                href="mailto:care@tridentrealty.co.in"
                className="text-blue-600 font-semibold hover:underline"
              >
                care@ireedindia.co.in
              </a>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white py-4 text-center md:text-left">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
            <p className="text-sm md:text-base">
              © IREED INDIA , 2025 All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Disclaimer
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                RERA Disclaimer
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Social Media Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Online Application Facility
              </a>
            </div>
            <p className="text-sm">
              Designed By: <span className="font-semibold">IREED</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
