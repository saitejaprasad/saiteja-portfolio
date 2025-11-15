import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/sai-teja-prasad-sunkara-557268164/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      url: "https://github.com/saitejaprasad",
      label: "GitHub",
    },
    {
      icon: FaYoutube,
      url: "https://www.youtube.com/@SaiTejaPrasadSunkara",
      label: "YouTube",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/tej_sunkaraa/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative z-10 glass-effect border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">
              SaiTeja Prasad
            </h3>
            <p className="text-gray-400">
              Web Developer | Backend Enthusiast | React Craftsman
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/ui-ux-designs"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  UI/UX Designs
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <a
              href="mailto:sunkarasaitejaprasad@gmail.com"
              className="flex items-center gap-2 mt-4 text-gray-400 hover:text-blue-400"
            >
              <FaEnvelope /> sunkarasaitejaprasad@gmail.com
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SaiTeja Prasad. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
