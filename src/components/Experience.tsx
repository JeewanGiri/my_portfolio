import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { IconBriefcase, IconCalendar, IconMapPin } from "@tabler/icons-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "YouMinds Creations Pvt. Ltd",
      position: "Frontend Developer",
      period: "Dec 2023 – Present",
      location: "Kathmandu, Nepal",
      highlights: [
        "Developed WHO Enterprise Health Information System with multi-role architecture",
        "Built interactive dashboards using Chart.js and Mantine Charts",
        "Implemented JWT authentication and role-based access control",
        "Created Homestay Management Platform with advanced filtering",
        "Optimized performance using TanStack Query",
        "Collaborated with backend team for seamless API integration",
        "Implemented responsive designs with Framer Motion animations",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Mantine UI",
        "Framer Motion",
        "Chart.js",
        "TanStack Query",
      ],
    },
    {
      company: "Sipalaya Info Tech",
      position: "Frontend Developer Trainee",
      period: "3+ Months",
      location: "Kathmandu, Nepal",
      highlights: [
        "Completed intensive frontend development training program",
        "Learned React fundamentals, hooks, and component-based architecture",
        "Built responsive UI using HTML, CSS, and Tailwind CSS",
        "Worked on real-world mini projects and practical assignments",
        "Gained hands-on experience with Git and team collaboration",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Git",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section id="experience" className="section relative" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="mb-6 font-display">
              WORK <span className="gradient-text">EXPERIENCE</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cosmic mx-auto rounded-full mb-6" />
            <p
              className="text-lg max-w-2xl mx-auto mb-8"
              style={{ color: "#e2e8f0" }}
            >
              Professional journey building enterprise-grade applications
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mt-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item pb-12 relative group"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-0.5 rounded-[24px] opacity-0 group-hover:opacity-50 blur-2xl transition-all duration-700 bg-gradient-to-r from-purple-500 to-cyan-500" />

                {/* Glass Card */}
                <motion.div
                  className="relative rounded-[24px] overflow-hidden cosmic-card p-8"
                  whileHover={{ scale: 1.01, y: -8 }}
                >
                  {/* Top Glass Reflection */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                  {/* Side Glass Reflection */}
                  <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-transparent to-transparent" />

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-white mb-4 drop-shadow-lg">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-nebula-purple font-semibold mb-3">
                        <div className="p-1.5 rounded-lg bg-purple-500/20 backdrop-blur-md border border-purple-300/30">
                          <IconBriefcase size={20} />
                        </div>
                        <span className="font-display">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <div className="p-1.5 rounded-lg bg-space-dark/80 border border-nebula-purple/30">
                          <IconMapPin size={18} />
                        </div>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-nebula-cyan font-display mt-4 md:mt-0">
                      <div className="p-1.5 rounded-lg bg-cyan-500/20 backdrop-blur-md border border-cyan-300/30">
                        <IconCalendar size={20} />
                      </div>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-lg font-display font-semibold text-white mb-4 tracking-wider drop-shadow-md">
                      KEY ACHIEVEMENTS:
                    </h4>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          className="flex gap-3 text-slate-300 font-light"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + hIndex * 0.1 }}
                        >
                          <span className="text-nebula-purple mt-1 text-lg drop-shadow-lg">
                            ▹
                          </span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-display font-semibold text-white mb-4 tracking-wider drop-shadow-md">
                      TECHNOLOGIES:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, tIndex) => (
                        <motion.span
                          key={tIndex}
                          className="px-4 py-2 text-xs rounded-xl bg-space-dark/80 border border-nebula-purple/30 font-display text-white/90 shadow-lg hover:bg-white/20 hover:border-white/40 transition-all font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + tIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          [{tech}] ,
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Corner Highlights */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-50" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
