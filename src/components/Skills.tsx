import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandFramerMotion,
  IconBrandGit,
  IconBrandGithub,
  IconChartBar,
  IconDatabase,
  IconApi,
} from "@tabler/icons-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allSkills = [
    { name: "React", icon: IconBrandReact, color: "#61DAFB" },
    { name: "Next.js", icon: IconBrandNextjs, color: "#ffffff" },
    { name: "TypeScript", icon: IconBrandTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: IconBrandTailwind, color: "#06B6D4" },
    { name: "Mantine UI", icon: IconApi, color: "#339AF0" },
    { name: "SCSS", icon: IconApi, color: "#CC6699" },
    { name: "Framer Motion", icon: IconBrandFramerMotion, color: "#FF0055" },
    { name: "TanStack Query", icon: IconDatabase, color: "#FF4154" },
    { name: "TanStack Table", icon: IconChartBar, color: "#FF4154" },
    { name: "Chart.js", icon: IconChartBar, color: "#FF6384" },
    { name: "Mantine Charts", icon: IconChartBar, color: "#339AF0" },
    { name: "Git", icon: IconBrandGit, color: "#F05032" },
    { name: "GitHub", icon: IconBrandGithub, color: "#ffffff" },
    { name: "JWT Auth", icon: IconApi, color: "#8b5cf6" },
    { name: "REST API", icon: IconApi, color: "#2088FF" },
    { name: "CI/CD", icon: IconApi, color: "#06b6d4" },
  ];

  const additionalSkills = [
    "Redux",
    "React Hook Form",
    "Zod",
    "Axios",
    "Responsive Design",
    "Performance Optimization",
    "Accessibility",
    "Code Review",
    "Custom Hooks",
    "Custom Components",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="section relative" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="mb-6 font-display">
              TECHNICAL <span className="gradient-text">SKILLS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cosmic mx-auto rounded-full mb-6" />
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#e2e8f0" }}
            >
              A comprehensive arsenal of modern technologies and frameworks
            </p>
          </motion.div>

          {/* Perfect Skills Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                    whileHover={{
                      scale: 1.05,
                      y: -8,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Outer Glow */}
                    <div
                      className="absolute -inset-0.5 rounded-[20px] opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500"
                      style={{ background: skill.color }}
                    />

                    {/* Glass Card */}
                    <div className="relative rounded-[20px] overflow-hidden cosmic-card p-6 flex flex-col items-center justify-center text-center gap-4 min-h-[140px]">
                      {/* Top Glass Reflection */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                      {/* Icon Container */}
                      <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                        <Icon
                          size={40}
                          style={{ color: skill.color }}
                          className="drop-shadow-lg"
                        />
                      </div>

                      <span className="font-display text-sm font-semibold tracking-wider text-white drop-shadow-md">
                        {skill.name}
                      </span>

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-5xl mx-auto"
          >
            <p
              className="mb-6 font-display tracking-wider mt-8"
              style={{ color: "#e2e8f0" }}
            >
              ALSO EXPERIENCED WITH:
            </p>
            <div className="flex flex-wrap  gap-3  justify-center">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-tag "
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
