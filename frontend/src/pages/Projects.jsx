import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../utils/api";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web-development", label: "Web Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "motion-design", label: "Motion Design" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const url =
          filter === "all" ? "/projects" : `/projects?category=${filter}`;
        const response = await api.get(url);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [filter]);

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-400 text-lg">
            Explore my work across different domains
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2 rounded-lg transition ${
                filter === category.value
                  ? "bg-blue-500 text-white"
                  : "glass-effect hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}

        {!loading && projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
