// import React from "react";
// import { Linkedin, Instagram } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import logo from "../../public/logo5.png";

// const WHATSAPP_NUMBER = "919966629766";
// const WHATSAPP_MESSAGE =
//   "Hello! I would like to know more about VORN HR.";

// const Footer: React.FC = () => {
//   const links = [
//     { title: "Product", items: ["Features", "Pricing", "API", "Mobile"] },
//     { title: "Company", items: ["About", "Blog", "Careers", "Contact"] },
//     { title: "Resources", items: ["Help", "Docs", "Community", "Status"] },
//     { title: "Legal", items: ["Privacy", "Terms", "Security"] },
//   ];

//   const socialLinks = [
//     {
//       icon: Linkedin,
//       url: "https://www.linkedin.com/company/abhivorn-technologies/posts/?feedView=all",
//       label: "LinkedIn",
//     },
//     {
//       icon: Instagram,
//       url: "https://www.instagram.com/abhivorn_technologies",
//       label: "Instagram",
//     },
//   ];

//   const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//     WHATSAPP_MESSAGE
//   )}`;

//   return (
//     <footer className="relative bg-gray-900 text-white">
//       {/* Top Gradient */}
//       <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />

//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col md:flex-row gap-12">
//           {/* BRAND */}
//           <div className="md:w-2/5">
//             <img src={logo} alt="Logo" className="h-10 w-auto mb-4" />

//             <p className="text-gray-300 text-sm max-w-sm mb-6">
//               All-in-one HR platform for efficient team management and growth.
//             </p>

//             {/* SOCIAL ICONS */}
//             <div className="flex space-x-3">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;
//                 return (
//                   <a
//                     key={social.label}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="h-9 w-9 rounded-full bg-white/10
//                                flex items-center justify-center
//                                hover:bg-white/20 transition"
//                   >
//                     <Icon className="h-4 w-4" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* LINKS */}
//           <div className="flex flex-1 flex-wrap justify-between gap-8">
//             {links.map((section) => (
//               <div key={section.title}>
//                 <h4 className="font-semibold mb-4">{section.title}</h4>
//                 <ul className="space-y-2">
//                   {section.items.map((item) => (
//                     <li key={item}>
//                       <a
//                         href="#"
//                         className="text-gray-300 hover:text-cyan-300 text-sm"
//                       >
//                         {item}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="my-10 border-t border-gray-800" />

//         <div className="text-center text-gray-400 text-sm">
//           © {new Date().getFullYear()} VORN HR. All rights reserved.
//         </div>
//       </div>

//       {/* ✅ WHATSAPP ICON INSIDE FOOTER */}
//       <a
//         href={whatsappUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat on WhatsApp"
//         className="absolute bottom-6 right-6
//                    h-14 w-14 rounded-full bg-green-500 text-white
//                    flex items-center justify-center
//                    shadow-xl hover:scale-105 transition"
//       >
//         <FaWhatsapp className="h-7 w-7" />
//       </a>
//     </footer>
//   );
// };

// export default Footer;














import React from "react";
import { Linkedin, Instagram } from "lucide-react";
import logo from "../../public/logo5.png";

const Footer: React.FC = () => {
  const links = [
    { title: "Product", items: ["Features", "Pricing", "API", "Mobile"] },
    { title: "Company", items: ["About", "Blog", "Careers", "Contact"] },
    { title: "Resources", items: ["Help", "Docs", "Community", "Status"] },
    { title: "Legal", items: ["Privacy", "Terms", "Security"] },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/abhivorn-technologies/posts/?feedView=all",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/abhivorn_technologies",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* TOP GRADIENT */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* BRAND */}
          <div className="lg:w-2/5">
            <img src={logo} alt="VORN HR Logo" className="h-10 w-auto mb-4" />

            <p className="text-gray-300 text-sm max-w-sm mb-6 leading-relaxed">
              All-in-one HR platform for efficient team management and growth.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-9 w-9 rounded-full bg-white/10
                               flex items-center justify-center
                               hover:bg-white/20 transition"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* LINKS */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {links.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4 text-sm tracking-wide">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-cyan-300
                                   text-sm transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-gray-800" />

        {/* BOTTOM */}
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} VORN HR. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
