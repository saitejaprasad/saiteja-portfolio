import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pt-24 px-4 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-8 text-center">Get In Touch</h1>
          <p className="text-xl text-gray-400 text-center mb-12">
            I'm always open to collaboration, feedback, or just a friendly chat
            about code. Reach out through any of the platforms below!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.a
              href="mailto:sunkarasaitejaprasad@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 rounded-xl text-center hover:bg-white/10 transition"
            >
              <FaEnvelope className="text-5xl mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">sunkarasaitejaprasad@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sai-teja-prasad-sunkara-557268164/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 rounded-xl text-center hover:bg-white/10 transition"
            >
              <FaLinkedin className="text-5xl mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </motion.a>

            <motion.a
              href="https://github.com/saitejaprasad"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 rounded-xl text-center hover:bg-white/10 transition"
            >
              <FaGithub className="text-5xl mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">Check out my code</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
