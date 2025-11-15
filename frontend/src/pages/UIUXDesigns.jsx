import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../utils/api";

const UIUXDesigns = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/projects?category=ui-ux-designs")
      .then((res) => {
        setDesigns(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">UI/UX Designs</h1>
          <p className="text-gray-400 text-lg">
            My design explorations and user interface work
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className="masonry-grid">
            {designs.map((design, index) => (
              <motion.div
                key={design._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="masonry-item"
              >
                <div className="glass-effect rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer">
                  <img
                    src={design.thumbnail}
                    alt={design.title}
                    className="w-full"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{design.title}</h3>
                    <p className="text-gray-400">{design.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && designs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No UI/UX designs yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UIUXDesigns;
