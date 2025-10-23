import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">

        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Sanskar Tiwari</h2>

        {/* Description */}
        <p className="text-gray-400 mt-2">MERN Stack Developer</p>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=61582304766253" },
            { icon: <FaTwitter />, link: "https://x.com/SanskarTiwari97" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sanskar-tiwari-44b77b382/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/mern_stack_developer_2340/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/@SanskarTiwari-e1q" },
            
          ].map((social, index) => (
            <a
              key={social.link || index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Sanskar Tiwari. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
