import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChartBar,
  FaBook,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const getCategoryColor = (category) => {
    const colors = {
      "web-development": "bg-blue-500/20 text-blue-400",
      "ui-ux-design": "bg-purple-500/20 text-purple-400",
      "motion-design": "bg-pink-500/20 text-pink-400",
      "machine-learning": "bg-green-500/20 text-green-400",
      "data-analytics": "bg-yellow-500/20 text-yellow-400",
      other: "bg-gray-500/20 text-gray-400",
    };
    return colors[category] || colors["other"];
  };

  const formatCategoryName = (category) => {
    if (!category) return "OTHER";
    return category.replace(/-/g, " ").toUpperCase();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="project-card glass-effect rounded-xl overflow-hidden"
    >
      <Link to={`/projects/${project._id}`}>
        <div className="relative h-64">
          <img
            src={project.thumbnail || "https://via.placeholder.com/400x300"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs ${getCategoryColor(
              project.category
            )}`}
          >
            {formatCategoryName(project.category)}
          </span>
          {project.technologies?.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
          {project.dashboardUrl && (
            <a
              href={project.dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400"
            >
              <FaChartBar /> Dashboard
            </a>
          )}
          {project.notebookUrl && (
            <a
              href={project.notebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-green-400"
            >
              <FaBook /> Notebook
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const ProjectCard = ({ project }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="project-card glass-effect rounded-xl overflow-hidden"
//     >
//       <Link to={`/projects/${project._id}`}>
//         <div className="relative h-64">
//           <img
//             src={project.thumbnail || "https://via.placeholder.com/400x300"}
//             alt={project.title}
//             className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//           <div className="absolute bottom-4 left-4 right-4">
//             <h3 className="text-xl font-bold text-white mb-2">
//               {project.title}
//             </h3>
//             <p className="text-gray-300 text-sm line-clamp-2">
//               {project.description}
//             </p>
//           </div>
//         </div>
//       </Link>
//       <div className="p-6">
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.technologies?.slice(0, 4).map((tech, index) => (
//             <span
//               key={index}
//               className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//         <div className="flex gap-4">
//           {project.githubUrl && (
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-400 hover:text-blue-400"
//             >
//               <FaGithub /> GitHub
//             </a>
//           )}
//           {project.liveUrl && (
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-gray-400 hover:text-blue-400"
//             >
//               <FaExternalLinkAlt /> Live Demo
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;
