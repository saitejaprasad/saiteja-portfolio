import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import api from "../utils/api";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/projects/${id}`)
      .then((res) => {
        setProject(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  if (!project)
    return (
      <div className="text-center pt-32 text-gray-400">Project not found</div>
    );

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/projects"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg mb-8">{project.description}</p>

          <div className="mb-8">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <FaGithub /> View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>

          <div className="glass-effect p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.detailedDescription && (
            <div className="glass-effect p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-gray-300 whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
