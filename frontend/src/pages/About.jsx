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
              I'm SaiTeja Prasad Sunkara, a Healthcare Data Analyst with 3+
              years of experience transforming clinical and operational datasets
              into actionable insights. With my M.S. in Information Science &
              Technology from Missouri University of Science & Technology, I
              specialize in Revenue Cycle Management (RCM) analytics, EMR/EHR
              data analysis, patient readmission prediction, and
              healthcare-focused reporting.
              {/* I'm SaiTeja Prasad Sunkara, a data analyst and machine learning
              enthusiast with a passion for transforming raw data into
              actionable insights. With a strong foundation in statistical
              analysis, predictive modeling, and data visualization, I help
              organizations make data-driven decisions that drive real business
              impact. */}
            </p>
            <p className="text-lg text-gray-300 mb-4">
              My expertise spans the complete analytics lifecycle—from building
              ETL pipelines for clinical data to developing predictive models
              that identify at-risk patients. I'm proficient in SQL for complex
              healthcare database queries, Python for statistical analysis and
              machine learning, and visualization tools like Tableau and Power
              BI for creating executive dashboards that drive clinical and
              financial decision-making.
              {/* My technical journey combines deep analytical skills with
              full-stack development experience. I'm proficient in Python for
              data science (Pandas, NumPy, Scikit-learn, TensorFlow), SQL for
              database querying, and modern visualization tools like Power BI,
              Tableau, and Matplotlib. My background in software development
              with JavaScript, Java, C#, and .NET allows me to build end-to-end
              data solutions—from ETL pipelines to interactive dashboards. */}
            </p>
            <p className="text-lg text-gray-300">
              What drives me is the opportunity to improve patient outcomes
              through data. Whether it's reducing hospital readmissions,
              optimizing revenue cycle processes, or identifying quality
              improvement opportunities, I'm passionate about translating
              complex healthcare data into clear, actionable insights that
              hospital leadership and clinical teams can use to enhance care
              delivery and operational efficiency.
              {/* What drives me is the detective work of data analysis—uncovering
              hidden patterns, testing hypotheses, and building machine learning
              models that solve real-world problems. Whether it's customer
              segmentation, churn prediction, or sales forecasting, I thrive on
              turning complex datasets into clear, compelling stories that
              stakeholders can act on. */}
            </p>
          </div>

          <div className="glass-effect p-8 rounded-xl mb-8">
            <h2 className="text-3xl font-bold mb-6">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">
                  Healthcare Analytics
                  {/* Data Analysis & Visualization */}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Revenue Cycle Management (RCM) Analytics</li>
                  <li>• EMR/EHR Data Analysis</li>
                  <li>• Patient Readmission Prediction</li>
                  <li>• Clinical Quality Metrics & KPIs</li>
                  <li>• Healthcare Data Compliance (HIPAA)</li>
                  <li>• Claims Data Analysis</li>
                </ul>
                {/* <ul className="space-y-2 text-gray-300">
                  <li>• Python (Pandas, NumPy, Matplotlib, Seaborn)</li>
                  <li>• SQL (PostgreSQL, MySQL, MongoDB)</li>
                  <li>• Power BI & Tableau</li>
                  <li>• Excel (Advanced formulas, Pivot Tables, VBA)</li>
                  <li>• Statistical Analysis & A/B Testing</li>
                </ul> */}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                  Technical Skills
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• SQL (Complex queries, database optimization)</li>
                  <li>• Python (Pandas, NumPy, Scikit-learn)</li>
                  <li>• Tableau & Power BI</li>
                  <li>• Excel (Advanced analytics, pivot tables)</li>
                  <li>• R (Statistical computing)</li>
                  <li>• Git/GitHub version control</li>
                </ul>
              </div>

              {/* <div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                  Machine Learning & AI
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Scikit-learn & TensorFlow</li>
                  <li>• Supervised & Unsupervised Learning</li>
                  <li>• Predictive Modeling & Forecasting</li>
                  <li>• Feature Engineering</li>
                  <li>• Model Evaluation & Optimization</li>
                </ul>
              </div> */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                  Analytics & Modeling
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Predictive Modeling & Forecasting</li>
                  <li>• Statistical Analysis</li>
                  <li>• Machine Learning (Classification, Regression)</li>
                  <li>• Feature Engineering</li>
                  <li>• Model Evaluation & Optimization</li>
                  <li>• A/B Testing & Hypothesis Testing</li>
                </ul>
              </div>
              {/* <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">
                  Programming & Development
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Python (Primary language)</li>
                  <li>• React & Next.js</li>
                  <li>• JavaScript/TypeScript</li>
                  <li>• Java & C#</li>
                  <li>• R (Statistical computing)</li>
                  <li>• Git & Version Control</li>
                </ul>
              </div> */}
              {/* <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                  Business & Analytics Tools
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Business Intelligence & Reporting</li>
                  <li>• ETL/Data Pipeline Development</li>
                  <li>• Data Warehousing Concepts</li>
                  <li>• KPI Design & Tracking</li>
                  <li>• Stakeholder Communication</li>
                </ul>
              </div> */}
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl mb-8">
            <h2 className="text-3xl font-bold mb-6">
              Professional Experience Highlights
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Research Assistant — Data Analytics
                </h3>
                <p className="text-gray-400 mb-2">
                  Missouri University of Science & Technology | May 2025 –
                  Present
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Developed Python-based ETL pipelines for clinical
                    datasets, reducing manual preparation time by 40%
                  </li>
                  <li>
                    • Designed interactive Tableau and Power BI dashboards for
                    healthcare KPIs and patient metrics
                  </li>
                  <li>
                    • Conducted rigorous data quality assurance protocols
                    ensuring dataset integrity for clinical research
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Data Analyst & Systems Integration Specialist
                </h3>
                <p className="text-gray-400 mb-2">
                  Seanergy Digital | Aug 2020 – Jun 2023
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • Optimized complex SQL queries, reducing data retrieval
                    latency by 25%
                  </li>
                  <li>
                    • Designed ETL workflows consolidating multi-source data,
                    improving reporting accuracy by 30%
                  </li>
                  <li>
                    • Implemented data quality checks ensuring 99%+ accuracy in
                    business intelligence datasets
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">What Sets Me Apart</h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏥</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Healthcare Domain Expertise
                  </h4>
                  <p>
                    Deep understanding of healthcare workflows, clinical
                    terminologies, revenue cycle processes, and regulatory
                    compliance (HIPAA). I speak both the language of data and
                    the language of healthcare.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    End-to-End Analytics Capability
                  </h4>
                  <p>
                    From data extraction and cleaning to advanced modeling and
                    executive dashboard design, I manage the complete analytics
                    lifecycle. My technical versatility means I can work
                    independently or collaborate across teams.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Business Impact Focus
                  </h4>
                  <p>
                    I don't just deliver reports—I deliver insights that drive
                    action. Whether it's reducing readmissions, optimizing
                    reimbursements, or improving patient flow, my analyses are
                    always tied to measurable outcomes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Clear Communication
                  </h4>
                  <p>
                    I excel at translating complex technical findings into
                    clear, compelling narratives for non-technical stakeholders.
                    My presentations and dashboards make data accessible to
                    clinicians, administrators, and executives alike.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl mt-8">
            <h2 className="text-3xl font-bold mb-4">
              Education & Certifications
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  M.S. in Information Science & Technology
                </h3>
                <p className="text-gray-400">
                  Missouri University of Science & Technology | GPA: 3.4/4.0 |
                  2023-2025
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Relevant Coursework: Database Management, Business Analytics &
                  Data Science, Information Visualization, ETL Systems,
                  Information Security
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-gray-400">
                  Jawaharlal Nehru Technological University | GPA: 3.6/4.0 |
                  2018-2022
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Certifications
                </h3>
                <ul className="space-y-1 text-gray-300">
                  <li>
                    • AWS Cloud Practitioner Essentials — Amazon Web Services
                  </li>
                  <li>• Machine Learning Specialization — Coursera</li>
                  <li>• Python for Data Science — NPTEL</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="glass-effect p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">
              What I Bring to the Table
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Data-Driven Problem Solving
                  </h4>
                  <p>
                    I approach every challenge with a structured, analytical
                    mindset—defining the problem, exploring the data, testing
                    hypotheses, and delivering actionable recommendations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Machine Learning Expertise
                  </h4>
                  <p>
                    From classification and regression to clustering and
                    time-series forecasting, I build and deploy ML models that
                    drive measurable business outcomes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Technical Versatility
                  </h4>
                  <p>
                    My full-stack development background means I can build
                    complete data solutions—from database design and API
                    development to interactive dashboards and automated
                    reporting.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Business Impact Focus
                  </h4>
                  <p>
                    I don't just crunch numbers—I translate complex analyses
                    into clear insights that non-technical stakeholders can
                    understand and act upon.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;

// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <div className="pt-24 px-4 min-h-screen">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-5xl font-bold mb-8">About Me</h1>

//           <div className="glass-effect p-8 rounded-xl mb-8">
//             <p className="text-lg text-gray-300 mb-4">
//               I'm SaiTeja Prasad Sunkara, a curious and hands-on learner with a
//               passion for technology, data, and problem-solving. Alongside my
//               web development, data analytics, machine learning, skills. I've
//               gained a strong foundation in business analytics and data science,
//               applying insights to drive smarter decisions.
//             </p>
//             <p className="text-lg text-gray-300 mb-4">
//               I'm proficient in multiple programming languages like Python,
//               Java, C#, JavaScript, and .NET, which allows me to approach
//               challenges from both a software development and analytical
//               perspective.
//             </p>
//             <p className="text-lg text-gray-300">
//               Recently, I've been expanding my toolkit with technologies like
//               Tailwind CSS and Next.js to sharpen the design and functionality
//               of my projects. What excites me most is problem-solving—whether
//               it's debugging tricky issues, mapping out clean logic, or turning
//               raw concepts into elegant, functional code.
//             </p>
//           </div>

//           <div className="glass-effect p-8 rounded-xl">
//             <h2 className="text-3xl font-bold mb-6">Skills</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-xl font-semibold mb-3 text-blue-400">
//                   Backend Development
//                 </h3>
//                 <ul className="space-y-2 text-gray-300">
//                   <li>• FastAPI</li>
//                   <li>• Node.js & Express</li>
//                   <li>• MongoDB & PostgreSQL</li>
//                   <li>• RESTful APIs</li>
//                   <li>• Authentication & Security</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-3 text-blue-400">
//                   Frontend Development
//                 </h3>
//                 <ul className="space-y-2 text-gray-300">
//                   <li>• React & Next.js</li>
//                   <li>• Tailwind CSS</li>
//                   <li>• Responsive Design</li>
//                   <li>• UI/UX Principles</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-3 text-blue-400">
//                   Programming Languages
//                 </h3>
//                 <ul className="space-y-2 text-gray-300">
//                   <li>• JavaScript/TypeScript</li>
//                   <li>• Python</li>
//                   <li>• Java</li>
//                   <li>• C#</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold mb-3 text-blue-400">
//                   Data & Analytics
//                 </h3>
//                 <ul className="space-y-2 text-gray-300">
//                   <li>• Data Analysis</li>
//                   <li>• Business Analytics</li>
//                   <li>• Machine Learning</li>
//                   <li>• Problem Solving</li>
//                   <li>• .NET Framework</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;
