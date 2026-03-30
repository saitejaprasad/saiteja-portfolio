import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "web-development",
    technologies: "",
    thumbnail: "",
    githubUrl: "",
    liveUrl: "",
    videoUrl: "",
    dashboardUrl: "",
    notebookUrl: "",
    featured: false,
  });

  const navigate = useNavigate();

  const categories = [
    { value: "web-development", label: "Web Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "motion-design", label: "Motion Design" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "data-analytics", label: "Data Analytics" },
    { value: "other", label: "Other" },
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(",").map((t) => t.trim()),
      };

      if (editingProject) {
        await api.put(`/projects/${editingProject._id}`, projectData);
        toast.success("Project updated successfully!");
      } else {
        await api.post("/projects", projectData);
        toast.success("Project created successfully!");
      }

      setShowForm(false);
      setEditingProject(null);
      setFormData({
        title: "",
        description: "",
        category: "web-development",
        technologies: "",
        thumbnail: "",
        githubUrl: "",
        liveUrl: "",
        videoUrl: "",
        dashboardUrl: "",
        notebookUrl: "",
        featured: false,
      });
      fetchProjects();
    } catch (error) {
      toast.error("Error saving project");
      console.error("Error:", error);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      technologies: project.technologies.join(", "),
      thumbnail: project.thumbnail,
      githubUrl: project.githubUrl || "",
      liveUrl: project.liveUrl || "",
      videoUrl: project.videoUrl || "",
      dashboardUrl: project.dashboardUrl || "",
      notebookUrl: project.notebookUrl || "",
      featured: project.featured,
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await api.delete(`/projects/${id}`);
        toast.success("Project deleted successfully!");
        fetchProjects();
      } catch (error) {
        toast.error("Error deleting project");
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button onClick={() => setShowForm(true)} className="btn-primary">
              + Add Project
            </button>
            <button onClick={handleLogout} className="btn-secondary">
              🚪 Logout
            </button>
          </div>
        </div>

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-dark-card p-8 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-6">
                {editingProject ? "Edit Project" : "Add New Project"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full p-3 bg-dark-bg rounded-lg border border-dark-border focus:border-blue-500 outline-none"
                  required
                />

                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full p-3 bg-dark-bg rounded-lg border border-dark-border focus:border-blue-500 outline-none"
                  required
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Project Description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full p-3 bg-dark-bg rounded-lg border border-dark-border focus:border-blue-500 outline-none h-32"
                  required
                />

                <input
                  type="text"
                  placeholder="Technologies (comma-separated): Python, TensorFlow, Pandas"
                  value={formData.technologies}
                  onChange={(e) =>
                    setFormData({ ...formData, technologies: e.target.value })
                  }
                  className="w-full p-3 bg-dark-bg rounded-lg border border-dark-border focus:border-blue-500 outline-none"
                  required
                />

                <input
                  type="url"
                  placeholder="Thumbnail URL (from Imgur)"
                  value={formData.thumbnail}
                  onChange={(e) =>
                    setFormData({ ...formData, thumbnail: e.target.value })
                  }
                  className="w-full p-3 bg-dark-bg rounded-lg border border-dark-border focus:border-blue-500 outline-none"
                  required
                />

                <input
                  type="url"
                  placeholder="GitHub URL (optional)"
                  value={formData.githubUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, githubUrl: e.target.value })
                  }
                  className="w-full p-3 bg-dark-bg rounded-lg border border-dark-border focus:border-blue-500 outline-none"
                />

                <input
                  type="url"
                  placeholder="Live Demo URL (optional)"
                  value={formData.liveUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, liveUrl: e.target.value })
                  }
                  className="w-full p-3 bg-dark-bg rounded-lg border border-dark-border focus:border-blue-500 outline-none"
                />

                <input
                  type="url"
                  placeholder="Dashboard URL - for Data Analytics projects (optional)"
                  value={formData.dashboardUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, dashboardUrl: e.target.value })
                  }
                  className="w-full p-3 bg-dark-bg rounded-lg border border-dark-border focus:border-blue-500 outline-none"
                />

                <input
                  type="url"
                  placeholder="Jupyter Notebook URL - for ML projects (optional)"
                  value={formData.notebookUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, notebookUrl: e.target.value })
                  }
                  className="w-full p-3 bg-dark-bg rounded-lg border border-dark-border focus:border-blue-500 outline-none"
                />

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    className="w-5 h-5"
                  />
                  <span>Featured Project (show on homepage)</span>
                </label>

                <div className="flex gap-4">
                  <button type="submit" className="btn-primary flex-1">
                    {editingProject ? "Update" : "Create"} Project
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingProject(null);
                    }}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Projects List */}
        <div className="grid gap-4">
          {projects.map((project) => (
            <div key={project._id} className="glass-effect p-6 rounded-xl">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-2">
                    {project.description.substring(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            <p className="text-xl mb-4">No projects yet!</p>
            <button onClick={() => setShowForm(true)} className="btn-primary">
              Add Your First Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { FaPlus, FaEdit, FaTrash, FaSignOutAlt } from "react-icons/fa";
// import api from "../../utils/api";

// const AdminDashboard = () => {
//   const [projects, setProjects] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "web-development",
//     technologies: "",
//     thumbnail: "",
//     githubUrl: "",
//     liveUrl: "",
//     featured: false,
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const response = await api.get("/projects");
//       setProjects(response.data);
//     } catch {
//       toast.error("Failed to fetch projects");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     navigate("/admin/login");
//     toast.success("Logged out successfully");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = {
//         ...formData,
//         technologies: formData.technologies.split(",").map((t) => t.trim()),
//       };

//       if (editingProject) {
//         await api.put(`/projects/${editingProject._id}`, data);
//         toast.success("Project updated!");
//       } else {
//         await api.post("/projects", data);
//         toast.success("Project created!");
//       }

//       resetForm();
//       fetchProjects();
//     } catch (error) {
//       toast.error("Operation failed");
//     }
//   };

//   const handleEdit = (project) => {
//     setEditingProject(project);
//     setFormData({
//       ...project,
//       technologies: project.technologies.join(", "),
//     });
//     setShowForm(true);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure?")) return;
//     try {
//       await api.delete(`/projects/${id}`);
//       toast.success("Project deleted!");
//       fetchProjects();
//     } catch {
//       toast.error("Delete failed");
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       title: "",
//       description: "",
//       category: "web-development",
//       technologies: "",
//       thumbnail: "",
//       githubUrl: "",
//       liveUrl: "",
//       featured: false,
//     });
//     setEditingProject(null);
//     setShowForm(false);
//   };

//   return (
//     <div className="pt-24 px-4 min-h-screen">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-bold">Admin Dashboard</h1>
//           <div className="flex gap-4">
//             <button
//               onClick={() => setShowForm(!showForm)}
//               className="btn-primary flex items-center gap-2"
//             >
//               <FaPlus /> Add Project
//             </button>
//             <button
//               onClick={handleLogout}
//               className="btn-secondary flex items-center gap-2"
//             >
//               <FaSignOutAlt /> Logout
//             </button>
//           </div>
//         </div>

//         {showForm && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="glass-effect p-6 rounded-xl mb-8"
//           >
//             <h2 className="text-2xl font-bold mb-4">
//               {editingProject ? "Edit" : "Add"} Project
//             </h2>
//             <form
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 md:grid-cols-2 gap-4"
//             >
//               <input
//                 type="text"
//                 placeholder="Title"
//                 required
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({ ...formData, title: e.target.value })
//                 }
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
//               />
//               <select
//                 value={formData.category}
//                 onChange={(e) =>
//                   setFormData({ ...formData, category: e.target.value })
//                 }
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
//               >
//                 <option value="web-development">Web Development</option>
//                 <option value="ui-ux-design">UI/UX Design</option>
//                 <option value="motion-design">Motion Design</option>
//                 <option value="graphic-design">Graphic Design</option>
//                 <option value="dashboard">Dashboard</option>
//                 <option value="machine-learning">Machine Learning</option>
//                 <option value="other">Other</option>
//               </select>
//               <textarea
//                 placeholder="Description"
//                 required
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData({ ...formData, description: e.target.value })
//                 }
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg md:col-span-2"
//                 rows="3"
//               />
//               <input
//                 type="text"
//                 placeholder="Technologies (comma separated)"
//                 value={formData.technologies}
//                 onChange={(e) =>
//                   setFormData({ ...formData, technologies: e.target.value })
//                 }
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg md:col-span-2"
//               />
//               <input
//                 type="url"
//                 placeholder="Thumbnail URL"
//                 required
//                 value={formData.thumbnail}
//                 onChange={(e) =>
//                   setFormData({ ...formData, thumbnail: e.target.value })
//                 }
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
//               />
//               <input
//                 type="url"
//                 placeholder="GitHub URL"
//                 value={formData.githubUrl}
//                 onChange={(e) =>
//                   setFormData({ ...formData, githubUrl: e.target.value })
//                 }
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
//               />
//               <input
//                 type="url"
//                 placeholder="Live URL"
//                 value={formData.liveUrl}
//                 onChange={(e) =>
//                   setFormData({ ...formData, liveUrl: e.target.value })
//                 }
//                 className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
//               />
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={formData.featured}
//                   onChange={(e) =>
//                     setFormData({ ...formData, featured: e.target.checked })
//                   }
//                 />
//                 Featured Project
//               </label>
//               <div className="flex gap-4 md:col-span-2">
//                 <button type="submit" className="btn-primary">
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   onClick={resetForm}
//                   className="btn-secondary"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         )}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <div
//               key={project._id}
//               className="glass-effect rounded-xl overflow-hidden"
//             >
//               <img
//                 src={project.thumbnail}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-gray-400 text-sm mb-4 line-clamp-2">
//                   {project.description}
//                 </p>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => handleEdit(project)}
//                     className="px-4 py-2 bg-blue-500 rounded flex items-center gap-2"
//                   >
//                     <FaEdit /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(project._id)}
//                     className="px-4 py-2 bg-red-500 rounded flex items-center gap-2"
//                   >
//                     <FaTrash /> Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
