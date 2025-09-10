"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";


// Counter hook for animated numbers
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === target) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

// Counter Card Component
const CounterCard = ({ value, imgSrc }) => {
  const count = useCounter(value, 2000);

  return (
    <div className="flex items-center justify-between w-full h-40 p-4 md:p-6 rounded-xl shadow-xl border border-transparent hover:border-blue-500 transition-all duration-300 bg-white">
      <span className="font-semibold text-blue-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {count}+
      </span>
      <Image
        src={imgSrc}
        alt="icon"
        width={100}
        height={60}
        className="w-16 h-10 sm:w-20 sm:h-12 md:w-20 md:h-15 object-contain"
      />
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ src, alt, title, location, linkHref }) => (
  <div className="w-full">
    {/* Image container with smaller heights */}
    <div className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-110 shadow-xl hover:shadow-2xl hover:cursor-pointer"
      />
    </div>
    {/* Title */}
    <h3 className="pt-4 text-left font-semibold text-lg sm:text-xl text-gray-800">
      {title}
    </h3>
    {/* Location and Arrow */}
    <div className="flex justify-between items-center mt-2 pb-4 border-b border-gray-300">
      <p className="text-gray-600 text-sm sm:text-base text-left">
        {location}
      </p>
      <a href={linkHref} className="text-gray-500 hover:text-green-600 transition-colors duration-300">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </a>
    </div>
  </div>
);

// Presence Card Component
const PresenceCard = ({ imgSrc, title, alt }) => (
  <div className="h-40 md:h-48 w-full flex items-center justify-center gap-4 md:gap-6 px-4 md:px-6 shadow-xl hover:shadow-2xl bg-white border border-transparent hover:border-blue-500 transition-all duration-300 rounded-xl">
    <Image
      src={imgSrc}
      alt={alt}
      width={70}
      height={70}
      className="w-12 h-12 md:w-16 md:h-16 lg:w-[70px] lg:h-[70px] object-contain"
    />
    <p className="font-light text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">
      {title}
    </p>
  </div>
);

// Gallery Card Component
const GalleryCard = ({ imgSrc, title, description, alt }) => (
  <div className="w-full max-w-sm mx-auto bg-gray-200 shadow-2xl border-b-2 border-gray-400 hover:border-green-500 transition-colors duration-300">
    <div className="w-full h-50 md:h-60 relative overflow-hidden">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
      />
    </div>
    <div className="p-4 md:p-6">
      <h3 className="font-semibold text-xl md:text-2xl mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      <button className="px-4 py-2 border-2 border-gray-400 bg-white hover:bg-gray-50 transition-colors duration-200 cursor-pointer text-sm">
        Read More...
      </button>
    </div>
  </div>
);

// Sample data
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

const scrollableImages = [
  "/assest/17087006552469.webp",
  "/assest/17087006907349.webp",
  "/assest/17087007654384.webp",
  "/assest/17087008185632.webp",
];

const projectsData = [
  {
    src: "https://tridentrealty.co.in/uploads/project/16691186361300.webp",
    alt: "trident-hills",
    title: "TRIDENT HILLS",
    location: "RESIDENTIAL - CHANDIGARH",
    linkHref: "https://tridentrealty.co.in/project-detail/trident-hills",
  },
  {
    src: "https://tridentrealty.co.in/uploads/project/16772212723436.webp",
    alt: "wingsong-residences",
    title: "WINGSONG RESIDENCES",
    location: "RESIDENTIAL - PANCHKULA",
    linkHref: "https://tridentrealty.co.in/project-detail/wingsong-residences",
  },
  {
    src: "https://tridentrealty.co.in/uploads/project/17540349371037.webp",
    alt: "the-westpark",
    title: "THE WESTPARK",
    location: "RESIDENTIAL - MAHARASHTRA",
    linkHref: "https://tridentrealty.co.in/project-detail/the-westpark",
  },
];

const presenceData = [
  {
    imgSrc: "https://tridentrealty.co.in/home/images/delhilogo1.webp",
    title: "DELHI NCR",
    alt: "delhi-logo",
  },
  {
    imgSrc: "https://tridentrealty.co.in/home/images/delhilogo2.webp",
    title: "MUMBAI",
    alt: "mumbai-logo",
  },
  {
    imgSrc: "https://tridentrealty.co.in/home/images/delhilogo3.webp",
    title: "CHANDIGARH",
    alt: "chandigarh-logo",
  },
];

