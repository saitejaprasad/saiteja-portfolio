import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";
import ProjectCard from "../components/ProjectCard";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    api
      .get("/projects?featured=true")
      .then((res) => setFeaturedProjects(res.data.slice(0, 3)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section with Photo */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-16"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50">
                {/* <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-3xl overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50"> */}
                {/* <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/50 animate-pulse"> */}
                <img
                  src="https://res.cloudinary.com/dutw9egsc/image/upload/v1763101209/6EFD3610-0C86-4598-A979-57DEEFE4D815_wxsfpw.jpg"
                  alt="SaiTeja Prasad"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50">
                <img
                  src="https://res.cloudinary.com/dutw9egsc/image/upload/v1763101209/6EFD3610-0C86-4598-A979-57DEEFE4D815_wxsfpw.jpg"
                  alt="SaiTeja Prasad"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div> */}

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">SaiTeja</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Web Developer | Backend Enthusiast | React Craftsman
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects" className="btn-primary">
                View My Work
              </Link>

              <a
                href="mailto:sunkarasaitejaprasad@gmail.com"
                className="btn-secondary flex items-center gap-2 justify-center"
              >
                <FaEnvelope /> Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary inline-block">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
