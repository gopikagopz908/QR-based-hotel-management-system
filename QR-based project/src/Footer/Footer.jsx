// import { Facebook, Instagram, Twitter, Github } from "lucide-react";
// import React from 'react'
// import { Link } from "react-router-dom";
// import clsx from "clsx"; // Use 'clsx' if 'cn' is not available

// const socialLinks = [
//   { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
//   { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
//   { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
//   { icon: Github, href: "https://github.com", ariaLabel: "Github" },
// ];

// const mainLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Menu", href: "/menu" },
// ];

// const utilityLinks = [
//   { name: "Start Here", href: "/start-here" },
//   { name: "Styleguide", href: "/styleguide" },
//   { name: "Password Protected", href: "/protected" },
// ];

// const instagramImages = [
//   {
//     src: "https://i.pinimg.com/736x/66/a4/4b/66a44b3a1bebdf5e54b638d7a2ae07d0.jpg",
//     alt: "Food image 1",
//   },
//   {
//     src: "https://i.pinimg.com/736x/ac/02/72/ac02727b15d072dd50c9f375e254375f.jpg",
//     alt: "Food image 2",
//   },
//   {
//     src: "https://i.pinimg.com/736x/c4/40/0f/c4400f1f2c8441cb7c6eea6844a79135.jpg",
//     alt: "Food image 3",
//   },
//   {
//     src: "https://i.pinimg.com/736x/0c/e6/5c/0ce65c400915efb0d7439e271c2e231f.jpg",
//     alt: "Food image 4",
//   },
// ];

// const Footer = ({ className }) => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className={clsx("bg-black text-white py-16 h-[800px] ", className)}>
//       <div className="container mx-auto px-6 md:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
//           {/* Logo and Company Description */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//                 <div className="w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45" />
//               </div>
//               <h2 className="text-2xl font-serif italic">flavor Bliss</h2>
//             </div>
            
//             <p className="text-gray-400 text-sm leading-relaxed">
//               In the new era of technology we look a in the future with certainty and pride for our company.
//             </p>

//             {/* Social Links */}
//             <div className="flex space-x-3">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   aria-label={link.ariaLabel}
//                   className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
//                 >
//                   {React.createElement(link.icon, { className: "h-4 w-4 text-white" })}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Pages */}
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium">Pages</h3>
//             <nav>
//               <ul className="space-y-4">
//                 {mainLinks.map((link, index) => (
//                   <li key={index}>
//                     <Link
//                       to={link.href}
//                       className="text-gray-400 hover:text-white transition-colors"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* Utility Pages */}
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium">Utility Pages</h3>
//             <nav>
//               <ul className="space-y-4">
//                 {utilityLinks.map((link, index) => (
//                   <li key={index}>
//                     <Link
//                       to={link.href}
//                       className="text-gray-400 hover:text-white transition-colors"
//                     >
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>

//           {/* Instagram Section */}
//           <div className="space-y-6">
//             <h3 className="text-lg font-medium">Follow Us On Instagram</h3>
//             <div className="grid grid-cols-2 gap-2">
//               {instagramImages.map((image, index) => (
//                 <a 
//                   key={index} 
//                   href="#" 
//                   className="overflow-hidden rounded-lg block aspect-square"
//                 >
//                   <img
//                     src={image.src}
//                     alt={image.alt}
//                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                   />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <p className="text-center text-sm text-gray-500">
//             Copyright © {currentYear} Hashtag Developer. All Rights Reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { Facebook, Instagram, Twitter, Github } from "lucide-react";
// import React from "react";
// import { Link } from "react-router-dom";
// import clsx from "clsx";

// const socialLinks = [
//   { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
//   { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
//   { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
//   { icon: Github, href: "https://github.com", ariaLabel: "Github" },
// ];

// const mainLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Menu", href: "/menu" },
// ];

// const utilityLinks = [
//   { name: "Start Here", href: "/start-here" },
//   { name: "Styleguide", href: "/styleguide" },
//   { name: "Password Protected", href: "/protected" },
// ];

