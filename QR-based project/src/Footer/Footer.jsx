


import { Facebook, Instagram, Twitter, Github } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
  { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
  { icon: Github, href: "https://github.com", ariaLabel: "Github" },
];

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
];

const utilityLinks = [
  { name: "Start Here", href: "/start-here" },
  { name: "Styleguide", href: "/styleguide" },
  { name: "Password Protected", href: "/protected" },
];

const instagramImages = [
  {
    src: "https://i.pinimg.com/736x/66/a4/4b/66a44b3a1bebdf5e54b638d7a2ae07d0.jpg",
    alt: "Food image 1",
  },
  {
    src: "https://i.pinimg.com/736x/ac/02/72/ac02727b15d072dd50c9f375e254375f.jpg",
    alt: "Food image 2",
  },
  {
    src: "https://i.pinimg.com/736x/c4/40/0f/c4400f1f2c8441cb7c6eea6844a79135.jpg",
    alt: "Food image 3",
  },
  {
    src: "https://i.pinimg.com/736x/0c/e6/5c/0ce65c400915efb0d7439e271c2e231f.jpg",
    alt: "Food image 4",
  },
];

const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={clsx("bg-[#1A0D0F] text-white py-12", className)}>
      <div className="w-5/6 mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center ">
          {/* Logo and Company Description */}
          <div className="space-y-12 ">
            <div className="flex items-center space-x-12">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45" />
              </div>
              <h2 className="text-4xl  lg:text-8xl font-serif italic">flavor Bliss</h2>
            </div>
            <p className="text-sm lg:text-4xl text-gray-400 leading-relaxed">
            In the new era of technology we look a in the future with certainty and pride to for our company and.
            </p>
            <div className="flex space-x-3 ">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className="bg-red-600 p-4 rounded-full hover:bg-red-700 transition-colors "
                >
                  {React.createElement(link.icon, { className: "lg:h-10 lg:w-10 text-white" })}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-12">
            <h3 className="text-4xl  lg:text-6xl font-medium">Pages</h3>
            <nav>
              <ul className="space-y-12">
                {mainLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors lg:text-5xl "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Utility Pages */}
          <div className="space-y-12">
            <h3 className="text-4xl  lg:text-6xl font-medium">Utility Pages</h3>
            <nav>
              <ul className="space-y-12">
                {utilityLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors lg:text-5xl"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Instagram Section */}
          <div className="space-y-12 ">
            <h3 className="text-4xl lg:text-6xl font-medium ">Follow Us On Instagram</h3>
            <div className="grid grid-cols-2 gap-2">
              {instagramImages.map((image, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="overflow-hidden rounded-lg block aspect-square"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-sm text-gray-500">
            Copyright © {currentYear} Hashtag Developer. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;