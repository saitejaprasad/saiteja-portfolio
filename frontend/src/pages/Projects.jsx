import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../utils/api";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web-development", label: "Web Development" },
    { id: "ui-ux-design", label: "UI/UX Design" },
    { id: "motion-design", label: "Motion Design" },
    { id: "machine-learning", label: "Machine Learning" },
    { id: "data-analytics", label: "Data Analytics" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const endpoint =
          activeCategory === "all"
            ? "/projects"
            : `/projects?category=${activeCategory}`;
        const response = await api.get(endpoint);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, [activeCategory]);

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-400">
            Explore my work across different domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "bg-dark-card text-gray-300 hover:bg-dark-border"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import api from "../utils/api";
// import ProjectCard from "../components/ProjectCard";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(true);
//   const [ActiveCategory, setActiveCategory] = useState("all");

//   const categories = [
//     // { value: "all", label: "All Projects" },
//     { id: "all", label: "All Projects" },
//     { id: "web-development", label: "Web Development" },
//     { id: "ui-ux-design", label: "UI/UX Design" },
//     { id: "motion-design", label: "Motion Design" },
//     { id: "machine-learning", label: "Machine Learning" },
//     { id: "data-analytics", label: "Data Analytics" },
//     { id: "other", label: "Other" },
//   ];

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const endpoint =
//           ActiveCategory === "all"
//             ? "/projects"
//             : `/projects?category=${ActiveCategory}`;
//         const response = await api.get(endpoint);
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       }
//     };
//     fetchProjects();
//   }, [ActiveCategory]);

//   // useEffect(() => {
//   //   const fetchProjects = async () => {
//   //     try {
//   //       setLoading(true);
//   //       const url =
//   //         filter === "all" ? "/projects" : `/projects?category=${filter}`;
//   //       const response = await api.get(url);
//   //       setProjects(response.data);
//   //     } catch (error) {
//   //       console.error("Error fetching projects:", error);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchProjects();
//   // }, [filter]);

//   return (
//     <div className="pt-24 px-4 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl font-bold mb-4">My Projects</h1>
//           <p className="text-gray-400 text-lg">
//             Explore my work across different domains
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap gap-4 justify-center mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-6 py-2 rounded-lg transition ${
//                 ActiveCategory === category.id
//                   ? "bg-blue-500 text-white"
//                   : "glass-effect hover:bg-white/10"
//               }`}
//             >
//               {category.label}
//             </button>
//           ))}
//         </div>

//         {loading ? (
//           <div className="flex justify-center py-20">
//             <div className="loading-spinner"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project) => (
//               <ProjectCard key={project._id} project={project} />
//             ))}
//           </div>
//         )}

//         {!loading && projects.length === 0 && (
//           <div className="text-center py-20">
//             <p className="text-gray-400 text-lg">
//               No projects found in this category.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;