// const instagramImages = [
//   {
//     src: "https://i.pinimg.com/736x/66/a4/4b/66a44b3a1bebdf5e54b638d7a2ae07d0.jpg",
//     alt: "Food image 1",
//   },
//   {
//     src: "https://i.pinimg.com/736x/ac/02/72/ac02727b15d072dd50c9f375e254375f.jpg",
//     alt: "Food image 2",
//   },
//   {
//     src: "https://i.pinimg.com/736x/c4/40/0f/c4400f1f2c8441cb7c6eea6844a79135.jpg",
//     alt: "Food image 3",
//   },
//   {
//     src: "https://i.pinimg.com/736x/0c/e6/5c/0ce65c400915efb0d7439e271c2e231f.jpg",
//     alt: "Food image 4",
//   },
// ];

// const Footer = ({ className }) => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className={clsx("bg-[#1A0D0F] text-white py-16 h-[1000px]", className)}>
//       <div className="w-5/6 bg-red-500 mx-auto px-6 h-full">
//         <div className="flex flex-wrap justify-between gap-12">
//           {/* Logo and Description */}
//           <div className="flex-1 w-[500px] space-y-4">
//             <div className="flex items-center space-x-3">
//               {/* Logo Placeholder */}
//               <div className="w-10 h-10 rounded-full overflow-hidden border border-white">
//                 {/* Replace this with your logo image */}
//                 <img src="/your-logo.png" alt="Logo" className="w-full h-full object-cover" />
//               </div>
//               <h2 className="text-6xl font-serif italic">flavor Bliss</h2>
//             </div>
//             <p className="text-gray-400 text-2xl leading-relaxed">
//               In the new era of technology we look in the future with certainty and pride to for our company and.
//             </p>
//             <div className="flex space-x-3 pt-2">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   aria-label={link.ariaLabel}
//                   className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
//                 >
//                   {React.createElement(link.icon, { className: "h-4 w-4 text-white" })}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Main Links */}
//           <div className="min-w-[120px] space-y-4">
//             <h3 className="text-6xl font-medium">Pages</h3>
//             <ul className="space-y-2">
//               {mainLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-2xl">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Utility Links */}
//           <div className="min-w-[160px] space-y-4">
//             <h3 className="text-6xl font-medium">Utility Pages</h3>
//             <ul className="space-y-2">
//               {utilityLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link to={link.href} className="text-gray-400 hover:text-white transition-colors text-2xl">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Instagram Images */}
//           {/* <div className="space-y-4 min-w-[160px]">
//             <h3 className="text-lg font-medium">Follow Us On Instagram</h3>
//             <div className="grid grid-cols-2 gap-2">
//               {instagramImages.map((img, index) => (
//                 <a key={index} href="#" className="overflow-hidden rounded-lg block aspect-square">
//                   <img
//                     src={img.src}
//                     alt={img.alt}
//                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//                   />
//                 </a>
//               ))}
//             </div>
//           </div> */}
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <p className="text-center text-sm text-gray-500">
//             Copyright © {currentYear} Hashtag Developer. All Rights Reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


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
          <div className="space-y-2 ">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45" />
              </div>
              <h2 className="text-4xl font-serif italic">favor Bliss</h2>
            </div>
            <p className="text-gray-400 text-4xl leading-relaxed">
              In the new era of technology we look a in the future with certainty and pride to for our company and.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
                >
                  {React.createElement(link.icon, { className: "h-4 w-4 text-white" })}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-2">
            <h3 className="text-4xl font-medium">Pages</h3>
            <nav>
              <ul className="space-y-4">
                {mainLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Utility Pages */}
          <div className="space-y-2">
            <h3 className="text-4xl font-medium">Utility Pages</h3>
            <nav>
              <ul className="space-y-4">
                {utilityLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Instagram Section */}
          <div className="space-y-2">
            <h3 className="text-4xl font-medium">Follow Us On Instagram</h3>
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