const galleryData = [
  {
    imgSrc: "https://tridentrealty.co.in/home/images/banner_gallery1.webp",
    title: "GALLERY",
    description:
      "Go through our selection of images and videos to know more about Trident Realty",
    alt: "gallery",
  },
  {
    imgSrc: "https://tridentrealty.co.in/home/images/image2.webp",
    title: "SOCIAL MEDIA",
    description:
      "Join the social media family of Trident Realty and get the updates on the latest developments and happenings.",
    alt: "social-media",
  },
  {
    imgSrc: "https://tridentrealty.co.in/home/images/image4.webp",
    title: "MEDIA CENTRE",
    description:
      "Take a look at what we've been up to in the media and other coverages related to the brand.",
    alt: "media-centre",
  },
];

const socialLinks = [
  { Icon: FaFacebookF, href: "#", hoverColor: "hover:text-blue-600" },
  { Icon: FaInstagram, href: "#", hoverColor: "hover:text-pink-600" },
  { Icon: FaLinkedinIn, href: "#", hoverColor: "hover:text-blue-700" },
  { Icon: FaXTwitter, href: "#", hoverColor: "hover:text-black" },
  { Icon: FaYoutube, href: "#", hoverColor: "hover:text-red-600" },
];

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: "ASSOCIATE ZONE", href: "#" },
    { label: "CAREER ZONE", href: "#" },
    { label: "EMPLOYEE LOGIN", href: "#" },
    { label: "WHO WE ARE", href: "#" },
    { label: "PROJECTS", href: "#" },
    { label: "CUSTOMER ZONE", href: "#" },
    { label: "CONTACT US", href: "#" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/assest/logoestate.png"
              alt="logo"
              width={100}
              height={50}
              className="cursor-pointer w-20 h-15 md:w-25 md:h-12 object-contain"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button className="bg-blue-600 text-white text-sm font-bold animate-pulse px-3 py-2 hover:bg-blue-700 transition-colors">
              Book Online
            </button>
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-col items-end gap-2">
            {/* Top Row */}
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-700">
              <button className="bg-blue-600 text-white px-3 py-1 animate-pulse hover:bg-blue-700 transition-colors">
                Book Online
              </button>
              <div className="w-px h-6 bg-gray-400"></div>
              <a href="#" className="hover:text-blue-600 transition-colors">
                ASSOCIATE ZONE
              </a>
              <div className="w-px h-6 bg-gray-400"></div>
              <a href="#" className="hover:text-blue-600 transition-colors">
                CAREER ZONE
              </a>
              <div className="w-px h-6 bg-gray-400"></div>
              <a href="#" className="hover:text-blue-600 transition-colors">
                EMPLOYEE LOGIN
              </a>
              <div className="w-px h-6 bg-gray-400"></div>
              <div className="flex gap-3">
                <a href="#">
                  <Phone
                    size={16}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  />
                </a>
                <a href="#">
                  <Mail
                    size={16}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  />
                </a>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center gap-8 text-xs font-semibold text-gray-700">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Privilege Passport
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-gray-100`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="block py-2 font-medium text-blue-600 hover:text-blue-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Privilege Passport
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        {/* Hero Video Section */}
        <section className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
          <video
            src="/assest/17267429988474.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </section>

        {/* About Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700">
                Creating exceptional living spaces with robust engineering & an
                unparalleled delivery without compromising the ethos of Customer
                Centricity, Sustainability, and Well-being.
              </h2>
            </div>

            <div className="hidden md:block w-0.5 h-48 bg-gradient-to-b from-blue-500 to-green-500"></div>

            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-green-500 mb-6">
                BUILDING THE NATION
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                Established in 2008, Trident Realty is an innovation-led,
                future-focused real estate developer. The company has been a
                pioneering force behind the rapidly changing skylines of NCR,
                MMR & Tri-City, setting benchmarks for quality, robust
                engineering, and in-house research.
              </p>
              <button className="px-6 py-3 border border-gray-400 rounded-md hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300">
                <a href="https://tridentrealty.co.in/careers">Read More</a>
              </button>
            </div>
          </div>

          {/* 4 div section */}
        </section>
        <section className="py-10 bg-[url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')] bg-repeat bg-center">
          <div className="mx-auto w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            <div
              className="bg-white rounded-lg shadow p-6 relative 
      border border-transparent hover:border-green-700
      hover:scale-105 cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-5xl font-bold text-blue-900">16</h2>
                <Image
                  src="/assest1/happy_icon1.webp"
                  alt="Happy Icon 1"
                  width={70}
                  height={70}
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
              <p className="mt-5 text-sm text-gray-600">
                YEARS OF EXPERTISE IN RESIDENTIAL & COMMERCIAL
              </p>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 relative 
      border border-transparent hover:border-green-700
      hover:scale-105 cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-5xl font-bold text-blue-900">1.89</h2>
                <Image
                  src="/assest1/happy_icon1.webp"
                  alt="Happy Icon 1"
                  width={70}
                  height={70}
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
              <p className="mt-5 text-sm text-gray-600">
                MILLION SQ. M. DELIVERED
              </p>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 relative 
      border border-transparent hover:border-green-700
      hover:scale-105 cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-5xl font-bold text-blue-900">20k+</h2>
                <Image
                  src="/assest1/happy_icon1.webp"
                  alt="Happy Icon 1"
                  width={70}
                  height={70}
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
              <p className="mt-5 text-sm text-gray-600">HAPPY CUSTOMERS</p>
            </div>

            <div
              className="bg-white rounded-lg shadow p-6 relative 
      border border-transparent hover:border-green-700
      hover:scale-105 cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-5xl font-bold text-blue-900">1.02</h2>
                <Image
                  src="/assest1/happy_icon1.webp"
                  alt="Happy Icon 1"
                  width={70}
                  height={70}
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
              <p className="mt-5 text-sm text-gray-600">
                MILLION SQ. M. UNDER DEVELOPMENT
              </p>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
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
                  {/* Container with max-width and aspect ratio for responsiveness */}
                  <div className="relative mx-auto w-full max-w-[1200px] aspect-[16/9] overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`carousel-image-${index}`}
                      fill
                      className="object-contain transition-transform duration-700 hover:scale-105"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 90vw,
                     1200px"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/**Search Bar */}

        <section className="w-full flex flex-col items-center py-6">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-10">PROJECTS</h2>

            <div className="w-full px-6">
              <div className="flex border border-gray-300 overflow-hidden w-full max-w-7xl mx-auto">
                <div className="flex-1 border-r border-gray-300 px-3 py-2">
                  <label className="text-gray-500">PROPERTY TYPE</label>
                  <select className="w-full outline-none">
                    <option hidden>Any</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Office</option>
                  </select>
                </div>

                <div className="flex-1 border-r border-gray-300 px-3 py-2">
                  <label className="text-gray-500">LOCATIONS</label>
                  <select className="w-full outline-none">
                    <option hidden>Any</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                  </select>
                </div>

                <div className="flex-1 border-r border-gray-300 px-3 py-2">
                  <label className="text-gray-500">STATUS</label>
                  <select className="w-full outline-none">
                    <option hidden>Any</option>
                    <option>Ongoing</option>
                    <option>Completed</option>
                    <option>Upcoming</option>
                  </select>
                </div>

                <div className="px-3 py-2">
                  <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-green-700 hover:cursor-pointer">
                    Search Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/**------------------ */}

        {/* Projects Section */}
        <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>

        {/* Our Presence Section */}
        <section
          className="py-10 mt-10 bg-repeat"
          style={{
            backgroundImage:
              "url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')",
          }}
        >
          <div className="w-full mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-semibold text-gray-700 mb-8">
              OUR PRESENCE
            </h2>

            <div className="flex justify-center gap-6 flex-wrap lg:flex-nowrap">
              {[
                { src: "/assest1/delhi.webp", name: "DELHI NCR", w: 70, h: 70 },
                { src: "/assest1/mumbai.webp", name: "MUMBAI", w: 100, h: 100 },
                {
                  src: "/assest1/chandigarh.webp",
                  name: "CHANDIGARH",
                  w: 70,
                  h: 70,
                },
              ].map((city, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white rounded-md shadow p-4 
                     border border-transparent hover:border-green-700 
                     hover:scale-105 cursor-pointer transition-all duration-500
                     min-w-[250px] lg:min-w-[300px]"
                >
                  <Image
                    src={city.src}
                    alt={city.name}
                    width={city.w}
                    height={city.h}
                    className="opacity-80 mr-4"
                  />
                  <p className="text-xl font-medium text-gray-700">
                    {city.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 md:py-15">
          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {galleryData.map((item, index) => (
                <GalleryCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Follow Us Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light tracking-wide mb-12">
              FOLLOW US
            </h2>
            <div className="flex justify-center gap-6 sm:gap-8 md:gap-12">
              {socialLinks.map(({ Icon, href, hoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`text-2xl sm:text-3xl text-gray-800 ${hoverColor} hover:scale-110 transition-all duration-300 cursor-pointer`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-100 py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-8">
              GET IN TOUCH
            </h2>
            <form className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <input
                type="text"
                placeholder="Your name"
                className="flex-1 min-w-[200px] px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 min-w-[200px] px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-colors"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="flex-1 min-w-[200px] px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-800 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <section className="bg-[url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')] bg-repeat bg-center py-10 px-6">
        <div className="mx-auto w-[80%] grid grid-cols-2 md:grid-cols-5 gap-8 text-md text-center md:text-left max-w-7xl">
          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              WHO WE ARE
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Brand Philosophy</li>
              <li>The Logo Story</li>
              <li>The Trident Approach</li>
              <li>Vision & Mission</li>
              <li>Group Chairman</li>
              <li>Leadership Team</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              PROJECTS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Residential</li>
              <li>Commercial</li>
            </ul>

            <h3 className="text-blue-900 font-semibold mt-5 mb-3">
              NEW PROJECTS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Windsong Residences</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              LOCATIONS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Delhi NCR</li>
              <li>Mumbai</li>
              <li>Chandigarh</li>
              <li>
                <span className="bg-blue-900 text-white px-2 py-0.5 font-semibold animate-pulse">
                  Coming Soon
                </span>
              </li>
              <li>Gurugram & Panipat</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              MEDIA CENTER
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>News</li>
              <li>Press Release</li>
              <li>Blogs</li>
              <li>Videos</li>
              <li>Media Centre</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-900 font-semibold mb-3 text-xl">
              OTHER LINKS
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Construction Update</li>
              <li>Testimonials</li>
              <li>Customer Zone</li>
              <li>Associate Zone</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Contact Info Section */}
      <section className="bg-[url('https://tridentrealty.co.in/home/images/bg_happy_customer.webp')] bg-repeat bg-center py-6 shadow-sm border-gray-400 border-t">
        <div className="mx-auto w-[80%] flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-4 text-gray-800 text-center md:text-left max-w-7xl">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <MdOutlinePhoneInTalk size={34} />
            <p>
              <span className="font-medium">Tel:</span>{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                +91 702 603 5000
              </a>
            </p>
          </div>

          <div className="flex items-start gap-3 justify-center md:justify-start">
            <IoLocationOutline size={34} />
            <p>
              <span className="font-bold">Corporate Office</span>
              <br />
              Trident Realty, 16th Floor, DLF Square,
              <br />
              DLF Phase-II, Jacaranda Marg,
              <br />
              Gurugram - 122002, Haryana (India).
            </p>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <TfiEmail size={34} />
            <a
              href="mailto:care@tridentrealty.co.in"
              className="text-blue-600 font-semibold hover:underline"
            >
              care@tridentrealty.co.in
            </a>
          </div>
        </div>
      </section>
      {/* Footer Bottom Section */}
      <footer className="bg-[#0a2d6e] text-white py-8 text-sm">
        <div className="mx-auto w-[80%] flex flex-col md:flex-row items-center justify-between gap-2 px-4 max-w-7xl">
          <div className="text-center md:text-left">
            <p>© Trident Realty, 2025 All Rights Reserved</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-white/90 mt-1">
              <a href="#" className="hover:underline font-semibold">
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
          </div>

          <div className="text-center md:text-right text-white/90 mt-2 md:mt-0">
            Designed By: <span className="font-semibold">CSIPL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
