import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../utils/api";

const MotionDesigns = () => {
  const [motions, setMotions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/projects?category=motion-designs")
      .then((res) => {
        setMotions(res.data);
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
          <h1 className="text-5xl font-bold mb-4">Motion Design</h1>
          <p className="text-gray-400 text-lg">
            Animations and motion graphics
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {motions.map((motion, index) => (
              <motion.div
                key={motion._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden"
              >
                <div className="aspect-video bg-gray-800">
                  {motion.videoUrl ? (
                    <video
                      src={motion.videoUrl}
                      controls
                      className="w-full h-full"
                    />
                  ) : (
                    <img
                      src={motion.thumbnail}
                      alt={motion.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{motion.title}</h3>
                  <p className="text-gray-400">{motion.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && motions.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No motion designs yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MotionDesigns;
