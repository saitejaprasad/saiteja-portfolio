import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaPlus, FaEdit, FaTrash, FaSignOutAlt } from "react-icons/fa";
import api from "../../utils/api";

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
    featured: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/projects");
      setProjects(response.data);
    } catch {
      toast.error("Failed to fetch projects");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
    toast.success("Logged out successfully");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...formData,
        technologies: formData.technologies.split(",").map((t) => t.trim()),
      };

      if (editingProject) {
        await api.put(`/projects/${editingProject._id}`, data);
        toast.success("Project updated!");
      } else {
        await api.post("/projects", data);
        toast.success("Project created!");
      }

      resetForm();
      fetchProjects();
    } catch (error) {
      toast.error("Operation failed");
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      ...project,
      technologies: project.technologies.join(", "),
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await api.delete(`/projects/${id}`);
      toast.success("Project deleted!");
      fetchProjects();
    } catch {
      toast.error("Delete failed");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "web-development",
      technologies: "",
      thumbnail: "",
      githubUrl: "",
      liveUrl: "",
      featured: false,
    });
    setEditingProject(null);
    setShowForm(false);
  };

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary flex items-center gap-2"
            >
              <FaPlus /> Add Project
            </button>
            <button
              onClick={handleLogout}
              className="btn-secondary flex items-center gap-2"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect p-6 rounded-xl mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">
              {editingProject ? "Edit" : "Add"} Project
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Title"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
              />
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
              >
                <option value="web-development">Web Development</option>
                <option value="ui-ux-design">UI/UX Design</option>
                <option value="motion-design">Motion Design</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Description"
                required
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg md:col-span-2"
                rows="3"
              />
              <input
                type="text"
                placeholder="Technologies (comma separated)"
                value={formData.technologies}
                onChange={(e) =>
                  setFormData({ ...formData, technologies: e.target.value })
                }
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg md:col-span-2"
              />
              <input
                type="url"
                placeholder="Thumbnail URL"
                required
                value={formData.thumbnail}
                onChange={(e) =>
                  setFormData({ ...formData, thumbnail: e.target.value })
                }
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
              />
              <input
                type="url"
                placeholder="GitHub URL"
                value={formData.githubUrl}
                onChange={(e) =>
                  setFormData({ ...formData, githubUrl: e.target.value })
                }
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
              />
              <input
                type="url"
                placeholder="Live URL"
                value={formData.liveUrl}
                onChange={(e) =>
                  setFormData({ ...formData, liveUrl: e.target.value })
                }
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                />
                Featured Project
              </label>
              <div className="flex gap-4 md:col-span-2">
                <button type="submit" className="btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="px-4 py-2 bg-blue-500 rounded flex items-center gap-2"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="px-4 py-2 bg-red-500 rounded flex items-center gap-2"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
