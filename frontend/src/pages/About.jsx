import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-8">About Me</h1>

          <div className="glass-effect p-8 rounded-xl mb-8">
            <p className="text-lg text-gray-300 mb-4">
              I'm SaiTeja Prasad Sunkara, a curious and hands-on learner with a
              passion for technology, data, and problem-solving. Alongside my
              web development skills in Node.js, Express, and React, I've gained
              a strong foundation in business analytics and data science,
              applying insights to drive smarter decisions.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              I'm proficient in multiple programming languages like Python,
              Java, C#, JavaScript, and .NET, which allows me to approach
              challenges from both a software development and analytical
              perspective.
            </p>
            <p className="text-lg text-gray-300">
              Recently, I've been expanding my toolkit with technologies like
              Tailwind CSS and Next.js to sharpen the design and functionality
              of my projects. What excites me most is problem-solving—whether
              it's debugging tricky issues, mapping out clean logic, or turning
              raw concepts into elegant, functional code.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Backend Development
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Node.js & Express</li>
                  <li>• MongoDB & PostgreSQL</li>
                  <li>• RESTful APIs</li>
                  <li>• Authentication & Security</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Frontend Development
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• React & Next.js</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                  <li>• UI/UX Principles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Programming Languages
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• JavaScript/TypeScript</li>
                  <li>• Python</li>
                  <li>• Java</li>
                  <li>• C#</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Data & Analytics
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Data Science</li>
                  <li>• Business Analytics</li>
                  <li>• Problem Solving</li>
                  <li>• .NET Framework</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
